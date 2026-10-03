import { useEffect, useState } from 'react';
import { initialCart, type CartItem } from './cartData';

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
