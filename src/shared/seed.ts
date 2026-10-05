import { shopProducts } from '../shopData.js';
import type { Order, Product } from './types.js';

const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const stockLevels = [18, 6, 32, 14, 40, 9, 22, 12, 30, 16, 4, 20];

export const seedProducts: Product[] = shopProducts.map((p, i) => ({
  id: slug(p.name),
  name: p.name,
  producer: p.producer,
  place: p.place,
  unit: p.unit,
  price: p.price,
  category: p.category,
  region: p.region,
  cert: p.cert,
  badge: p.badge,
  img: p.img,
  gift: p.gift,
  rare: p.rare,
  stock: stockLevels[i % stockLevels.length],
  status: 'active',
  href: p.href,
}));

const people = [
  ['Camilla', 'Rossi', 'camilla.rossi@example.com', 'San Francisco', 'CA', '94108'],
  ['Matteo', 'Vitale', 'matteo.v@example.com', 'Chicago', 'IL', '60611'],
  ['Eleanor', 'Hughes', 'eleanor.h@example.com', 'Austin', 'TX', '78701'],
  ['James', 'Okafor', 'j.okafor@example.com', 'Brooklyn', 'NY', '11201'],
  ['Sofia', 'Marchetti', 'sofia.m@example.com', 'Seattle', 'WA', '98101'],
  ['Daniel', 'Park', 'dpark@example.com', 'Boston', 'MA', '02116'],
];
const statuses: Order['status'][] = ['delivered', 'delivered', 'shipped', 'processing', 'new', 'delivered', 'cancelled', 'shipped'];

export function sampleOrders(now = Date.now()): Omit<Order, 'id'>[] {
  const out: Omit<Order, 'id'>[] = [];
  for (let n = 0; n < 24; n++) {
    const [firstName, lastName, email, city, state, zip] = people[n % people.length];
    const picks = [seedProducts[n % 12], seedProducts[(n * 5 + 3) % 12]];
    const items = picks.map((p, k) => ({ id: p.id, name: p.name, unit: p.price, qty: 1 + ((n + k) % 3) }));
    const subtotal = items.reduce((t, i) => t + i.unit * i.qty, 0);
    const freight = subtotal >= 125 ? 0 : 14;
    const duty = Math.round(subtotal * 0.08 * 100) / 100;
    out.push({
      createdAt: new Date(now - (n * 13 + (n % 4) * 5) * 3600_000).toISOString(),
      status: statuses[n % statuses.length],
      tags: ['Sample', ...(n % 5 === 0 ? ['VIP'] : []), ...(n % 7 === 0 ? ['Gift'] : [])],
      notes: '',
      customer: { email, firstName, lastName, street: `${100 + n} Market Street`, city, state, zip, country: 'US' },
      deliveryNote: '',
      giftNote: '',
      items,
      shipping: 'express',
      payment: (['card', 'paypal', 'klarna'] as const)[n % 3],
      subtotal,
      discount: 0,
      freight,
      duty,
      total: Math.round((subtotal + freight + duty) * 100) / 100,
    });
  }
  return out;
}
