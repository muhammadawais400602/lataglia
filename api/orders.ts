import { priceOrder, type Order, type OrderItem } from '../src/shared/types.js';
import { loadProducts, loadSettings } from './_lib/data.js';
import { error, json, num, readJSON, str } from './_lib/http.js';
import { hset, incr, writable } from './_lib/store.js';

type Incoming = {
  customer?: Record<string, unknown>;
  items?: { id?: unknown; name?: unknown; unit?: unknown; qty?: unknown }[];
  shipping?: unknown;
  payment?: unknown;
  promo?: unknown;
  deliveryNote?: unknown;
  giftNote?: unknown;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!writable) return error('Orders cannot be saved yet: the store database is not connected.', 503);
  const body = await readJSON<Incoming>(request);
  if (!body?.customer || !Array.isArray(body.items)) return error('Invalid order.', 400);

  const c = body.customer;
  const customer = {
    email: str(c.email, 120),
    firstName: str(c.firstName, 60),
    lastName: str(c.lastName, 60),
    street: str(c.street, 160),
    city: str(c.city, 80),
    state: str(c.state, 60),
    zip: str(c.zip, 20),
    country: str(c.country, 4) || 'US',
  };
  if (!EMAIL.test(customer.email) || !customer.firstName || !customer.lastName || !customer.street || !customer.city || !customer.zip) {
    return error('Please complete your contact and address details.', 400);
  }

  const catalog = new Map((await loadProducts()).map((p) => [p.id, p]));
  const items: OrderItem[] = [];
  for (const raw of body.items.slice(0, 50)) {
    const id = str(raw.id, 80);
    const qty = Math.floor(num(raw.qty));
    if (!id || !(qty >= 1 && qty <= 99)) return error('Invalid basket.', 400);
    const known = catalog.get(id);
    // Catalog prices are authoritative; other items (hampers, add-ons) keep the basket price.
    const unit = known ? known.price : num(raw.unit);
    if (!(unit > 0 && unit < 10_000)) return error('Invalid basket.', 400);
    items.push({ id, name: known?.name ?? str(raw.name, 140), unit, qty });
  }
  if (!items.length) return error('Your basket is empty.', 400);

  const settings = await loadSettings();
  const shipping = body.shipping === 'overnight' ? 'overnight' : 'express';
  const payment = body.payment === 'paypal' || body.payment === 'klarna' ? body.payment : 'card';
  const totals = priceOrder(items, { promo: body.promo === true, shipping }, settings);

  const seq = await incr('order:seq');
  const order: Order = {
    id: `LT-${1000 + seq}`,
    createdAt: new Date().toISOString(),
    status: 'new',
    tags: [],
    notes: '',
    customer,
    deliveryNote: str(body.deliveryNote, 400),
    giftNote: str(body.giftNote, 240),
    items,
    shipping,
    payment,
    ...totals,
  };
  await hset('orders', order.id, order);
  return json({ id: order.id, total: order.total }, 201);
}
