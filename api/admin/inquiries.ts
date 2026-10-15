import { isAdmin, unauthorized } from '../_lib/auth.js';
import { json } from '../_lib/http.js';
import { hvals } from '../_lib/store.js';

export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  const list = await hvals<{ id: string; name: string; email: string; type: string; message: string; createdAt: string }>('inquiries');
  return json(list.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
}
