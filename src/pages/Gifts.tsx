import { useEffect, useRef, useState, type FormEvent } from 'react';
import Layout from '../components/Layout';
import { useBasket } from '../cartStore';
import { crestImg, featured, giftFilters, hampers, matches, protocols, tiersCorporate, type GiftFilter, type Hamper } from '../giftData';

const label = 'font-label-caps text-label-caps uppercase';

export default function Gifts() {
  const [filter, setFilter] = useState<GiftFilter>('all');
  const [, setBasket] = useBasket();
  const [toast, setToast] = useState<string | null>(null);
  const [modal, setModal] = useState(false);
  const timer = useRef<number>();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    if (!modal) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setModal(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  function notify(msg: string) {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }

  function reserve(h: Hamper) {
    setBasket((b) => {
      const found = b.items.find((i) => i.id === h.id);
      const items = found
        ? b.items.map((i) => (i.id === h.id ? { ...i, qty: i.qty + 1 } : i))
        : [...b.items, {
            id: h.id, maker: `La Taglia Gift Hamper · ${h.eyebrow}`, name: h.name, meta: h.items.join(' · '),
            unit: h.price, qty: 1, wrap: true, badge: { label: h.badge, className: 'text-badge-ink' }, img: h.img,
          }];
      return { ...b, items };
    });
    notify(`${h.name} ($${h.price}) added to your basket`);
  }

  function submitConcierge(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setModal(false);
    notify('Concierge request noted. Preview only: it was not sent.');
  }

  const showFeatured = matches(featured, filter);
  const grid = hampers.filter((h) => matches(h, filter));

  return (
    <Layout>
      <div
        role="status"
        className={`fixed bottom-8 right-4 left-4 sm:left-auto sm:right-8 z-50 transition-all duration-300 pointer-events-none flex items-center gap-4 bg-surface-container-lowest px-6 py-4 rounded-full shadow-2xl ${toast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <span className="size-2 rounded-full bg-pistachio-light shrink-0" />
        <span className="font-body-sm text-body-sm text-on-surface font-semibold tracking-wide">{toast}</span>
        {toast?.includes('basket') && <a href="/cart" className="pointer-events-auto text-primary font-bold text-sm hover:underline shrink-0">View</a>}
      </div>

      <section className="relative w-full bg-surface-parchment overflow-hidden px-6 lg:px-12 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-secondary-container/10" />
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="mb-8 max-w-[280px] opacity-90">
            <img src={crestImg} alt="La Taglia House Crest" className="w-full h-auto object-contain" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary shrink-0" />
                <p className={`${label} text-primary tracking-[0.2em]`}>Archival Curations &amp; Cellar Hampers / Gourmet Gifting</p>
              </div>
              <h1 className="font-headline-lg text-[34px] leading-[40px] sm:text-headline-lg lg:text-[54px] lg:leading-[62px] text-on-surface tracking-tight">
                Curated Gifts from Italy: Keepsake Linen Boxes &amp; Heritage Wood Crates
              </h1>
              <p className="font-body-lg text-body-lg text-ink-secondary max-w-2xl leading-relaxed">
                Hand-packed in rigid linen-embossed keepsake presentation boxes with hand-tied grosgrain ribbons, custom calligraphy cards, and cold-chain thermal insulation.
              </p>
            </div>
            <div className="lg:col-span-4 bg-surface-container-lowest/80 backdrop-blur-md p-8 rounded-xl shadow-sm flex flex-col gap-6">
              {[
                ['workspace_premium', '7 Curated Hampers', 'Direct artisanal origins, protected DOP & IGP certs.'],
                ['thermostat', 'Climate Dispatch', 'Complimentary temperature-controlled transit over $125.'],
                ['draw', 'Bespoke Concierge', 'Multi-recipient executive service & wax seal stamps.'],
              ].map(([icon, t, b]) => (
                <div key={t} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-container text-2xl mt-0.5">{icon}</span>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block">{t}</span>
                    <p className="font-caption text-caption text-ink-secondary">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[65px] z-40 bg-surface-bright/95 backdrop-blur-md py-4 px-6 lg:px-12 shadow-sm">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 min-w-max">
            {giftFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`px-5 py-2.5 rounded-full font-button-sm text-button-sm uppercase tracking-wider transition-all duration-200 ${filter === f.value ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-ink-secondary hover:text-on-surface hover:bg-surface-container-high'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 text-ink-tertiary font-caption text-caption min-w-max">
            <span className="material-symbols-outlined text-base">lock</span>
            <span>Guaranteed White Glove Presentation</span>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        {showFeatured && (
          <div className="mb-16 rounded-xl bg-surface-container-lowest shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${featured.img}')` }} />
                <span className={`absolute top-6 left-6 z-10 px-4 py-1.5 rounded bg-surface-container-lowest text-badge-ink ${label} tracking-widest shadow-sm`}>{featured.badge}</span>
                <div className="absolute bottom-6 left-6 z-10 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-lg text-white">
                  <span className={`${label} tracking-wider text-secondary-fixed`}>Master Cask Edition</span>
                  <span className="block font-caption text-caption text-white/80">Only 24 Crates Assembled Monthly</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <span className={`${label} text-secondary tracking-widest`}>{featured.eyebrow}</span>
                    <span className="font-headline-md text-headline-md text-primary font-bold">${featured.price}</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-4 leading-snug">{featured.name}</h2>
                  <p className="font-body-md text-body-md text-ink-secondary mb-6">{featured.blurb}</p>
                  <div className="bg-surface-parchment p-6 rounded-lg mb-8">
                    <p className={`${label} tracking-wider text-primary mb-3`}>Itemized Cellar Manifest</p>
                    <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface">
                      {featured.items.map((it) => (
                        <li key={it} className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span><span>{it}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button onClick={() => reserve(featured)} className="w-full bg-secondary-container hover:bg-gold-hover text-button-ink font-button text-button uppercase tracking-wider py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all">
                  Reserve Gift Hamper
                </button>
              </div>
            </div>
          </div>
        )}

        {grid.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grid.map((h) => (
              <article key={h.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${h.img}')` }} role="img" aria-label={h.name} />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded bg-surface-container-lowest ${h.badgeClass ?? 'text-badge-ink'} ${label} tracking-wider shadow-sm`}>{h.badge}</span>
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full font-headline-sm text-headline-sm text-primary">${h.price}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`${label} text-secondary tracking-widest block mb-1`}>{h.eyebrow}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{h.name}</h3>
                    <p className="font-body-sm text-body-sm text-ink-secondary mb-4 line-clamp-2">{h.blurb}</p>
                    <div className="bg-surface-parchment p-4 rounded-lg mb-6 space-y-2 text-on-surface font-body-sm text-body-sm">
                      {h.items.map((it) => (
                        <div key={it} className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-sm mt-1">check</span><span>{it}</span></div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => reserve(h)} className="w-full bg-secondary-container hover:bg-gold-hover text-button-ink font-button-sm text-button-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all">
                    Reserve Gift Hamper
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          !showFeatured && <p className="text-center text-ink-secondary py-12">No hampers in this collection yet.</p>
        )}
      </section>

      <section id="corporate" className="w-full px-6 lg:px-12 py-16 bg-surface-bright scroll-mt-24">
        <div className="max-w-[1320px] mx-auto rounded-2xl bg-primary-container text-on-primary p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/40 blur-3xl pointer-events-none" />
          <div className="absolute right-12 top-12 opacity-10 pointer-events-none hidden lg:block">
            <span className="material-symbols-outlined text-[180px]">card_giftcard</span>
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary-container">domain</span>
              <span className={`${label} tracking-widest text-secondary-fixed`}>Executive Services</span>
            </div>
            <h2 className="font-headline-lg text-[32px] leading-[38px] sm:text-headline-lg text-white mb-6">Corporate Gifting &amp; Bespoke Multi-Address Dispatch</h2>
            <p className="font-body-lg text-body-lg text-white/90 leading-relaxed mb-8">
              A designated senior concierge manages your executive orders from single boardroom thank-yous to 500+ client dispatches. Every delivery features customized blind-debossed wax seals, bespoke heavy linen insert folios with hand-typed typography, and guaranteed consolidated tracking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {tiersCorporate.map(([t, b]) => (
                <div key={t} className="bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                  <span className="font-headline-sm text-headline-sm text-secondary-container block">{t}</span>
                  <span className="font-caption text-caption text-white/70">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button onClick={() => setModal(true)} className="bg-secondary-container hover:bg-gold-hover text-button-ink font-button text-button uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition-all text-center">
                Connect with Corporate Concierge
              </button>
              <button onClick={() => notify('The corporate catalogue PDF is not available yet.')} className="bg-white/10 hover:bg-white/20 text-white font-button-sm text-button-sm uppercase tracking-wider py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 text-center">
                <span className="material-symbols-outlined text-sm">download</span>
                Download Corporate Catalogue (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className={`${label} text-secondary tracking-widest block mb-2`}>The La Taglia Standards</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Uncompromising Gifting Protocols</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocols.map((p) => (
            <div key={p.title} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-full bg-surface-parchment flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-3">{p.title}</h4>
                <p className="font-body-sm text-body-sm text-ink-secondary">{p.body}</p>
              </div>
              <span className={`mt-6 text-badge-ink ${label}`}>{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {modal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setModal(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="concierge-title" className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} aria-label="Close" onClick={() => setModal(false)} className="absolute top-6 right-6 text-ink-secondary hover:text-on-surface">
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className={`${label} text-secondary tracking-widest block mb-2`}>Private Client Office</span>
            <h3 id="concierge-title" className="font-headline-md text-headline-md text-on-surface mb-4 pr-8">Request Corporate Consultation</h3>
            <p className="font-body-sm text-body-sm text-ink-secondary mb-6">Our executive gifting specialists will return a complete itemized proposal and sample manifest within four business hours.</p>
            <form className="space-y-4" onSubmit={submitConcierge}>
              <ModalField id="cc-name" text="Contact Name"><input id="cc-name" required autoComplete="name" placeholder="e.g. Alessandra Moretti" className={modalInput} /></ModalField>
              <ModalField id="cc-email" text="Corporate Email"><input id="cc-email" type="email" required autoComplete="email" placeholder="name@company.com" className={modalInput} /></ModalField>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ModalField id="cc-qty" text="Estimated Recipients">
                  <select id="cc-qty" className={modalInput}><option>15 – 50 parcels</option><option>51 – 150 parcels</option><option>150+ parcels</option></select>
                </ModalField>
                <ModalField id="cc-when" text="Timeline">
                  <select id="cc-when" className={modalInput}><option>Immediate (This week)</option><option>Within 30 Days</option><option>Holiday Pre-Order</option></select>
                </ModalField>
              </div>
              <button type="submit" className="w-full mt-4 bg-primary hover:bg-wine-hover text-on-primary font-button text-button uppercase py-4 rounded-full transition-colors">Transmit Inscription Request</button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

const modalInput = 'w-full bg-surface-parchment border-0 rounded-lg px-4 py-3 font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary outline-none';

function ModalField({ id, text, children }: { id: string; text: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-caption text-caption text-ink-secondary uppercase mb-1">{text}</label>
      {children}
    </div>
  );
}
