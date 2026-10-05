import { seedProducts } from '../../src/shared/seed.js';
import { defaultSettings, type Order, type Product, type Settings } from '../../src/shared/types.js';
import { getJSON, hvals } from './store.js';

export async function loadProducts(): Promise<Product[]> {
  return (await getJSON<Product[]>('products')) ?? seedProducts;
}

export async function loadSettings(): Promise<Settings> {
  const stored = await getJSON<Partial<Settings>>('settings');
  return { ...defaultSettings, ...stored, promo: { ...defaultSettings.promo, ...stored?.promo } };
}

export async function loadOrders(): Promise<Order[]> {
  const orders = await hvals<Order>('orders');
  return orders.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
