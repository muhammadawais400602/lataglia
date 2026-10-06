import { isAdmin, unauthorized } from '../_lib/auth.js';
import { expandShortLink, lookupAmazon, parseAmazonUrl } from '../_lib/amazon.js';
import { error, json, readJSON, str } from '../_lib/http.js';

export async function POST(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  const body = await readJSON<{ url?: unknown }>(request);
  const link = str(body?.url, 2000);
  if (!link) return error('Paste an Amazon product link.', 400);
  let expanded = link;
  try {
    expanded = await expandShortLink(link);
  } catch {
    return error('Couldn’t open that short link. Open it in your browser and paste the full Amazon link instead.', 400);
  }
  const parsed = parseAmazonUrl(expanded);
  if ('error' in parsed) return error(parsed.error, 400);
  return json(await lookupAmazon(parsed.asin, parsed.domain, parsed.slugName));
}
