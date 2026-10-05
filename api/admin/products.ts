import type { Product } from '../../src/shared/types.js';
import { isAdmin, unauthorized } from '../_lib/auth.js';
import { loadProducts } from '../_lib/data.js';
import { error, json, num, readJSON, str } from '../_lib/http.js';
import { setJSON, writable } from '../_lib/store.js';

const CATEGORIES = ['pasta', 'balsamics', 'oils', 'pistachio', 'rice', 'sweets', 'gifts'];
const REGIONS = ['sicilia', 'campania', 'emilia', 'calabria', 'lombardia', 'piemonte'];
const CERTS = ['dop', 'igp', 'organic', 'estate'];

function clean(raw: Record<string, unknown>): Product | string {
  const name = str(raw.name, 120);
  const id = str(raw.id, 80).toLowerCase().replace(/[^a-z0-9-]/g, '');
  const price = num(raw.price);
  const stock = Math.floor(num(raw.stock));
  const img = str(raw.img, 1000);
  if (!id || !name) return 'Every product needs a name.';
  if (!(price > 0 && price < 10_000)) return `“${name}”: price must be between $0 and $10,000.`;
  if (!(stock >= 0 && stock < 100_000)) return `“${name}”: stock must be 0 or more.`;
  if (img && !/^https:\/\//.test(img)) return `“${name}”: image must be an https:// link.`;
  const badge = (raw.badge ?? {}) as Record<string, unknown>;
  const pick = <T extends string>(v: unknown, list: string[], fallback: T) => (list.includes(v as string) ? (v as T) : fallback);
  const href = str(raw.href, 200);
  return {
    id,
    name,
    producer: str(raw.producer, 80),
    place: str(raw.place, 80),
    unit: str(raw.unit, 80),
    price: Math.round(price * 100) / 100,
    category: pick(raw.category, CATEGORIES, 'pasta'),
    region: pick(raw.region, REGIONS, 'sicilia'),
    cert: pick(raw.cert, CERTS, 'estate'),
    badge: { label: str(badge.label, 30), className: str(badge.className, 120).replace(/[^\w\s:/[\]#-]/g, '') },
    img,
    gift: raw.gift === true,
    rare: raw.rare === true,
    stock,
    status: raw.status === 'hidden' ? 'hidden' : 'active',
    ...(href.startsWith('/') ? { href } : {}),
  };
}

export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  return json(await loadProducts());
}

export async function PUT(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  if (!writable) return error('Connect the store database before editing products.', 503);
  const body = await readJSON<unknown[]>(request, 400_000);
  if (!Array.isArray(body) || body.length > 500) return error('Invalid product list.', 400);
  const products: Product[] = [];
  const seen = new Set<string>();
  for (const raw of body) {
    const p = clean((raw ?? {}) as Record<string, unknown>);
    if (typeof p === 'string') return error(p, 400);
    if (seen.has(p.id)) return error(`Two products share the id “${p.id}”.`, 400);
    seen.add(p.id);
    products.push(p);
  }
  await setJSON('products', products);
  return json(products);
}
