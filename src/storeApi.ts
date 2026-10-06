import { useEffect, useState } from 'react';
import { seedProducts } from './shared/seed';
import { defaultSettings, type Product, type Settings } from './shared/types';

let settingsCache: Promise<Settings> | null = null;

function loadSettings() {
  settingsCache ??= fetch('/api/settings')
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((s: Partial<Settings>) => ({ ...defaultSettings, ...s, promo: { ...defaultSettings.promo, ...s.promo } }))
    .catch(() => defaultSettings);
  return settingsCache;
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  useEffect(() => {
    let live = true;
    loadSettings().then((s) => live && setSettings(s));
    return () => {
      live = false;
    };
  }, []);
  return settings;
}

export function useCatalog() {
  const [state, setState] = useState<{ products: Product[]; loaded: boolean }>({ products: seedProducts, loaded: false });
  useEffect(() => {
    let live = true;
    fetch('/api/products')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list: Product[]) => live && setState({ products: Array.isArray(list) ? list : seedProducts, loaded: true }))
      .catch(() => live && setState((s) => ({ ...s, loaded: true })));
    return () => {
      live = false;
    };
  }, []);
  return state;
}

export const useProducts = () => useCatalog().products;

export async function placeOrder(payload: unknown): Promise<{ id: string; total: number }> {
  const res = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Order could not be placed.');
  return data as { id: string; total: number };
}
