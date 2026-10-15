import { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import type { Product } from '../shared/types';
import { useCatalog, useSettings } from '../storeApi';
import { addProduct, useBasket } from '../cartStore';

const money = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);
const label = 'font-label-caps text-label-caps uppercase';
const Icon = ({ name, className = '' }: { name: string; className?: string }) => <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{name}</span>;
const PAGE = 16;

const categoryNames: Record<Product['category'], string> = {
  pistachio: 'Pistachio & Bronte',
  pasta: 'Artisanal Pasta',
  balsamics: 'Aged Balsamic & Saba',
  oils: 'Extra Virgin Olive Oil',
  rice: 'Heirloom Rice',
  sweets: 'Sweets & Pastry',
  gifts: 'Gift Sets',
};
const regionNames: Record<Product['region'], string> = {
  sicilia: 'Sicilia', campania: 'Campania', emilia: 'Emilia-Romagna', calabria: 'Calabria', lombardia: 'Lombardia', piemonte: 'Piemonte',
};

type Sort = 'curated' | 'price-asc' | 'price-desc' | 'protected' | 'rare';
const protectedFirst = (p: Product) => (p.cert === 'dop' ? 0 : p.cert === 'igp' ? 1 : 2);

const FAV_KEY = 'lt-favourites';
function readFavs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]') as string[];
  } catch {
    return [];
  }
}

export default function Shop() {
  const params = new URLSearchParams(window.location.search);
  const [category, setCategory] = useState<string>(params.get('category') ?? 'all');
  const [region, setRegion] = useState<string>(params.get('region') ?? 'all');
  const [protectedOnly, setProtectedOnly] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [giftOnly, setGiftOnly] = useState(false);
  const [sort, setSort] = useState<Sort>('curated');
  const [page, setPage] = useState(1);
  const [favs, setFavs] = useState<string[]>(readFavs);
  const { products: catalog, loaded } = useCatalog();
  const settings = useSettings();
  const [basket, setBasket] = useBasket();
  const toast = useToast();

  useEffect(() => {
    const prev = document.title;
    document.title = 'Shop | La Taglia';
    return () => {
      document.title = prev;
    };
  }, []);

  // Keep the filters in the address bar, so a filtered view can be linked to.
  useEffect(() => {
    const q = new URLSearchParams();
    if (category !== 'all') q.set('category', category);
    if (region !== 'all') q.set('region', region);
    history.replaceState(null, '', `${window.location.pathname}${q.toString() ? `?${q}` : ''}`);
    setPage(1);
  }, [category, region, protectedOnly, organicOnly, giftOnly, sort]);

  const categories = useMemo(() => {
    const count = new Map<string, number>();
    for (const p of catalog) count.set(p.category, (count.get(p.category) ?? 0) + 1);
    return (Object.keys(categoryNames) as Product['category'][]).filter((c) => count.has(c)).map((c) => ({ value: c, label: categoryNames[c], n: count.get(c)! }));
  }, [catalog]);
  const regions = useMemo(() => (Object.keys(regionNames) as Product['region'][]).filter((r) => catalog.some((p) => p.region === r)), [catalog]);

  const visible = useMemo(() => {
    const list = catalog.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (region === 'all' || p.region === region) &&
        (!protectedOnly || p.cert === 'dop' || p.cert === 'igp') &&
        (!organicOnly || p.cert === 'organic') &&
        (!giftOnly || p.gift),
    );
    if (sort === 'price-asc') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...list].sort((a, b) => b.price - a.price);
    if (sort === 'protected') return [...list].sort((a, b) => protectedFirst(a) - protectedFirst(b));
    if (sort === 'rare') return [...list].sort((a, b) => Number(b.rare) - Number(a.rare));
    return list;
  }, [catalog, category, region, protectedOnly, organicOnly, giftOnly, sort]);

  const pages = Math.max(1, Math.ceil(visible.length / PAGE));
  const shown = visible.slice((page - 1) * PAGE, page * PAGE);
  const upper = shown.slice(0, 8);
  const lower = shown.slice(8);

  const subtotal = basket.items.reduce((s, i) => s + i.unit * i.qty, 0);
  const freeAt = settings.freeShippingAt;
  const away = Math.max(0, freeAt - subtotal);
  const producers = new Set(catalog.map((p) => p.producer).filter(Boolean)).size;
  const filterName = [category !== 'all' && categoryNames[category as Product['category']], region !== 'all' && regionNames[region as Product['region']]].filter(Boolean).join(' · ') || 'All of Italy';

  function add(p: Product) {
    setBasket((b) => addProduct(b, p));
    toast.show(`${p.name} added to your bag`);
  }

  function toggleFav(id: string) {
    setFavs((f) => {
      const next = f.includes(id) ? f.filter((x) => x !== id) : [...f, id];
      try {
        localStorage.setItem(FAV_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }

  function goTo(n: number) {
    setPage(n);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  function clearFilters() {
    setCategory('all');
    setRegion('all');
    setProtectedOnly(false);
    setOrganicOnly(false);
    setGiftOnly(false);
  }

  const pill = (on: boolean) =>
    `px-4 py-2 rounded-full font-button-sm text-button-sm whitespace-nowrap transition-colors ${on ? 'bg-primary text-on-primary shadow-sm hover:bg-wine-hover' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-highest'}`;
  const chip = (on: boolean) =>
    `px-2.5 py-1 rounded text-caption whitespace-nowrap transition-colors ${on ? 'bg-secondary-fixed text-on-secondary-fixed font-bold' : 'bg-surface-container-low text-ink-secondary hover:bg-surface-container-high'}`;

  const grid = (list: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {list.map((p) => <Card key={p.id} p={p} fav={favs.includes(p.id)} onFav={() => toggleFav(p.id)} onAdd={() => add(p)} />)}
    </div>
  );

  return (
    <Layout>
      <Toast message={toast.message} />

      {/* Hero */}
      <section className="relative w-full bg-surface-parchment overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-8 pb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-ink-secondary mb-6">
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <span className="text-xs text-outline-variant">/</span>
            <a className="hover:text-primary transition-colors" href="/shop">Shop</a>
            <span className="text-xs text-outline-variant">/</span>
            <span className="text-on-surface font-semibold">All Provisions</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-fixed/50 text-secondary ${label}`}>
                <Icon name="verified_user" className="text-sm" /> Direct from Italian family producers
              </div>
              <h1 className="font-headline-lg text-[34px] leading-[40px] sm:text-headline-lg text-primary tracking-tight">The Pantry &amp; Provisions</h1>
              <p className="text-body-lg text-ink-secondary max-w-3xl leading-relaxed">
                Single-estate olive oils, bronze-die pasta, balsamic aged in wooden barrels and pistachios from the slopes of Etna. Every product comes straight from the family that made it, with their own label still on it.
              </p>
            </div>
            <div className="lg:col-span-4 bg-surface-container-lowest p-5 rounded-lg shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className={`${label} text-ink-secondary tracking-widest`}>Shipping</span>
                <span className={`${label} text-pistachio-light flex items-center gap-1 font-bold`}><span className="size-2 rounded-full bg-pistachio-light inline-block animate-pulse" /> Shipping now</span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-headline-sm text-headline-sm text-on-surface">Free over {money(freeAt)}</span>
                <span className="text-caption text-badge-ink font-semibold">Climate-safe</span>
              </div>
              <p className="text-caption text-ink-tertiary">Oils, cheeses and creams travel in insulated packaging, so they arrive tasting the way they did at the source.</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['landscape', 'Single origin', 'Traceable to a named place'],
              ['policy', 'Zero relabeling', 'The maker’s own label'],
              ['ac_unit', 'Packed with care', 'Insulated for delicate goods'],
              ['workspace_premium', 'Protected names', 'DOP & IGP certifications checked'],
            ].map(([icon, t, s]) => (
              <div key={t} className="flex items-start gap-3 p-3.5 bg-surface-container-low rounded">
                <Icon name={icon} className="text-badge-ink text-xl" />
                <div>
                  <div className="text-button-sm font-bold text-on-surface">{t}</div>
                  <div className="text-caption text-ink-secondary">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[57px] z-40 bg-surface-container-lowest shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className={pill(category === 'all')} onClick={() => setCategory('all')}>All Provisions ({catalog.length})</button>
            {categories.map((c) => (
              <button key={c.value} className={pill(category === c.value)} onClick={() => setCategory(c.value)}>{c.label} ({c.n})</button>
            ))}
          </div>
          <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <span className={`${label} text-ink-tertiary mr-1`}>Region:</span>
              <button className={chip(region === 'all')} onClick={() => setRegion('all')}>All Italy</button>
              {regions.map((r) => <button key={r} className={chip(region === r)} onClick={() => setRegion(r)}>{regionNames[r]}</button>)}
            </div>
            <div className="flex flex-wrap items-center gap-4 ml-auto">
              <div className="flex items-center gap-3">
                <Check text="DOP / IGP only" on={protectedOnly} set={setProtectedOnly} />
                <Check text="Organic" on={organicOnly} set={setOrganicOnly} />
                <Check text="Gift ready" on={giftOnly} set={setGiftOnly} />
              </div>
              <label className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded">
                <span className="text-caption text-ink-tertiary">Sort:</span>
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="bg-transparent border-none text-xs font-semibold text-on-surface focus:ring-0 cursor-pointer py-0 pl-0 pr-6">
                  <option value="curated">Our selection</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                  <option value="protected">DOP / IGP first</option>
                  <option value="rare">Rare first</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Free shipping progress */}
      <section className="bg-surface-container-low py-2.5">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-on-surface">
            <Icon name="local_shipping" className="text-pistachio-light text-base" />
            <span className="text-body-sm"><strong>Free climate-safe shipping</strong> on orders over {money(freeAt)}.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36 h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="bg-secondary-container h-full transition-all" style={{ width: `${Math.min(100, (subtotal / freeAt) * 100)}%` }} />
            </div>
            <span className="text-caption text-ink-secondary font-semibold">{away > 0 ? `${money(Math.ceil(away))} away from free shipping` : 'Your bag ships free'}</span>
          </div>
        </div>
      </section>

      {/* Catalog, part 1 */}
      <section id="catalog" className="max-w-[1320px] mx-auto px-6 lg:px-12 py-10 w-full scroll-mt-40">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
          <div>
            <p className={`${label} text-ink-tertiary`}>Our pantry</p>
            <h2 className="font-headline-md text-headline-md text-primary">
              {loaded ? `${visible.length} ${visible.length === 1 ? 'provision' : 'provisions'}` : 'Loading provisions…'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink-secondary">
            <Icon name="tune" className="text-base" />
            <span>Showing: <strong className="text-on-surface">{filterName}</strong></span>
          </div>
        </div>
        {visible.length === 0 && loaded ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-ink-secondary">Nothing matches these filters yet.</p>
            <button onClick={clearFilters} className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-button-sm font-bold">Clear filters</button>
          </div>
        ) : (
          grid(upper)
        )}
      </section>

      {/* No-relabeling pledge */}
      <section className="w-full bg-primary text-on-primary">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className={`inline-flex items-center gap-2 text-secondary-container ${label} tracking-widest`}><Icon name="auto_stories" className="text-base" /> Our promise</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-white">Why we never use our own label</h2>
            <p className="text-white/80 leading-relaxed">Many importers repackage Italian food under their own brand, and the family who made it disappears from the jar.</p>
            <p className="text-white/80 leading-relaxed">Every bottle of vinegar, bag of bronze-die pasta and jar of pistachio cream we sell keeps its maker’s original label, and its DOP or IGP mark where it has one. You always know who made it and where.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/about#people" className="px-5 py-2.5 rounded-full bg-secondary-container hover:bg-gold-hover text-button-ink text-button-sm font-bold transition-colors">Meet our producers</a>
              <a href="/about#contact" className="px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-button-sm font-bold transition-colors">Ask us a question →</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/10 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className={`${label} text-secondary-container tracking-widest`}>The shop at a glance</span>
                <span className="text-caption text-white/60">Live</span>
              </div>
              {[
                ['Family producers', String(producers)],
                ['Regions in the shop', String(regions.length)],
                ['Products with a DOP or IGP mark', String(catalog.filter((p) => p.cert === 'dop' || p.cert === 'igp').length)],
                ['Products relabelled as our own', '0'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-white/80">{k}</span>
                  <span className="font-headline-sm text-xl text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog, part 2 + pages */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-10 w-full">
        {lower.length > 0 && grid(lower)}
        {visible.length > 0 && (
          <div className="mt-12 pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-ink-secondary">
              Showing <strong className="text-on-surface">{(page - 1) * PAGE + 1}–{Math.min(page * PAGE, visible.length)} of {visible.length}</strong> provisions
            </span>
            {pages > 1 && (
              <div className="flex items-center gap-2">
                <button aria-label="Previous page" disabled={page === 1} onClick={() => goTo(page - 1)} className="size-9 rounded-full bg-surface-container-low hover:bg-surface-container-high disabled:opacity-40 flex items-center justify-center"><Icon name="chevron_left" /></button>
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <button key={n} aria-current={n === page ? 'page' : undefined} onClick={() => goTo(n)} className={`size-9 rounded-full text-sm font-bold ${n === page ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'}`}>{n}</button>
                ))}
                <button aria-label="Next page" disabled={page === pages} onClick={() => goTo(page + 1)} className="size-9 rounded-full bg-surface-container-low hover:bg-surface-container-high disabled:opacity-40 flex items-center justify-center"><Icon name="chevron_right" /></button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Advice */}
      <section id="shipping" className="w-full bg-surface-parchment py-12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className={`${label} text-secondary tracking-widest`}>Need a hand?</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Questions about the pantry?</h3>
            <p className="text-body-sm text-ink-secondary mt-2">Not sure which oil suits your cooking, or which pasta goes with a sauce? Ask us and we’ll reply by email.</p>
          </div>
          <Help icon="support_agent" title="Ask us anything" sub="We reply by email, usually within a day" href="/about#contact" cta="Send a message →" />
          <Help icon="redeem" title="Corporate gifting" sub="Gift boxes for clients and teams" href="/gifts#corporate" cta="Plan a gift order →" />
        </div>
      </section>
    </Layout>
  );
}

function Card({ p, fav, onFav, onAdd }: { p: Product; fav: boolean; onFav: () => void; onAdd: () => void }) {
  const href = p.href ?? `/product/${p.id}`;
  const soldOut = p.stock <= 0;
  return (
    <article className="group bg-surface-container-lowest rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative">
      <div className="relative w-full aspect-square bg-surface-soft rounded overflow-hidden mb-4 flex items-center justify-center p-3">
        {p.badge?.label && <span className={`absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-surface-container-lowest text-badge-ink ${label} shadow-sm`}>{p.badge.label}</span>}
        <button aria-label={fav ? 'Remove from favourites' : 'Save to favourites'} aria-pressed={fav} onClick={onFav} className={`absolute top-2 right-2 z-10 size-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center transition-colors ${fav ? 'text-primary' : 'text-ink-secondary hover:text-primary'}`}>
          <span aria-hidden="true" className="material-symbols-outlined text-lg" style={fav ? { fontVariationSettings: "'FILL' 1" } : undefined}>favorite</span>
        </button>
        <a href={href} className="size-full"><img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src={p.img} alt={p.name} loading="lazy" /></a>
      </div>
      <div className="space-y-1.5 flex-grow">
        <div className="flex items-center justify-between gap-2 text-caption text-ink-tertiary">
          <span className="truncate">{p.producer}</span>
          <span className="truncate text-right">{p.place}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 group-hover:text-primary transition-colors"><a href={href}>{p.name}</a></h3>
        <p className="text-caption text-ink-secondary">{p.unit}</p>
      </div>
      <div className="pt-4 mt-3 flex items-center justify-between">
        <span className="font-headline-sm text-headline-sm text-primary font-bold">{money(p.price)}</span>
        {soldOut ? (
          <span className="px-4 py-2 rounded-full bg-surface-container text-ink-tertiary text-button-sm font-bold">Sold out</span>
        ) : (
          <button onClick={onAdd} className="px-4 py-2 rounded-full bg-secondary-container text-button-ink text-button-sm font-bold hover:bg-gold-hover transition-colors shadow-sm flex items-center gap-1.5">
            <Icon name="add" className="text-sm" /> Add
          </button>
        )}
      </div>
    </article>
  );
}

function Check({ text, on, set }: { text: string; on: boolean; set: (v: boolean) => void }) {
  return (
    <label className="inline-flex items-center gap-1.5 text-xs text-ink-secondary cursor-pointer select-none">
      <input type="checkbox" checked={on} onChange={(e) => set(e.target.checked)} className="rounded text-primary focus:ring-0 cursor-pointer" />
      <span>{text}</span>
    </label>
  );
}

function Help({ icon, title, sub, href, cta }: { icon: string; title: string; sub: string; href: string; cta: string }) {
  return (
    <div className="flex items-start gap-4 bg-surface-container-lowest p-5 rounded-lg shadow-sm">
      <div className="size-11 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0"><Icon name={icon} className="text-xl" /></div>
      <div>
        <div className="font-bold text-on-surface">{title}</div>
        <div className="text-caption text-ink-secondary">{sub}</div>
        <a href={href} className="inline-block mt-2 text-sm font-bold text-primary hover:underline">{cta}</a>
      </div>
    </div>
  );
}
