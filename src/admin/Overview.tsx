import { useMemo, useState } from 'react';
import { ORDER_STATUSES, type Order, type Product } from '../shared/types';
import { BarList, ColumnChart, type Point } from './charts';
import { Card, customerName, Empty, StatusChip, label, shortDate, statusStyle, usd, usd0 } from './ui';

const RANGES = [
  { days: 7, label: '7 days' },
  { days: 30, label: '30 days' },
  { days: 90, label: '90 days' },
] as const;

const DAY = 86_400_000;
const startOfDay = (t: number) => {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

function summarize(orders: Order[]) {
  const counted = orders.filter((o) => o.status !== 'cancelled');
  const revenue = counted.reduce((s, o) => s + o.total, 0);
  return { revenue, orders: counted.length, aov: counted.length ? revenue / counted.length : 0, customers: new Set(counted.map((o) => o.customer.email)).size };
}

function Delta({ now, prev }: { now: number; prev: number }) {
  if (!prev && !now) return <span className="text-xs text-ink-tertiary">No change</span>;
  if (!prev) return <span className="text-xs text-ink-tertiary">New this period</span>;
  const pct = ((now - prev) / prev) * 100;
  const up = pct >= 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${up ? 'text-tertiary-container' : 'text-on-error-container'}`}>
      <span aria-hidden="true" className="material-symbols-outlined text-sm">{up ? 'trending_up' : 'trending_down'}</span>
      {up ? '+' : ''}{pct.toFixed(0)}% vs previous
    </span>
  );
}

export default function Overview({ orders, products, onOpenOrder, onGo }: {
  orders: Order[];
  products: Product[];
  onOpenOrder: (id: string) => void;
  onGo: (tab: 'orders' | 'products') => void;
}) {
  const [days, setDays] = useState<number>(30);

  const view = useMemo(() => {
    const today = startOfDay(Date.now());
    const from = today - (days - 1) * DAY;
    const prevFrom = from - days * DAY;
    const t = (o: Order) => new Date(o.createdAt).getTime();
    const inRange = orders.filter((o) => t(o) >= from);
    const prevRange = orders.filter((o) => t(o) >= prevFrom && t(o) < from);

    const bucket = days > 30 ? 7 : 1;
    const series: Point[] = [];
    for (let start = from; start <= today; start += bucket * DAY) {
      const end = start + bucket * DAY;
      const slice = inRange.filter((o) => o.status !== 'cancelled' && t(o) >= start && t(o) < end);
      series.push({
        label: bucket === 1 ? shortDate(new Date(start).toISOString()) : `Wk of ${shortDate(new Date(start).toISOString())}`,
        value: slice.reduce((s, o) => s + o.total, 0),
        detail: `${slice.length} ${slice.length === 1 ? 'order' : 'orders'}`,
      });
    }

    const byProduct = new Map<string, { revenue: number; qty: number }>();
    for (const o of inRange) {
      if (o.status === 'cancelled') continue;
      for (const i of o.items) {
        const cur = byProduct.get(i.name) ?? { revenue: 0, qty: 0 };
        byProduct.set(i.name, { revenue: cur.revenue + i.unit * i.qty, qty: cur.qty + i.qty });
      }
    }
    const top = [...byProduct.entries()]
      .sort((a, b) => b[1].revenue - a[1].revenue)
      .slice(0, 6)
      .map(([name, v]) => ({ label: name, value: v.revenue, detail: `${v.qty} sold` }));

    const statusCounts = ORDER_STATUSES.map((s) => ({ s, n: inRange.filter((o) => o.status === s).length }));
    return { now: summarize(inRange), prev: summarize(prevRange), series, top, statusCounts, inRange };
  }, [orders, days]);

  const lowStock = products.filter((p) => p.status === 'active' && p.stock <= 5).sort((a, b) => a.stock - b.stock);
  const hidden = products.filter((p) => p.status === 'hidden').length;
  const open = orders.filter((o) => o.status === 'new' || o.status === 'processing');

  const kpis = [
    { label: 'Revenue', value: usd0(view.now.revenue), now: view.now.revenue, prev: view.prev.revenue, icon: 'payments' },
    { label: 'Orders', value: String(view.now.orders), now: view.now.orders, prev: view.prev.orders, icon: 'receipt_long' },
    { label: 'Avg. order value', value: usd(view.now.aov), now: view.now.aov, prev: view.prev.aov, icon: 'shopping_basket' },
    { label: 'Customers', value: String(view.now.customers), now: view.now.customers, prev: view.prev.customers, icon: 'group' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-secondary">Cancelled orders are excluded from revenue. Compared with the previous {days} days.</p>
        <div className="inline-flex rounded-full bg-surface-container p-1" role="group" aria-label="Date range">
          {RANGES.map((r) => (
            <button
              key={r.days}
              type="button"
              onClick={() => setDays(r.days)}
              aria-pressed={days === r.days}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${days === r.days ? 'bg-primary text-on-primary' : 'text-ink-secondary hover:text-on-surface'}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-surface-container-lowest rounded-xl shadow-sm p-5 min-w-0">
            <div className="flex items-center justify-between gap-2 text-ink-secondary">
              <span className={label}>{k.label}</span>
              <span aria-hidden="true" className="material-symbols-outlined text-xl text-secondary">{k.icon}</span>
            </div>
            <div className="font-headline-md text-2xl sm:text-[32px] sm:leading-10 text-on-surface mt-2 truncate">{k.value}</div>
            <Delta now={k.now} prev={k.prev} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card title={`Revenue, last ${days} days`} className="xl:col-span-2">
          {view.now.orders ? <ColumnChart data={view.series} format={usd0} title={`Revenue per ${days > 30 ? 'week' : 'day'}`} /> : <Empty icon="bar_chart" title="No orders in this period" />}
        </Card>
        <Card title="Orders by status">
          <ul className="space-y-3">
            {view.statusCounts.map(({ s, n }) => (
              <li key={s} className="flex items-center justify-between gap-3">
                <StatusChip status={s} />
                <span className="font-semibold text-on-surface">{n}</span>
              </li>
            ))}
          </ul>
          {open.length > 0 && (
            <button type="button" onClick={() => onGo('orders')} className="mt-5 w-full rounded-lg bg-surface-parchment px-4 py-3 text-left text-sm text-on-surface hover:bg-secondary-fixed transition-colors">
              <span className="font-bold">{open.length} open {open.length === 1 ? 'order needs' : 'orders need'} attention</span>
              <span className="block text-xs text-ink-secondary">{statusStyle.new.label} or {statusStyle.processing.label.toLowerCase()} · Go to orders →</span>
            </button>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card title="Top products by revenue" className="xl:col-span-2">
          {view.top.length ? <BarList data={view.top} format={usd0} /> : <Empty icon="inventory_2" title="No sales in this period" />}
        </Card>
        <Card title="Inventory alerts" action={<button type="button" onClick={() => onGo('products')} className="text-xs font-bold text-primary hover:underline">Manage products</button>}>
          {lowStock.length === 0 ? (
            <p className="text-sm text-ink-secondary">Every live product has more than 5 in stock.</p>
          ) : (
            <ul className="space-y-2.5">
              {lowStock.slice(0, 6).map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="truncate text-on-surface">{p.name}</span>
                  <span className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${p.stock === 0 ? 'bg-error-container text-on-error-container' : 'bg-secondary-fixed text-on-secondary-fixed-variant'}`}>
                    <span aria-hidden="true" className="material-symbols-outlined text-sm">{p.stock === 0 ? 'block' : 'warning'}</span>
                    {p.stock === 0 ? 'Sold out' : `${p.stock} left`}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {hidden > 0 && <p className="mt-4 text-xs text-ink-tertiary">{hidden} hidden {hidden === 1 ? 'product is' : 'products are'} not shown in the shop.</p>}
        </Card>
      </div>

      <Card title="Recent orders" action={<button type="button" onClick={() => onGo('orders')} className="text-xs font-bold text-primary hover:underline">View all</button>}>
        {orders.length === 0 ? (
          <Empty icon="receipt_long" title="No orders yet">Orders placed at checkout appear here.</Empty>
        ) : (
          <ul className="divide-y divide-surface-container">
            {orders.slice(0, 6).map((o) => (
              <li key={o.id}>
                <button type="button" onClick={() => onOpenOrder(o.id)} className="w-full flex flex-wrap items-center gap-x-4 gap-y-1 py-3 text-left hover:bg-surface-container-low rounded-lg px-2 -mx-2">
                  <span className="font-bold text-on-surface w-20">{o.id}</span>
                  <span className="flex-1 min-w-[8rem] text-sm text-ink-secondary truncate">{customerName(o)} · {shortDate(o.createdAt)}</span>
                  <StatusChip status={o.status} />
                  <span className="w-24 text-right font-semibold text-on-surface">{usd(o.total)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
