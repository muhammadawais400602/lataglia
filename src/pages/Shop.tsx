import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { shopCategories, shopProducts, type ShopProduct } from '../shopData';

type Sort = 'curated' | 'price-asc' | 'price-desc' | 'rare';

const selectClass =
  'appearance-none bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-button-sm rounded-full border-0 pl-4 pr-9 py-2 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer transition-colors';

export default function Shop() {
  const [category, setCategory] = useState('all');
  const [region, setRegion] = useState('all');
  const [cert, setCert] = useState('all');
  const [sort, setSort] = useState<Sort>('curated');
  const [inStockOnly, setInStockOnly] = useState(true);
  const [giftOnly, setGiftOnly] = useState(false);
  const toast = useToast();
  const [loadState, setLoadState] = useState<'idle' | 'loading' | 'done'>('idle');

  const visible = useMemo(() => {
    const filtered = shopProducts.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (region === 'all' || p.region === region) &&
        (cert === 'all' || p.cert === cert) &&
        (!giftOnly || p.gift) &&
        (!inStockOnly || p.inStock),
    );
    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price);
    if (sort === 'rare') return [...filtered].sort((a, b) => Number(b.rare) - Number(a.rare));
    return filtered;
  }, [category, region, cert, sort, inStockOnly, giftOnly]);

  const upper = visible.slice(0, 8);
  const lower = visible.slice(8);

  function addToBag(p: ShopProduct) {
    toast.show(`Added: ${p.name} ($${p.price})`);
  }

  function loadMore() {
    setLoadState('loading');
    window.setTimeout(() => setLoadState('done'), 900);
  }

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <Toast message={toast.message} />

        <section className="w-full bg-surface-parchment pt-14 pb-12 px-6 lg:px-12">
          <div className="max-w-[1320px] mx-auto flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block" />
              <span className="font-label-caps text-label-caps uppercase text-badge-ink tracking-[0.25em]">The Italian Gastronomic Ledger</span>
              <span className="text-ink-tertiary text-xs font-body-sm">/ Vol. XXVI</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              <div className="lg:col-span-8">
                <h1 className="font-headline-lg text-[34px] leading-[40px] sm:text-headline-lg text-primary tracking-tight mb-5">
                  All Pantry Provisions &amp; Rare Cask Allocations
                </h1>
                <p className="font-body-lg text-body-lg text-ink-secondary max-w-3xl leading-relaxed">
                  Direct-estate imports from 10 multi-generational family producers across 6 active Italian regions. Traceable to single olive groves, volcanic parcels, and heirloom vinegar attics.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end items-start lg:items-end gap-3 text-left lg:text-right">
                <div className="px-4 py-2.5 rounded bg-surface-container text-on-surface text-xs font-label-caps tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">verified</span>
                  <span>PROTECTED GEOGRAPHIC ORIGIN (DOP/IGP)</span>
                </div>
                <span className="text-xs text-ink-tertiary font-body-sm">Real-time harvest inventories refreshed weekly</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[57px] z-40 w-full bg-surface-container-lowest shadow-sm py-4 px-6 lg:px-12">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-4">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {shopCategories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`shrink-0 px-4 py-2 rounded-full font-button-sm text-button-sm transition-all ${category === c.value ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <Select value={sort} onChange={(v) => setSort(v as Sort)} options={[
                  ['curated', 'Sort: Curated Discovery'],
                  ['price-asc', 'Price: Low to High'],
                  ['price-desc', 'Price: High to Low'],
                  ['rare', 'Allocation: Rare First'],
                ]} />
                <Select value={region} onChange={setRegion} options={[
                  ['all', 'Region: All Terroirs'],
                  ['sicilia', 'Sicilia (Etna)'],
                  ['campania', 'Campania'],
                  ['emilia', 'Emilia-Romagna'],
                  ['calabria', 'Calabria'],
                  ['lombardia', 'Lombardia'],
                  ['piemonte', 'Piemonte'],
                ]} />
                <Select value={cert} onChange={setCert} options={[
                  ['all', 'Certification: All'],
                  ['dop', 'DOP Protected'],
                  ['igp', 'IGP Certified'],
                  ['organic', 'Organic Cultivation'],
                  ['estate', 'Single-Estate'],
                ]} />
              </div>
              <div className="flex items-center gap-6">
                <Toggle label="In Stock Only" checked={inStockOnly} onChange={setInStockOnly} />
                <Toggle label="Gift Ready" checked={giftOnly} onChange={setGiftOnly} />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 px-6 lg:px-12 bg-background">
          <div className="max-w-[1320px] mx-auto">
            {visible.length === 0 ? (
              <p className="text-center text-ink-secondary py-16">No provisions match these filters.</p>
            ) : (
              <ProductGrid products={upper} onAdd={addToBag} />
            )}
          </div>
        </section>

        <section className="w-full b-wine py-8 px-6 lg:px-12 my-4 text-on-primary">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-2xl">local_shipping</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-[0.2em] mb-1">Direct Import Guarantee</div>
                <p className="font-headline-sm text-lg md:text-xl font-normal leading-snug">
                  Complimentary Climate-Safe Dispatch On All Cask &amp; Pantry Orders Over $125.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <span className="text-xs text-white/70 font-body-sm hidden lg:inline">Packed in natural thermal straw insulation</span>
              <a className="px-5 py-2.5 rounded-full bg-white text-wine-dark font-button-sm text-xs uppercase tracking-wider hover:bg-surface-parchment transition-colors shadow-sm" href="#shipping">
                Dispatch Policy
              </a>
            </div>
          </div>
        </section>

        <section className="w-full pb-16 px-6 lg:px-12 bg-background">
          <div className="max-w-[1320px] mx-auto">
            {lower.length > 0 && <ProductGrid products={lower} onAdd={addToBag} />}
            <div className="mt-16 pt-8 flex flex-col items-center justify-center gap-4 text-center">
              <div className="w-64 h-1 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${Math.round((visible.length / 29) * 100)}%` }} />
              </div>
              <div className="font-caption text-caption text-ink-secondary tracking-wide">
                Displaying <span className="font-bold text-on-surface">{visible.length}</span> of <span className="font-bold text-on-surface">29</span> Verified Regional Provisions
              </div>
              <button
                onClick={loadMore}
                disabled={loadState !== 'idle'}
                className={`mt-2 px-8 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-button text-button transition-colors flex items-center gap-3 ${loadState === 'done' ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {loadState === 'idle' && (<><span>Load More Provisions</span><span className="material-symbols-outlined text-base">arrow_downward</span></>)}
                {loadState === 'loading' && (<><span className="material-symbols-outlined text-base animate-spin">refresh</span><span>Retrieving Cask Stock...</span></>)}
                {loadState === 'done' && (<><span className="material-symbols-outlined text-base">check</span><span>Catalog Fully Synchronized</span></>)}
              </button>
              <p className="text-xs text-ink-tertiary max-w-sm mt-3 font-body-sm">
                All casks, jars, and packages are hand-inspected in our Bologna consolidation facility prior to trans-Atlantic climate-controlled dispatch.
              </p>
            </div>
          </div>
        </section>

        <section id="shipping" className="w-full bg-surface-parchment py-12 px-6 lg:px-12">
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Promise icon="workspace_premium" title="Direct Farm Gate Origin" body="Zero intermediary trading desks. We contract harvests directly with producers for fair living prices and unadulterated freshness." />
            <Promise icon="thermostat" title="Guaranteed Cold Chain" body="Pistachio creams and delicate extra virgin olive oils travel under strictly monitored 14°C to 18°C temperature parameters." />
            <Promise icon="card_giftcard" title="Hand-Lettered Gift Notes" body="Every allocation order can include personalized Italian parchment notes hand-embossed in our cellars with your inscription." />
          </div>
        </section>
      </div>
    </Layout>
  );
}

function ProductGrid({ products, onAdd }: { products: ShopProduct[]; onAdd: (p: ShopProduct) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <article key={p.name} className="flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
          <div className="relative w-full aspect-square bg-surface-parchment overflow-hidden p-6 flex items-center justify-center">
            <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded font-label-caps text-[10px] tracking-wider uppercase shadow-sm ${p.badge.className}`}>{p.badge.label}</span>
            {p.href ? <a href={p.href}><img className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" src={p.img} alt={p.name} loading="lazy" /></a> : <img className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" src={p.img} alt={p.name} loading="lazy" />}
          </div>
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-ink-tertiary mb-1">
                <span className="font-label-caps uppercase tracking-wider">{p.producer}</span>
                <span className="font-body-sm text-right">{p.place}</span>
              </div>
              <h3 className="font-headline-sm text-base text-primary mb-1 line-clamp-1 group-hover:text-wine-hover transition-colors">{p.href ? <a href={p.href} className="hover:underline">{p.name}</a> : p.name}</h3>
              <p className="font-caption text-caption text-ink-secondary mb-4">{p.unit}</p>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="font-headline-sm text-lg font-bold text-on-surface">${p.price}</span>
              <button
                onClick={() => onAdd(p)}
                className="px-4 py-2 rounded-full bg-secondary-container hover:bg-gold-hover text-button-ink font-button-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <div className="relative inline-block">
      <select className={selectClass} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <span className="material-symbols-outlined text-sm text-ink-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="rounded text-primary focus:ring-0 w-4 h-4 bg-surface-container-high" />
      <span className="font-body-sm text-xs text-on-surface font-semibold tracking-wide">{label}</span>
    </label>
  );
}

function Promise({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-headline-sm text-base text-primary mb-1">{title}</h4>
        <p className="font-body-sm text-body-sm text-ink-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
