import { error, json } from './_lib/http.js';
import { hget, hset } from './_lib/store.js';

// Region pages describe each photo by what it should show ("Sassi of Matera Basilicata").
// The first time a description is requested we search Unsplash for it, keep the top result
// in the "photos" store, and from then on always serve that same photo.
// Needs UNSPLASH_ACCESS_KEY (free at unsplash.com/developers).

type Orientation = 'landscape' | 'portrait' | 'squarish';
export type StoredPhoto = { url: string; alt: string; author: string; profile: string; link: string; color?: string } | { none: true };

const MAX_QUERIES = 40;
// New Unsplash searches per request, so one page load never runs long; the page asks again for the rest.
const SEARCH_BUDGET = 8;
const UTM = 'utm_source=la_taglia&utm_medium=referral';

const keyOf = (q: string, o: Orientation) => `${o}:${q.toLowerCase().replace(/\s+/g, ' ').trim()}`.slice(0, 200);

async function search(q: string, orientation: Orientation, accessKey: string): Promise<StoredPhoto | 'limited' | null> {
  const url = new URL('/search/photos', process.env.UNSPLASH_API_URL ?? 'https://api.unsplash.com');
  url.searchParams.set('query', q);
  url.searchParams.set('per_page', '1');
  url.searchParams.set('orientation', orientation);
  url.searchParams.set('content_filter', 'high');
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${accessKey}`, 'Accept-Version': 'v1' }, signal: AbortSignal.timeout(8000) });
  if (res.status === 403 || res.status === 429) return 'limited';
  if (!res.ok) return null;
  const body = (await res.json()) as { results?: Record<string, any>[] };
  const p = body.results?.[0];
  if (!p) return { none: true };
  // Unsplash asks apps to register a download when a photo is used.
  if (p.links?.download_location) {
    fetch(`${p.links.download_location}`, { headers: { Authorization: `Client-ID ${accessKey}` } }).catch(() => {});
  }
  return {
    url: String(p.urls?.raw ?? ''),
    alt: String(p.alt_description ?? p.description ?? q).slice(0, 200),
    author: String(p.user?.name ?? 'Unsplash photographer'),
    profile: `${p.user?.links?.html ?? 'https://unsplash.com'}?${UTM}`,
    link: `${p.links?.html ?? 'https://unsplash.com'}?${UTM}`,
    color: p.color ?? undefined,
  };
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const wanted = params.getAll('q').slice(0, MAX_QUERIES).map((raw) => {
    const [o, ...rest] = raw.split('|');
    const orientation: Orientation = o === 'portrait' || o === 'squarish' || o === 'landscape' ? o : 'landscape';
    return { raw, q: (rest.length ? rest.join('|') : raw).slice(0, 400), orientation };
  }).filter((w) => w.q.trim());
  if (!wanted.length) return error('Pass one or more q parameters.', 400);

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  const result: Record<string, StoredPhoto | null> = {};
  let limited = false;
  let pending = false;
  let budget = SEARCH_BUDGET;
  for (const w of wanted) {
    const key = keyOf(w.q, w.orientation);
    let photo = await hget<StoredPhoto>('photos', key).catch(() => null);
    if (!photo && accessKey && !limited && budget > 0) {
      // "specific || broader || broadest": use the first search that finds a photo.
      let failed = false;
      for (const term of w.q.split('||').map((t) => t.trim()).filter(Boolean)) {
        budget--;
        const found = await search(term, w.orientation, accessKey).catch(() => null);
        if (found === 'limited') { limited = true; break; }
        if (!found) { failed = true; break; }
        if (!('none' in found)) { photo = found; break; }
      }
      if (!limited && !failed) {
        photo ??= { none: true };
        await hset('photos', key, { ...photo, query: w.q, orientation: w.orientation }).catch(() => {});
      }
    }
    // Not looked up yet: leave it out so the page knows to ask again.
    if (!photo) { pending = true; continue; }
    result[w.raw] = 'none' in photo ? null : photo;
  }
  return json({ photos: result, pending: pending && !!accessKey && !limited }, 200, {
    'Cache-Control': 'no-cache',
    'CDN-Cache-Control': pending ? 'public, s-maxage=60' : 'public, s-maxage=86400, stale-while-revalidate=604800',
  });
}
