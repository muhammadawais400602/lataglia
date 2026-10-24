import { useEffect, useRef, useState, type FormEvent } from 'react';
import Layout from '../components/Layout';
import { useCatalog } from '../storeApi';
import { regionMeta } from '../regions/meta';
import Icon from '../components/Icon';

const img = 'https://lh3.googleusercontent.com/aida-public';
const label = 'font-label-caps text-label-caps uppercase';

const pillars = [
  {
    icon: 'handshake', tone: 'text-primary', n: 'I', title: 'Bought direct from the family',
    body: 'We buy from the people who make the food, not from export agents or brokers. Fewer hands in the middle means a fairer price for the maker and a fresher product for you.',
    boxTitle: 'Heritage varieties first',
    box: 'We look for slow-growing, traditional crops that industry has abandoned: Biancolilla olives, Bronte pistachios, Senatore Cappelli wheat.',
  },
  {
    icon: 'fact_check', tone: 'text-secondary', n: 'II', title: 'Chosen by taste, checked on paper',
    body: 'Every product is tasted in the place it was made before it joins the shop. Where a protected name such as DOP or IGP is on the label, we check the certification behind it.',
    boxTitle: 'Short ingredient lists',
    box: 'No caramel colouring in balsamic, no dyes or fillers in pistachio cream, no shortcuts dressed up as tradition.',
  },
  {
    icon: 'package_2', tone: 'text-coastal-blue', n: 'III', title: 'Packed for the journey',
    body: 'Heat and light are what ruin good olive oil and cheese. Delicate products travel in insulated, climate-safe packaging, so they arrive tasting the way they did at the source.',
    boxTitle: 'Seasonal releases',
    box: 'Oils, honeys and pistachios arrive by harvest, in small lots, rather than sitting in a warehouse for years.',
  },
];

const seals = [
  { tag: 'DOP', bg: 'bg-primary text-on-primary', it: "Denominazione d'Origine Protetta", title: 'Protected Designation of Origin', body: 'Every stage, from raw ingredient to finished product, happens inside one defined area and follows a traditional method. Examples: Parmigiano Reggiano DOP, Aceto Balsamico Tradizionale di Modena DOP.' },
  { tag: 'IGP', bg: 'bg-secondary text-on-secondary', it: 'Indicazione Geografica Protetta', title: 'Protected Geographical Indication', body: 'The product’s character is tied to a place, and at least one key stage of production happens there. Example: Pasta di Gragnano IGP.' },
  { tag: 'PAT', bg: 'bg-tertiary text-on-tertiary', it: 'Ministero dell’Agricoltura', title: 'Traditional Agri-Food Product', body: 'Italy’s national list of foods made the same way, in the same place, for at least 25 years. It protects small local recipes that are too niche for a DOP.' },
  { tag: 'UNESCO', bg: 'bg-coastal-blue text-on-primary', it: 'Intangible Cultural Heritage', title: 'Living food traditions', body: 'Recognises customs rather than products: the Mediterranean diet, the head-trained vines of Pantelleria and the truffle hunting of Piedmont and Umbria.' },
];

const people = [
  { name: 'MJ & Jennifer Taglia', role: 'Founders', tone: 'text-primary', photo: `${img}/AB6AXuB82CaSu_9NtzXBDI65gtbiV5ypc9x_tgOAHHGcvLplUAJwTWu7gM0vZ29W8iUbuP2iIsdT1e7xly4CFn2zEi_Ew6Ed3zqjGyqYY6c34AiPawsfvtmdIt84edn5Os6vXFW0t2HAX2-zqddFwQI3Nk7Om-JsHymVv5xjdFDFJoHxYZG4K_Hl3XWpQcNohHpMaokS0WLLSjlYeYYDbcCuOuIa4eVQFI3GUpOGMAUp_l6yGcqgIG2fielh`, body: 'Casa Taglia began as an anniversary gift from MJ to Jennifer. Today Jennifer leads the search for the foods and families we bring home.', href: '#our-story', link: 'Read our story' },
  { name: 'Il Borgo del Balsamico', role: 'Balsamic vinegar · Reggio Emilia', tone: 'text-secondary', photo: `${img}/AB6AXuALmcb79Ylnq012GLBxz50Ru0RrX-f_CDq9v5D7GrYG4VYaDUftxJcMek7AK3r_UVf3zxoClSX5-h_AofVyXV3PHPm9Ry7YentNOa6rHMzeWCMiJKjoqbPBiE26jCYRZmTIbKP7UkAFyHw6b_a2tytQWf4p_KeUCYlGCphzX5G3jG1u_NBMyr78TWcNYAhGK1vFatz6u4Dmu-UhGuJffQPhhnRJzu2smJafIAse8l5fBeNWr0JtdAcJ`, contain: true, body: 'The family whose decades-old Aceto Balsamico Tradizionale started it all. Their vinegar ages in a series of wooden barrels in the loft above the house.', href: '/regions/emilia-romagna', link: 'Emilia-Romagna' },
  { name: 'Gusto Etna', role: 'Pistachios · Bronte, Sicily', tone: 'text-coastal-blue', photo: `${img}/AB6AXuCB5J_zjD0IeWCwHRjf0sG4lJAd0GHcNlDHLaX1kPIDRUvJLwh-3LmLGda_6CdNv2yPGX3hh3c-78U4ZRIFZt3jI9PsBS_7hp7i9BjE4FbNpETByK6wJum9XYpMQr81mWFX70BIFYoGbW8hJKc1kplDMozH4hz_cJkmHrsIbUH5n0AhUzx6DC_83aUATV9VqUWc4jMwuJje8ewlbrtT5cagqzyNfUGS1J0pa1yv9CmR9sCMVLrQFuvs`, contain: true, body: 'Pistachios grown on the lava slopes of Mount Etna and picked by hand every other year, made into the creams and spreads in our shop.', href: '/regions/sicilia', link: 'Sicilia' },
  { name: 'Caseificio Di Nucci', role: 'Cheesemakers · Agnone, Molise', tone: 'text-tertiary-container', photo: `${img}/AB6AXuCCmKt0KNZ0ZVs0XegxaaFO6gZmpB0I3t0eN-F0bmWiJOyE2FCk1P6zroUcVP2CX43Nh2zwBFV4tdj6t54RZccUEjSYuLujiWxd2mCahuH6DP0SVRcwjm9qWb24Lv8DoD-UIIZeHA9vO_sDgO413bRgudVZTVkUEEda1gu5pShkPoRlFm5fQH2QziQuyZGEMmDriDxkslw6nujyY9sSQLoi7YmTKWR3c1d3lfgcw-WrcL-JM6H0fgt_`, body: 'A family dairy dating to 1662, still stretching curd by hand and ageing caciocavallo in a cellar of local stone.', href: '/regions/molise', link: 'Molise' },
];

const compare = [
  ['Where it comes from', 'Bought directly from a named family producer.', 'Bought through brokers and consolidated lots.', 'Made by an unnamed co-packer, often from blended sources.'],
  ['What the label tells you', 'The producer, the place and, where it matters, the harvest year.', 'The general region and a best-by date.', '“Packed in Italy”, with no clue where the ingredients grew.'],
  ['Whose name is on it', 'The maker’s own label, unchanged.', 'The maker’s label with an importer sticker.', 'A private label, sometimes an invented Italian-sounding brand.'],
  ['How it travels', 'Insulated, climate-safe packaging for delicate goods.', 'Long ocean freight in unrefrigerated containers.', 'Bulk freight and long warehouse storage.'],
];

const faqs = [
  { q: 'How do you choose your producers?', a: 'We don’t buy from catalogues. We visit each producer, taste in the place the food is made, and only work with families who make it themselves, use traditional varieties and methods, and are open about how they work.' },
  { q: 'Why don’t you put your own brand on the products?', a: 'Because the maker’s name is the guarantee. When an importer relabels a product, it can quietly switch suppliers when a harvest is poor. With the producer’s own label on the bottle, you always know who made it and where.' },
  { q: 'How do you keep food fresh in transit?', a: 'Oils, cheeses and other delicate goods are packed in insulated, climate-safe packaging. Seasonal products ship by harvest in small lots, so they don’t sit for long before reaching you.' },
  { q: 'Can restaurants and private chefs order larger quantities?', a: 'Yes. Some products are available in larger formats or reserved quantities for restaurants, private chefs and corporate gifts. Send us a message with what you need and we’ll reply with availability.' },
];

const inquiryTypes = ['Private chef or restaurant', 'Corporate gifting', 'Producer partnership', 'Press', 'Something else'];

export default function About() {
  const { products } = useCatalog();
  const [open, setOpen] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = 'About Us | Casa Taglia';
    const fromHash = () => window.location.hash === '#contact' && setModal(true);
    fromHash();
    // The page renders after the browser's own jump to #our-story / #about-us, so scroll once it exists.
    const target = window.location.hash.slice(1);
    if (target && target !== 'contact') requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    window.addEventListener('hashchange', fromHash);
    return () => {
      document.title = prev;
      window.removeEventListener('hashchange', fromHash);
    };
  }, []);

  useEffect(() => {
    if (!modal) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  function close() {
    setModal(false);
    setErr('');
    if (window.location.hash === '#contact') history.replaceState(null, '', window.location.pathname);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setSending(true);
    setErr('');
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...Object.fromEntries(f), kind: 'contact' }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Could not send your message.');
      setSent(true);
      close();
      window.setTimeout(() => setSent(false), 4000);
    } catch (error) {
      setErr(error instanceof Error ? error.message : 'Could not send your message.');
    } finally {
      setSending(false);
    }
  }


  return (
    <Layout>
      {/* Our Story */}
      <section id="our-story" className="w-full bg-surface-parchment py-8 lg:py-14 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-ink-secondary mb-8">
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <Icon name="chevron_right" className="text-xs" />
            <span className="text-primary font-semibold">About Us</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <figure className="lg:col-span-5">
              <img
                src="/jennifer.jpg"
                width={1100}
                height={1006}
                alt="Jennifer Taglia at a Tuscan market, holding a bottle of extra virgin olive oil"
                className="w-full aspect-[4/5] object-cover object-top rounded-xl shadow-xl"
              />
              <figcaption className="mt-3 text-caption text-ink-tertiary">Jennifer at a market in Tuscany.</figcaption>
            </figure>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest rounded-sm mb-4">
                <span className="size-2 rounded-full bg-secondary-container" />
                <span className={`${label} text-secondary tracking-[0.18em]`}>How Casa Taglia began</span>
              </div>
              <h1 className="font-display-hero text-[36px] leading-[42px] lg:text-[52px] lg:leading-[60px] text-primary tracking-tight mb-6 [text-wrap:balance]">
                Our Story
              </h1>
              <div className="space-y-4 text-body-lg text-ink-secondary leading-relaxed max-w-2xl">
                <p>As our 25th wedding anniversary approached, my wife and I began imagining the next chapter of our lives. We wanted to create something together, something meaningful that celebrated two of our greatest shared passions: exceptional food and the beauty, culture, and traditions of Italy.</p>
                <p>For our anniversary, I gave my wife Casa Taglia.</p>
                <p>What began as a gift soon became her passion. With her extraordinary taste, natural curiosity, and appreciation for life’s finer pleasures, she set out to discover the remarkable foods, artisan producers, and culinary traditions that make Italy so special.</p>
                <p>From family-run farms and generations-old kitchens to small producers dedicated to their craft, each discovery tells a story of heritage, authenticity, and a love of good food.</p>
                <p>Today, Casa Taglia is our way of bringing a little of Italy into your home. Every product is thoughtfully selected, every producer has a story worth telling, and every discovery is something we are genuinely excited to share.</p>
                <p className="text-on-surface font-semibold">What began as a love letter to my wife has become an invitation to experience the Italy we love.</p>
              </div>
              <p className="mt-8 font-headline-sm text-xl italic text-primary">— MJ Taglia</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="w-full bg-surface-bright py-12 lg:py-16 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-parchment rounded-sm mb-4">
              <span className="size-2 rounded-full bg-secondary-container" />
              <span className={`${label} text-secondary tracking-[0.18em]`}>About Casa Taglia</span>
            </div>
            <h2 className="font-display-hero text-[36px] leading-[42px] lg:text-[56px] lg:leading-[64px] text-on-surface tracking-tight mb-6 [text-wrap:balance]">
              Connecting good kitchens with Italy’s small family producers.
            </h2>
            <p className="text-body-lg text-ink-secondary max-w-3xl leading-relaxed">
              We are an independent importer of regional Italian food. We find families who still make things the traditional way, buy from them directly, and bring their oils, vinegars, pasta and cheeses to your table with their names still on the label.
            </p>
          </div>
        </div>
      </section>


      {/* Why we exist */}
      <section className="w-full bg-surface-bright py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <img
                className="w-full h-[400px] lg:h-[540px] object-cover"
                alt="A sunlit Italian country kitchen with bottles of olive oil, balsamic vinegar, Parmigiano Reggiano and an open tasting notebook"
                src={`${img}/AB6AXuA-bbqWLYWExlJuEwycWELty73EaPkLQyo1Vfqr4_-TRjgYjpnupK6ZF7rb44UT9eLR_8zT3b7S90rpG5ou7CsXF9z7G40Z55bLSvVrItRzDYUhxWWDskmwkHhOBD37Ujy46CZXmBSDyN76yOE-xYm3qjgfSv0Tl8PVD-Tw1uCeyWXGpUgEnZ6e8rtw1ZvmRF6AdctXjD1WR-4C-L4iUNLB-Fkp6lSSnaAOyQyjO229V1vqO7l2c8qy`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <span className={`${label} tracking-widest text-secondary-container`}>Tasted at the source</span>
                <p className="font-headline-sm text-headline-sm mt-1">Every product is tasted where it is made before it joins the shop.</p>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-72 bg-surface-container-lowest p-6 rounded-lg shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="workspace_premium" className="text-secondary-container text-2xl" />
                <span className="text-subheading text-on-surface font-semibold">Direct from the maker</span>
              </div>
              <p className="text-body-sm text-ink-secondary">No wholesale middlemen. We pay producers directly, at the price they ask.</p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className={`${label} text-primary tracking-[0.16em] mb-3`}>Why we exist</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface leading-tight mb-6">What gets lost on the way to the shelf</h2>
            <div className="space-y-4 text-body-md text-ink-secondary leading-relaxed">
              <p>Most Italian food sold abroad passes through several hands before it reaches a shop: exporters, brokers, distributors. It often spends months in transit and in warehouses, and heat and time are hard on olive oil and cheese.</p>
              <p>Along the way, the maker often disappears. Bulk oil or vinegar is bought by the tank, blended, and sold under a new label that says little about who made it or where.</p>
              <p className="text-on-surface font-semibold">Casa Taglia was started to do the opposite: buy directly, keep the maker’s name on the label, and get the food to you while it still tastes of the place it came from.</p>
            </div>
            <div className="mt-8">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-wine-hover text-on-primary text-button-sm font-bold tracking-wider uppercase rounded transition-colors shadow-sm" href="#pillars">
                How we work <Icon name="arrow_downward" className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 scroll-mt-20" id="pillars">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`${label} text-secondary tracking-[0.2em] mb-2 block`}>How we work</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-4">Three things we never compromise on</h2>
            <p className="text-body-md text-ink-secondary">How we choose producers, what we check, and how the food gets to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.n} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className={`size-14 rounded-lg bg-surface-parchment flex items-center justify-center ${p.tone} mb-6`}><Icon name={p.icon} className="text-3xl" /></div>
                <div className={`${label} ${p.tone} tracking-widest mb-2`}>Pillar {p.n}</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{p.title}</h3>
                <p className="text-body-sm text-ink-secondary leading-relaxed mb-6 flex-grow">{p.body}</p>
                <div className="bg-surface-soft p-4 rounded-lg">
                  <div className="text-body-sm font-bold text-on-surface mb-1">{p.boxTitle}</div>
                  <p className="text-caption text-ink-secondary">{p.box}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designations */}
      <section className="w-full bg-surface-bright py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className={`${label} text-secondary tracking-[0.16em] mb-2 block`}>Reading the label</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-4">What the Italian seals mean</h2>
            <p className="text-body-md text-ink-secondary mb-6">Europe’s protected food names are some of the strictest in the world. Here is what each one on our labels guarantees.</p>
            <div className="p-6 bg-surface-parchment rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-headline-sm mb-2"><Icon name="verified" /> Our no-relabeling promise</div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">“We never replace a maker’s name with our own. The people and the place behind the food belong on the label.”</p>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {seals.map((s) => (
              <div key={s.tag} className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`px-2.5 py-1 ${s.bg} ${label} rounded`}>{s.tag}</span>
                  <span className="text-caption text-ink-tertiary text-right">{s.it}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{s.title}</h3>
                <p className="text-body-sm text-ink-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="w-full bg-surface-parchment py-16 lg:py-24 scroll-mt-20" id="people">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className={`${label} text-secondary tracking-[0.2em] mb-2 block`}>The people</span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface">The founders and the families we buy from</h2>
            </div>
            <p className="text-body-md text-ink-secondary max-w-md">A small team in the US, and the producers across Italy whose food fills our shop.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {people.map((p) => (
              <div key={p.name} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className={`h-64 overflow-hidden ${p.contain ? 'bg-surface-soft flex items-center justify-center' : ''}`}>
                  <img className={p.contain ? 'w-4/5 h-4/5 object-contain' : 'w-full h-full object-cover'} src={p.photo} alt={p.name} loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="font-headline-sm text-headline-sm text-on-surface mb-1">{p.name}</div>
                  <div className={`text-caption ${p.tone} font-bold uppercase tracking-wider mb-3`}>{p.role}</div>
                  <p className="text-body-sm text-ink-secondary leading-relaxed flex-grow">{p.body}</p>
                  <a href={p.href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">{p.link} <Icon name="arrow_forward" className="text-base" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="w-full bg-surface-bright py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className={`${label} text-secondary tracking-[0.2em] mb-2 block`}>How we compare</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-4">A different kind of importer</h2>
            <p className="text-body-md text-ink-secondary">How buying direct from family producers differs from the usual route to the shelf.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full bg-surface-container-lowest rounded-xl shadow-sm text-left">
              <thead>
                <tr className={`${label} text-ink-tertiary tracking-wider`}>
                  <th className="p-6 pb-4 font-bold w-1/4">What matters</th>
                  <th className="p-6 pb-4 font-bold text-primary w-1/4">Casa Taglia</th>
                  <th className="p-6 pb-4 font-bold w-1/4">Typical specialty importers</th>
                  <th className="p-6 pb-4 font-bold w-1/4">Supermarket “Italian” brands</th>
                </tr>
              </thead>
              <tbody className="text-body-sm">
                {compare.map(([what, us, them, shelf]) => (
                  <tr key={what} className="border-t border-surface-container align-top">
                    <th scope="row" className="px-6 py-5 text-on-surface font-semibold">{what}</th>
                    <td className="px-6 py-5 text-primary font-semibold">{us}</td>
                    <td className="px-6 py-5 text-ink-secondary">{them}</td>
                    <td className="px-6 py-5 text-ink-secondary">{shelf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Responsibility */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className={`${label} text-secondary tracking-[0.2em] mb-2 block`}>Why it matters</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-4">Keeping small producers in business</h2>
            <p className="text-body-md text-ink-secondary">When families are paid fairly for slow, careful work, the next generation has a reason to stay on the farm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="spa" className="text-primary text-3xl" />
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Fair prices, paid directly</h3>
                  <p className="text-caption text-ink-tertiary">What buying direct means in practice</p>
                </div>
              </div>
              <p className="text-body-md text-ink-secondary mb-6 leading-relaxed">
                Many of our producers are in rural areas where young people leave for the cities: the mountains of Abruzzo and Molise, the hills of Basilicata. Buying from them directly, at the price they set, helps keep old olive groves tended, dairies open and traditional recipes in daily use.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-surface-container">
                <div><div className="font-display-hero text-headline-sm text-primary font-bold">{regionMeta.length}</div><div className="text-caption text-ink-secondary">Regions we buy from</div></div>
                <div><div className="font-display-hero text-headline-sm text-secondary font-bold">{products.length}</div><div className="text-caption text-ink-secondary">Products in the shop</div></div>
                <div><div className="font-display-hero text-headline-sm text-coastal-blue font-bold">100%</div><div className="text-caption text-ink-secondary">Producer-named labels</div></div>
              </div>
            </div>
            <div className="bg-surface-parchment p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary mb-6"><Icon name="recycling" className="text-2xl" /></div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Less waste in every box</h3>
                <p className="text-body-sm text-ink-secondary leading-relaxed mb-4">We pack to protect the food, not to impress: paper and recyclable materials wherever they do the job, and insulation only where a product needs it.</p>
              </div>
              <div className="flex items-center gap-2 text-secondary font-semibold text-caption"><Icon name="eco" className="text-sm" /> Recyclable packaging where possible</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-surface-bright py-16 lg:py-24 scroll-mt-20" id="faq">
        <div className="max-w-[880px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className={`${label} text-secondary tracking-[0.2em] mb-2 block`}>Questions</span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-3">Frequently asked questions</h2>
            <p className="text-body-md text-ink-secondary">How we choose producers, how we ship, and how to order larger quantities.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={f.q} className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <span className="text-subheading font-semibold text-on-surface">{f.q}</span>
                  <Icon name="expand_more" className={`text-ink-tertiary transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div id={`faq-${i}`} className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden px-6">
                    <p className="pb-6 pt-3 border-t border-surface-container text-body-sm text-ink-secondary leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-16 lg:py-20 text-on-primary">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 mb-4 ${label} tracking-widest text-secondary-container`}>Direct from Italy</div>
            <h2 className="font-display-hero text-headline-md lg:text-headline-lg mb-4 text-white">Taste the difference a place makes.</h2>
            <p className="text-body-md text-white/80 max-w-2xl leading-relaxed">Unfiltered olive oils, bronze-die pasta and balsamic vinegar aged for years in wooden barrels, all from the families who make them.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <a className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-container hover:bg-gold-hover text-button-ink text-button font-bold rounded-sm transition-colors shadow-md" href="/shop">
              Explore the pantry <Icon name="arrow_forward" className="text-base" />
            </a>
            <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/10 text-white text-button font-bold rounded-sm transition-colors" onClick={() => setModal(true)}>
              <Icon name="support_agent" className="text-base" /> Contact us
            </button>
          </div>
        </div>
      </section>

      {modal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={close}>
          <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} aria-label="Close" className="absolute top-4 right-4 text-ink-tertiary hover:text-on-surface" onClick={close}><Icon name="close" /></button>
            <div className="size-12 rounded-full bg-surface-parchment flex items-center justify-center text-primary mb-4"><Icon name="mail" className="text-2xl" /></div>
            <h3 id="contact-title" className="font-headline-sm text-headline-sm text-on-surface mb-2">Get in touch</h3>
            <p className="text-body-sm text-ink-secondary mb-6">Larger orders, gifts, producer partnerships or press: tell us what you need and we’ll reply by email.</p>
            <form className="space-y-4" onSubmit={submit}>
              <Field id="ct-name" text="Your name"><input id="ct-name" name="name" required autoComplete="name" maxLength={120} className={input} /></Field>
              <Field id="ct-email" text="Email address"><input id="ct-email" name="email" type="email" required autoComplete="email" maxLength={160} className={input} /></Field>
              <Field id="ct-type" text="What is it about?">
                <select id="ct-type" name="type" className={input}>{inquiryTypes.map((t) => <option key={t}>{t}</option>)}</select>
              </Field>
              <Field id="ct-msg" text="Message"><textarea id="ct-msg" name="message" required rows={4} maxLength={4000} placeholder="Tell us how we can help…" className={`${input} resize-none`} /></Field>
              {err && <p role="alert" className="text-sm text-error">{err}</p>}
              <button disabled={sending} className="w-full py-3 bg-primary hover:bg-wine-hover disabled:opacity-60 text-on-primary text-button-sm font-bold uppercase tracking-wider rounded transition-colors" type="submit">
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div role="status" className={`fixed bottom-6 right-6 z-50 bg-surface-container-lowest text-on-surface px-6 py-4 rounded-lg shadow-xl border-l-4 border-pistachio-light flex items-center gap-3 transition-all duration-300 ${sent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
        <Icon name="check_circle" className="text-pistachio-light" />
        <div>
          <div className="text-body-sm font-bold">Message sent</div>
          <div className="text-caption text-ink-secondary">Thank you. We’ll reply by email soon.</div>
        </div>
      </div>
    </Layout>
  );
}

const input = 'w-full px-4 py-2.5 rounded bg-surface-container border border-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary text-body-sm';

function Field({ id, text, children }: { id: string; text: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={`block ${label} text-ink-secondary mb-1`}>{text}</label>
      {children}
    </div>
  );
}
