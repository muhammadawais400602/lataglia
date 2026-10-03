import { useState, type FormEvent, type ReactNode } from 'react';
import Layout from '../components/Layout';
import { FREE_FREIGHT_AT, PROMO } from '../cartData';
import { useBasket } from '../cartStore';

const label = 'font-label-caps text-label-caps uppercase';
const input = 'w-full bg-surface-container-low text-on-background rounded-lg border-0 px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest shadow-sm placeholder:text-ink-tertiary';
const cardInput = 'w-full bg-surface-container-lowest text-on-background rounded-lg border-0 px-4 py-3 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm placeholder:text-ink-tertiary';
const DUTY_RATE = 0.08;
const usd = (n: number) => `$${n.toFixed(2)}`;

const tiers = [
  {
    id: 'express', name: 'Climate-Controlled Express Freight', price: 14, tag: 'Recommended for Delicate Creams & Cheeses', tagClass: 'bg-pistachio-light text-surface-container-lowest',
    body: '2–3 Business Days. Dispatched in biodegradable thermal wood-straw sleeves with sub-zero chilled gel inserts to maintain cellar temperature (12°C–14°C) through delivery.',
  },
  {
    id: 'overnight', name: 'Overnight Alpine & Mediterranean Priority Air', price: 28, tag: 'Direct Route', tagClass: 'bg-surface-container-highest text-ink-secondary',
    body: 'Guaranteed next-morning arrival by 10:30 AM via specialized air-cargo chill container. Ideal for immediate banquet preparation.',
  },
] as const;

type Pay = 'card' | 'paypal' | 'klarna';

export default function Checkout() {
  const [{ items, promo }] = useBasket();
  const [tier, setTier] = useState<(typeof tiers)[number]['id']>('express');
  const [gift, setGift] = useState(true);
  const [note, setNote] = useState('');
  const [pay, setPay] = useState<Pay>('card');
  const [state, setState] = useState<'idle' | 'sealing' | 'done'>('idle');

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.unit * i.qty, 0);
  const discount = promo ? subtotal * PROMO.rate : 0;
  const goods = subtotal - discount;
  const remaining = Math.max(0, FREE_FREIGHT_AT - subtotal);
  const chosen = tiers.find((t) => t.id === tier)!;
  const freight = tier === 'express' && remaining === 0 ? 0 : chosen.price;
  const duty = Math.round(goods * DUTY_RATE * 100) / 100;
  const total = goods + freight + duty;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!items.length || state !== 'idle') return;
    setState('sealing');
    window.setTimeout(() => setState('done'), 1400);
  }

  return (
    <Layout>
      <div className="w-full bg-surface-parchment text-secondary py-2.5 px-6 sm:px-12 shadow-sm">
        <div className="max-w-[1320px] mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-body-sm text-body-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="material-symbols-outlined text-pistachio-light text-base" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
            <span className="font-subheading text-xs tracking-wider uppercase text-secondary">Active Cold-Chain Protocol</span>
            <span className="text-ink-tertiary hidden sm:inline">|</span>
            <span className="text-ink-secondary text-xs">Direct from Modena, Bronte &amp; Gragnano cellars</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-ink-secondary">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-badge-ink text-sm">verified_user</span> Encrypted checkout</span>
            <span className={`hidden md:inline-flex items-center gap-1.5 ${label} text-secondary`}><span className="material-symbols-outlined text-sm">support_agent</span> Sommelier Concierge Available</span>
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div className="w-full lg:w-[60%] flex flex-col space-y-10 min-w-0">
            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className={`${label} tracking-widest text-ink-tertiary`}>Fast Archival Checkout</span>
                <span className="font-caption text-caption text-pistachio-light flex items-center gap-1"><span className="material-symbols-outlined text-xs">bolt</span> Instant Dispatch Pass</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button type="button" aria-label="Express checkout with Apple Pay" className="h-12 bg-on-background text-surface hover:bg-black transition-colors rounded-lg flex items-center justify-center font-button-sm text-button-sm tracking-wide shadow-sm"> Pay</button>
                <button type="button" aria-label="Express checkout with Shop Pay" className="h-12 bg-[#5A31F4] text-white hover:opacity-90 transition-opacity rounded-lg flex items-center justify-center text-sm font-bold shadow-sm"><span>shop</span><span className="font-normal italic">Pay</span></button>
                <button type="button" aria-label="Express checkout with Google Pay" className="h-12 bg-surface-container-high text-on-background hover:bg-surface-variant transition-colors rounded-lg flex items-center justify-center font-button-sm text-button-sm shadow-sm"><span className="font-bold">G</span><span className="font-medium text-ink-secondary ml-1">Pay</span></button>
              </div>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow h-px bg-surface-container-high" />
                <span className="flex-shrink mx-4 font-caption text-caption text-ink-tertiary italic text-center">Or continue with Sommelier Concierge Checkout</span>
                <div className="flex-grow h-px bg-surface-container-high" />
              </div>
            </section>

            <nav aria-label="Checkout Progress" className="bg-surface-container-low px-6 py-4 rounded-xl shadow-sm">
              <ol className="flex items-center justify-between gap-2 text-xs sm:text-sm font-subheading">
                {['Delivery Destination', 'Cold-Chain Transit', 'Cellar Seal'].map((s, i) => (
                  <li key={s} className={`flex items-center ${i === 0 ? 'text-primary font-bold' : 'text-ink-secondary font-medium'}`} aria-current={i === 0 ? 'step' : undefined}>
                    <span className={`size-6 rounded-full flex items-center justify-center text-xs mr-2 shrink-0 ${i === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-highest text-ink-secondary'}`}>{i + 1}</span>
                    <span className={i === 0 ? '' : 'hidden sm:inline'}>{s}</span>
                  </li>
                ))}
              </ol>
            </nav>

            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
              <StepHeader n={1} title="Contact & Delivery Dossier" aside={<span className="font-caption text-caption text-badge-ink flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm">lock</span> Discretion Assured</span>} />
              <div className="space-y-4">
                <Field id="contact-email" label="Primary Contact Email">
                  <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="sommelier@domain.com" className={input} />
                </Field>
                <label className="flex items-start gap-3 cursor-pointer group pt-1">
                  <input type="checkbox" defaultChecked className="mt-1 rounded text-primary focus:ring-0 cursor-pointer" />
                  <span className="font-body-sm text-body-sm text-ink-secondary group-hover:text-on-background transition-colors leading-relaxed">Receive quarterly print monographs, private barrel allocations from Tuscany, and seasonal white truffle dispatches.</span>
                </label>
              </div>
              <div className="pt-4 space-y-4">
                <h3 className="font-subheading text-subheading text-on-background">Recipient Shipping Destination</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field id="first-name" label="First Name"><input id="first-name" required autoComplete="given-name" className={input} /></Field>
                  <Field id="last-name" label="Last Name"><input id="last-name" required autoComplete="family-name" className={input} /></Field>
                </div>
                <Field id="street-address" label="Street Address"><input id="street-address" required autoComplete="street-address" className={input} /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Field id="city" label="City"><input id="city" required autoComplete="address-level2" className={input} /></Field>
                  <Field id="state" label="State / Province"><input id="state" autoComplete="address-level1" className={input} /></Field>
                  <Field id="zip" label="Postal Code"><input id="zip" required autoComplete="postal-code" className={input} /></Field>
                </div>
                <Field id="country" label="Country">
                  <select id="country" autoComplete="country" className={input}>
                    <option value="US">United States (Direct Courier Express)</option>
                    <option value="CA">Canada (Cold-Chain Verified)</option>
                    <option value="UK">United Kingdom (Chilled Maritime)</option>
                    <option value="CH">Switzerland (Alpine Direct)</option>
                  </select>
                </Field>
                <Field id="delivery-note" label="Concierge Delivery Inscription / Gate Code">
                  <textarea id="delivery-note" rows={2} placeholder="e.g. Leave with residential doorman, gate code #4102, or ensure package is shielded from direct morning sun." className={`${input} font-body-sm text-body-sm`} />
                </Field>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
              <StepHeader n={2} title="Cold-Chain Dispatch Options" aside={<span className="bg-surface-parchment text-secondary text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wider">Zero Spoilage Guarantee</span>} />
              <div className="bg-surface-parchment p-4 rounded-lg shadow-sm space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 font-body-sm text-body-sm">
                  <span className="text-secondary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">local_shipping</span>
                    {remaining > 0 ? `Add ${usd(remaining)} more to qualify for Free Chilled Freight` : 'Free Chilled Express Freight unlocked'}
                  </span>
                  <span className="text-xs text-ink-secondary font-bold">{usd(subtotal)} / {usd(FREE_FREIGHT_AT)} Threshold</span>
                </div>
                <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-container rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (subtotal / FREE_FREIGHT_AT) * 100)}%` }} />
                </div>
              </div>
              <div className="space-y-3" role="radiogroup" aria-label="Shipping speed">
                {tiers.map((t) => {
                  const on = tier === t.id;
                  const price = t.id === 'express' && remaining === 0 ? 0 : t.price;
                  return (
                    <label key={t.id} className={`relative flex items-start gap-4 p-4 rounded-xl text-on-background shadow-sm cursor-pointer transition-all hover:bg-surface-container-low ${on ? 'bg-surface-parchment ring-1 ring-secondary-container' : 'bg-surface-container-lowest'}`}>
                      <input type="radio" name="shipping_tier" checked={on} onChange={() => setTier(t.id)} className="mt-1 text-primary focus:ring-0 cursor-pointer" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`font-subheading text-subheading font-bold ${on ? 'text-primary' : 'text-on-background'}`}>{t.name}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest ${t.tagClass}`}>{t.tag}</span>
                          </div>
                          <span className={`font-headline-sm text-headline-sm ${on ? 'text-primary' : 'text-on-background'}`}>{price ? usd(price) : 'Free'}</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-ink-secondary mt-1">{t.body}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-2xl">card_giftcard</span>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-background">Bespoke Epicurean Gifting</h2>
                  <p className="font-body-sm text-body-sm text-ink-secondary">Presented in archival black paper and gold foil wax seal</p>
                </div>
              </div>
              <div className="bg-surface-parchment p-5 rounded-xl space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} className="mt-1 rounded text-primary focus:ring-0 cursor-pointer" />
                  <div>
                    <span className="font-subheading text-subheading text-primary font-bold">Include hand-written Florentine parchment note with crimson wax seal</span>
                    <p className="font-body-sm text-body-sm text-ink-secondary">Pen-scripted by our cellar sommelier with custom Italian wax sigil.</p>
                  </div>
                </label>
                {gift && (
                  <div className="pt-2 sm:pl-7 space-y-2">
                    <label htmlFor="recipient-message" className={`block ${label} text-secondary`}>Your Message to the Recipient</label>
                    <textarea
                      id="recipient-message" rows={3} maxLength={240} value={note} onChange={(e) => setNote(e.target.value)}
                      placeholder="Per Beatrice — In celebration of your culinary homecoming. Enjoy with crusty rustic pane and a glass of Etna Rosso."
                      className="w-full bg-surface-container-lowest text-on-background rounded-lg border-0 p-3 font-headline-sm font-normal text-sm italic focus:outline-none focus:ring-1 focus:ring-primary shadow-sm placeholder:text-ink-tertiary"
                    />
                    <div className="flex justify-between items-center text-xs text-ink-tertiary">
                      <span>Maximum 240 characters</span>
                      <span className="font-mono">{note.length}/240</span>
                    </div>
                  </div>
                )}
                <label className="flex items-center gap-3 cursor-pointer pt-2 border-t border-surface-container-highest">
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" />
                  <span className="font-body-sm text-body-sm text-on-background font-medium">Conceal all pricing and invoice manifest from physical carton (Digital invoice sent exclusively via email).</span>
                </label>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
              <StepHeader n={3} title="Payment Vault & Cellar Seal" aside={<span className="flex items-center gap-2"><span className="material-symbols-outlined text-pistachio-light text-lg">verified</span><span className={`${label} text-ink-secondary`}>PCI-DSS Tier 1</span></span>} />
              <div className="space-y-4" role="radiogroup" aria-label="Payment method">
                <div className={`p-5 rounded-xl space-y-4 ${pay === 'card' ? 'bg-surface-parchment' : 'bg-surface-container-low'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="payment_method" checked={pay === 'card'} onChange={() => setPay('card')} className="text-primary focus:ring-0" />
                      <span className="font-subheading text-subheading text-primary font-bold">Credit &amp; Charge Card</span>
                    </label>
                    <div className="flex items-center gap-2 text-ink-secondary">
                      {['VISA', 'MC', 'AMEX'].map((b) => <span key={b} className="bg-surface-container-lowest px-2 py-1 rounded text-[11px] font-bold tracking-wider">{b}</span>)}
                    </div>
                  </div>
                  {pay === 'card' && (
                    <div className="space-y-3 pt-2">
                      <Field id="card-number" label="Card Number">
                        <div className="relative">
                          <input id="card-number" inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" className={cardInput} />
                          <span className="material-symbols-outlined absolute right-3 top-3 text-ink-tertiary">credit_card</span>
                        </div>
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field id="card-exp" label="Expiry Date"><input id="card-exp" autoComplete="cc-exp" placeholder="MM / YY" className={cardInput} /></Field>
                        <Field id="card-cvv" label="Security Code (CVV)">
                          <div className="relative">
                            <input id="card-cvv" type="password" inputMode="numeric" autoComplete="cc-csc" placeholder="•••" className={cardInput} />
                            <span className="material-symbols-outlined absolute right-3 top-3 text-ink-tertiary text-lg">help_outline</span>
                          </div>
                        </Field>
                      </div>
                      <Field id="card-name" label="Name as Scripted on Card"><input id="card-name" autoComplete="cc-name" className={`${cardInput} font-body-md uppercase`} /></Field>
                    </div>
                  )}
                </div>
                <label className={`flex flex-wrap items-center justify-between gap-2 p-4 rounded-xl cursor-pointer hover:bg-surface-variant transition-colors ${pay === 'paypal' ? 'bg-surface-parchment' : 'bg-surface-container-low'}`}>
                  <span className="flex items-center gap-3">
                    <input type="radio" name="payment_method" checked={pay === 'paypal'} onChange={() => setPay('paypal')} className="text-primary focus:ring-0 cursor-pointer" />
                    <span className="font-subheading text-subheading text-on-background font-bold">PayPal Vault</span>
                  </span>
                  <span className="text-xs text-ink-secondary">Direct redirect to instant authorization</span>
                </label>
                <label className={`flex items-center justify-between gap-2 p-4 rounded-xl cursor-pointer hover:bg-surface-variant transition-colors ${pay === 'klarna' ? 'bg-surface-parchment' : 'bg-surface-container-low'}`}>
                  <span className="flex items-center gap-3">
                    <input type="radio" name="payment_method" checked={pay === 'klarna'} onChange={() => setPay('klarna')} className="text-primary focus:ring-0 cursor-pointer" />
                    <span>
                      <span className="font-subheading text-subheading text-on-background font-bold block">Klarna. Cellar Installments</span>
                      <span className="font-body-sm text-body-sm text-ink-secondary">4 interest-free split payments of {usd(total / 4)} every 2 weeks.</span>
                    </span>
                  </span>
                  <span className="bg-[#FFB3C7] text-black px-2 py-0.5 rounded text-xs font-bold shrink-0">Klarna</span>
                </label>
              </div>
              <label className="flex items-center gap-3 cursor-pointer pt-2">
                <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" />
                <span className="font-body-sm text-body-sm text-ink-secondary">Billing address matches delivery destination.</span>
              </label>
            </section>
          </div>

          <aside className="w-full lg:w-[40%] flex flex-col space-y-6 lg:sticky lg:top-24">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-md space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
                <h2 className="font-headline-sm text-headline-sm text-on-background">Your Cellar Selection</h2>
                <span className={`bg-surface-parchment text-secondary ${label} px-2.5 py-1 rounded font-bold`}>{count} Artisanal {count === 1 ? 'Item' : 'Items'}</span>
              </div>
              {items.length === 0 ? (
                <p className="text-ink-secondary text-sm">Your basket is empty. <a href="/shop" className="text-primary font-bold hover:underline">Browse provisions</a>.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li key={i.id} className="flex items-center gap-4">
                      <div className="relative size-16 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0 shadow-sm">
                        <img src={i.img} alt={i.name} className="size-full object-cover" loading="lazy" />
                        <span className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold size-5 flex items-center justify-center rounded-bl-md">{i.qty}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`${label} text-badge-ink block truncate`}>{i.maker}</span>
                        <h3 className="font-subheading text-subheading text-on-background truncate">{i.name}</h3>
                        <span className="font-caption text-caption text-ink-tertiary line-clamp-1">{i.meta}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-headline-sm text-sm font-bold text-on-background block">{usd(i.unit * i.qty)}</span>
                        <span className="text-[11px] text-ink-tertiary">{i.qty > 1 ? `${usd(i.unit)} ea` : 'Single'}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <a href="/cart" className="inline-flex items-center gap-1 text-xs font-button-sm uppercase tracking-wider text-primary hover:underline">
                <span className="material-symbols-outlined text-sm">edit</span> Edit basket
              </a>

              <div className="space-y-3 bg-surface-container-low p-4 rounded-xl font-body-sm text-body-sm text-ink-secondary">
                <SumRow label="Provisions Subtotal" value={usd(subtotal)} />
                {discount > 0 && <SumRow label={`Guild Code ${PROMO.code}`} value={`−${usd(discount)}`} valueClass="text-pistachio-light" />}
                <SumRow label={<span className="flex items-center gap-1">Thermal Wood-Straw Insulation <span className="material-symbols-outlined text-pistachio-light text-sm">nature</span></span>} value="Complimentary ($0.00)" valueClass="text-pistachio-light" />
                <SumRow label="Climate-Controlled Courier" value={freight ? usd(freight) : 'Free'} />
                <SumRow label={`Estimated Import & State Duty (${Math.round(DUTY_RATE * 100)}%)`} value={usd(duty)} />
                <div className="flex items-baseline justify-between gap-4 pt-3 text-on-background">
                  <div>
                    <span className="font-headline-sm text-headline-sm block">Total Due</span>
                    <span className="font-caption text-caption text-ink-tertiary">Includes EU Origin Certifications</span>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary tracking-tight">{usd(total)}</span>
                    <span className="block text-[11px] text-ink-secondary font-mono">USD Net</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={!items.length || state !== 'idle'}
                  className={`w-full min-h-14 py-3 px-4 rounded-xl font-button text-button uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-3 group disabled:cursor-default ${state === 'done' ? 'bg-pistachio-light text-white' : 'bg-primary hover:bg-wine-hover text-on-primary disabled:opacity-60'}`}
                >
                  {state === 'idle' && (<><span className="material-symbols-outlined text-secondary-container transition-transform group-hover:scale-110">verified</span><span>Seal &amp; Place Order — {usd(total)}</span></>)}
                  {state === 'sealing' && (<><span className="material-symbols-outlined animate-spin text-secondary-container">progress_activity</span><span>Applying Milan Cellar Wax Seal...</span></>)}
                  {state === 'done' && (<><span className="material-symbols-outlined">check_circle</span><span>Consignment Sealed &amp; Confirmed!</span></>)}
                </button>
                <p className="font-caption text-caption text-ink-tertiary text-center leading-normal" aria-live="polite">
                  {state === 'done'
                    ? 'Preview only: payment is not connected yet, so no charge was made and no order was sent.'
                    : "By authorizing, you ratify the cellar dispatch guidelines. Orders placed before 1:00 PM CET board tonight's Milan temperature-regulated charter."}
                </p>
              </div>
            </div>

            <div className="bg-surface-parchment p-6 rounded-xl shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">wine_bar</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-base text-secondary font-bold">The La Taglia Provenance Covenant</h4>
                  <p className="font-body-sm text-body-sm text-ink-secondary mt-1">Dispatched directly from Milan and temperature-buffered during all transatlantic flights. If any olive oil, cured salume, or pistachio cream fails your organoleptic test, our sommelier team will immediately reship an alpine flight at zero fee.</p>
                </div>
              </div>
              <div className={`pt-3 flex flex-wrap items-center justify-between gap-2 ${label} text-secondary`}>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">phone_in_talk</span> Sommelier Desk: +1 (800) 412-TAGLIA</span>
                <span className="text-ink-tertiary">Mon-Sun 8am-8pm CET</span>
              </div>
            </div>

            <div className="bg-surface-container-high p-4 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs text-ink-secondary">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-badge-ink text-base">public</span> Batch Dispatch Node: <strong>Aeroporto di Milano-Malpensa (MXP)</strong></span>
              <span className="font-mono text-[10px] text-badge-ink font-bold">DOC / IGP PROTOCOL</span>
            </div>
          </aside>
        </div>
      </form>
    </Layout>
  );
}

function StepHeader({ n, title, aside }: { n: number; title: string; aside: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
      <div className="flex items-center gap-3">
        <span className="size-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
        <h2 className="font-headline-sm text-headline-sm text-on-background">{title}</h2>
      </div>
      {aside}
    </div>
  );
}

function Field({ id, label: text, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={`block ${label} text-ink-secondary mb-1.5`}>{text}</label>
      {children}
    </div>
  );
}

function SumRow({ label: l, value, valueClass = 'text-on-background' }: { label: ReactNode; value: string; valueClass?: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span>{l}</span>
      <span className={`font-mono font-semibold text-right ${valueClass}`}>{value}</span>
    </div>
  );
}
