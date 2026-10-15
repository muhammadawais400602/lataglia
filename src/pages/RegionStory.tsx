import { Fragment, useEffect, type ReactNode } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { addProduct, useBasket } from '../cartStore';
import { useCatalog } from '../storeApi';
import type { Product } from '../shared/types';
import type { RegionStory as Story, StoryProduct, Tone } from '../regions/types';

const wrap = 'max-w-[1280px] mx-auto px-6 lg:px-12';
const eyebrow = 'text-caption text-primary uppercase font-bold tracking-widest block mb-2';
const money = (n: number) => `$${n.toFixed(2)}`;
const toneClass: Record<Tone, string> = { green: 'text-pistachio-light', red: 'text-status-red', gold: 'text-badge-ink', neutral: 'text-ink-secondary' };
const Icon = ({ name, className = '' }: { name: string; className?: string }) => <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{name}</span>;

type Catalog = Map<string, Product>;

// [label](product:id) · [label](#anchor) · [label](/path) · **bold** · *italic*
function Rich({ text, catalog, linkClass = 'font-semibold text-primary underline decoration-secondary-container decoration-2 underline-offset-4 hover:text-wine-hover' }: { text: string; catalog: Catalog; linkClass?: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[3]) parts.push(<strong key={m.index} className="font-bold">{m[3]}</strong>);
    else if (m[4]) parts.push(<em key={m.index}>{m[4]}</em>);
    else {
      const target = m[2];
      const href = target.startsWith('product:') ? (catalog.has(target.slice(8)) ? `/product/${target.slice(8)}` : '/shop') : target;
      parts.push(<a key={m.index} href={href} className={linkClass}>{m[1]}</a>);
    }
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts.map((x, i) => <Fragment key={i}>{x}</Fragment>)}</>;
}

function SectionHead({ kicker, title, lede, split }: { kicker: string; title: string; lede: string; split?: boolean }) {
  return split ? (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16 pb-6 border-b border-border-line">
      <div>
        <span className={eyebrow}>{kicker}</span>
        <h2 className="font-headline-lg text-4xl text-on-surface">{title}</h2>
      </div>
      <p className="text-ink-secondary text-sm max-w-md">{lede}</p>
    </div>
  ) : (
    <div className="mb-12 lg:mb-14">
      <span className={eyebrow}>{kicker}</span>
      <h2 className="font-headline-lg text-4xl text-on-surface">{title}</h2>
      <p className="text-ink-secondary text-sm mt-2">{lede}</p>
    </div>
  );
}

/** Product card in the pantry: photo, name, size and a buy button wired to the catalog. */
function BuyCard({ sp, shelf, catalog, onAdd }: { sp: StoryProduct; shelf: string; catalog: Catalog; onAdd: (p: Product) => void }) {
  const live = catalog.get(sp.id);
  const soldOut = live && live.stock <= 0;
  return (
    <div className="w-full max-w-[260px] bg-surface-bright border border-border-line rounded p-4 flex flex-col shadow-sm">
      <div className="flex items-center justify-between gap-2 text-ink-tertiary mb-3">
        <span className="uppercase tracking-widest text-[10px]">{shelf}</span>
        {sp.tag && <span className={`text-xs font-bold ${toneClass[sp.tagTone ?? 'neutral']}`}>{sp.tag}</span>}
      </div>
      {(sp.img || live?.img) && (
        <a href={live ? `/product/${live.id}` : '/shop'} className="block w-full h-28 bg-surface-container rounded mb-3 overflow-hidden">
          <img className="size-full object-cover transition-transform duration-500 hover:scale-105" src={sp.img || live?.img} alt={sp.name} loading="lazy" />
        </a>
      )}
      <h4 className="font-headline-sm text-sm text-on-surface font-bold">
        {live ? <a href={`/product/${live.id}`} className="hover:underline underline-offset-4">{sp.name}</a> : sp.name}
      </h4>
      <p className="text-xs text-ink-secondary mb-3">{sp.meta}</p>
      {live && !soldOut ? (
        <button type="button" onClick={() => onAdd(live)} className="w-full py-2 bg-primary hover:bg-wine-hover text-on-primary text-xs font-bold uppercase rounded tracking-wider transition-colors flex items-center justify-center gap-2">
          <Icon name="add_shopping_cart" className="text-sm" /> Add {money(live.price)}
        </button>
      ) : (
        <span className="w-full py-2 bg-surface-container text-ink-tertiary text-xs font-bold uppercase rounded tracking-wider flex items-center justify-center gap-2">
          <Icon name="schedule" className="text-sm" /> {soldOut ? 'Sold out' : 'Arriving soon'}
        </span>
      )}
    </div>
  );
}

// Maiolica tile in the site palette, used when a story has no landscape photo.
function Maiolica({ color = '#6E1626' }: { color?: string }) {
  return (
    <svg viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <pattern id="maiolica" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="#FBF6EC" />
          <g fill={color}><circle cx="0" cy="0" r="26" /><circle cx="100" cy="0" r="26" /><circle cx="0" cy="100" r="26" /><circle cx="100" cy="100" r="26" /></g>
          <g fill="#FBF6EC"><circle cx="0" cy="0" r="14" /><circle cx="100" cy="0" r="14" /><circle cx="0" cy="100" r="14" /><circle cx="100" cy="100" r="14" /></g>
          <g fill="#FEB62C"><ellipse cx="50" cy="31" rx="9" ry="17" /><ellipse cx="50" cy="69" rx="9" ry="17" /><ellipse cx="31" cy="50" rx="17" ry="9" /><ellipse cx="69" cy="50" rx="17" ry="9" /></g>
          <g fill="#86A33E">
            <ellipse cx="30" cy="30" rx="4" ry="10" transform="rotate(-45 30 30)" /><ellipse cx="70" cy="30" rx="4" ry="10" transform="rotate(45 70 30)" />
            <ellipse cx="30" cy="70" rx="4" ry="10" transform="rotate(45 30 70)" /><ellipse cx="70" cy="70" rx="4" ry="10" transform="rotate(-45 70 70)" />
          </g>
          <circle cx="50" cy="50" r="8" fill="#D62F3A" /><circle cx="50" cy="50" r="3" fill="#FBF6EC" />
          <path d="M0 50h6M94 50h6M50 0v6M50 94v6" stroke={color} strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="400" height="560" fill="url(#maiolica)" />
    </svg>
  );
}

function useSeo(story: Story) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = story.seoTitle;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    const prevDesc = meta.content;
    meta.content = story.seoDescription;

    const graph: object[] = [{ '@type': 'Article', headline: `${story.name}: the ${story.name} pantry, region by region`, publisher: { '@type': 'Organization', name: 'La Taglia', url: window.location.origin }, about: `${story.name} food and ingredients` }];
    const r = story.cook?.recipe;
    if (r) {
      const plain = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*+/g, '');
      graph.push({
        '@type': 'Recipe', name: r.title, recipeCuisine: story.name, recipeCategory: 'Main course',
        ...(r.schema
          ? { recipeYield: r.schema.yield, prepTime: r.schema.prepTime, cookTime: r.schema.cookTime, totalTime: r.schema.totalTime, recipeIngredient: r.schema.ingredients }
          : { recipeYield: `${r.serves} servings`, recipeIngredient: r.shoppingList.map(plain) }),
        ...(r.image ? { image: r.image } : {}),
        recipeInstructions: r.steps.map((s) => ({ '@type': 'HowToStep', name: s.title.replace(/\.$/, ''), text: s.body })),
      });
    }
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(ld);
    return () => {
      document.title = prevTitle;
      if (created) meta!.remove();
      else meta!.content = prevDesc;
      ld.remove();
    };
  }, [story]);
}

export default function RegionStory({ story }: { story: Story }) {
  useSeo(story);
  const { products } = useCatalog();
  const catalog: Catalog = new Map(products.map((p) => [p.id, p]));
  const [, setBasket] = useBasket();
  const toast = useToast();
  const available = (list: StoryProduct[]) => list.map((sp) => catalog.get(sp.id)).filter((p): p is Product => !!p && p.stock > 0);

  function addMany(list: StoryProduct[]) {
    const items = available(list);
    if (!items.length) return;
    setBasket((b) => items.reduce((acc, p) => addProduct(acc, p), b));
    const missing = list.length - items.length;
    toast.show(`${items.length} ${items.length === 1 ? 'item' : 'items'} added to your basket${missing ? ` (${missing} arriving soon)` : ''}`);
  }
  function addOne(p: Product) {
    setBasket((b) => addProduct(b, p));
    toast.show(`${p.name} added to your basket`);
  }

  const { hero } = story;
  const r = story.cook?.recipe;
  const setItems = available(story.set.products);
  const setTotal = setItems.reduce((n, p) => n + p.price, 0);

  return (
    <Layout>
      <Toast message={toast.message} />

      {/* Breadcrumb strip */}
      <section className="w-full bg-surface-bright py-4 border-b border-border-line">
        <div className={`${wrap} flex flex-col sm:flex-row items-start sm:items-center justify-between text-ink-secondary text-caption uppercase tracking-widest gap-2`}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <a className="hover:text-primary transition-colors" href="/">Italy</a>
            <span>/</span>
            <a className="hover:text-primary transition-colors" href="/regions">Regions</a>
            <span>/</span>
            <span className="text-primary font-bold">{story.name}</span>
          </nav>
          <p className="italic text-ink-tertiary normal-case tracking-normal font-headline-sm text-sm">{story.kicker}</p>
        </div>
      </section>

      {/* Split hero */}
      <section className="w-full text-white overflow-hidden" style={{ backgroundColor: hero.colorDeep ?? '#1b1718' }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 lg:min-h-[580px]">
          <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative z-10" style={{ backgroundColor: hero.color ?? '#191011' }}>
            <div>
              {!hero.dossier && !hero.badge && <p className="text-secondary-fixed text-[11px] uppercase tracking-[0.22em] font-semibold mb-6">{story.kicker}</p>}
              {(hero.dossier || hero.badge) && (
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {hero.dossier && <span className="text-secondary-fixed text-[11px] uppercase tracking-[0.22em] font-semibold">{hero.dossier}</span>}
                  {hero.badge && <span className="border border-secondary-container/60 bg-secondary-container/10 text-secondary-container text-[10px] tracking-widest px-2.5 py-0.5 rounded uppercase font-bold">{hero.badge}</span>}
                </div>
              )}
              <h1 className="font-headline-lg text-[64px] sm:text-[76px] lg:text-[88px] leading-[0.95] tracking-tight font-normal italic text-surface-bright mb-6">{story.name}</h1>
              <p className="font-headline-sm text-lg lg:text-xl text-white/85 max-w-md leading-relaxed">{story.subtitle}</p>
            </div>
            {(hero.metrics?.length || hero.heritage) && (
              <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
                {hero.metrics && (
                  <dl className="grid grid-cols-2 gap-3 text-xs">
                    {hero.metrics.map((m) => (
                      <div key={m.label} className="bg-white/5 border border-white/10 rounded p-3 flex items-start gap-2.5">
                        <Icon name={m.icon} className="text-secondary-container text-base shrink-0" />
                        <div className="min-w-0">
                          <dt className="text-white/50 text-[10px] uppercase tracking-wider">{m.label}</dt>
                          <dd className="text-white font-bold text-xs">{m.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                )}
                {hero.heritage && (
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs tracking-widest text-secondary-container uppercase font-bold">
                    <span className="flex items-center gap-3"><span className="inline-block w-6 h-px bg-secondary-container" />{hero.heritage}</span>
                    {hero.heritageNote && <span className="text-white/50 text-[11px] font-normal normal-case tracking-normal italic">{hero.heritageNote}</span>}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] overflow-hidden flex items-end">
            {hero.image ? (
              <>
                <img className="absolute inset-0 size-full object-cover" src={hero.image} alt={hero.imageAlt ?? ''} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ background: `linear-gradient(to right, ${hero.color ?? '#191011'}, transparent 45%, rgba(0,0,0,.3))` }} />
              </>
            ) : (
              <Maiolica color={hero.color} />
            )}
            {(hero.imageCaption || hero.imageTag) && (
              <div className="relative z-10 p-6 lg:p-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                {hero.imageCaption && (
                  <div className="bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded text-white max-w-sm shadow-md">
                    <div className="flex items-center gap-2 text-secondary-container text-xs font-bold uppercase tracking-wider mb-0.5">
                      <Icon name="explore" className="text-sm" /> {hero.imageCaption.title}
                    </div>
                    <p className="text-[11px] text-white/80 leading-snug">{hero.imageCaption.body}</p>
                  </div>
                )}
                {hero.imageTag && (
                  <span className="bg-surface-container-lowest/90 backdrop-blur px-3.5 py-1.5 rounded text-[11px] text-ink-secondary uppercase tracking-wider shadow-sm shrink-0 flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-secondary-container" /> {hero.imageTag}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="w-full bg-surface-bright py-16 lg:py-20 border-b border-border-line">
        <div className="max-w-[780px] mx-auto px-6">
          {story.intro.map((t, i) => (
            <p key={i} className={i === 0
              ? 'font-headline-lg text-xl leading-[36px] text-on-surface mb-8 first-letter:float-left first-letter:text-6xl first-letter:leading-[0.85] first-letter:pr-4 first-letter:pt-1 first-letter:font-headline-lg first-letter:text-primary'
              : 'font-body-lg text-ink-secondary text-[17px] leading-[30px] mb-8'}>
              <Rich text={t} catalog={catalog} />
            </p>
          ))}
          {story.introQuote && (
            <p className="font-headline-sm text-base italic text-primary/90 border-l-2 border-secondary-container pl-6 py-1">{story.introQuote}</p>
          )}
        </div>
      </section>

      {/* Pantry */}
      <section id="pantry" className="w-full bg-white py-16 lg:py-24 border-b border-border-line scroll-mt-20">
        <div className={wrap}>
          <SectionHead split kicker={story.pantry.eyebrow ?? 'Essential terroir goods'} title="The pantry" lede={story.pantry.lede} />
          <div>
            {story.pantry.items.map((item, i) => (
              <div key={item.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start py-8 ${i < story.pantry.items.length - 1 ? 'border-b border-border-line/70' : ''}`}>
                <div className="lg:col-span-3">
                  <h3 className="font-headline-sm text-2xl text-on-surface font-bold">{item.title}</h3>
                  <span className="text-xs uppercase font-semibold text-ink-tertiary tracking-wider block mt-1">{item.place}</span>
                </div>
                <div className="lg:col-span-6 space-y-4 text-ink-secondary">
                  <p><Rich text={item.body} catalog={catalog} /></p>
                  <div className="bg-surface-parchment p-3 rounded text-xs text-badge-ink flex items-start gap-2 font-medium">
                    <Icon name="verified" className="text-sm text-secondary-container mt-px" />
                    <span><strong>Look for:</strong> <Rich text={item.lookFor} catalog={catalog} /></span>
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-start lg:items-end gap-4">
                  {item.products.map((sp) => <BuyCard key={sp.id} sp={sp} shelf={item.shelfLabel ?? 'In the pantry'} catalog={catalog} onAdd={addOne} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes */}
      <section id="dishes" className="w-full bg-[#fbf9f9] py-16 lg:py-20 border-b border-border-line">
        <div className={wrap}>
          <SectionHead kicker={story.dishes.eyebrow ?? 'Culinary canon'} title="At the table" lede={story.dishes.lede} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {story.dishes.items.map((d) => (
              <div key={d.title} className="bg-white p-6 rounded border border-border-line flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  {d.image && (
                    <div className="w-full h-44 rounded overflow-hidden mb-4 bg-surface-container">
                      <img src={d.image} alt={d.title} loading="lazy" className="size-full object-cover" />
                    </div>
                  )}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{d.where}</span>
                  <h3 className="font-headline-sm text-xl text-on-surface mt-2 mb-3">{d.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed"><Rich text={d.body} catalog={catalog} /></p>
                </div>
                {d.tip?.startsWith('[') && d.tip.includes('](#') ? (
                  <a href={d.tip.slice(d.tip.indexOf('](') + 2, -1)} className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider hover:text-wine-hover transition-colors">
                    {d.tip.slice(1, d.tip.indexOf(']'))} <Icon name="arrow_downward" className="text-sm" />
                  </a>
                ) : d.tip ? (
                  <p className="mt-6 text-xs text-ink-secondary leading-relaxed"><Rich text={d.tip} catalog={catalog} /></p>
                ) : d.note ? (
                  <span className="mt-6 text-xs text-ink-tertiary italic">{d.note}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maker */}
      {story.maker && (
        <section id="maker" className="w-full bg-[#1b1c1c] text-white py-16 lg:py-24 scroll-mt-20">
          <div className={`${wrap} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
            {story.maker.photos.length > 0 && <div className="lg:col-span-5 space-y-4">
              {story.maker.photos.map((ph, i) => i === 0 && (
                <figure key={ph.src} className="w-full h-64 bg-stone-800 rounded overflow-hidden relative">
                  <img className="size-full object-cover" src={ph.src} alt={ph.alt} loading="lazy" />
                  {ph.caption && <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider bg-black/60 px-2 py-1 rounded">{ph.caption}</figcaption>}
                </figure>
              ))}
              {story.maker.photos.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {story.maker.photos.slice(1, 3).map((ph) => (
                    <figure key={ph.src} className="h-44 bg-stone-800 rounded overflow-hidden relative">
                      <img className="size-full object-cover" src={ph.src} alt={ph.alt} loading="lazy" />
                      {ph.caption && <figcaption className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider bg-black/60 px-1.5 py-0.5 rounded">{ph.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
            </div>}
            <div className={story.maker.photos.length ? 'lg:col-span-7 lg:pl-6 space-y-6' : 'lg:col-span-10 space-y-6'}>
              <span className="text-secondary-fixed text-caption uppercase tracking-[0.2em] font-bold">Meet the maker</span>
              <h2 className="font-headline-lg text-4xl lg:text-5xl text-white">{story.maker.name}, {story.maker.place}</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                {story.maker.paragraphs.map((t, i) => <p key={i}><Rich text={t} catalog={catalog} linkClass="font-semibold text-white underline decoration-secondary-container underline-offset-4" /></p>)}
              </div>
              <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {story.maker.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs uppercase tracking-widest text-secondary-container">{f.label}</dt>
                    <dd className="font-headline-sm text-xl sm:text-2xl text-white">{f.value}</dd>
                  </div>
                ))}
              </dl>
              {story.maker.products.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs uppercase text-white/50 tracking-wider block mb-3">{story.maker.productsLabel ?? `From ${story.maker.name}`}</span>
                  <div className="flex flex-wrap gap-3">
                    {story.maker.products.map((sp) => {
                      const live = catalog.get(sp.id);
                      return (
                        <a key={sp.id} href={live ? `/product/${live.id}` : '/shop'} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded px-4 py-2.5 flex items-center gap-3 transition-colors">
                          <Icon name="workspace_premium" className="text-secondary-container" />
                          <span className="text-xs font-semibold">{sp.name}{live ? <span className="text-secondary-container"> · {money(live.price)}</span> : <span className="text-white/50 font-normal italic"> · arriving soon</span>}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cook */}
      {story.cook && r && (
        <section id="cook" className="w-full bg-[#fbf9f9] py-16 lg:py-24 border-b border-border-line">
          <div className={wrap}>
            <SectionHead kicker={story.cook.eyebrow ?? 'Terroir kitchen'} title={story.cook.title ?? `Cook ${story.name}`} lede={story.cook.lede} />
            <article id={r.id} className="bg-white rounded border border-border-line p-6 sm:p-8 lg:p-12 shadow-sm mb-12 scroll-mt-24">
              {r.image && (
                <div className="w-full h-64 md:h-80 rounded overflow-hidden relative mb-8">
                  <img src={r.image} alt={r.title} className="size-full object-cover" loading="lazy" />
                  {r.imageCaption && (
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded text-white text-xs tracking-wider uppercase flex items-center gap-2">
                      <Icon name="restaurant" className="text-sm text-secondary-container" /> {r.imageCaption}
                    </div>
                  )}
                </div>
              )}
              <div className="border-b border-border-line pb-6 mb-8">
                <h3 className="font-headline-lg text-3xl lg:text-4xl text-on-surface mb-3">{r.title}</h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-ink-secondary uppercase tracking-wider font-semibold">
                  <span><strong>Serves:</strong> {r.serves}</span><span aria-hidden="true">·</span>
                  <span><strong>Time:</strong> {r.time}</span><span aria-hidden="true">·</span>
                  <span><strong>Origin:</strong> {r.from}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                <div className="lg:col-span-8">
                  <ol className="space-y-8">
                    {r.steps.map((s, i) => (
                      <li key={s.title} className="flex gap-6">
                        <span aria-hidden="true" className="font-headline-lg text-3xl text-primary font-bold w-6 shrink-0">{i + 1}</span>
                        <div>
                          <h4 className="font-headline-sm text-base text-on-surface font-bold mb-1">{s.title}</h4>
                          <p className="text-ink-secondary text-sm leading-relaxed">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="bg-primary text-white p-6 rounded mt-8">
                    <h5 className="text-xs uppercase font-bold tracking-widest text-secondary-container mb-2 flex items-center gap-2"><Icon name="stars" className="text-sm" /> The La Taglia touch</h5>
                    <p className="text-sm text-white/90 leading-relaxed"><Rich text={r.touch} catalog={catalog} linkClass="font-bold text-white underline decoration-secondary-container underline-offset-4" /></p>
                  </div>
                </div>
                <aside aria-label={`${r.title} shopping list`} className="lg:col-span-4 bg-surface-parchment p-6 rounded border border-border-line flex flex-col justify-between self-start">
                  <div>
                    <h4 className="font-headline-sm text-lg text-on-surface mb-4 pb-2 border-b border-border-line">Your basket</h4>
                    <ul className="space-y-2.5 text-sm text-ink-secondary">
                      {r.shoppingList.map((t) => (
                        <li key={t} className="flex items-start justify-between gap-3"><span><Rich text={t} catalog={catalog} /></span><Icon name="check" className="text-xs text-primary mt-1" /></li>
                      ))}
                    </ul>
                  </div>
                  {r.products.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-border-line space-y-3">
                      <span className="text-xs uppercase text-ink-tertiary block font-bold">Provisions in this recipe</span>
                      {r.products.map((sp) => {
                        const live = catalog.get(sp.id);
                        return (
                          <a key={sp.id} href={live ? `/product/${live.id}` : '/shop'} className="flex items-center justify-between gap-3 bg-white p-3 rounded border border-border-line text-xs hover:border-primary transition-colors">
                            <span>{sp.name} <span className="text-ink-tertiary">({sp.meta.split('·').pop()?.trim()})</span></span>
                            <span className={live ? 'font-bold text-primary' : 'italic text-ink-tertiary'}>{live ? money(live.price) : 'soon'}</span>
                          </a>
                        );
                      })}
                      {available(r.products).length > 0 && (
                        <button type="button" onClick={() => addMany(r.products)} className="w-full py-2.5 bg-primary hover:bg-wine-hover text-on-primary text-xs font-bold uppercase rounded tracking-wider transition-colors">Add recipe provisions</button>
                      )}
                    </div>
                  )}
                </aside>
              </div>
            </article>

            {story.cook.shortcut && (
              <div className="bg-white rounded border border-border-line p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
                {story.cook.shortcut.image && (
                  <div className="w-full md:w-64 h-44 rounded overflow-hidden shrink-0"><img src={story.cook.shortcut.image} alt={story.cook.shortcut.title} className="size-full object-cover" loading="lazy" /></div>
                )}
                <div className="max-w-2xl">
                  <span className="text-caption text-primary uppercase font-bold tracking-widest block mb-1">{story.cook.shortcut.eyebrow ?? 'The shortcut'}</span>
                  <h3 className="font-headline-sm text-2xl text-on-surface mb-2">{story.cook.shortcut.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed"><Rich text={story.cook.shortcut.body} catalog={catalog} /></p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-xs font-semibold text-ink-secondary block">{story.cook.shortcut.products.map((sp) => sp.name).join(' + ')}</span>
                    <span className="text-xs text-badge-ink font-bold">{story.cook.shortcut.products.length} provisions</span>
                  </div>
                  <button type="button" onClick={() => addMany(story.cook!.shortcut!.products)} disabled={!available(story.cook.shortcut.products).length}
                    className="px-5 py-3 bg-secondary-container hover:bg-gold-hover text-button-ink text-xs font-bold uppercase rounded tracking-wider transition-colors disabled:opacity-50 disabled:pointer-events-none">
                    {available(story.cook.shortcut.products).length ? story.cook.shortcut.button ?? 'Add the pair' : 'Arriving soon'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {story.readTheLabel && (
        <section className="w-full bg-surface-bright py-12 border-b border-border-line">
          <div className={wrap}>
            <div className="border border-border-line p-6 sm:p-8 rounded bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h4 className="md:w-1/4 font-headline-sm text-2xl text-on-surface font-bold">Read the label</h4>
              <p className="md:w-3/4 text-ink-secondary text-sm leading-relaxed">{story.readTheLabel}</p>
            </div>
          </div>
        </section>
      )}

      {/* Set */}
      <section id="set" className="w-full bg-[#EFA91C] py-16 lg:py-20 text-button-ink">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`}>
          <div className="lg:col-span-5 space-y-6">
            {story.set.eyebrow && <span className="text-xs uppercase tracking-widest text-on-secondary-fixed-variant font-bold">{story.set.eyebrow}</span>}
            <h2 className="font-headline-lg text-4xl lg:text-5xl leading-tight">{story.set.title}</h2>
            <p className="text-base leading-relaxed text-button-ink/90">{story.set.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button type="button" onClick={() => addMany(story.set.products)} disabled={!setItems.length}
                className="px-8 py-4 bg-button-ink hover:bg-black text-white text-xs font-bold uppercase rounded tracking-wider transition-colors shadow-md disabled:opacity-60 disabled:pointer-events-none">
                {setItems.length ? `${story.set.button} — ${money(setTotal)}` : `${story.set.button} · arriving soon`}
              </button>
              <a href="/shop" className="px-6 py-4 hover:bg-white/20 border border-button-ink text-button-ink text-xs font-bold uppercase rounded tracking-wider transition-colors text-center">Shop all {story.name} products</a>
            </div>
            {setItems.length > 0 && setItems.length < story.set.products.length && (
              <p className="text-xs text-button-ink/75">{setItems.length} of {story.set.products.length} items are in stock now; the rest are arriving soon.</p>
            )}
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {story.set.products.map((sp) => {
              const live = catalog.get(sp.id);
              return (
                <a key={sp.id} href={live ? `/product/${live.id}` : '/shop'} className="bg-white p-3 rounded shadow-sm flex flex-col justify-between text-center min-h-[150px] hover:shadow-md transition-shadow">
                  {sp.img || live?.img ? (
                    <div className="w-full h-20 rounded overflow-hidden mb-2 bg-surface-container"><img src={sp.img || live?.img} alt="" className="size-full object-cover" loading="lazy" /></div>
                  ) : (
                    <div className="w-full h-20 rounded mb-2 bg-surface-parchment flex items-center justify-center"><Icon name="inventory_2" className="text-2xl text-secondary-container" /></div>
                  )}
                  {sp.origin && <span className="text-[10px] text-primary uppercase font-bold tracking-wider">{sp.origin}</span>}
                  <p className="text-xs font-bold text-on-surface my-1">{sp.name}</p>
                  <span className="text-[11px] text-ink-tertiary">{live ? money(live.price) : sp.meta}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-14 text-ink-secondary text-xs leading-relaxed">
        <div className="max-w-[840px] mx-auto px-6 space-y-4">
          <h5 className="text-[11px] uppercase tracking-widest font-bold text-on-surface">About this story</h5>
          {story.about.map((t, i) => <p key={i}>{t}</p>)}
          <p className="text-ink-tertiary"><strong>Sources:</strong> {story.sources}</p>
        </div>
      </section>
    </Layout>
  );
}
