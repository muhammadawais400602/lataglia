import { clearCookie, isAdmin, passwordConfigured } from '../_lib/auth.js';
import { json } from '../_lib/http.js';
import { persistent, writable } from '../_lib/store.js';

export function GET(request: Request) {
  return json({ signedIn: isAdmin(request), passwordConfigured: passwordConfigured(), storage: persistent ? 'database' : writable ? 'memory' : 'none' });
}

export function DELETE() {
  return json({ ok: true }, 200, { 'Set-Cookie': clearCookie() });
}
