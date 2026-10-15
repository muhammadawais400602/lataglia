import { clientIp, error, json, readJSON, str } from './_lib/http.js';
import { hset, incr, writable } from './_lib/store.js';

const TOPICS = ['harvest', 'letters', 'gifting'];

// Newsletter sign-up from the Our Story page. Stored in the "subscribers" collection.
export async function POST(request: Request) {
  const body = await readJSON<{ email?: unknown; topics?: unknown }>(request);
  const email = str(body?.email, 160).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return error('Enter a valid email address.', 400);
  if (!writable) return error('Sign-ups are paused right now. Please try again later.', 503);
  if ((await incr(`subscribe:${clientIp(request)}`, 3600)) > 10) return error('Too many sign-ups from here. Try again in an hour.', 429);
  const topics = (Array.isArray(body?.topics) ? body!.topics : []).filter((t): t is string => typeof t === 'string' && TOPICS.includes(t));
  await hset('subscribers', email, { email, topics, createdAt: new Date().toISOString() });
  return json({ ok: true });
}
