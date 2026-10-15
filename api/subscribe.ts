import { clientIp, error, json, readJSON, str } from './_lib/http.js';
import { hset, incr, writable } from './_lib/store.js';

const TOPICS = ['harvest', 'letters', 'gifting'];
const TYPES = ['Private chef or restaurant', 'Corporate gifting', 'Producer partnership', 'Press', 'Something else'];

// Newsletter sign-up from the Our Story page ("subscribers"), and the About page contact form
// when the body has kind: "contact" ("inquiries"). One function, because Vercel's free plan allows 12.
export async function POST(request: Request) {
  const body = await readJSON<{ kind?: unknown; email?: unknown; topics?: unknown } & Record<string, unknown>>(request);
  if (body?.kind === 'contact') return contact(request, body);
  const email = str(body?.email, 160).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return error('Enter a valid email address.', 400);
  if (!writable) return error('Sign-ups are paused right now. Please try again later.', 503);
  if ((await incr(`subscribe:${clientIp(request)}`, 3600)) > 10) return error('Too many sign-ups from here. Try again in an hour.', 429);
  const topics = (Array.isArray(body?.topics) ? body!.topics : []).filter((t): t is string => typeof t === 'string' && TOPICS.includes(t));
  await hset('subscribers', email, { email, topics, createdAt: new Date().toISOString() });
  return json({ ok: true });
}

async function contact(request: Request, body: Record<string, unknown>) {
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
