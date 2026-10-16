import { useEffect, useState, type FormEvent } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { addProduct, useBasket } from '../cartStore';
import { useCatalog } from '../storeApi';
import { regionMeta } from '../regions/meta';

const img = 'https://lh3.googleusercontent.com/aida-public';
const label = 'font-label-caps text-label-caps uppercase tracking-widest';
const Icon = ({ name, className = '' }: { name: string; className?: string }) => <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{name}</span>;
const money = (n: number) => `$${n.toFixed(2)}`;

const FOUNDED = 1999;

const tenets = [
  { icon: 'agriculture', title: 'Rooted in terroir, never blended', body: 'Every oil, grain and honey comes from a named place, with the cultivar or variety on the label. We never carry blends of anonymous oils or bulk filler.', proof: 'Traceable to the source' },
  { icon: 'handyman', title: 'Keeping old methods alive', body: 'We back the families who still do things the slow way: bronze dies and long, cool drying for pasta, hand-stretched curd for cheese, decades in wooden barrels for vinegar.', proof: 'Traditional craft' },
  { icon: 'handshake', title: 'Fair prices for makers', body: 'We buy directly from the families we work with and pay the price they ask, so their farms and workshops stay viable for the next generation.', proof: 'Direct from the producer' },
  { icon: 'ac_unit', title: 'Care all the way to your door', body: 'Cheeses, oils and other delicate foods travel in insulated, climate-safe packaging, so what arrives tastes the way it did where it was made.', proof: 'Climate-safe shipping' },
];

const timeline = [
  { year: '1999', region: 'Emilia', title: 'The balsamic awakening', body: 'Meeting the family behind Il Borgo del Balsamico and tasting Aceto Balsamico Tradizionale aged for decades in wooden barrels changed how we thought about time as an ingredient.', place: 'Albinea, Reggio Emilia', href: '/regions/emilia-romagna' },
  { year: '2007', region: 'Campania', title: 'The bronze-die pact', body: 'Partnering with Pastificio Marulo in Torre Annunziata, on the Gulf of Naples, for pasta pushed slowly through bronze dies and dried at low temperature.', place: 'Gulf of Naples', href: '/shop' },
  { year: '2015', region: 'Sicilia', title: 'Pistachios from the volcano', body: 'Climbing the lava slopes of Bronte on Mount Etna and meeting Gusto Etna, whose pistachios are harvested by hand every other year.', place: 'Bronte, Mount Etna', href: '/regions/sicilia' },
  { year: '2021', region: 'Molise', title: 'The shepherds’ roads', body: 'Following the tratturi to Agnone and Caseificio Di Nucci, a dairy dating to 1662 whose caciocavallo ages in a cellar of local stone.', place: 'Agnone, Alto Molise', href: '/regions/molise' },
];

const seals = [
  { name: 'DOP', full: 'Protected Designation of Origin' },
  { name: 'IGP', full: 'Protected Geographical Indication' },
  { name: 'PAT', full: 'Traditional Agri-Food Product' },
  { name: 'UNESCO', full: 'Intangible Cultural Heritage' },
];

// The four products the founders keep in their own kitchen: real catalog items, with the design's photography.
const picks = [
  { id: 'traditional-balsamic-dop-12-yrs', badge: '12+ year DOP', photo: `${img}/AB6AXuALmcb79Ylnq012GLBxz50Ru0RrX-f_CDq9v5D7GrYG4VYaDUftxJcMek7AK3r_UVf3zxoClSX5-h_AofVyXV3PHPm9Ry7YentNOa6rHMzeWCMiJKjoqbPBiE26jCYRZmTIbKP7UkAFyHw6b_a2tytQWf4p_KeUCYlGCphzX5G3jG1u_NBMyr78TWcNYAhGK1vFatz6u4Dmu-UhGuJffQPhhnRJzu2smJafIAse8l5fBeNWr0JtdAcJ`, note: 'Aged for at least twelve years in a series of wooden barrels. Dense and glossy, with notes of dried plum and dark molasses.' },
  { id: 'bronte-pistachio-cream-dop', badge: 'Bronte DOP', photo: `${img}/AB6AXuCB5J_zjD0IeWCwHRjf0sG4lJAd0GHcNlDHLaX1kPIDRUvJLwh-3LmLGda_6CdNv2yPGX3hh3c-78U4ZRIFZt3jI9PsBS_7hp7i9BjE4FbNpETByK6wJum9XYpMQr81mWFX70BIFYoGbW8hJKc1kplDMozH4hz_cJkmHrsIbUH5n0AhUzx6DC_83aUATV9VqUWc4jMwuJje8ewlbrtT5cagqzyNfUGS1J0pa1yv9CmR9sCMVLrQFuvs`, note: 'Made with pistachios grown on the volcanic slopes of Etna and harvested by hand every other year. Spread it, bake with it, or eat it from the spoon.' },
  { id: 'organic-bronze-die-paccheri', badge: 'Bronze-die', photo: `${img}/AB6AXuCaeNpRWem8YrBfkxI9LHbcIrZCWZ2yWX1p15GcBzw4RUjMPZCzFpcChKO85jUAP-qdChp6sy31En3p1gHGdnt8GXJ6OlH4nX21AdmDNoAzZPgB5pajZJMckLUDRJHaFf60wVSdwPf2MbI_ACFeptFkjqLrFMqkPTuFlKt9wuebFRpCMb0MoISIja2tcWLv5HRrMsLiC_2GtzxWT1eCoBlGq2Ao0wLmcpbn96tIC274NzSz3a07Q7lP`, note: 'Wide tubes pushed through bronze dies for a rough, chalky surface that holds on to thick ragù and seafood sauces.' },
  { id: 'unfiltered-extra-virgin-olive-oil', badge: 'Single estate', photo: `${img}/AB6AXuCyVasUw15pxYh60osfwzQ1FdaviZWVHqNWG0VN1zgZNxXc6gw1_F5U8UUTRggnfW153bQEd7WMA7HzInT6DSRu7rYOwDQOBKXig-S-9jLXSom8yz39SLzT35Y14My1UWnOwrE3VR3Zdy3AyY4tq3GKgdzvialLnepx8kU-TQMSwAAL2qFL6RU8zLUL7QF2NfmlsXSmkkq0x7QrRIcS1bGBuaUwQE88-QzI0MoaffZ5tVtHRm2cwwmq`, note: 'Our everyday oil: unfiltered and full of fruit, for finishing soups, bread and grilled vegetables.' },
];

const topics: [string, string][] = [['harvest', 'Harvest releases'], ['letters', 'Letters from producers'], ['gifting', 'Gift ideas']];

export default function Story() {
  const { products } = useCatalog();
  const [, setBasket] = useBasket();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [chosen, setChosen] = useState<string[]>(['harvest', 'letters']);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Our Story | La Taglia';
    return () => {
      document.title = prev;
    };
  }, []);

  // Set by the owner; not derived from FOUNDED.
  const years = 25;

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, topics: chosen }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Could not sign you up.');
      setStatus({ ok: true, text: 'Grazie! You’re on the list for our next harvest letter.' });
      setEmail('');
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : 'Could not sign you up.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <Layout>
      <Toast message={toast.message} />

      {/* Breadcrumb */}
      <section className="w-full bg-surface-bright py-4 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-ink-secondary text-sm">
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <span className="text-ink-tertiary">/</span>
            <span className="text-on-surface font-semibold">Our Story</span>
          </nav>
          <div className="flex items-center gap-2 text-ink-secondary text-xs tracking-wider uppercase">
            <span className="size-2 rounded-full bg-pistachio-light" />
            Shipping direct from our producers
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="w-full bg-surface-bright pb-16 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
          <div className="max-w-4xl flex flex-col gap-4 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded bg-primary text-on-primary ${label}`}>Our story</span>
              <span className={`text-ink-tertiary ${label}`}>Since {FOUNDED} · {years} years</span>
            </div>
            <h1 className="font-display-hero text-[40px] leading-[46px] sm:text-[52px] sm:leading-[58px] lg:text-[64px] lg:leading-[72px] text-primary tracking-tight [text-wrap:balance]">
              A love letter to Italy, written in olive oil and balsamic.
            </h1>
            <p className="text-lg text-ink-secondary max-w-3xl leading-relaxed">
              In {FOUNDED} we drove a battered Fiat Cinquecento across the Apennines, looking for the pasta we remembered from childhood. What we found was a fragile world of family producers who had never cut corners, and we have been bringing their food home ever since.
            </p>
          </div>

          <figure className="relative w-full rounded-xl overflow-hidden bg-surface-container shadow-xl">
            <img
              className="w-full h-[420px] sm:h-[520px] lg:h-[640px] object-cover object-center"
              alt="The founders walking through ancient olive groves in the Valle d’Itria, Puglia, in warm evening light"
              src={`${img}/AB6AXuC1MYD2UJMAGKSDGNdqgO5D9Q7Tx-w5tupn73fUCxXRflMBfsDtmXQkY_ktIOlAbvGrRm9fYTwufl8xoDil6TbPwvuFJLSvvuCG4wJRJ4cNRMDED3JSy43wLsDVgYJC37DTknyALQS6R0cHh3I7cVS_nRN1PYuvOS8cE2WqPJBPQ16zaDEwuxmhIPhzm4331wgKhJXTyo_k8Ju58Rf9P60FTan14B_-A-AX0U6nlBYMIYP_pU349CtG`}
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-12 text-on-primary">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 max-w-5xl">
                <div className="flex flex-col gap-2">
                  <span className={`${label} text-secondary-container flex items-center gap-2`}><Icon name="photo_camera" className="text-sm" /> From our photo archive</span>
                  <p className="font-headline-sm text-lg sm:text-xl italic font-normal text-surface-parchment max-w-2xl">“MJ &amp; Jennifer Taglia among the ancient olive trees of the Valle d’Itria, Puglia, at harvest time.”</p>
                </div>
                <span className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full text-xs border border-white/20 shrink-0">
                  <Icon name="verified" className="text-base text-secondary-container" /> Centuries-old Ogliarola trees
                </span>
              </div>
            </figcaption>
          </figure>

        </div>
      </section>

      {/* Founders' letter */}
      <section className="w-full bg-surface-soft py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className={`inline-flex items-center gap-2 text-wine-dark ${label}`}><Icon name="history_edu" className="text-lg" /> A letter from the founders</span>
            <h2 className="font-headline-lg text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px] text-on-surface tracking-tight">Why “imported” food lost its soul</h2>
            <div className="text-ink-secondary space-y-6 leading-relaxed">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-headline-lg first-letter:text-primary first-letter:leading-none">
                We grew up in homes where Sunday sauce started before sunrise. The smell of San Marzano tomatoes, garlic warming in olive oil and slow-cooked meat wasn’t just lunch; it tied us to our grandparents’ Italy. But by the late 1990s, the “Italian” food on supermarket shelves had changed. The labels had crests and flags, while the jars held blended oils and pasta dried fast and hot for factory speed.
              </p>
              <p>
                In the spring of {FOUNDED} we packed two leather bags, bought an old Fiat and went looking for the makers who had never given in. We turned up unannounced in the vineyards of Reggio Emilia, where the vinegar lofts smell of cherry and mulberry wood. In the hills of Campania we watched pasta makers check their drying rooms as anxiously as a winemaker watches for an October frost.
              </p>
              <p>
                That is when we understood that real Italian food is not a commodity. It is local, fragile, and kept alive by families who see themselves as guardians rather than businesses. La Taglia exists to give those families a direct path to your table: we pay what they ask, keep their names on every label, and tell the story of where their food comes from.
              </p>
            </div>
            <div className="mt-2 pt-6 border-t border-border-line flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl text-primary italic font-normal">Con affetto e gratitudine,</span>
                <span className="font-bold text-on-surface mt-1">MJ &amp; Jennifer Taglia</span>
                <span className="text-xs text-ink-tertiary">Founders</span>
              </div>
              <div className="size-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-primary shrink-0"><Icon name="stylus_note" className="text-3xl" /></div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <figure className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg p-4">
              <img
                className="w-full h-[360px] lg:h-[440px] object-cover rounded-lg"
                alt="A farmhouse kitchen table with an open tasting notebook, balsamic cruets, olive oil, wedges of Parmigiano Reggiano and a map of Italy"
                src={`${img}/AB6AXuDybqWoECNTaWOtMFBBEmocy7VQ0XrgcROwCSDG44o-I3rsjT6-ThZUyyUTtCjSDJWFbDesTJCj5xq43EkaHHy3dny2eo3TlfcB5VzxYSmm-dtJn5k4M5FqhbJIZCktpdWoXNX1vix6AnZif59mmiGxo-C-o7tubDAH6Oal4UWUot5tHoIvtlbOvuyhxDnKMV9HRYxZvZIwvuRnxzkbzqUWpb3NJvr8ZEJMLrcRwcESd6osmSTyoX5Q`}
              />
              <figcaption className="pt-5 pb-2 px-2 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3 text-xs text-ink-tertiary">
                  <span className="flex items-center gap-1 font-semibold text-primary"><Icon name="menu_book" className="text-sm" /> From our travel journal</span>
                  <span>Reggio Emilia · Autumn {FOUNDED}</span>
                </div>
                <blockquote className="text-lg font-semibold italic text-on-surface leading-snug">“You cannot rush twenty-five years in the barrel. Time is the one ingredient money cannot fake.”</blockquote>
                <p className="text-xs text-ink-secondary">Written in the vinegar loft, the day we first tasted a true Aceto Balsamico Tradizionale.</p>
              </figcaption>
            </figure>
            <div className="bg-surface-parchment rounded-xl p-6 flex items-start gap-4 shadow-sm">
              <div className="size-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0"><Icon name="gavel" className="text-xl" /></div>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-xl text-on-surface">Our no-relabeling promise</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">We never sell under a private La Taglia label. Every jar, bottle and box carries the maker’s own name and the town where it was made.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenets */}
      <section className="w-full bg-surface-bright py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className={`inline-flex items-center gap-2 text-wine-dark ${label}`}><Icon name="balance" className="text-lg" /> How we choose</span>
            <h2 className="font-headline-lg text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px] text-primary tracking-tight">Four promises behind every product</h2>
            <p className="text-ink-secondary">Italian names and flags on a label prove nothing. These are the standards a producer has to meet before their food reaches our shelves.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tenets.map((t, i) => (
              <div key={t.title} className="group bg-surface-container-lowest p-7 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                  <div className="size-14 rounded-lg bg-surface-parchment text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors"><Icon name={t.icon} className="text-3xl" /></div>
                  <div className="flex flex-col gap-2">
                    <span className={`${label} text-badge-ink`}>Promise 0{i + 1}</span>
                    <h3 className="font-headline-sm text-xl text-on-surface">{t.title}</h3>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed">{t.body}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-border-line flex items-center gap-2 text-xs text-primary font-bold"><Icon name="check_circle" className="text-sm" /> {t.proof}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-surface-parchment py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className={`${label} text-wine-dark`}>Along the way</span>
            <h2 className="font-headline-lg text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px] text-primary">{years} years of slow roads</h2>
            <p className="text-ink-secondary">The meetings that built our pantry, one region at a time.</p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {timeline.map((t) => (
              <li key={t.year}>
                <a href={t.href} className="h-full flex flex-col gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-display-hero text-[40px] leading-[46px] text-primary">{t.year}</span>
                    <span className="px-2 py-0.5 rounded bg-surface-parchment text-xs text-badge-ink font-bold">{t.region}</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-on-surface">{t.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{t.body}</p>
                  <span className="text-xs text-ink-tertiary flex items-center gap-1 mt-auto"><Icon name="pin_drop" className="text-xs" /> {t.place}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="/regions" className="h-full flex flex-col gap-4 bg-primary text-on-primary p-6 rounded-xl shadow-md hover:bg-wine-dark transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-[40px] leading-[46px] text-secondary-container">Today</span>
                  <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-bold">Direct from makers</span>
                </div>
                <h3 className="font-headline-sm text-xl">The living pantry</h3>
                <p className="text-sm text-surface-parchment/90 leading-relaxed">{products.length} provisions from {regionMeta.length} regions, each with its producer, its place and its story.</p>
                <span className="text-xs text-secondary-container flex items-center gap-1 mt-auto"><Icon name="map" className="text-xs" /> Explore the regions</span>
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Designations */}
      <section className="w-full bg-surface-bright py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto bg-primary rounded-2xl overflow-hidden shadow-xl text-on-primary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-14 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className={`inline-flex items-center gap-2 text-secondary-container ${label}`}><Icon name="verified_user" /> Proof of origin</span>
              <h2 className="font-headline-lg text-[30px] leading-[38px] lg:text-[42px] lg:leading-[50px] tracking-tight">Protected names aren’t red tape. They protect a culture.</h2>
              <p className="text-surface-parchment/90 leading-relaxed">A DOP or IGP seal means a food was made in its home region by the traditional method, and checked by the body that guards it. That is what keeps real balsamic, real cheese and real oil from being copied. We don’t stock synthetic “truffle” oils or caramel-coloured vinegars dressed up as aged balsamic.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {seals.map((s) => (
                  <div key={s.name} className="bg-white/10 backdrop-blur rounded p-3 text-center flex flex-col gap-1">
                    <span className="font-bold text-secondary-container">{s.name}</span>
                    <span className="text-xs text-surface-parchment/80">{s.full}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl flex flex-col justify-between gap-6 border border-white/10">
              <Icon name="format_quote" className="text-4xl text-secondary-container" />
              <p className="font-headline-sm text-xl text-surface-parchment font-normal leading-relaxed italic">“No house brands, no relabeled bulk. Every product carries its maker’s name and the town it comes from.”</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-secondary-container text-button-ink flex items-center justify-center font-bold">LT</div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">The La Taglia promise</span>
                  <span className="text-xs text-surface-parchment/70">Named makers, named places</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' picks */}
      <section className="w-full bg-surface-soft py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className={`${label} text-wine-dark`}>The everyday essentials</span>
              <h2 className="font-headline-lg text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px] text-primary">La Taglia kitchen staples</h2>
              <p className="text-ink-secondary">The four things we never let run out at home.</p>
            </div>
            <a href="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container hover:bg-gold-hover text-button-ink font-bold text-sm uppercase tracking-wider transition-colors shadow-sm self-start">
              Explore all {products.length} provisions <Icon name="arrow_forward" className="text-base" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {picks.map((pick) => {
              const p = products.find((x) => x.id === pick.id);
              if (!p) return null;
              const soldOut = p.stock <= 0;
              return (
                <article key={pick.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  <a href={`/product/${p.id}`} className="relative bg-surface-parchment p-6 flex items-center justify-center aspect-square">
                    <img className="w-4/5 h-4/5 object-contain hover:scale-105 transition-transform duration-500" src={pick.photo} alt={p.name} loading="lazy" />
                    <span className="absolute top-4 left-4 bg-surface-container-lowest px-2.5 py-1 rounded text-xs text-badge-ink font-bold shadow-sm">{pick.badge}</span>
                  </a>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-ink-tertiary uppercase tracking-wider">{p.producer} · {p.place}</span>
                      <h3 className="font-headline-sm text-xl text-on-surface"><a href={`/product/${p.id}`} className="hover:underline underline-offset-4">{p.name}</a></h3>
                      <p className="text-xs text-ink-secondary line-clamp-3">{pick.note}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border-line">
                      <div className="flex flex-col">
                        <span className="text-lg text-on-surface font-bold">{money(p.price)}</span>
                        <span className="text-xs text-ink-tertiary">{p.unit.split('•')[0].trim()}</span>
                      </div>
                      <button type="button" aria-label={`Add ${p.name} to bag`} disabled={soldOut}
                        onClick={() => { setBasket((b) => addProduct(b, p)); toast.show(`${p.name} added to your basket`); }}
                        className="size-10 rounded-full bg-primary text-on-primary hover:bg-wine-hover flex items-center justify-center transition-colors shadow-sm disabled:opacity-40">
                        <Icon name="add_shopping_cart" className="text-xl" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-surface-bright py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto bg-surface-parchment rounded-2xl p-6 sm:p-8 lg:p-14 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className={`inline-flex items-center gap-2 text-primary ${label}`}><Icon name="mark_email_read" /> The La Taglia letter</span>
            <h2 className="font-headline-md text-[28px] leading-[36px] lg:text-[32px] lg:leading-[40px] text-primary">Get our seasonal harvest letters</h2>
            <p className="text-ink-secondary leading-relaxed">Be first to hear about new-season oil, small batches of aged vinegar, and the stories behind the families we work with.</p>
            <fieldset className="flex flex-wrap items-center gap-4 pt-2 text-sm text-ink-secondary">
              <legend className="sr-only">What would you like to hear about?</legend>
              {topics.map(([v, l]) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={chosen.includes(v)} onChange={(e) => setChosen((c) => (e.target.checked ? [...c, v] : c.filter((x) => x !== v)))} className="rounded text-primary focus:ring-primary border-border-line" />
                  {l}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="w-full lg:max-w-md flex flex-col gap-3">
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <label htmlFor="story-email" className="sr-only">Email address</label>
              <input id="story-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-ink-tertiary text-sm border-0 focus:ring-2 focus:ring-primary shadow-sm" />
              <button type="submit" disabled={sending} className="px-6 py-3 rounded-full bg-primary hover:bg-wine-hover text-on-primary font-bold text-sm transition-colors whitespace-nowrap shadow-sm disabled:opacity-60">
                {sending ? 'Signing up…' : 'Sign me up'}
              </button>
            </form>
            {status && <p role="status" className={`text-sm font-semibold ${status.ok ? 'text-tertiary' : 'text-status-red'}`}>{status.text}</p>}
            <span className="text-xs text-ink-tertiary">No spam: we write a few times a year, when there’s news from the harvest. Unsubscribe any time.</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
