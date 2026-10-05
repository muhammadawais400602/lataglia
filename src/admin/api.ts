import type { Order, Product, Settings } from '../shared/types';

export type AmazonLookup = { asin: string; name: string; brand: string; price: number; images: string[]; bullets: string[]; source: 'canopy' | 'link'; note?: string };

export type Session = { signedIn: boolean; passwordConfigured: boolean; storage: 'database' | 'memory' | 'none' };

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

async function call<T>(path: string, method = 'GET', body?: unknown): Promise<T> {
  const res = await fetch(`/api/${path}`, {
    method,
    credentials: 'same-origin',
    headers: body === undefined ? {} : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError((data as { error?: string }).error ?? `Request failed (${res.status})`, res.status);
  return data as T;
}

export const adminApi = {
  session: () => call<Session>('admin/session'),
  login: (password: string) => call<{ ok: true }>('admin/login', 'POST', { password }),
  logout: () => call<{ ok: true }>('admin/session', 'DELETE'),
  orders: () => call<Order[]>('admin/orders'),
  updateOrder: (patch: { id: string; status?: Order['status']; tags?: string[]; notes?: string }) => call<Order>('admin/orders', 'PATCH', patch),
  loadSampleOrders: () => call<Order[]>('admin/orders', 'POST', { action: 'load-samples' }),
  products: () => call<Product[]>('admin/products'),
  saveProducts: (products: Product[]) => call<Product[]>('admin/products', 'PUT', products),
  amazon: (url: string) => call<AmazonLookup>('admin/amazon', 'POST', { url }),
  settings: () => call<Settings>('admin/settings'),
  saveSettings: (s: Settings) => call<Settings>('admin/settings', 'PUT', s),
};
