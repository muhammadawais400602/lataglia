import { useEffect, useRef, useState, type ReactNode } from 'react';
import Layout from '../components/Layout';
import { pairings, pillars, product, reviews } from '../productData';

const label = 'font-label-caps text-label-caps uppercase';
const filled = { fontVariationSettings: "'FILL' 1" };

function Stars({ size = 'text-base' }: { size?: string }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`material-symbols-outlined ${size}`} style={filled}>star</span>
      ))}
    </>
  );
}

export default function Product() {
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const total = (qty * product.price).toFixed(2);
  const away = Math.max(0, product.freeShippingAt - qty * product.price);
  const progress = Math.min(100, ((qty * product.price) / product.freeShippingAt) * 100);

  function notify(msg: string) {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 3000);
  }
  const addToBag = () => notify(`${qty}x Sicilian Pistachio Cream (35%) added to your order.`);

  const accordions: { icon: string; title: string; body: ReactNode }[] = [
    {
      icon: 'restaurant', title: '1. Tasting Profile & Pure Ingredients',
      body: (
        <>
          <p><strong className="text-on-surface">Tasting Notes:</strong> Decadently buttery with an upfront roasted volcanic note, honeyed warmth, and an authentic lingering mineral salinity. Never cloying, perfectly balanced with a silky stone-milled finish.</p>
          <div className="p-3 bg-surface-parchment rounded-lg">
            <span className="font-bold text-on-surface block mb-1">Estate Formula (Clean Recipe):</span>
            <span>35% Bronte PDO Pistachios (stone-ground), raw cane sugar, whole milk powder, extra virgin olive oil, Trapani sea salt. Natural soy lecithin (emulsifier).</span>
          </div>
          <p className="text-xs text-primary font-semibold">Strictly Zero Palm Oil · No Artificial Food Colorings or Extracts · Non-GMO</p>
        </>
      ),
    },
    {
      icon: 'domain', title: '2. Producer Dossier: Gusto Etna',
      body: (
        <>
          <p>Founded by the Barbagallo family, Gusto Etna represents three generations devoted strictly to the rocky terraces of Bronte. Because the roots of the pistachio tree penetrate the sharp jagged fractures of volcanic basalt where no tractor can tread, the family cultivates entirely by hand using traditional Sicilian wicker baskets.</p>
          <p className="text-xs text-ink-tertiary">Estate Location: Bronte, Catania, Sicilia · Micro-Lot Batch No. 428</p>
        </>
      ),
    },
    {
      icon: 'brunch_dining', title: '3. Culinary Pairings & Service',
      body: (
        <ul className="list-disc list-inside space-y-1">
          <li><strong className="text-on-surface">Colazione Siciliana:</strong> Slather warmly over freshly toasted brioche col tuppo.</li>
          <li><strong className="text-on-surface">Caffè Crema:</strong> Dollop a single teaspoon into hot espresso and stir gently.</li>
          <li><strong className="text-on-surface">Gelato &amp; Pasticceria:</strong> Drizzle across fior di latte gelato or fold into fresh sheep's milk ricotta for cannoli filling.</li>
        </ul>
      ),
    },
    {
      icon: 'inventory_2', title: '4. Storage & Shelf Life',
      body: <p>Store in a cool, dark larder. Oil separation is completely natural due to absence of hydrogenated vegetable fats—simply stir vigorously with a small silver knife before service. Once opened, consume within 90 days. Does not require refrigeration unless warm climate exceeds 24°C.</p>,
    },
  ];

  const thumbs = [product.thumbs[0], ...product.gallery.slice(1)];

  return (
    <Layout>
      <div
        role="status"
        className={`fixed top-20 right-6 left-6 sm:left-auto z-50 transition-all duration-500 ease-out pointer-events-none flex items-center gap-3 bg-surface-container-lowest text-on-surface px-5 py-4 rounded-xl shadow-xl border-l-4 border-pistachio-light ${toast ? 'translate-y-0 opacity-100' : '-translate-y-[120%] opacity-0'}`}
      >
        <span className="material-symbols-outlined text-pistachio-light text-2xl" style={filled}>check_circle</span>
        <div>
          <p className="font-subheading text-subheading text-primary leading-tight font-bold">Aggiunto al carrello</p>
          <p className="font-body-sm text-body-sm text-ink-secondary">{toast}</p>
        </div>
      </div>

      <div className="w-full bg-surface-container-low py-3.5 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-body-sm text-body-sm text-ink-secondary">
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <span className="text-ink-tertiary">/</span>
            <a className="hover:text-primary transition-colors" href="/#pistachio">The Pistachio Edit</a>
            <span className="text-ink-tertiary">/</span>
            <a className="hover:text-primary transition-colors" href="/regions/sicilia#producer-dossier">Gusto Etna</a>
            <span className="text-ink-tertiary">/</span>
            <span className="text-on-surface font-semibold truncate max-w-[200px] sm:max-w-none">Sicilian Pistachio Cream (35%)</span>
          </nav>
          <div className={`flex items-center gap-2 text-primary ${label} tracking-widest`}>
            <span className="inline-block w-2 h-2 rounded-full bg-pistachio-light" />
            Protected Geographical Indication · Bronte DOP
          </div>
        </div>
      </div>

      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative bg-surface-parchment rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 lg:p-14 group shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <span className={`bg-surface-container-lowest text-badge-ink ${label} px-3 py-1.5 rounded tracking-widest shadow-sm`}>Bronte DOP</span>
                <span className={`bg-primary text-on-primary ${label} px-3 py-1.5 rounded tracking-widest shadow-sm`}>Best Seller</span>
              </div>
              <div className="absolute bottom-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-ink-secondary font-caption text-caption z-10">
                <span className="material-symbols-outlined text-sm text-primary">ac_unit</span>
                <span>Direct Sicilian Cold-Chain Import</span>
              </div>
              <img key={photo} className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" src={product.gallery[photo]} alt={product.name} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbs.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setPhoto(i)}
                  aria-label={`Show photo ${i + 1}`}
                  aria-pressed={photo === i}
                  className={`rounded-xl overflow-hidden aspect-square bg-surface-parchment p-2 transition-all duration-200 shadow-sm hover:opacity-90 ${photo === i ? 'ring-2 ring-primary' : 'opacity-60'}`}
                >
                  <img className="w-full h-full object-cover rounded-lg" src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-5">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-2xl">landscape</span>
              </div>
              <div>
                <h4 className="font-subheading text-subheading text-on-surface font-bold">Mount Etna Mineral Soils (850m Alt.)</h4>
                <p className="font-body-sm text-body-sm text-ink-secondary leading-relaxed mt-0.5">Trees grow straight out of porous black lava stone, absorbing intense potassium and sulfur which gives the nut its unmistakable resinous depth.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 text-wine-dark font-subheading text-subheading font-bold mb-2">
              <span>Gusto Etna</span>
              <span className="text-ink-tertiary">·</span>
              <span className="font-body-sm text-body-sm text-ink-secondary font-normal">Bronte, Sicilia (Altitude: 850m)</span>
            </div>
            <h1 className="font-headline-lg text-[34px] leading-[40px] sm:text-headline-lg text-primary tracking-tight mb-3">{product.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-4">
              <div className="flex items-center gap-1 text-secondary-container">
                <Stars />
                <span className="font-subheading text-subheading text-on-surface font-bold ml-1.5">5.0</span>
              </div>
              <span className="text-ink-tertiary text-sm">/</span>
              <a className="font-body-sm text-body-sm text-ink-secondary hover:text-primary underline decoration-border-line underline-offset-4 transition-colors" href="#reviews">142 Maker Reviews</a>
              <span className="text-ink-tertiary text-sm">/</span>
              <span className={`text-status-red ${label} font-bold tracking-widest`}>Harvest: Biennial 2024</span>
            </div>

            <div className="bg-surface-parchment p-5 rounded-xl mb-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">${total}</span>
                <span className="font-body-sm text-body-sm text-ink-secondary">6.7 Oz jar · <strong className="text-on-surface font-semibold">$2.39 / Oz</strong></span>
              </div>
              <p className="font-caption text-caption text-ink-secondary mt-1">Direct estate bottling. Small batch no. ET-9428. Protected Origin Certified.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
              <div className="flex items-center justify-between bg-surface-container rounded-xl px-4 py-3 min-w-[130px]">
                <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined text-lg">remove</span>
                </button>
                <span className="font-subheading text-subheading text-on-surface font-bold px-4" aria-live="polite">{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)} className="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>
              <button onClick={addToBag} className="flex-1 bg-secondary-container hover:bg-gold-hover text-button-ink font-button text-button uppercase tracking-wider py-4 px-8 rounded-xl shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                <span>Add to Bag — ${total}</span>
              </button>
            </div>

            <div className="bg-surface-container-low p-4 rounded-xl mb-8">
              <div className="flex justify-between items-center text-body-sm font-body-sm mb-2">
                <span className="text-on-surface font-semibold">Climate-Controlled Shipping</span>
                <span className="text-primary font-bold font-subheading">{away > 0 ? `$${away.toFixed(2)} away` : 'Unlocked'}</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                <div className="bg-secondary-container h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <p className="font-caption text-caption text-ink-secondary mt-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-pistachio-light">verified</span>
                {away > 0
                  ? `Add $${away % 1 ? away.toFixed(2) : away} more to unlock complimentary refrigerated transit across the US.`
                  : 'Complimentary refrigerated transit across the US unlocked.'}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {accordions.map((a, i) => (
                <div key={a.title} className="bg-surface-container-low rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-subheading text-subheading font-bold text-on-surface hover:text-primary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">{a.icon}</span>
                      {a.title}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {open === i && <div className="px-5 pb-5 text-body-sm font-body-sm text-ink-secondary leading-relaxed space-y-3">{a.body}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-parchment py-16 px-6 lg:px-12 my-6">
        <div className="max-w-[1100px] mx-auto bg-surface-container-lowest p-8 lg:p-14 rounded-2xl shadow-sm relative">
          <div className={`absolute -top-4 left-6 sm:left-10 bg-primary text-on-primary ${label} tracking-widest px-4 py-1.5 rounded`}>Curator Dispatch · Mount Etna</div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="font-subheading text-subheading text-secondary font-bold uppercase tracking-wider">The Truth About The Color</span>
              <h2 className="font-headline-md text-2xl sm:text-headline-md text-primary leading-tight">
                "True Bronte pistachio cream is never neon green. It carries the warm, olive-amber glow of raw volcanic stone."
              </h2>
              <p className="font-body-md text-body-md text-ink-secondary leading-relaxed">
                When we first visited Bronte in 2022, we learned that mass-market producers disguise diluted nut pastes using artificial chlorophyll and spirulina dyes. The genuine <em>Pistacchio Verde di Bronte DOP</em> harvested by the Barbagallo family is roasted gently over volcanic embers, yielding a nuanced taupe-olive hue and an earthy depth that artificial confectionery simply cannot replicate. We tasted eighty-two jars before crowning this exact 35% formulation the gold standard.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary font-headline-sm">JT</div>
                <div>
                  <p className="font-subheading text-subheading text-on-surface font-bold">MJ &amp; Jennifer Taglia</p>
                  <p className="font-caption text-caption text-ink-secondary">Founders &amp; Culinary Scouts, La Taglia</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                <img className="w-full h-full object-cover" src={product.curatorImg} alt="Salvatore Barbagallo in the Bronte orchard" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wide">Salvatore Barbagallo · Bronte, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className={`text-secondary ${label} tracking-widest font-bold`}>Protected Terroir Dossier</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1 mb-3">Why Bronte Pistachios Stand Alone</h2>
          <p className="font-body-md text-body-md text-ink-secondary">Regulated by the Consortium for the Protection of the Green Pistachio of Bronte DOP under strict geographic decree.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between hover:bg-surface-parchment transition-colors duration-300">
              <div>
                <div className="size-14 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <span className={`text-primary ${label} tracking-widest`}>{p.tag}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-3">{p.title}</h3>
                <p className="font-body-sm text-body-sm text-ink-secondary leading-relaxed">{p.body}</p>
              </div>
              <div className="pt-6 mt-6 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-primary">
                <span>{p.facts[0]}</span>
                <span>{p.facts[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-16 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className={`text-secondary ${label} tracking-widest font-bold`}>Curated Pairings</span>
              <h2 className="font-headline-md text-headline-md text-primary mt-1">Complete the Sicilian Table</h2>
            </div>
            <p className="font-body-sm text-body-sm text-ink-secondary max-w-md">Discovered alongside this pistachio spread to compose an authentic Italian dessert or pasta course.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pairings.map((p) => (
              <div key={p.name} className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="relative aspect-square bg-surface-parchment rounded-xl overflow-hidden mb-5 p-4 flex items-center justify-center">
                    <span className={`absolute top-3 left-3 ${p.tagClass} ${label} px-2 py-1 rounded`}>{p.tag}</span>
                    <img className="w-full h-full object-contain" src={p.img} alt={p.name} loading="lazy" />
                  </div>
                  <p className="text-xs text-ink-secondary font-semibold uppercase tracking-wider mb-1">{p.maker}</p>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{p.name}</h3>
                  <p className="font-body-sm text-body-sm text-ink-secondary mb-4">{p.body}</p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="font-subheading text-subheading text-primary font-bold">{p.price} <span className="font-caption text-caption text-ink-tertiary">{p.unit}</span></span>
                  <button
                    onClick={() => notify(`1x ${p.name} (${p.price}) added to your table pairing.`)}
                    className="bg-surface-container hover:bg-secondary-container hover:text-button-ink text-on-surface px-4 py-2.5 rounded-lg font-button-sm text-button-sm uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">add</span> Add Pair
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 w-full scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-surface-container-high">
          <div>
            <span className={`text-secondary ${label} tracking-widest font-bold`}>Community Verifications</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">Epicurean Reviews</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="md:text-right">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">5.0 Out of 5.0</span>
              <p className="font-caption text-caption text-ink-secondary">Based on 142 direct consumer reviews</p>
            </div>
            <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-button-sm text-button-sm uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">Write a Review</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.title} className="bg-surface-parchment p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-secondary-container mb-3"><Stars size="text-sm" /></div>
                <h4 className="font-subheading text-subheading text-on-surface font-bold mb-2">{r.title}</h4>
                <p className="font-body-sm text-body-sm text-ink-secondary leading-relaxed">{r.body}</p>
              </div>
              <div className="pt-6 mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-tertiary">
                <span className="font-semibold text-on-surface">{r.who}</span>
                <span className="flex items-center gap-1 text-pistachio-light font-bold">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="sticky bottom-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md py-4 px-6 lg:px-12 shadow-xl border-t border-surface-container-high">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-parchment p-1 flex items-center justify-center shrink-0">
              <img className="w-full h-full object-contain" src={product.barThumb} alt="" />
            </div>
            <div>
              <p className="font-subheading text-subheading text-on-surface font-bold leading-tight">{product.name}</p>
              <p className="font-caption text-caption text-ink-secondary">Gusto Etna · 6.7 Oz · ${product.price}.00</p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full sm:w-auto gap-4">
            <span className="font-headline-sm text-headline-sm text-primary font-bold sm:hidden">${total}</span>
            <button onClick={addToBag} className="w-full sm:w-auto bg-secondary-container hover:bg-gold-hover text-button-ink font-button text-button uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">shopping_bag</span>
              <span>Quick Add — ${total}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
