import { Fragment, useEffect, type ReactNode } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { addProduct, useBasket } from '../cartStore';
import { useCatalog } from '../storeApi';
import type { Product } from '../shared/types';
import type { RegionStory as Story, StoryProduct } from '../regions/types';

const label = 'font-label-caps text-label-caps uppercase tracking-widest';
const wrap = 'max-w-[1320px] mx-auto px-6 lg:px-12';
const money = (n: number) => `$${n.toFixed(2)}`;

type Catalog = Map<string, Product>;

// [label](product:id) · [label](#anchor) · [label](/path) · **bold**
function Rich({ text, catalog, linkClass = 'font-semibold text-primary underline decoration-secondary-container decoration-2 underline-offset-4 hover:text-wine-hover' }: { text: string; catalog: Catalog; linkClass?: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[3]) parts.push(<strong key={m.index} className="font-bold text-on-surface">{m[3]}</strong>);
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

function Tile({ sp, catalog, dark }: { sp: StoryProduct; catalog: Catalog; dark?: boolean }) {
  const live = catalog.get(sp.id);
  return (
    <a
      href={live ? `/product/${live.id}` : '/shop'}
      className={`group flex items-center gap-3 rounded-xl p-2.5 pr-4 transition-all ${dark ? 'bg-white/[0.06] hover:bg-white/10 ring-1 ring-white/10' : 'bg-surface-container-lowest shadow-sm hover:shadow-md'}`}
    >
      <span className="size-16 shrink-0 rounded-lg bg-white overflow-hidden p-1">
        <img src={sp.img} alt="" loading="lazy" width={64} height={64} className="size-full object-contain transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm font-bold leading-snug group-hover:underline underline-offset-4 ${dark ? 'text-white' : 'text-on-surface'}`}>{sp.name}</span>
        <span className={`block text-xs mt-0.5 ${dark ? 'text-white/60' : 'text-ink-tertiary'}`}>
          {sp.meta}
          {live ? <> · <b className={dark ? 'text-secondary-container' : 'text-primary'}>{money(live.price)}</b></> : <> · <span className="italic">arriving soon</span></>}
        </span>
      </span>
    </a>
  );
}

function SectionHead({ title, lede, dark }: { title: string; lede?: string; dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-3 lg:gap-10 mb-10 lg:mb-12 items-baseline">
      <h2 className={`font-headline-lg text-[34px] leading-[40px] sm:text-[42px] sm:leading-[48px] tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {lede && <p className={`text-lg max-w-2xl ${dark ? 'text-white/70' : 'text-ink-secondary'}`}>{lede}</p>}
    </div>
  );
}

// Maiolica tile in the site's palette: wine rings, gold petals, pistachio leaves on parchment.
function Maiolica() {
  return (
    <svg viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice" className="size-full block" aria-hidden="true">
      <defs>
        <pattern id="maiolica" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="#FBF6EC" />
          <g fill="#6E1626"><circle cx="0" cy="0" r="26" /><circle cx="100" cy="0" r="26" /><circle cx="0" cy="100" r="26" /><circle cx="100" cy="100" r="26" /></g>
          <g fill="#FBF6EC"><circle cx="0" cy="0" r="14" /><circle cx="100" cy="0" r="14" /><circle cx="0" cy="100" r="14" /><circle cx="100" cy="100" r="14" /></g>
          <g fill="#FEB62C"><ellipse cx="50" cy="31" rx="9" ry="17" /><ellipse cx="50" cy="69" rx="9" ry="17" /><ellipse cx="31" cy="50" rx="17" ry="9" /><ellipse cx="69" cy="50" rx="17" ry="9" /></g>
          <g fill="#86A33E">
            <ellipse cx="30" cy="30" rx="4" ry="10" transform="rotate(-45 30 30)" /><ellipse cx="70" cy="30" rx="4" ry="10" transform="rotate(45 70 30)" />
            <ellipse cx="30" cy="70" rx="4" ry="10" transform="rotate(45 30 70)" /><ellipse cx="70" cy="70" rx="4" ry="10" transform="rotate(-45 70 70)" />
          </g>
          <circle cx="50" cy="50" r="8" fill="#D62F3A" /><circle cx="50" cy="50" r="3" fill="#FBF6EC" />
          <path d="M0 50h6M94 50h6M50 0v6M50 94v6" stroke="#6E1626" strokeWidth="2" />
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
      graph.push({
        '@type': 'Recipe', name: r.title, recipeCuisine: story.name, recipeCategory: 'Main course', recipeYield: r.schema.yield,
        prepTime: r.schema.prepTime, cookTime: r.schema.cookTime, totalTime: r.schema.totalTime, recipeIngredient: r.schema.ingredients,
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
  const setAvailable = story.set.products.map((sp) => catalog.get(sp.id)).filter((p): p is Product => !!p && p.stock > 0);

  function addSet() {
    if (!setAvailable.length) return;
    setBasket((b) => setAvailable.reduce((acc, p) => addProduct(acc, p), b));
    const missing = story.set.products.length - setAvailable.length;
    toast.show(`${setAvailable.length} ${setAvailable.length === 1 ? 'item' : 'items'} added to your basket${missing ? ` (${missing} arriving soon)` : ''}`);
  }

  const r = story.cook?.recipe;

  return (
    <Layout>
      <Toast message={toast.message} />

      <div className="w-full bg-surface-container-low px-6 lg:px-12 py-3.5">
        <nav aria-label="Breadcrumb" className="max-w-[1320px] mx-auto flex flex-wrap items-center gap-2 text-sm text-ink-secondary">
          <a className="hover:text-primary transition-colors" href="/">Home</a>
          <span className="text-ink-tertiary">/</span>
          <a className="hover:text-primary transition-colors" href="/regions">Italy, region by region</a>
          <span className="text-ink-tertiary">/</span>
          <span className="text-on-surface font-semibold">{story.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="relative bg-primary text-on-primary overflow-hidden">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] lg:min-h-[34rem]">
          <div className="order-2 lg:order-1 px-6 lg:px-12 py-12 lg:py-16 flex flex-col justify-end">
            <p className={`${label} text-secondary-container mb-4`}>{story.kicker}</p>
            <h1 className="font-display-hero italic font-normal text-[76px] leading-[0.9] sm:text-[112px] lg:text-[148px] tracking-tight text-white">{story.name}</h1>
            <p className="font-headline-sm text-xl sm:text-2xl leading-snug text-white/85 max-w-md mt-6">{story.subtitle}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#pantry" className="px-6 py-3 rounded-full bg-secondary-container text-button-ink text-sm font-bold uppercase tracking-wider hover:bg-gold-hover transition-colors">The pantry</a>
              {r && <a href={`#${r.id}`} className="px-6 py-3 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">Cook {r.title}</a>}
            </div>
          </div>
          <div className="order-1 lg:order-2 h-36 sm:h-48 lg:h-auto motion-safe:animate-[settle_1.4s_cubic-bezier(.2,.7,.2,1)_both]">
            <Maiolica />
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${wrap} pt-14 lg:pt-20 pb-6`}>
        <div className="max-w-[44rem] space-y-5 text-lg leading-relaxed text-ink-secondary">
          {story.intro.map((t, i) => (
            <p key={i} className={i === 0 ? 'font-headline-sm text-[22px] leading-[1.55] text-on-surface first-letter:font-headline-lg first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] first-letter:text-primary' : ''}>{t}</p>
          ))}
        </div>
      </section>

      {/* Pantry */}
      <section id="pantry" className={`${wrap} py-14 lg:py-20 scroll-mt-20`}>
        <SectionHead title="The pantry" lede={story.pantry.lede} />
        <div className="border-t-2 border-primary">
          {story.pantry.items.map((item) => (
            <article key={item.title} className="grid grid-cols-1 lg:grid-cols-[18rem_1fr_20rem] gap-5 lg:gap-10 py-9 border-b border-border-line">
              <h3 className="font-headline-md text-[30px] leading-tight text-primary">
                {item.title}
                <span className="block font-body-md text-sm text-ink-tertiary mt-2">{item.place}</span>
              </h3>
              <div className="max-w-[40rem]">
                <p className="text-ink-secondary leading-relaxed">{item.body}</p>
                <p className="mt-4 rounded-r-lg border-l-4 border-secondary-container bg-surface-parchment px-4 py-2.5 text-sm text-on-surface">
                  <b className="font-bold">Look for:</b> {item.lookFor}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className={`${label} text-[11px] text-ink-tertiary`}>{item.shelfLabel ?? 'In the pantry'}</p>
                {item.products.map((sp) => <Tile key={sp.id} sp={sp} catalog={catalog} />)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dishes */}
      <section id="dishes" className="bg-surface-parchment py-14 lg:py-20">
        <div className={wrap}>
          <SectionHead title="At the table" lede={story.dishes.lede} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {story.dishes.items.map((d) => (
              <div key={d.title} className="rounded-xl bg-surface-container-lowest p-7 shadow-sm">
                <h3 className="font-headline-md text-[28px] leading-tight text-on-surface">{d.title}</h3>
                <p className={`${label} text-xs text-status-red mt-2 mb-4`}>{d.where}</p>
                <p className="text-ink-secondary leading-relaxed mb-4">{d.body}</p>
                <p className="text-sm text-ink-secondary border-t border-border-line pt-4"><Rich text={d.tip} catalog={catalog} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maker */}
      {story.maker && (
        <section id="maker" className="bg-wine-dark text-white py-14 lg:py-20 scroll-mt-20">
          <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start`}>
            <div className="grid grid-cols-2 gap-3">
              {story.maker.photos.map((ph, i) => (
                <img key={ph.src} src={ph.src} alt={ph.alt} loading="lazy" className={`w-full rounded-xl bg-white object-contain p-4 ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`} />
              ))}
            </div>
            <div>
              <p className={`${label} text-secondary-container mb-3`}>Meet the maker</p>
              <h2 className="font-headline-lg text-[36px] leading-tight sm:text-[44px] text-white mb-6">{story.maker.name}, {story.maker.place}</h2>
              <div className="space-y-4 text-white/75 leading-relaxed max-w-[40rem]">
                {story.maker.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 py-5 border-y border-white/15">
                {story.maker.facts.map((f) => (
                  <div key={f.label}>
                    <dt className={`${label} text-[11px] text-white/50`}>{f.label}</dt>
                    <dd className="font-headline-sm text-xl text-white mt-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${label} text-[11px] text-white/50 mb-3`}>From {story.maker.name}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {story.maker.products.map((sp) => <Tile key={sp.id} sp={sp} catalog={catalog} dark />)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cook */}
      {story.cook && r && (
        <section id="cook" className={`${wrap} py-14 lg:py-20`}>
          <SectionHead title={`Cook ${story.name}`} lede={story.cook.lede} />
          <article id={r.id} className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-10 lg:gap-16 scroll-mt-24">
            <div>
              <h3 className="font-headline-lg text-[36px] leading-tight sm:text-[46px] text-primary">{r.title}</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-secondary mt-3 mb-8">
                <li><b className="text-on-surface">Serves</b> {r.serves}</li>
                <li><b className="text-on-surface">Time</b> {r.time}</li>
                <li><b className="text-on-surface">From</b> {r.from}</li>
              </ul>
              <ol className="border-t border-border-line">
                {r.steps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[3.25rem_1fr] py-5 border-b border-border-line">
                    <span aria-hidden="true" className="font-headline-lg text-4xl leading-none text-primary">{i + 1}</span>
                    <div>
                      <strong className="block font-bold text-on-surface mb-1">{s.title}</strong>
                      <p className="text-ink-secondary leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-xl bg-primary text-white p-6 sm:p-7">
                <h4 className="font-headline-sm italic text-2xl mb-2">The La Taglia touch</h4>
                <p className="text-white/85 leading-relaxed max-w-[40rem]">
                  <Rich text={r.touch} catalog={catalog} linkClass="font-semibold text-white underline decoration-secondary-container decoration-2 underline-offset-4" />
                </p>
              </div>
            </div>
            <aside aria-label={`${r.title} shopping list`} className="rounded-xl bg-surface-parchment p-6 self-start lg:sticky lg:top-24">
              <h4 className="font-headline-sm text-2xl text-on-surface mb-4">Your basket</h4>
              <ul className="text-sm text-ink-secondary mb-5">
                {r.shoppingList.map((t) => <li key={t} className="py-2 border-b border-dotted border-outline-variant"><Rich text={t} catalog={catalog} /></li>)}
              </ul>
              <div className="flex flex-col gap-3">
                {r.products.map((sp) => <Tile key={sp.id} sp={sp} catalog={catalog} />)}
              </div>
            </aside>
          </article>

          {story.cook.shortcut && (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-8 lg:gap-16 rounded-xl bg-surface-container-low p-6 sm:p-8">
              <div>
                <p className={`${label} text-xs text-primary mb-2`}>The shortcut</p>
                <h3 className="font-headline-md text-[30px] leading-tight text-on-surface mb-3">{story.cook.shortcut.title}</h3>
                <p className="text-ink-secondary leading-relaxed max-w-[40rem]">{story.cook.shortcut.body}</p>
              </div>
              <div className="flex flex-col gap-3">
                {story.cook.shortcut.products.map((sp) => <Tile key={sp.id} sp={sp} catalog={catalog} />)}
              </div>
            </div>
          )}
        </section>
      )}

      {story.readTheLabel && (
        <section className={`${wrap} pb-14 lg:pb-20`}>
          <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-3 lg:gap-10 border-t-2 border-primary pt-8">
            <h3 className="font-headline-md text-[28px] text-primary">Read the label</h3>
            <p className="text-ink-secondary leading-relaxed max-w-[44rem]">{story.readTheLabel}</p>
          </div>
        </section>
      )}

      {/* Set */}
      <section id="set" className="bg-secondary-container text-button-ink py-14 lg:py-20">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start`}>
          <div>
            <h2 className="font-headline-lg text-[36px] leading-tight sm:text-[46px] text-primary mb-4">{story.set.title}</h2>
            <p className="text-lg leading-relaxed text-button-ink/85 max-w-xl">{story.set.body}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7">
              <button type="button" onClick={addSet} disabled={!setAvailable.length}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-on-primary shadow-md hover:bg-wine-hover transition-colors disabled:opacity-60 disabled:pointer-events-none">
                <span aria-hidden="true" className="material-symbols-outlined text-lg">shopping_bag</span>
                {story.set.button}
              </button>
              <a href="/shop" className="font-bold text-primary underline underline-offset-4">Shop all {story.name} products</a>
            </div>
            {!setAvailable.length && <p className="mt-3 text-sm text-button-ink/70">This set is arriving soon.</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {story.set.products.map((sp) => <Tile key={sp.id} sp={sp} catalog={catalog} />)}
          </div>
        </div>
      </section>

      <footer className={`${wrap} py-12 text-sm text-ink-tertiary`}>
        <div className="max-w-3xl space-y-3">
          <h4 className="font-bold text-on-surface">About this story</h4>
          {story.about.map((t, i) => <p key={i}>{t}</p>)}
          <p><span className="font-semibold text-ink-secondary">Sources:</span> {story.sources}</p>
        </div>
      </footer>
    </Layout>
  );
}
