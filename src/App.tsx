import Layout from './components/Layout';
import {
  bestSellers,
  categories,
  giftBoxes,
  heroImg,
  pastaImg,
  pistachioHeroImg,
  products,
  promoCards,
} from './data';
import { allRegions, regionHref } from './regions';
import { useRegionImage } from './regions/regionPhotos';
import { posts } from './blog/posts';
import { PostCard } from './pages/Blog';

export default function App() {
  return (
    <Layout>
      <Hero />
      <PromoCards />
      <Categories />
      <PistachioBand />
      <ProductGrid />
      <PastaBand />
      <BestSellers />
      <GiftsBand />
      <RegionsGrid />
      <GiftBoxes />
      <FromTheBlog />
    </Layout>
  );
}

function Hero() {
  return (
    <section
      className="relative w-full h-[600px] lg:h-[660px] flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${heroImg}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="hero-translucent-card rounded p-8 sm:p-12 max-w-[620px] shadow-2xl border border-white/10 text-surface-parchment">
          <span className="font-label-caps text-xs tracking-[0.2em] text-secondary-container block mb-3 uppercase">
            Authentic Italian Providore
          </span>
          <h1 className="font-headline-lg text-4xl sm:text-[52px] sm:leading-[1.12] text-white font-normal mb-5 tracking-tight">
            Exceptional foods, discovered in Italy
          </h1>
          <p className="font-subheading text-surface-parchment text-base sm:text-[17px] leading-relaxed mb-8 opacity-95">
            From Bronte pistachios to twelve-year traditional balsamic, we find remarkable foods made by Italy's finest producers, so you never have to sort through hundreds of ordinary ones.
          </p>
          <a
            className="inline-block bg-[#EFA91C] hover:bg-gold-hover text-button-ink font-button text-[14px] sm:text-[15px] font-bold tracking-[0.06em] py-3.5 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 uppercase"
            href="#shop"
          >
            SHOP THE COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}

function PromoCards() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 -mt-10 relative z-20 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {promoCards.map((c) => (
          <a key={c.title} href={c.href} className="group flex flex-col justify-between p-6 bg-surface-container-lowest border border-border-line rounded shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-full bg-surface-parchment flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-xl">{c.icon}</span>
              </div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed mb-4">{c.body}</p>
            </div>
            <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              {c.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const item = (c: (typeof categories)[number], copy = false) => (
    <a key={`${copy ? 'b' : 'a'}-${c.label}`} href={c.href} tabIndex={copy ? -1 : undefined} className="flex flex-col items-center min-w-[80px] group md:flex-1">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 border-2 border-transparent group-hover:border-secondary transition-all">
        <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${c.img}')` }} />
      </div>
      <span className="mt-3 font-headline-sm text-xs sm:text-sm tracking-wider uppercase text-on-surface group-hover:text-primary text-center">{c.label}</span>
    </a>
  );
  return (
    <section className="max-w-[1280px] mx-auto md:px-6 lg:px-12 py-8 mb-16 border-y border-border-line">
      {/* Phones: the categories slide right to left on their own (same strip as Shop by region). */}
      <div className="md:hidden marquee overflow-hidden" style={{ ['--marquee-duration' as string]: `${categories.length * 4}s` }}>
        <div className="marquee-track flex w-max">
          <div className="flex gap-6 pr-6">{categories.map((c) => item(c))}</div>
          <div className="flex gap-6 pr-6" aria-hidden="true">{categories.map((c) => item(c, true))}</div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between gap-6 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((c) => item(c))}
      </div>
    </section>
  );
}

function PistachioBand() {
  return (
    <section id="pistachio" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-20">
      <div className="b-pist rounded text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#FEB62C] uppercase mb-3">FEATURED DISCOVERY · SICILIA</span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl leading-tight mb-4 text-white">The green gold of Bronte</h2>
          <p className="font-body-lg text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            On the western slopes of Mount Etna, in black volcanic soil, grow the pistachios Sicilians call <span className="italic">oro verde</span>. Smaller, greener and harvested in limited quantities.
          </p>
          <a className="inline-block self-start bg-[#FEB62C] hover:bg-[#D8950C] text-[#241800] font-button text-sm sm:text-base font-bold tracking-wider py-3.5 px-8 rounded-full shadow-md uppercase transition-transform hover:-translate-y-0.5" href="#shop">
            SHOP THE WORLD’S GREATEST PISTACHIO
          </a>
        </div>
        <div className="lg:col-span-5 relative flex items-center justify-center p-8 bg-black/10 h-full min-h-[340px]">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <img className="w-full h-full object-cover rounded shadow-2xl border-4 border-white/20" src={pistachioHeroImg} alt="Gusto Etna 35% Sicilian Pistachio Cream" />
            <div className="absolute -top-3 -right-3 bg-secondary-container text-button-ink font-bold text-xs uppercase px-3 py-1.5 rounded shadow tracking-widest">
              35% Bronte DOP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="shop" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface uppercase tracking-wide mb-3">DISCOVERED THIS MONTH</h2>
        <p className="font-subheading text-ink-secondary text-base sm:text-lg">A small number of things we think are exceptional, and why.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-surface-container-lowest border border-border-line rounded p-2.5 sm:p-4 flex flex-col justify-between hover:shadow-lg transition-shadow relative group">
            {p.badge && (
              <span className={`absolute top-4 left-4 sm:top-6 sm:left-6 z-10 max-w-[calc(100%-2rem)] truncate text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${p.badge.className}`}>
                {p.badge.label}
              </span>
            )}
            <div className="aspect-square w-full rounded overflow-hidden mb-3 sm:mb-4 bg-surface-soft">
              {p.href ? <a href={p.href}><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={p.img} alt={p.name} /></a> : <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={p.img} alt={p.name} />}
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-ink-tertiary uppercase tracking-wider block mb-1 truncate">{p.vendor}</span>
              <h3 className="font-headline-sm text-sm sm:text-base text-on-surface mb-1 line-clamp-2">{p.href ? <a href={p.href} className="hover:underline">{p.name}</a> : p.name}</h3>
              <p className="text-primary font-bold text-base mt-2">{p.price}</p>
            </div>
            <button className="mt-3 sm:mt-4 w-full py-2 bg-surface-container hover:bg-primary hover:text-white text-on-surface font-button-sm text-xs uppercase tracking-wider rounded transition-colors">
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PastaBand() {
  return (
    <section id="pasta" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="b-wine rounded text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary-container uppercase mb-3">CENTURIES OF TRADITION · CAMPANIA</span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl leading-tight mb-4 text-white">Pasta from Torre Annunziata</h2>
          <p className="font-body-lg text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Organic durum wheat, drawn through bronze dies in the historic pasta town near Naples and slow-dried for up to 48 hours. Rough, porous and made to hold every sauce.
          </p>
          <a className="inline-block self-start bg-[#EFA91C] hover:bg-gold-hover text-[#241800] font-button text-sm sm:text-base font-bold tracking-wider py-3.5 px-8 rounded-full shadow-md uppercase transition-transform hover:-translate-y-0.5" href="#shop">
            SHOP ARTISANAL PASTA
          </a>
        </div>
        <div className="lg:col-span-5 h-full min-h-[340px] relative bg-cover bg-center" style={{ backgroundImage: `url('${pastaImg}')` }}>
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section id="bestsellers" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface uppercase tracking-wide mb-3">BEST SELLERS</h2>
        <p className="font-subheading text-ink-secondary text-base sm:text-lg">Find your new favorites among ours, from pantry staples to gifts.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
        {bestSellers.map((b) => (
          <div key={b.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-2.5 sm:p-4 bg-surface-container-lowest border border-border-line rounded hover:shadow-md transition-shadow relative">
            {b.badge && (
              <span className={`absolute top-4 left-4 sm:left-auto sm:top-2 sm:right-2 z-10 max-w-[calc(100%-2rem)] truncate text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${b.badge.className}`}>
                {b.badge.label}
              </span>
            )}
            <div className="w-full aspect-square sm:w-24 sm:h-24 sm:aspect-auto rounded bg-surface-soft flex-shrink-0 overflow-hidden">
              <img className="w-full h-full object-cover" src={b.img} alt={b.name} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] sm:text-xs text-secondary font-bold uppercase tracking-wide truncate">{b.region}</span>
              <h4 className="font-headline-sm text-sm sm:text-base line-clamp-2 sm:truncate">{b.name}</h4>
              <p className="text-ink-secondary text-sm font-semibold mt-1">{b.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-button text-sm font-bold tracking-wider py-3 px-8 rounded-full transition-colors uppercase" href="#shop">
          SHOP ALL BEST SELLERS
        </a>
      </div>
    </section>
  );
}

function GiftsBand() {
  return (
    <section id="gifts" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="b-blue rounded text-white overflow-hidden shadow-xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-[#FEB62C] uppercase mb-2 block">CURATED GIFT BOXES</span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-white mb-4">Gifts from Italy</h2>
          <p className="font-body-lg text-white/90 text-base sm:text-lg leading-relaxed">
            Curation you can give. Each collection brings several producers from one region into a single box, with a note and the stories behind the food.
          </p>
        </div>
        <a className="flex-shrink-0 inline-block bg-[#FEB62C] hover:bg-gold-hover text-button-ink font-button text-sm sm:text-base font-bold tracking-wider py-4 px-8 rounded-full shadow-lg uppercase transition-transform hover:-translate-y-0.5" href="#gift-boxes">
          SHOP GIFT BOXES
        </a>
      </div>
    </section>
  );
}

function RegionsGrid() {
  const regionImg = useRegionImage();
  const card = (r: (typeof allRegions)[number], copy: boolean) => {
    const href = regionHref(r.name);
    const Tag = href ? 'a' : 'div';
    return (
      <Tag key={`${copy ? 'b' : 'a'}-${r.name}`} href={href ?? undefined} tabIndex={copy ? -1 : undefined}
        className="group relative shrink-0 w-60 sm:w-72 rounded overflow-hidden aspect-[4/5] bg-surface-container shadow hover:shadow-xl transition-shadow block">
        <div
          className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${href ? 'group-hover:scale-105' : 'grayscale opacity-70'}`}
          style={{ backgroundImage: `url('${regionImg(r)}')` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${href ? 'from-black/85 via-black/30' : 'from-black/90 via-black/50'} to-transparent flex flex-col justify-end p-6 text-white`}>
          {!href && <span className="inline-block bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded w-max mb-2">ARRIVING SOON</span>}
          <h3 className="font-headline-sm text-2xl text-white mb-1">{r.name}</h3>
          <p className="text-xs text-white/80 line-clamp-2">{r.blurb}</p>
        </div>
      </Tag>
    );
  };
  return (
    <section id="regions" className="mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface uppercase tracking-wide mb-3">SHOP BY REGION</h2>
        <p className="font-subheading text-ink-secondary text-base sm:text-lg">Italian food is regional before it is Italian. Enter through a place and discover what it makes best.</p>
      </div>
      {/* All regions, sliding right to left; hover to pause. */}
      <div className="marquee overflow-hidden" style={{ ['--marquee-duration' as string]: `${allRegions.length * 5}s` }}>
        <div className="marquee-track flex w-max">
          <div className="flex gap-6 pr-6">{allRegions.map((r) => card(r, false))}</div>
          <div className="flex gap-6 pr-6" aria-hidden="true">{allRegions.map((r) => card(r, true))}</div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href="/regions" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-wine-hover text-on-primary text-sm font-bold transition-colors">
          See all {allRegions.length} regions <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}

function GiftBoxes() {
  return (
    <section id="gift-boxes" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface uppercase tracking-wide mb-3">CURATED GIFT BOXES</h2>
        <p className="font-subheading text-ink-secondary text-base sm:text-lg">Unbox the authentic flavors and traditions of regional Italy.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {giftBoxes.map((g) => (
          <div key={g.name} className="bg-surface-container-lowest border border-border-line rounded overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover" src={g.img} alt={g.name} />
              <span className="absolute top-4 right-4 bg-primary text-white font-bold text-xs px-2.5 py-1 rounded">{g.region}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-sm text-xl text-on-surface">{g.name}</h3>
                  <span className="font-bold text-lg text-primary">{g.price}</span>
                </div>
                <p className="text-xs text-ink-secondary mb-4">{g.tagline}</p>
                <ul className="text-xs text-ink-secondary space-y-1.5 border-t border-border-line pt-3 mb-6">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-pistachio-light">check_circle</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-[#EFA91C] hover:bg-gold-hover text-button-ink font-button text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors">
                Select Box
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FromTheBlog() {
  return (
    <section id="blog" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface uppercase tracking-wide mb-3">FROM THE BLOG</h2>
        <p className="font-subheading text-ink-secondary text-base sm:text-lg">How Italy’s great foods are made, how to read their labels, and how to cook with them.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((p) => <PostCard key={p.slug} p={p} />)}
      </div>
      <div className="text-center mt-10">
        <a href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-wine-hover text-on-primary text-sm font-bold transition-colors">
          Read the blog <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
