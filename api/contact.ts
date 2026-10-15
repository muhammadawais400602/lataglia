import { clientIp, error, json, readJSON, str } from './_lib/http.js';
import { hset, incr, writable } from './_lib/store.js';

const TYPES = ['Private chef or restaurant', 'Corporate gifting', 'Producer partnership', 'Press', 'Something else'];

// Concierge form on the About page. Stored in the "inquiries" collection and listed in Admin → Customers.
export async function POST(request: Request) {
  const body = await readJSON<Record<string, unknown>>(request);
  const name = str(body?.name, 120);
  const email = str(body?.email, 160).toLowerCase();
  const message = str(body?.message, 4000);
  const type = TYPES.includes(str(body?.type, 80)) ? str(body?.type, 80) : 'Something else';
  if (!name) return error('Enter your name.', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return error('Enter a valid email address.', 400);
  if (message.length < 5) return error('Tell us a little about your request.', 400);
  if (!writable) return error('Messages are paused right now. Please try again later.', 503);
  if ((await incr(`contact:${clientIp(request)}`, 3600)) > 5) return error('Too many messages from here. Try again in an hour.', 429);
  const createdAt = new Date().toISOString();
  const id = `${createdAt}-${Math.random().toString(36).slice(2, 8)}`;
  await hset('inquiries', id, { id, name, email, type, message, createdAt });
  return json({ ok: true });
}
