// Reads an Amazon product link and looks the product up through Canopy API (canopyapi.co),
// a paid Amazon product-data service. Without CANOPY_API_KEY we can still take the ASIN and
// the name from the link itself.

export type AmazonLookup = {
  asin: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  bullets: string[];
  description: string;
  source: 'canopy' | 'link';
  note?: string;
};

const DOMAINS: Record<string, string> = {
  'amazon.com': 'US', 'amazon.ca': 'CA', 'amazon.co.uk': 'UK', 'amazon.de': 'DE', 'amazon.fr': 'FR', 'amazon.it': 'IT',
  'amazon.es': 'ES', 'amazon.com.au': 'AU', 'amazon.in': 'IN', 'amazon.com.mx': 'MX', 'amazon.com.br': 'BR', 'amazon.co.jp': 'JP',
};
const SHORTENERS = ['amzn.to', 'a.co', 'amzn.eu', 'amzn.asia'];
const ASIN = /^[A-Z0-9]{10}$/;

export function parseAmazonUrl(raw: string): { asin: string; domain: string; slugName: string } | { error: string } {
  const text = raw.trim();
  if (ASIN.test(text.toUpperCase())) return { asin: text.toUpperCase(), domain: 'US', slugName: '' };
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`);
  } catch {
    return { error: 'That doesn’t look like a link. Paste the full Amazon product link.' };
  }
  const host = url.hostname.toLowerCase().replace(/^(www|smile|m)\./, '');
  const domain = DOMAINS[host];
  if (!domain) return { error: 'Only Amazon product links are supported (amazon.com, amazon.co.uk, amazon.de…).' };
  const m = url.pathname.match(/\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/asin|o\/ASIN)\/([A-Z0-9]{10})(?=[/?]|$)/i)
    ?? [null, url.searchParams.get('asin') ?? ''];
  const asin = (m[1] ?? '').toUpperCase();
  if (!ASIN.test(asin)) return { error: 'Couldn’t find the product code (ASIN) in that link. Open the product on Amazon and copy the link from the address bar.' };
  const before = url.pathname.split(/\/(?:dp|gp)\//i)[0].split('/').filter(Boolean).pop() ?? '';
  const slugName = /^[\w%-]{8,}$/.test(before) ? decodeURIComponent(before).replace(/-/g, ' ').replace(/\s+/g, ' ').trim() : '';
  return { asin, domain, slugName };
}

// amzn.to / a.co links only redirect; read where they point without opening the Amazon page.
export async function expandShortLink(raw: string): Promise<string> {
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(raw.trim()) ? raw.trim() : `https://${raw.trim()}`);
  } catch {
    return raw;
  }
  if (!SHORTENERS.includes(url.hostname.toLowerCase())) return raw;
  for (let hop = 0; hop < 3 && SHORTENERS.includes(url.hostname.toLowerCase()); hop++) {
    const res = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(8000) });
    const next = res.headers.get('location');
    if (!next) break;
    url = new URL(next, url);
  }
  return url.toString();
}

const shorten = (s: string, max: number) => {
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:–-]+$/, '')}…`;
};

const asString = (v: unknown) => (typeof v === 'string' ? v : '');
// Amazon descriptions sometimes carry HTML; keep paragraphs, drop tags and entities.
const plain = (s: string) => s
  .replace(/<\s*(\/p|\/div|\/h\d)\s*>/gi, '\n\n').replace(/<\s*(br|\/li)\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/[ \t]+/g, ' ').replace(/\n\s*\n\s*/g, '\n\n').trim();
const https = (u: string) => (u.startsWith('http://') ? `https://${u.slice(7)}` : u);

function priceOf(p: unknown): number {
  if (typeof p === 'number') return p;
  if (typeof p === 'string') return Number(p.replace(/[^\d.]/g, '')) || 0;
  if (p && typeof p === 'object') {
    const o = p as Record<string, unknown>;
    for (const k of ['value', 'amount', 'raw', 'displayAmount', 'display']) {
      const n = priceOf(o[k]);
      if (n > 0) return n;
    }
  }
  return 0;
}

export async function lookupAmazon(asin: string, domain: string, slugName: string): Promise<AmazonLookup> {
  const fallback = (note: string): AmazonLookup => ({ asin, name: shorten(slugName, 120), brand: '', price: 0, images: [], bullets: [], description: '', source: 'link', note });
  const key = process.env.CANOPY_API_KEY;
  if (!key) return fallback('Only the name could be read from the link. Add CANOPY_API_KEY in Vercel to fill in photos, brand and price automatically.');

  const api = new URL('https://rest.canopyapi.co/api/amazon/product');
  api.searchParams.set('asin', asin);
  api.searchParams.set('domain', domain);
  let res: Response;
  try {
    res = await fetch(api, { headers: { 'API-KEY': key, Accept: 'application/json' }, signal: AbortSignal.timeout(20_000) });
  } catch {
    return fallback('The product lookup service didn’t respond. Fill in the details below, or try again in a minute.');
  }
  if (res.status === 401 || res.status === 403) return fallback('The product lookup service rejected the CANOPY_API_KEY. Check the key in Vercel.');
  if (res.status === 402 || res.status === 429) return fallback('The product lookup service’s monthly allowance is used up. Fill in the details below or upgrade the plan.');
  if (!res.ok) return fallback('Amazon didn’t return this product. Check the link, or fill in the details below.');

  const body = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  const data = (body.data ?? body) as Record<string, unknown>;
  const p = (data.amazonProduct ?? data.product ?? data) as Record<string, unknown>;
  const main = asString(p.mainImageUrl) || asString((p.mainImage as Record<string, unknown> | undefined)?.url) || asString(p.mainImage) || asString(p.image);
  const more = Array.isArray(p.imageUrls) ? p.imageUrls : Array.isArray(p.images) ? p.images : [];
  const images = [...new Set([main, ...more.map((i) => (typeof i === 'string' ? i : asString((i as Record<string, unknown>)?.link) || asString((i as Record<string, unknown>)?.url)))]
    .map(https).filter((u) => u.startsWith('https://')))].slice(0, 8);
  const bulletsRaw = Array.isArray(p.featureBullets) ? p.featureBullets : Array.isArray(p.feature_bullets) ? p.feature_bullets : Array.isArray(p.bullets) ? p.bullets : [];
  const bullets = bulletsRaw.filter((b): b is string => typeof b === 'string').map((b) => plain(b).slice(0, 500)).filter(Boolean).slice(0, 12);
  const description = plain(asString(p.description) || asString(p.productDescription) || asString(p.bookDescription)).slice(0, 6000);
  const name = shorten(asString(p.title) || slugName, 120);
  if (!name) return fallback('Amazon didn’t return this product. Check the link, or fill in the details below.');
  const price = Math.round(priceOf(p.price) * 100) / 100;
  return { asin, name, brand: shorten(asString(p.brand), 80), price, images, bullets, description, source: 'canopy' };
}
