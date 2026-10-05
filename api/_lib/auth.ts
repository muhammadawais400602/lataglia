import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { cookie, error } from './http.js';

const COOKIE = 'lt_admin';
const SESSION_SECONDS = 12 * 60 * 60;

const sha256 = (s: string) => createHash('sha256').update(s).digest();

export const passwordConfigured = () => Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length >= 8);

function secret() {
  // Deriving from the password means changing ADMIN_PASSWORD signs everyone out.
  return process.env.ADMIN_SESSION_SECRET || sha256(`lataglia-admin:${process.env.ADMIN_PASSWORD}`).toString('hex');
}

export function passwordMatches(input: string) {
  if (!passwordConfigured()) return false;
  return timingSafeEqual(sha256(input), sha256(process.env.ADMIN_PASSWORD!));
}

const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url');

export function sessionCookie(request: Request) {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_SECONDS * 1000 })).toString('base64url');
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `${COOKIE}=${payload}.${sign(payload)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_SECONDS}${secure}`;
}

export const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;

export function isAdmin(request: Request) {
  if (!passwordConfigured()) return false;
  const value = cookie(request, COOKIE);
  if (!value) return false;
  const [payload, sig] = value.split('.');
  if (!payload || !sig) return false;
  const expected = Buffer.from(sign(payload));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { exp: number };
    return typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

export const unauthorized = () => error('Not signed in', 401);
