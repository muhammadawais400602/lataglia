import { passwordConfigured, passwordMatches, sessionCookie } from '../_lib/auth.js';
import { clientIp, error, json, readJSON, str } from '../_lib/http.js';
import { del, getJSON, incr } from '../_lib/store.js';

const MAX_FAILURES = 5;
const WINDOW_SECONDS = 15 * 60;

export async function POST(request: Request) {
  if (!passwordConfigured()) return error('Admin password is not set up yet. Add ADMIN_PASSWORD (8+ characters) in Vercel.', 503);
  const body = await readJSON<{ password?: unknown }>(request);
  const password = str(body?.password, 200);
  if (!password) return error('Enter the admin password.', 400);

  const key = `login:fail:${clientIp(request)}`;
  if (((await getJSON<number>(key)) ?? 0) >= MAX_FAILURES) return error('Too many attempts. Try again in 15 minutes.', 429);
  if (passwordMatches(password)) {
    await del(key);
    return json({ ok: true }, 200, { 'Set-Cookie': sessionCookie(request) });
  }
  const failures = await incr(key, WINDOW_SECONDS);
  const left = MAX_FAILURES - failures;
  return error(left > 0 ? `Incorrect password. ${left} ${left === 1 ? 'attempt' : 'attempts'} left.` : 'Too many attempts. Try again in 15 minutes.', left > 0 ? 401 : 429);
}
