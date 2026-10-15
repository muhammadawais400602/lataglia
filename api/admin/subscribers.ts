import { isAdmin, unauthorized } from '../_lib/auth.js';
import { json } from '../_lib/http.js';
import { hvals } from '../_lib/store.js';

// ?list=inquiries returns the About page contact messages instead of newsletter sign-ups.
export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  if (new URL(request.url).searchParams.get('list') === 'inquiries') {
    const inquiries = await hvals<{ createdAt: string }>('inquiries');
    return json(inquiries.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  }
  const list = await hvals<{ email: string; topics: string[]; createdAt: string }>('subscribers');
  return json(list.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
}
