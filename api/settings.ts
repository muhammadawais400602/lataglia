import { loadSettings } from './_lib/data.js';
import { error, json } from './_lib/http.js';

export async function GET() {
  try {
    const s = await loadSettings();
    const publicSettings: Partial<typeof s> = { ...s };
    delete publicSettings.tags;
    return json(publicSettings, 200, { 'Cache-Control': 'no-cache', 'CDN-Cache-Control': 'public, s-maxage=30, stale-while-revalidate=120' });
  } catch {
    return error('Settings are unavailable right now.', 503);
  }
}
