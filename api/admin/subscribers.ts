import { isAdmin, unauthorized } from '../_lib/auth.js';
import { json } from '../_lib/http.js';
import { hvals } from '../_lib/store.js';

export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  const list = await hvals<{ email: string; topics: string[]; createdAt: string }>('subscribers');
  return json(list.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
}
