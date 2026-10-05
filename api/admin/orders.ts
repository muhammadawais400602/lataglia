import { sampleOrders } from '../../src/shared/seed.js';
import { ORDER_STATUSES, type Order } from '../../src/shared/types.js';
import { isAdmin, unauthorized } from '../_lib/auth.js';
import { loadOrders } from '../_lib/data.js';
import { error, json, readJSON, str } from '../_lib/http.js';
import { hget, hset, incr, writable } from '../_lib/store.js';

export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  return json(await loadOrders());
}

export async function PATCH(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  if (!writable) return error('Connect the store database before editing orders.', 503);
  const body = await readJSON<{ id?: unknown; status?: unknown; tags?: unknown; notes?: unknown }>(request);
  const id = str(body?.id, 40);
  const order = id ? await hget<Order>('orders', id) : null;
  if (!order) return error('Order not found.', 404);

  if (body!.status !== undefined) {
    if (!ORDER_STATUSES.includes(body!.status as Order['status'])) return error('Unknown status.', 400);
    order.status = body!.status as Order['status'];
  }
  if (body!.tags !== undefined) {
    if (!Array.isArray(body!.tags)) return error('Tags must be a list.', 400);
    order.tags = [...new Set(body!.tags.map((t) => str(t, 32)).filter(Boolean))].slice(0, 20);
  }
  if (body!.notes !== undefined) order.notes = str(body!.notes, 2000);

  await hset('orders', order.id, order);
  return json(order);
}

export async function POST(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  if (!writable) return error('Connect the store database first.', 503);
  const body = await readJSON<{ action?: unknown }>(request);
  if (body?.action !== 'load-samples') return error('Unknown action.', 400);
  for (const o of sampleOrders()) {
    const seq = await incr('order:seq');
    const id = `LT-${1000 + seq}`;
    await hset('orders', id, { ...o, id });
  }
  return json(await loadOrders());
}
