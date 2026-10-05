import { useMemo, useState, type FormEvent } from 'react';
import type { Product } from '../shared/types';
import { Card, Drawer, Empty, btnGhost, btnPrimary, field, label, usd } from './ui';

const CATEGORIES: [Product['category'], string][] = [['pasta', 'Pasta & pantry'], ['balsamics', 'Balsamics & saba'], ['oils', "Olive oils & 'nduja"], ['pistachio', 'Pistachio'], ['rice', 'Rice'], ['sweets', 'Sweets'], ['gifts', 'Gift hampers']];
const REGIONS: [Product['region'], string][] = [['sicilia', 'Sicilia'], ['campania', 'Campania'], ['emilia', 'Emilia-Romagna'], ['calabria', 'Calabria'], ['lombardia', 'Lombardia'], ['piemonte', 'Piemonte']];
const CERTS: [Product['cert'], string][] = [['dop', 'DOP'], ['igp', 'IGP'], ['organic', 'Organic'], ['estate', 'Single-estate']];
const BADGE_STYLES: [string, string][] = [
  ['bg-surface-container-lowest text-badge-ink', 'Gold on white'],
  ['bg-wine-dark text-on-primary', 'Wine'],
  ['bg-tertiary-fixed text-tertiary', 'Pistachio green'],
  ['bg-secondary-fixed text-on-secondary-fixed', 'Soft gold'],
  ['bg-error-container text-status-red', 'Chili red'],
  ['bg-surface-container-lowest text-coastal-blue', 'Coastal blue'],
];

const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 70);

const blank = (): Product => ({
  id: '', name: '', producer: '', place: '', unit: '', price: 10, category: 'pasta', region: 'sicilia', cert: 'estate',
  badge: { label: '', className: BADGE_STYLES[0][0] }, img: '', gift: false, rare: false, stock: 10, status: 'active',
});

export default function Products({ products, onSave, readOnly }: { products: Product[]; onSave: (next: Product[]) => Promise<void>; readOnly: boolean }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [editing, setEditing] = useState<{ product: Product; isNew: boolean } | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState('');

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return products.filter((p) => (cat === 'all' || p.category === cat) && (!n || `${p.name} ${p.producer} ${p.place}`.toLowerCase().includes(n)));
  }, [products, q, cat]);

  async function commit(next: Product[], key: string) {
    setBusy(key);
    setMsg('');
    try {
      await onSave(next);
      return true;
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Could not save');
      return false;
    } finally {
      setBusy(null);
    }
  }

  const toggleHidden = (p: Product) => commit(products.map((x) => (x.id === p.id ? { ...x, status: x.status === 'active' ? 'hidden' : 'active' } : x)), p.id);
  const remove = (p: Product) => window.confirm(`Delete “${p.name}”? This removes it from the shop for good.`) && commit(products.filter((x) => x.id !== p.id), p.id);

  return (
    <>
      <Card>
        <div className="flex flex-wrap items-end gap-3 mb-5">
          <div className="flex-1 min-w-[12rem]">
            <label htmlFor="prod-search" className={`block ${label} text-ink-secondary mb-1`}>Search</label>
            <input id="prod-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, producer or place" className={field} />
          </div>
          <div>
            <label htmlFor="prod-cat" className={`block ${label} text-ink-secondary mb-1`}>Category</label>
            <select id="prod-cat" value={cat} onChange={(e) => setCat(e.target.value)} className={field}>
              <option value="all">All categories</option>
              {CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </div>
          {!readOnly && (
            <button type="button" onClick={() => setEditing({ product: blank(), isNew: true })} className={btnPrimary}>
              <span aria-hidden="true" className="material-symbols-outlined text-lg">add</span> Add product
            </button>
          )}
        </div>
        {msg && <p role="alert" className="mb-4 rounded-lg bg-error-container px-4 py-2 text-sm font-semibold text-on-error-container">{msg}</p>}

        {list.length === 0 ? (
          <Empty icon="inventory_2" title={products.length ? 'No products match' : 'No products yet'} />
        ) : (
          <div className="overflow-x-auto -mx-5 sm:-mx-6">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className={`${label} text-ink-tertiary text-left`}>
                  <th className="px-5 sm:px-6 py-2 font-bold">Product</th>
                  <th className="px-3 py-2 font-bold">Category</th>
                  <th className="px-3 py-2 font-bold text-right">Price</th>
                  <th className="px-3 py-2 font-bold text-right">Stock</th>
                  <th className="px-3 py-2 font-bold">Shop visibility</th>
                  <th className="px-5 sm:px-6 py-2 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {list.map((p) => (
                  <tr key={p.id} className={p.status === 'hidden' ? 'opacity-60' : ''}>
                    <td className="px-5 sm:px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-lg bg-surface-parchment overflow-hidden shrink-0">{p.img && <img src={p.img} alt="" className="size-full object-cover" loading="lazy" />}</div>
                        <div className="min-w-0">
                          <div className="font-semibold text-on-surface truncate">{p.name}</div>
                          <div className="text-xs text-ink-tertiary truncate">{p.producer} · {p.place}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-ink-secondary">{CATEGORIES.find(([v]) => v === p.category)?.[1]}</td>
                    <td className="px-3 py-3 text-right font-semibold text-on-surface">{usd(p.price)}</td>
                    <td className="px-3 py-3 text-right">
                      <span className={p.stock === 0 ? 'font-bold text-status-red' : p.stock <= 5 ? 'font-bold text-badge-ink' : 'text-on-surface'}>{p.stock === 0 ? 'Sold out' : p.stock}</span>
                    </td>
                    <td className="px-3 py-3">
                      <button
                        type="button" onClick={() => toggleHidden(p)} disabled={readOnly || busy === p.id} role="switch" aria-checked={p.status === 'active'}
                        className="inline-flex items-center gap-2 text-xs font-bold text-on-surface disabled:opacity-50"
                      >
                        <span className={`relative h-5 w-9 rounded-full transition-colors ${p.status === 'active' ? 'bg-pistachio-light' : 'bg-surface-container-highest'}`}>
                          <span className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-all ${p.status === 'active' ? 'left-[18px]' : 'left-0.5'}`} />
                        </span>
                        {p.status === 'active' ? 'Live' : 'Hidden'}
                      </button>
                    </td>
                    <td className="px-5 sm:px-6 py-3 text-right whitespace-nowrap">
                      <button type="button" onClick={() => setEditing({ product: p, isNew: false })} className="rounded-full p-2 hover:bg-surface-container" aria-label={`Edit ${p.name}`}>
                        <span aria-hidden="true" className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      {!readOnly && (
                        <button type="button" onClick={() => remove(p)} disabled={busy === p.id} className="rounded-full p-2 hover:bg-error-container hover:text-on-error-container" aria-label={`Delete ${p.name}`}>
                          <span aria-hidden="true" className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-4 text-xs text-ink-tertiary">{products.filter((p) => p.status === 'active').length} live · {products.filter((p) => p.status === 'hidden').length} hidden · Changes show in the shop within about a minute.</p>
      </Card>

      {editing && (
        <ProductEditor
          initial={editing.product}
          isNew={editing.isNew}
          readOnly={readOnly}
          existingIds={products.map((p) => p.id)}
          onClose={() => setEditing(null)}
          onSubmit={async (p) => {
            const next = editing.isNew ? [...products, p] : products.map((x) => (x.id === editing.product.id ? p : x));
            if (await commit(next, p.id)) setEditing(null);
          }}
          error={msg}
        />
      )}
    </>
  );
}

function ProductEditor({ initial, isNew, readOnly, existingIds, onClose, onSubmit, error }: {
  initial: Product; isNew: boolean; readOnly: boolean; existingIds: string[]; error: string;
  onClose: () => void; onSubmit: (p: Product) => Promise<void>;
}) {
  const [p, setP] = useState<Product>(initial);
  const [saving, setSaving] = useState(false);
  const set = <K extends keyof Product>(k: K, v: Product[K]) => setP((cur) => ({ ...cur, [k]: v }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    let id = p.id;
    if (isNew) {
      const base = slug(p.name) || 'product';
      id = base;
      for (let n = 2; existingIds.includes(id); n++) id = `${base}-${n}`;
    }
    setSaving(true);
    await onSubmit({ ...p, id });
    setSaving(false);
  }

  const F = ({ id, text, children, wide }: { id: string; text: string; children: React.ReactNode; wide?: boolean }) => (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className={`block ${label} text-ink-secondary mb-1.5`}>{text}</label>
      {children}
    </div>
  );

  return (
    <Drawer open onClose={onClose} title={<h2 className="font-headline-sm text-xl text-on-surface">{isNew ? 'Add product' : `Edit ${initial.name}`}</h2>}>
      <form onSubmit={submit} className="space-y-6">
        <fieldset disabled={readOnly} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {F({ id: 'p-name', text: 'Name', wide: true, children: <input id="p-name" required value={p.name} onChange={(e) => set('name', e.target.value)} className={field} /> })}
          {F({ id: 'p-producer', text: 'Producer', children: <input id="p-producer" value={p.producer} onChange={(e) => set('producer', e.target.value)} className={field} /> })}
          {F({ id: 'p-place', text: 'Place', children: <input id="p-place" value={p.place} onChange={(e) => set('place', e.target.value)} className={field} /> })}
          {F({ id: 'p-price', text: 'Price (USD)', children: <input id="p-price" type="number" min={0.01} max={9999} step={0.01} required value={p.price} onChange={(e) => set('price', Number(e.target.value))} className={field} /> })}
          {F({ id: 'p-stock', text: 'Stock on hand', children: <input id="p-stock" type="number" min={0} step={1} required value={p.stock} onChange={(e) => set('stock', Math.max(0, Math.floor(Number(e.target.value))))} className={field} /> })}
          {F({ id: 'p-unit', text: 'Size / unit line', wide: true, children: <input id="p-unit" value={p.unit} onChange={(e) => set('unit', e.target.value)} placeholder="190g • $2.38 / oz" className={field} /> })}
          {F({ id: 'p-cat', text: 'Category', children: <select id="p-cat" value={p.category} onChange={(e) => set('category', e.target.value as Product['category'])} className={field}>{CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select> })}
          {F({ id: 'p-region', text: 'Region', children: <select id="p-region" value={p.region} onChange={(e) => set('region', e.target.value as Product['region'])} className={field}>{REGIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select> })}
          {F({ id: 'p-cert', text: 'Certification', children: <select id="p-cert" value={p.cert} onChange={(e) => set('cert', e.target.value as Product['cert'])} className={field}>{CERTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select> })}
          {F({ id: 'p-status', text: 'Shop visibility', children: <select id="p-status" value={p.status} onChange={(e) => set('status', e.target.value as Product['status'])} className={field}><option value="active">Live</option><option value="hidden">Hidden</option></select> })}
          {F({ id: 'p-badge', text: 'Badge text', children: <input id="p-badge" value={p.badge.label} maxLength={30} onChange={(e) => set('badge', { ...p.badge, label: e.target.value })} placeholder="Best Seller" className={field} /> })}
          {F({ id: 'p-badge-style', text: 'Badge colour', children: <select id="p-badge-style" value={p.badge.className} onChange={(e) => set('badge', { ...p.badge, className: e.target.value })} className={field}>{BADGE_STYLES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select> })}
          {F({ id: 'p-img', text: 'Image URL (https)', wide: true, children: <input id="p-img" type="url" pattern="https://.*" value={p.img} onChange={(e) => set('img', e.target.value)} placeholder="https://…" className={field} /> })}
          <div className="sm:col-span-2 flex flex-wrap gap-6">
            <label className="flex items-center gap-2 text-sm text-on-surface"><input type="checkbox" checked={p.gift} onChange={(e) => set('gift', e.target.checked)} className="rounded text-primary focus:ring-primary" /> Gift ready</label>
            <label className="flex items-center gap-2 text-sm text-on-surface"><input type="checkbox" checked={p.rare} onChange={(e) => set('rare', e.target.checked)} className="rounded text-primary focus:ring-primary" /> Rare allocation</label>
          </div>
        </fieldset>

        <div className="rounded-xl bg-surface-parchment p-4 flex items-center gap-4">
          <div className="size-20 rounded-lg bg-surface-container-lowest overflow-hidden shrink-0 relative">
            {p.img && <img src={p.img} alt="" className="size-full object-cover" />}
            {p.badge.label && <span className={`absolute top-1 left-1 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${p.badge.className}`}>{p.badge.label}</span>}
          </div>
          <div className="min-w-0">
            <p className="text-xs text-ink-tertiary uppercase tracking-wider">{p.producer || 'Producer'} · {p.place || 'Place'}</p>
            <p className="font-headline-sm text-base text-primary truncate">{p.name || 'Product name'}</p>
            <p className="font-bold text-on-surface">{usd(p.price || 0)}</p>
          </div>
        </div>

        {error && <p role="alert" className="text-sm font-semibold text-status-red">{error}</p>}
        <div className="flex gap-3">
          {!readOnly && <button type="submit" disabled={saving} className={btnPrimary}>{saving ? 'Saving…' : isNew ? 'Add product' : 'Save changes'}</button>}
          <button type="button" onClick={onClose} className={btnGhost}>Cancel</button>
        </div>
      </form>
    </Drawer>
  );
}
