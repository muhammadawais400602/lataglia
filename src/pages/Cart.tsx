import { useState } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { addOns, type CartItem } from '../cartData';
import { useSettings } from '../storeApi';
import { useBasket } from '../cartStore';

const label = 'font-label-caps text-label-caps uppercase';
const usd = (n: number) => `$${n.toFixed(2)}`;

export default function Cart() {
  const [basket, setBasket] = useBasket();
  const settings = useSettings();
  const FREE_FREIGHT_AT = settings.freeShippingAt;
  const FREIGHT = settings.freightExpress;
  const PROMO = settings.promo;
  const items = basket.items;
  const setItems = (fn: (list: CartItem[]) => CartItem[]) => setBasket((b) => ({ ...b, items: fn(b.items) }));
  const [code, setCode] = useState('');
  const [invalid, setInvalid] = useState(false);
  const promo = basket.promo ? 'applied' : invalid ? 'invalid' : 'none';
  const toast = useToast();

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.unit * i.qty, 0);
  const remaining = Math.max(0, FREE_FREIGHT_AT - subtotal);
  const freight = items.length && remaining > 0 ? FREIGHT : 0;
  const discount = promo === 'applied' && PROMO.active ? subtotal * PROMO.rate : 0;
  const total = subtotal - discount + freight;
  const pct = Math.min(100, (subtotal / FREE_FREIGHT_AT) * 100);

  const update = (id: string, patch: Partial<CartItem>) =>
    setItems((list) => list.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  const remove = (id: string) => setItems((list) => list.filter((i) => i.id !== id));

  function addOn(a: (typeof addOns)[number]) {
    setItems((list) => {
      const found = list.find((i) => i.id === a.id);
      if (found) return list.map((i) => (i.id === a.id ? { ...i, qty: i.qty + 1 } : i));
      return [...list, {
        id: a.id, maker: `${a.maker} · ${a.region}`, name: a.name, meta: a.detail, unit: a.unit, qty: 1, wrap: false,
        badge: { label: a.region, className: 'text-ink-secondary' }, img: a.img,
      }];
    });
    toast.show(`Added: ${a.name} (${usd(a.unit)})`);
  }

  function applyCode() {
    const ok = PROMO.active && code.trim().toUpperCase() === PROMO.code;
    setInvalid(!ok);
    if (ok) setBasket((b) => ({ ...b, promo: true }));
  }

  return (
    <Layout>
      <Toast message={toast.message} />
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <nav aria-label="Checkout Progress" className="mb-10 lg:mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-surface-container-highest">
            <div>
              <span className={`${label} tracking-widest text-secondary text-xs`}>Curated Italian Provisions</span>
              <h1 className="font-headline-md text-headline-md text-on-surface mt-1">Degustation Basket</h1>
            </div>
            <ol className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-button-sm tracking-wider">
              {['Basket Review', 'Cold-Chain & Destination', 'Payment & Cellar Seal'].map((step, i) => (
                <li key={step} className={`flex items-center gap-2 ${i === 0 ? 'text-primary font-bold' : 'text-ink-tertiary'}`} aria-current={i === 0 ? 'step' : undefined}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${i === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-ink-secondary'}`}>{i + 1}</span>
                  <span className={`uppercase ${i === 0 ? '' : 'hidden sm:inline'}`}>{step}</span>
                  {i < 2 && <span className="text-outline-variant font-normal">/</span>}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <section aria-labelledby="shipping-meter-heading" className="mb-10 bg-surface-parchment p-6 sm:p-7 rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-xl">ac_unit</span>
              </div>
              <div>
                <h2 id="shipping-meter-heading" className="font-subheading text-subheading text-on-surface">Complimentary Cold-Chain Freight &amp; Thermal Straw Packaging</h2>
                <p className="font-body-sm text-body-sm text-ink-secondary">
                  {remaining > 0
                    ? <>Add <span className="font-bold text-primary">{usd(remaining)}</span> more in provisions to unlock zero-cost transit (Threshold: {usd(FREE_FREIGHT_AT)}).</>
                    : <>Zero-cost transit <span className="font-bold text-primary">unlocked</span> for this basket.</>}
                </p>
              </div>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="font-headline-sm text-headline-sm text-primary">{usd(subtotal)}</span>
              <span className="font-caption text-caption text-ink-tertiary block">of {usd(FREE_FREIGHT_AT)} goal</span>
            </div>
          </div>
          <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden p-0.5">
            <div className="h-full rounded-full bg-gradient-to-r from-secondary-container via-pistachio-light to-secondary transition-all duration-700 ease-out" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex justify-between items-center mt-2.5 text-xs font-body-sm">
            <span className="flex items-center gap-1.5 text-tertiary-container font-semibold">
              <span className="material-symbols-outlined text-sm">nest_eco_leaf</span> Zero-footprint hemp lining active
            </span>
            <span className="text-ink-tertiary">{Math.floor(pct)}% Achieved</span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-12 min-w-0">
            <section aria-labelledby="basket-contents-heading" className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-surface-container-high">
                <h2 id="basket-contents-heading" className="font-subheading text-subheading tracking-wide uppercase text-on-surface">
                  Select Imports ({items.length} {items.length === 1 ? 'Item' : 'Items'})
                </h2>
                <span className="font-caption text-caption text-ink-tertiary">All parcels packed in biodegradable insulated casing</span>
              </div>

              {items.length === 0 && (
                <div className="p-10 bg-surface-container-lowest rounded-xl text-center">
                  <p className="text-ink-secondary mb-4">Your basket is empty.</p>
                  <a href="/shop" className="inline-block px-6 py-3 rounded-full bg-primary text-on-primary font-button text-button uppercase tracking-wider hover:bg-wine-hover transition-colors">Browse Provisions</a>
                </div>
              )}

              {items.map((item) => (
                <article key={item.id} className="p-5 sm:p-6 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="relative w-full sm:w-28 sm:h-28 h-48 rounded-lg overflow-hidden shrink-0 bg-surface-container-low">
                      <img className="w-full h-full object-cover" src={item.img} alt={item.name} loading="lazy" />
                      <span className={`absolute top-2 left-2 px-1.5 py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider ${item.badge.className}`}>{item.badge.label}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className={`${label} text-ink-secondary`}>{item.maker}</p>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                              {item.href ? <a href={item.href} className="hover:underline">{item.name}</a> : item.name}
                            </h3>
                            <p className="font-caption text-caption text-ink-tertiary mt-0.5">{item.meta}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-headline-sm text-headline-sm text-primary block">{usd(item.unit * item.qty)}</span>
                            <span className="font-caption text-caption text-ink-tertiary">({usd(item.unit)} ea)</span>
                          </div>
                        </div>
                        {item.note === 'provenance' && (
                          <div className="mt-3 py-1.5 px-3 bg-surface-parchment rounded-lg inline-flex items-center gap-2 text-xs text-on-surface-variant font-body-sm">
                            <span className="material-symbols-outlined text-sm text-secondary">verified</span>
                            <span>Stone-milled on Mount Etna volcanic slopes using certified slow-roast kernels.</span>
                          </div>
                        )}
                        {item.note === 'drying' && (
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-secondary">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pistachio-light" /> 48-Hour Low Temperature Drying</span>
                            <span className="text-outline-variant">·</span>
                            <span>Rough porosity for dense ragù retention</span>
                          </div>
                        )}
                        {item.note === 'stamp' && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded text-xs text-on-surface font-button-sm">
                              <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
                              Numbered Consorzio Stamp #8412
                            </span>
                            <span className="text-xs text-badge-ink font-semibold">Includes Velvet Collector Sleeve</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-5 pt-4 border-t border-surface-container-low flex flex-wrap items-center justify-between gap-4">
                        <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm text-ink-secondary select-none">
                          <input type="checkbox" checked={item.wrap} onChange={(e) => update(item.id, { wrap: e.target.checked })} className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" />
                          <span>Complimentary debossed kraft wrap &amp; botanical seal</span>
                        </label>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-surface-container-low rounded-full px-2 py-1">
                            <button aria-label={`Decrease ${item.name}`} disabled={item.qty <= 1} onClick={() => update(item.id, { qty: item.qty - 1 })} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container-lowest text-on-surface transition-colors disabled:opacity-40">
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="w-8 text-center font-button-sm text-button-sm text-on-surface" aria-live="polite">{item.qty}</span>
                            <button aria-label={`Increase ${item.name}`} onClick={() => update(item.id, { qty: item.qty + 1 })} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container-lowest text-on-surface transition-colors">
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>
                          <button aria-label={`Remove ${item.name}`} onClick={() => remove(item.id)} className="text-ink-tertiary hover:text-status-red transition-colors p-1.5">
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section aria-labelledby="addons-heading" className="pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className={`${label} text-secondary`}>Pantry Recommendations</span>
                  <h2 id="addons-heading" className="font-headline-sm text-headline-sm text-on-surface">Complete Your Degustation Table</h2>
                </div>
                <span className="font-caption text-caption text-ink-tertiary hidden sm:block">Direct additions ship in the same thermal casing</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {addOns.map((a) => (
                  <div key={a.id} className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow transition-shadow">
                    <div>
                      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-surface-container-low mb-3">
                        <img className="w-full h-full object-cover" src={a.img} alt={a.name} loading="lazy" />
                        <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-surface-container-lowest/90 rounded text-[9px] font-bold text-ink-secondary uppercase">{a.region}</span>
                      </div>
                      <p className="font-label-caps text-[10px] uppercase text-ink-secondary">{a.short}</p>
                      <h4 className="font-subheading text-sm text-on-surface font-semibold line-clamp-1">{a.name}</h4>
                      <p className="font-caption text-caption text-ink-tertiary mt-0.5">{a.detail}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-surface-container-low flex items-center justify-between">
                      <span className="font-bold text-primary text-sm">+{usd(a.unit)}</span>
                      <button onClick={() => addOn(a)} className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-button-sm text-xs transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">add</span> Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside aria-labelledby="summary-heading" className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-md border-t-4 border-t-primary">
              <h2 id="summary-heading" className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center justify-between">
                <span>Order Summary</span>
                <span className="font-caption text-caption text-ink-tertiary uppercase tracking-wider">USD</span>
              </h2>
              <div className="space-y-4 text-sm font-body-md text-on-surface">
                <Row label={`Provisions Subtotal (${count} ${count === 1 ? 'item' : 'items'})`} value={usd(subtotal)} />
                {discount > 0 && <Row label={`Guild Code ${PROMO.code} (−${PROMO.rate * 100}%)`} value={`−${usd(discount)}`} valueClass="text-pistachio-light" />}
                <Row
                  label={<span className="flex items-center gap-1.5">Estimated Climate Freight <span className="material-symbols-outlined text-sm text-ink-tertiary cursor-help" title="Direct refrigerated air express ensures organoleptic profile preservation">info</span></span>}
                  value={freight ? usd(freight) : 'Complimentary'}
                  valueClass={freight ? '' : 'text-pistachio-light'}
                />
                <Row
                  label={<span className="flex items-center gap-1.5">Thermal Straw &amp; Dry-Ice Preservation <span className="px-1.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded text-[10px] font-bold">ECO</span></span>}
                  value="Included ($0.00)" valueClass="text-pistachio-light"
                />
                <Row label="Direct Import Customs & Excise" value="Included" valueClass="text-ink-secondary font-medium" />
                {remaining > 0 && items.length > 0 && (
                  <div className="p-3 bg-surface-parchment rounded-lg text-xs text-ink-secondary flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">local_shipping</span>
                    <span>Enjoy <strong>Complimentary Climate Freight</strong> by adding {usd(remaining)} more of estate harvest goods.</span>
                  </div>
                )}
                <div className="pt-4 border-t border-surface-container-high flex items-baseline justify-between gap-4">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block">Estimated Total</span>
                    <span className="font-caption text-caption text-ink-tertiary">All duties and regional VAT covered</span>
                  </div>
                  <span className="font-headline-sm text-[34px] sm:text-headline-lg text-primary font-bold">{usd(total)}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container-low">
                <details className="group" open={promo !== 'none'}>
                  <summary className="flex items-center justify-between text-xs font-button-sm uppercase tracking-wider text-ink-secondary cursor-pointer hover:text-primary list-none">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">sell</span>
                      Apply Cellar Inscription or Guild Code
                    </span>
                    <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); applyCode(); }}>
                    <input value={code} onChange={(e) => setCode(e.target.value)} aria-label="Guild code" placeholder="e.g. BRONTE15" type="text" className="w-full text-xs font-body-sm px-3 py-2 bg-surface-container-low rounded border border-transparent focus:border-secondary focus:bg-surface-container-lowest focus:outline-none focus:ring-0 uppercase" />
                    <button type="submit" className="px-4 py-2 bg-secondary text-on-secondary rounded text-xs font-button-sm tracking-wider uppercase hover:bg-gold-hover transition-colors shrink-0">Apply</button>
                  </form>
                  {promo === 'applied' && PROMO.active && <p className="mt-2 text-xs text-pistachio-light font-semibold">{PROMO.code} applied: {PROMO.rate * 100}% off provisions.</p>}
                  {promo === 'invalid' && <p className="mt-2 text-xs text-status-red font-semibold">That code isn't recognised.</p>}
                </details>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="/checkout"
                  aria-disabled={!items.length}
                  className="w-full py-4 px-6 rounded-full bg-primary hover:bg-wine-hover text-on-primary font-button text-button shadow-md hover:shadow-lg transition-all flex flex-wrap items-center justify-center gap-2 group aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                >
                  <span>Proceed to Cold-Chain Checkout</span>
                  <span className="font-normal opacity-80">·</span>
                  <span>{usd(total)}</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <a href="/shop" className="w-full py-3 px-6 rounded-full hover:bg-surface-container text-on-surface font-button-sm text-button-sm transition-colors text-center block tracking-wider uppercase">
                  Continue Exploring the Pantry
                </a>
              </div>
              <p className="mt-6 font-caption text-caption text-ink-tertiary flex flex-wrap items-center justify-center gap-1.5 text-center">
                <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                Next chilled dispatch leaves Bologna hub: <strong className="text-on-surface">Tomorrow, 14:00 CET</strong>
              </p>
            </div>

            <div className="bg-surface-parchment p-6 rounded-xl space-y-4">
              <Seal icon="thermostat" iconClass="bg-wine-dark/10 text-primary" title="Unbroken Climate Cold-Chain" body="Real-time temperature logging probes embedded in every perishable crate from Milan to doorstep." />
              <Seal icon="verified" iconClass="bg-secondary/15 text-secondary" title="100% Direct-from-Estate DOP/IGP" body="Bottled at origin with certified micro-lot serial identifiers; no intermediaries, no adulteration." />
              <Seal icon="security" iconClass="bg-pistachio-light/20 text-tertiary" title="Insured Artisanal Courier" body="Comprehensive bottle breakage replacement guarantee paired with white-glove transit handling." />
            </div>

            <div className="px-4 py-3 rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-3 text-xs text-ink-secondary">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">support_agent</span>
                Need wine pairings or estate provenance papers?
              </span>
              <a className="font-bold text-primary hover:underline shrink-0" href="mailto:concierge@lataglia.example">Speak with Sommelier</a>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

function Row({ label, value, valueClass = '' }: { label: React.ReactNode; value: string; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-ink-secondary">{label}</span>
      <span className={`font-semibold text-on-surface text-right ${valueClass}`}>{value}</span>
    </div>
  );
}

function Seal({ icon, iconClass, title, body }: { icon: string; iconClass: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${iconClass}`}>
        <span className="material-symbols-outlined text-lg">{icon}</span>
      </div>
      <div>
        <h3 className="font-button-sm text-button-sm text-on-surface uppercase tracking-wide">{title}</h3>
        <p className="font-caption text-caption text-ink-secondary mt-0.5">{body}</p>
      </div>
    </div>
  );
}
