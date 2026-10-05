import { useMemo, useState } from 'react';
import type { Order } from '../shared/types';
import { Card, Empty, TagChip, field, label, shortDate, usd } from './ui';

type Row = { email: string; name: string; city: string; orders: number; spent: number; last: string; tags: string[]; firstId: string };

export default function Customers({ orders, onOpenOrder }: { orders: Order[]; onOpenOrder: (id: string) => void }) {
  const [q, setQ] = useState('');
  const rows = useMemo(() => {
    const map = new Map<string, Row>();
    for (const o of [...orders].reverse()) {
      const key = o.customer.email.toLowerCase();
      const r = map.get(key) ?? { email: o.customer.email, name: '', city: '', orders: 0, spent: 0, last: o.createdAt, tags: [], firstId: o.id };
      r.name = `${o.customer.firstName} ${o.customer.lastName}`;
      r.city = [o.customer.city, o.customer.state].filter(Boolean).join(', ');
      r.orders += 1;
      if (o.status !== 'cancelled') r.spent += o.total;
      r.last = o.createdAt > r.last ? o.createdAt : r.last;
      r.firstId = o.id;
      r.tags = [...new Set([...r.tags, ...o.tags])];
      map.set(key, r);
    }
    const n = q.trim().toLowerCase();
    return [...map.values()].filter((r) => !n || `${r.name} ${r.email} ${r.city}`.toLowerCase().includes(n)).sort((a, b) => b.spent - a.spent);
  }, [orders, q]);

  return (
    <Card>
      <div className="flex flex-wrap items-end gap-3 mb-5">
        <div className="flex-1 min-w-[12rem]">
          <label htmlFor="cust-search" className={`block ${label} text-ink-secondary mb-1`}>Search</label>
          <input id="cust-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, email or city" className={field} />
        </div>
        <a
          href={`mailto:?bcc=${encodeURIComponent(rows.map((r) => r.email).join(','))}`}
          className={`inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2.5 text-sm font-bold text-on-surface hover:bg-surface-container-high ${rows.length ? '' : 'pointer-events-none opacity-50'}`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-lg">mail</span> Email these customers
        </a>
      </div>
      {rows.length === 0 ? (
        <Empty icon="group" title={orders.length ? 'No customers match' : 'No customers yet'}>Customers are built from the orders they place.</Empty>
      ) : (
        <div className="overflow-x-auto -mx-5 sm:-mx-6">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className={`${label} text-ink-tertiary text-left`}>
                <th className="px-5 sm:px-6 py-2 font-bold">Customer</th>
                <th className="px-3 py-2 font-bold">Location</th>
                <th className="px-3 py-2 font-bold text-right">Orders</th>
                <th className="px-3 py-2 font-bold text-right">Total spent</th>
                <th className="px-3 py-2 font-bold">Last order</th>
                <th className="px-5 sm:px-6 py-2 font-bold">Tags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {rows.map((r) => (
                <tr key={r.email} className="hover:bg-surface-container-low">
                  <td className="px-5 sm:px-6 py-3">
                    <div className="font-semibold text-on-surface">{r.name}</div>
                    <a href={`mailto:${r.email}`} className="text-xs text-primary hover:underline">{r.email}</a>
                  </td>
                  <td className="px-3 py-3 text-ink-secondary">{r.city}</td>
                  <td className="px-3 py-3 text-right text-on-surface">{r.orders}</td>
                  <td className="px-3 py-3 text-right font-semibold text-on-surface">{usd(r.spent)}</td>
                  <td className="px-3 py-3">
                    <button type="button" onClick={() => onOpenOrder(r.firstId)} className="text-primary hover:underline">{shortDate(r.last)} · {r.firstId}</button>
                  </td>
                  <td className="px-5 sm:px-6 py-3"><div className="flex flex-wrap gap-1">{r.tags.map((t) => <TagChip key={t} tag={t} />)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
