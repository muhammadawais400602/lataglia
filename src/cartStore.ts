import { useEffect, useState } from 'react';
import { initialCart, type CartItem } from './cartData';
import type { Product } from './shared/types';

const KEY = 'lataglia-basket-v1';

type Basket = { items: CartItem[]; promo: boolean };

function load(): Basket {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Basket;
      if (Array.isArray(parsed.items)) return { items: parsed.items, promo: !!parsed.promo };
    }
  } catch {
    // storage unavailable or corrupt: fall back to the seeded basket
  }
  return { items: initialCart, promo: false };
}

export function useBasket() {
  const [basket, setBasket] = useState<Basket>(load);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(basket));
    } catch {
      // ignore: basket still works for this page view
    }
  }, [basket]);
  return [basket, setBasket] as const;
}

export function addProduct(basket: Basket, p: Product, qty = 1): Basket {
  const found = basket.items.find((i) => i.id === p.id);
  const items = found
    ? basket.items.map((i) => (i.id === p.id ? { ...i, qty: Math.min(99, i.qty + qty) } : i))
    : [...basket.items, {
        id: p.id, maker: [p.producer, p.place].filter(Boolean).join(' · '), name: p.name, meta: p.unit, unit: p.price, qty,
        wrap: false, badge: { label: p.badge.label, className: 'text-badge-ink' }, img: p.img, href: p.href ?? `/product/${p.id}`,
      }];
  return { ...basket, items };
}
