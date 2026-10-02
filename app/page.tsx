import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";
import ProductCard from "./components/ProductCard";
import InsiderSignup from "./components/InsiderSignup";
import {
  promoCards,
  categoryCircles,
  discoveredProducts,
  bestSellers,
  regions,
  giftBoxes,
  makers,
  stories,
  heroImage,
  pistachioJar,
  pastaFactory,
} from "./lib/homepage-data";

const promoIconMap: Record<(typeof promoCards)[number]["icon"], React.ReactNode> =
  {
    sparkle: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    gift: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    hourglass: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h12M6 22h12M6 2v6a6 6 0 0 0 12 0V2M6 22v-6a6 6 0 0 1 12 0v6" />
      </svg>
    ),
    building: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  };

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO */}
        <section
          className="relative w-full h-[600px] lg:h-[660px] flex items-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 relative z-10">
            <div className="hero-card hero-animate rounded p-8 sm:p-12 max-w-[620px] shadow-2xl border border-white/10 text-parchment">
              <span className="text-xs tracking-[0.2em] text-amber block mb-3 uppercase font-bold">
                Authentic Italian Providore
              </span>
              <h1 className="hero-animate hero-animate-delay-1 font-serif text-4xl sm:text-[52px] sm:leading-[1.12] text-white font-normal mb-5 tracking-tight">
                Exceptional foods, discovered in Italy
              </h1>
              <p className="hero-animate hero-animate-delay-2 text-parchment text-base sm:text-[17px] leading-relaxed mb-8 opacity-95">
                From Bronte pistachios to twelve-year traditional balsamic, we
                find remarkable foods made by Italy&apos;s finest producers, so
                you never have to sort through hundreds of ordinary ones.
              </p>
              <a
                href="#shop"
                className="hero-animate hero-animate-delay-3 inline-block bg-gold hover:bg-gold-hover text-button-ink text-[14px] sm:text-[15px] font-bold tracking-[0.06em] py-3.5 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 uppercase"
              >
                Shop the collection
              </a>
            </div>
          </div>
        </section>

        {/* 2. PROMO CARDS */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-12 -mt-10 relative z-20 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promoCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex flex-col justify-between p-6 bg-white border border-border-line rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center text-primary mb-4">
                    {promoIconMap[card.icon]}
                  </div>
                  <h3 className="font-serif text-lg text-ink mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-4">
                    {card.body}
                  </p>
                </div>
                <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {card.cta} <Arrow />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 3. CATEGORY CIRCLES */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 mb-16 border-y border-border-line">
          <div className="flex items-center justify-between gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {categoryCircles.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col items-center min-w-[80px] group flex-1"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 border-2 border-transparent group-hover:border-amber transition-all">
                  <div
                    className="w-full h-full rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${c.img}')` }}
                  />
                </div>
                <span className="mt-3 font-serif text-xs sm:text-sm tracking-wider uppercase text-ink group-hover:text-primary text-center">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 4. PISTACHIO FEATURE BAND */}
        <section id="pistachio" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-20">
          <AnimateIn>
            <div className="b-pist rounded text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.2em] text-amber uppercase mb-3">
                  FEATURED DISCOVERY · SICILIA
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl leading-tight mb-4 text-white">
                  The green gold of Bronte
                </h2>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  On the western slopes of Mount Etna, in black volcanic soil,
                  grow the pistachios Sicilians call{" "}
                  <span className="italic font-serif">oro verde</span>. Smaller,
                  greener and harvested in limited quantities. We built an
                  entire edit around them.
                </p>
                <a
                  href="#shop"
                  className="inline-block self-start bg-amber hover:bg-gold-hover text-button-ink text-sm sm:text-base font-bold tracking-wider py-3.5 px-8 rounded-full shadow-md uppercase transition-transform hover:-translate-y-0.5"
                >
                  Shop the pistachio edit
                </a>
              </div>
              <div className="lg:col-span-5 relative flex items-center justify-center p-8 bg-black/10 h-full min-h-[340px]">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pistachioJar}
                    alt="Gusto Etna 35% Sicilian Pistachio Cream on volcanic basalt"
                    className="w-full h-full object-cover rounded shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute -top-3 -right-3 bg-amber text-button-ink font-bold text-xs uppercase px-3 py-1.5 rounded shadow tracking-widest">
                    35% Bronte DOP
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* 5. DISCOVERED THIS MONTH */}
        <section id="shop" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Discovered this month
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              A small number of things we think are exceptional, and why.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {discoveredProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* 6. PASTA FEATURE BAND */}
        <section id="pasta" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <AnimateIn>
            <div className="b-wine rounded text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.2em] text-amber uppercase mb-3">
                  CENTURIES OF TRADITION · CAMPANIA
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl leading-tight mb-4 text-white">
                  Pasta from Torre Annunziata
                </h2>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  Organic durum wheat, drawn through bronze dies in the historic
                  pasta town near Naples and slow-dried for up to 48 hours.
                  Rough, porous and made to hold every sauce.
                </p>
                <a
                  href="#shop"
                  className="inline-block self-start bg-gold hover:bg-gold-hover text-button-ink text-sm sm:text-base font-bold tracking-wider py-3.5 px-8 rounded-full shadow-md uppercase transition-transform hover:-translate-y-0.5"
                >
                  Shop artisanal pasta
                </a>
              </div>
              <div
                className="lg:col-span-5 h-full min-h-[340px] relative bg-cover bg-center"
                style={{ backgroundImage: `url('${pastaFactory}')` }}
              >
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* 7. BEST SELLERS */}
        <section id="bestsellers" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Best sellers
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              Find your new favorites among ours, from pantry staples to gifts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bestSellers.map((b) => (
              <div
                key={b.name}
                className="relative flex items-center gap-4 p-4 bg-white border border-border-line rounded hover:shadow-md transition-shadow"
              >
                {b.badge && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    {b.badge}
                  </span>
                )}
                <div className="w-24 h-24 rounded bg-surface-soft flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-[#7f5700] font-bold uppercase tracking-wide">
                    {b.region}
                  </span>
                  <h4 className="font-serif text-base truncate">{b.name}</h4>
                  <p className="text-ink-secondary text-sm font-semibold mt-1">
                    {b.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#shop"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold tracking-wider py-3 px-8 rounded-full transition-colors uppercase"
            >
              Shop all best sellers
            </a>
          </div>
        </section>

        {/* 8. GIFTS BAND */}
        <section id="gifts" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="bg-coastal rounded text-white overflow-hidden shadow-xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-amber uppercase mb-2 block">
                CURATED GIFT BOXES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                Gifts from Italy
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                Curation you can give. Each collection brings several producers
                from one region into a single box, with a note and the stories
                behind the food.
              </p>
            </div>
            <a
              href="#gift-boxes"
              className="flex-shrink-0 inline-block bg-amber hover:bg-gold-hover text-button-ink text-sm sm:text-base font-bold tracking-wider py-4 px-8 rounded-full shadow-lg uppercase transition-transform hover:-translate-y-0.5"
            >
              Shop gift boxes
            </a>
          </div>
        </section>

        {/* 9. REGIONS */}
        <section id="regions" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Shop by region
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              Italian food is regional before it is Italian. Enter through a
              place and discover what it makes best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regions.map((r) => {
              const Wrap: React.ElementType = r.comingSoon ? "div" : "a";
              return (
                <Wrap
                  key={r.name}
                  {...(r.comingSoon ? {} : { href: "#shop" })}
                  className="group relative rounded overflow-hidden aspect-[4/5] bg-[#f0eded] shadow hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ${
                      r.comingSoon ? "grayscale opacity-70" : ""
                    }`}
                    style={{ backgroundImage: `url('${r.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                    {r.comingSoon && (
                      <span className="inline-block bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded w-max mb-2">
                        Arriving soon
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-white mb-1">{r.name}</h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      {r.tagline}
                    </p>
                  </div>
                </Wrap>
              );
            })}
          </div>
        </section>

        {/* 10. GIFT BOXES */}
        <section id="gift-boxes" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Curated gift boxes
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              Unbox the authentic flavors and traditions of regional Italy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftBoxes.map((box) => (
              <div
                key={box.name}
                className="bg-white border border-border-line rounded overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={box.img} alt={box.name} className="w-full h-full object-cover" />
                  <span className="absolute top-4 right-4 bg-primary text-white font-bold text-xs px-2.5 py-1 rounded">
                    {box.region}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl text-ink">{box.name}</h3>
                      <span className="font-bold text-lg text-primary">
                        {box.price}
                      </span>
                    </div>
                    <p className="text-xs text-ink-secondary mb-4">{box.blurb}</p>
                    <ul className="text-xs text-ink-secondary space-y-1.5 border-t border-border-line pt-3 mb-6">
                      {box.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg
                            className="w-3.5 h-3.5 mt-0.5 text-pistachio flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.1 14.1L6.7 11.9l1.4-1.4 2.8 2.8 5.7-5.7 1.4 1.4z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gold hover:bg-gold-hover text-button-ink text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors">
                    Select box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. MEET THE MAKERS */}
        <section id="makers" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Meet the makers
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              The producer&apos;s name stays on every label. Ours only vouches
              for it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {makers.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-border-line rounded overflow-hidden"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url('${m.img}')` }}
                />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7f5700]">
                    {m.location}
                  </span>
                  <h3 className="font-serif text-xl text-ink mt-1 mb-3">
                    {m.name}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    {m.story}
                  </p>
                  <a
                    href="#shop"
                    className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    View creations <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12. STORIES + INSIDER SIGNUP */}
        <section id="stories" className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-3">
              Stories &amp; craft
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg">
              Read the field notes from our culinary discoveries across the
              peninsula.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stories.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-border-line rounded overflow-hidden group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-[#7f5700] font-bold">
                    {s.category}
                  </span>
                  <h3 className="font-serif text-lg text-ink mt-1 mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-secondary line-clamp-2 mb-4">
                    {s.blurb}
                  </p>
                  <span className="text-xs text-ink-tertiary">{s.read}</span>
                </div>
              </article>
            ))}
          </div>

          <InsiderSignup />
        </section>
      </main>

      <Footer />
    </>
  );
}
