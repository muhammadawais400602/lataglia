import { useEffect, useMemo, useState } from 'react';
import { ORDER_STATUSES, type Order } from '../shared/types';
import { Card, Drawer, Empty, StatusChip, TagChip, btnGhost, btnPrimary, customerName, dateTime, field, itemCount, label, statusStyle, usd } from './ui';

function csv(orders: Order[]) {
  const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const head = ['Order', 'Date', 'Status', 'Tags', 'Customer', 'Email', 'Address', 'Items', 'Subtotal', 'Discount', 'Freight', 'Duty', 'Total', 'Payment', 'Shipping', 'Notes'];
  const rows = orders.map((o) => [
    o.id, o.createdAt, o.status, o.tags.join('; '), customerName(o), o.customer.email,
    `${o.customer.street}, ${o.customer.city} ${o.customer.state} ${o.customer.zip}, ${o.customer.country}`,
    o.items.map((i) => `${i.qty}× ${i.name}`).join('; '), o.subtotal, o.discount, o.freight, o.duty, o.total, o.payment, o.shipping, o.notes,
  ]);
  return [head, ...rows].map((r) => r.map(esc).join(',')).join('\n');
}

export default function Orders({ orders, tagLibrary, focusId, onFocus, onSave, onLoadSamples, readOnly }: {
  orders: Order[];
  tagLibrary: string[];
  focusId: string | null;
  onFocus: (id: string | null) => void;
  onSave: (patch: { id: string; status: Order['status']; tags: string[]; notes: string }) => Promise<void>;
  onLoadSamples: () => Promise<void>;
  readOnly: boolean;
}) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | Order['status']>('all');
  const [tag, setTag] = useState('all');

  const allTags = useMemo(() => [...new Set([...tagLibrary, ...orders.flatMap((o) => o.tags)])].sort(), [tagLibrary, orders]);
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return orders.filter(
      (o) =>
        (status === 'all' || o.status === status) &&
        (tag === 'all' || o.tags.includes(tag)) &&
        (!needle || [o.id, customerName(o), o.customer.email, ...o.items.map((i) => i.name)].some((v) => v.toLowerCase().includes(needle))),
    );
  }, [orders, q, status, tag]);

  function exportCsv() {
    const blob = new Blob([csv(list)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `lataglia-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const focused = orders.find((o) => o.id === focusId) ?? null;

  return (
    <>
      <Card>
        <div className="flex flex-wrap items-end gap-3 mb-5">
          <div className="flex-1 min-w-[12rem]">
            <label htmlFor="order-search" className={`block ${label} text-ink-secondary mb-1`}>Search</label>
            <input id="order-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Order, customer, email or product" className={field} />
          </div>
          <div>
            <label htmlFor="order-status" className={`block ${label} text-ink-secondary mb-1`}>Status</label>
            <select id="order-status" value={status} onChange={(e) => setStatus(e.target.value as typeof status)} className={field}>
              <option value="all">All statuses</option>
              {ORDER_STATUSES.map((s) => <option key={s} value={s}>{statusStyle[s].label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="order-tag" className={`block ${label} text-ink-secondary mb-1`}>Tag</label>
            <select id="order-tag" value={tag} onChange={(e) => setTag(e.target.value)} className={field}>
              <option value="all">All tags</option>
              {allTags.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button type="button" onClick={exportCsv} disabled={!list.length} className={btnGhost}>
            <span aria-hidden="true" className="material-symbols-outlined text-lg">download</span> Export CSV
          </button>
        </div>

        {orders.length === 0 ? (
          <Empty icon="receipt_long" title="No orders yet">
            <p>Orders placed at checkout show up here. To try the dashboard first, load 24 sample orders. They're tagged “Sample” so you can tell them apart.</p>
            {!readOnly && <button type="button" onClick={onLoadSamples} className={`${btnPrimary} mt-4`}>Load sample orders</button>}
          </Empty>
        ) : list.length === 0 ? (
          <Empty icon="filter_alt_off" title="No orders match these filters" />
        ) : (
          <div className="overflow-x-auto -mx-5 sm:-mx-6">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className={`${label} text-ink-tertiary text-left`}>
                  <th className="px-5 sm:px-6 py-2 font-bold">Order</th>
                  <th className="px-3 py-2 font-bold">Date</th>
                  <th className="px-3 py-2 font-bold">Customer</th>
                  <th className="px-3 py-2 font-bold">Status</th>
                  <th className="px-3 py-2 font-bold">Tags</th>
                  <th className="px-3 py-2 font-bold text-right">Items</th>
                  <th className="px-5 sm:px-6 py-2 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {list.map((o) => (
                  <tr key={o.id} onClick={() => onFocus(o.id)} className="cursor-pointer hover:bg-surface-container-low">
                    <td className="px-5 sm:px-6 py-3">
                      <button type="button" onClick={() => onFocus(o.id)} className="font-bold text-primary hover:underline">{o.id}</button>
                    </td>
                    <td className="px-3 py-3 text-ink-secondary whitespace-nowrap">{dateTime(o.createdAt)}</td>
                    <td className="px-3 py-3">
                      <div className="text-on-surface">{customerName(o)}</div>
                      <div className="text-xs text-ink-tertiary">{o.customer.email}</div>
                    </td>
                    <td className="px-3 py-3"><StatusChip status={o.status} /></td>
                    <td className="px-3 py-3"><div className="flex flex-wrap gap-1">{o.tags.map((t) => <TagChip key={t} tag={t} />)}</div></td>
                    <td className="px-3 py-3 text-right text-ink-secondary">{itemCount(o)}</td>
                    <td className="px-5 sm:px-6 py-3 text-right font-semibold text-on-surface">{usd(o.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {orders.length > 0 && <p className="mt-4 text-xs text-ink-tertiary">{list.length} of {orders.length} orders</p>}
      </Card>

      <OrderDrawer order={focused} tagLibrary={allTags} onClose={() => onFocus(null)} onSave={onSave} readOnly={readOnly} />
    </>
  );
}

function OrderDrawer({ order, tagLibrary, onClose, onSave, readOnly }: {
  order: Order | null;
  tagLibrary: string[];
  onClose: () => void;
  onSave: (patch: { id: string; status: Order['status']; tags: string[]; notes: string }) => Promise<void>;
  readOnly: boolean;
}) {
  const [status, setStatus] = useState<Order['status']>('new');
  const [tags, setTags] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [newTag, setNewTag] = useState('');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (!order) return;
    setStatus(order.status);
    setTags(order.tags);
    setNotes(order.notes);
    setNewTag('');
    setMsg('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order?.id]);

  if (!order) return null;
  const dirty = status !== order.status || notes !== order.notes || tags.join('|') !== order.tags.join('|');
  const toggle = (t: string) => setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  async function save() {
    setSaving(true);
    setMsg('');
    try {
      await onSave({ id: order!.id, status, tags, notes });
      setMsg('Saved');
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Could not save');
    } finally {
      setSaving(false);
    }
  }

  const c = order.customer;
  return (
    <Drawer
      open
      onClose={onClose}
      title={
        <div>
          <p className={`${label} text-ink-tertiary`}>{dateTime(order.createdAt)}</p>
          <h2 className="font-headline-sm text-xl text-on-surface">Order {order.id}</h2>
        </div>
      }
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest rounded-xl p-4">
          <p className={`${label} text-ink-tertiary mb-2`}>Customer</p>
          <p className="font-semibold text-on-surface">{c.firstName} {c.lastName}</p>
          <a href={`mailto:${c.email}`} className="text-sm text-primary hover:underline break-all">{c.email}</a>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4">
          <p className={`${label} text-ink-tertiary mb-2`}>Ship to</p>
          <p className="text-sm text-on-surface">{c.street}<br />{c.city}{c.state ? `, ${c.state}` : ''} {c.zip}<br />{c.country}</p>
          <p className="text-xs text-ink-tertiary mt-1 capitalize">{order.shipping} · pays by {order.payment}</p>
        </div>
      </section>

      {(order.deliveryNote || order.giftNote) && (
        <section className="bg-surface-parchment rounded-xl p-4 space-y-2 text-sm">
          {order.deliveryNote && <p><span className="font-bold text-on-surface">Delivery note: </span>{order.deliveryNote}</p>}
          {order.giftNote && <p><span className="font-bold text-on-surface">Gift message: </span><em>{order.giftNote}</em></p>}
        </section>
      )}

      <section className="bg-surface-container-lowest rounded-xl p-4">
        <p className={`${label} text-ink-tertiary mb-3`}>Items</p>
        <ul className="divide-y divide-surface-container text-sm">
          {order.items.map((i) => (
            <li key={i.id} className="flex justify-between gap-3 py-2">
              <span className="text-on-surface">{i.qty} × {i.name}</span>
              <span className="text-on-surface shrink-0">{usd(i.unit * i.qty)}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-3 pt-3 border-t border-surface-container-high space-y-1 text-sm">
          {[['Subtotal', order.subtotal], ['Discount', -order.discount], ['Freight', order.freight], ['Duty', order.duty]].map(([k, v]) =>
            v ? <div key={k} className="flex justify-between text-ink-secondary"><dt>{k}</dt><dd>{(v as number) < 0 ? '−' : ''}{usd(Math.abs(v as number))}</dd></div> : null,
          )}
          <div className="flex justify-between font-bold text-on-surface pt-1"><dt>Total</dt><dd>{usd(order.total)}</dd></div>
        </dl>
      </section>

      <section className="space-y-4">
        <div>
          <label htmlFor="drawer-status" className={`block ${label} text-ink-secondary mb-1.5`}>Status</label>
          <select id="drawer-status" value={status} onChange={(e) => setStatus(e.target.value as Order['status'])} disabled={readOnly} className={field}>
            {ORDER_STATUSES.map((s) => <option key={s} value={s}>{statusStyle[s].label}</option>)}
          </select>
        </div>

        <fieldset>
          <legend className={`${label} text-ink-secondary mb-2`}>Tags</legend>
          <div className="flex flex-wrap gap-2">
            {[...new Set([...tagLibrary, ...tags])].map((t) => {
              const on = tags.includes(t);
              return (
                <button
                  key={t} type="button" onClick={() => toggle(t)} aria-pressed={on} disabled={readOnly}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${on ? 'bg-primary text-on-primary' : 'bg-surface-container text-ink-secondary hover:bg-surface-container-high'}`}
                >
                  {on && <span aria-hidden="true" className="material-symbols-outlined text-sm">check</span>}
                  {t}
                </button>
              );
            })}
          </div>
          {!readOnly && (
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const t = newTag.trim().slice(0, 32);
                if (t && !tags.includes(t)) setTags([...tags, t]);
                setNewTag('');
              }}
            >
              <input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="New tag" aria-label="New tag" className={field} />
              <button type="submit" className={btnGhost}>Add</button>
            </form>
          )}
        </fieldset>

        <div>
          <label htmlFor="drawer-notes" className={`block ${label} text-ink-secondary mb-1.5`}>Internal notes</label>
          <textarea id="drawer-notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} disabled={readOnly} placeholder="Only visible to admins" className={field} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={save} disabled={!dirty || saving || readOnly} className={btnPrimary}>{saving ? 'Saving…' : 'Save changes'}</button>
          <a href={`mailto:${c.email}?subject=${encodeURIComponent(`Your La Taglia order ${order.id}`)}`} className={btnGhost}>
            <span aria-hidden="true" className="material-symbols-outlined text-lg">mail</span> Email customer
          </a>
          {msg && <span role="status" className={`text-sm font-semibold ${msg === 'Saved' ? 'text-tertiary-container' : 'text-status-red'}`}>{msg}</span>}
        </div>
      </section>
    </Drawer>
  );
}
