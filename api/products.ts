import { loadProducts } from './_lib/data.js';
import { error, json } from './_lib/http.js';

export async function GET() {
  try {
    const products = (await loadProducts()).filter((p) => p.status === 'active');
    return json(products, 200, { 'Cache-Control': 'no-cache', 'CDN-Cache-Control': 'public, s-maxage=30, stale-while-revalidate=120' });
  } catch {
    return error('Products are unavailable right now.', 503);
  }
}
