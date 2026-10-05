import type { Settings } from '../../src/shared/types.js';
import { isAdmin, unauthorized } from '../_lib/auth.js';
import { loadSettings } from '../_lib/data.js';
import { error, json, num, readJSON, str } from '../_lib/http.js';
import { setJSON, writable } from '../_lib/store.js';

export async function GET(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  return json(await loadSettings());
}

export async function PUT(request: Request) {
  if (!isAdmin(request)) return unauthorized();
  if (!writable) return error('Connect the store database before changing settings.', 503);
  const b = await readJSON<Record<string, unknown>>(request);
  if (!b) return error('Invalid settings.', 400);
  const promo = (b.promo ?? {}) as Record<string, unknown>;
  const money = (v: unknown) => num(v) >= 0 && num(v) < 10_000;
  if (!money(b.freeShippingAt) || !money(b.freightExpress) || !money(b.freightOvernight)) return error('Shipping amounts must be 0 or more.', 400);
  if (!(num(b.dutyRate) >= 0 && num(b.dutyRate) <= 0.5)) return error('Duty must be between 0% and 50%.', 400);
  if (!(num(promo.rate) >= 0 && num(promo.rate) <= 0.9)) return error('Promo discount must be between 0% and 90%.', 400);

  const settings: Settings = {
    announcement: str(b.announcement, 160),
    announcementOn: b.announcementOn === true,
    freeShippingAt: num(b.freeShippingAt),
    freightExpress: num(b.freightExpress),
    freightOvernight: num(b.freightOvernight),
    dutyRate: num(b.dutyRate),
    promo: { code: str(promo.code, 24).toUpperCase().replace(/[^A-Z0-9]/g, ''), rate: num(promo.rate), active: promo.active === true },
    tags: Array.isArray(b.tags) ? [...new Set(b.tags.map((t) => str(t, 32)).filter(Boolean))].slice(0, 30) : [],
  };
  await setJSON('settings', settings);
  return json(settings);
}
