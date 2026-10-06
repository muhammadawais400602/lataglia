export type ProductStatus = 'active' | 'hidden';

export type Product = {
  id: string;
  name: string;
  producer: string;
  place: string;
  unit: string;
  price: number;
  category: 'pasta' | 'balsamics' | 'oils' | 'pistachio' | 'rice' | 'sweets' | 'gifts';
  region: 'sicilia' | 'campania' | 'emilia' | 'calabria' | 'lombardia' | 'piemonte';
  cert: 'dop' | 'igp' | 'organic' | 'estate';
  badge: { label: string; className: string };
  img: string;
  gift: boolean;
  rare: boolean;
  stock: number;
  status: ProductStatus;
  href?: string;
  description?: string;
  features?: string[];
  images?: string[];
};

export const ORDER_STATUSES = ['new', 'processing', 'shipped', 'delivered', 'cancelled'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export type OrderItem = { id: string; name: string; unit: number; qty: number };

export type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  tags: string[];
  notes: string;
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  deliveryNote: string;
  giftNote: string;
  items: OrderItem[];
  shipping: 'express' | 'overnight';
  payment: 'card' | 'paypal' | 'klarna';
  subtotal: number;
  discount: number;
  freight: number;
  duty: number;
  total: number;
};

export type Settings = {
  announcement: string;
  announcementOn: boolean;
  freeShippingAt: number;
  freightExpress: number;
  freightOvernight: number;
  dutyRate: number;
  promo: { code: string; rate: number; active: boolean };
  tags: string[];
};

export const defaultSettings: Settings = {
  announcement: 'Complimentary climate-safe dispatch on orders over $125.',
  announcementOn: false,
  freeShippingAt: 125,
  freightExpress: 14,
  freightOvernight: 28,
  dutyRate: 0.08,
  promo: { code: 'BRONTE15', rate: 0.15, active: true },
  tags: ['VIP', 'Gift', 'Corporate', 'Priority', 'Fragile', 'Follow up'],
};

export const round2 = (n: number) => Math.round(n * 100) / 100;

export function priceOrder(
  items: OrderItem[],
  opts: { promo: boolean; shipping: 'express' | 'overnight' },
  s: Settings,
) {
  const subtotal = round2(items.reduce((t, i) => t + i.unit * i.qty, 0));
  const discount = opts.promo && s.promo.active ? round2(subtotal * s.promo.rate) : 0;
  const goods = subtotal - discount;
  const freight = opts.shipping === 'overnight' ? s.freightOvernight : subtotal >= s.freeShippingAt ? 0 : s.freightExpress;
  const duty = round2(goods * s.dutyRate);
  return { subtotal, discount, freight, duty, total: round2(goods + freight + duty) };
}
