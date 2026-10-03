import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import Layout from '../components/Layout';

const img = 'https://lh3.googleusercontent.com/aida-public';
const heroImg = `${img}/AB6AXuCOoG8Tpc32uYMSyV97NPrga5IwkK2BApGhTNVrq6SLFCy0ySh9qrBN_O-CBZKr_vTvNk63h0NLIQ7TEPNxxg2MEMNunOMS3U7KddR_jjh0hFvLK-8IuqlxnexUfYAMjYDhnFsxx6uCgFmne8A2KDPuGr3lxwFxGeypbBRkdYPI9_o__KQxKtVy26V7rFWe7er3dU0oemdFc41KD6lbFapd0EVPRwaxDRvd84tiEI7AWqxnDg7DTvHyFw`;
const quoteImg = `${img}/AB6AXuAa_C-rU-5fdNPkH5o-XpX4llJyNlx3Fn3w6H-cCjV1bMBsQmboIybm7N-5QHXocpwrv9_74ylyHIGLZNb17DLEEsElcUBpI9Zmdx3I-044h-M_BXglcJyIUeIFeoLUQtyJywxk5v0661FP0PcMyhmhPkUOhDUb32wJhKkVI5fbu4ga2-teRtLZc_LGyf8A8Xqj2jdsmlPlAV2OZvj1DlbU8mfCc3oiSOjOZp5bw_Qjim9MfGj06iyyGQ`;

const label = 'font-label-caps text-label-caps uppercase';
const input = 'w-full px-4 py-3 rounded-md border-0 bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-ink-tertiary focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all';

const privileges = [
  ['grain', '1. Seasonal Harvest Allocations', 'Guaranteed reserve allocations of volcanic Bronte pistachios, first-cold-press Frantoio monovarietals, and sun-dried bronze-die pasta.'],
  ['menu_book', '2. The Terroir Journal', 'Complimentary quarterly printed broadsheet monograph mailed directly to your salon, featuring grower profiles and historical culinary codices.'],
  ['wine_bar', '3. Cellar Sommelier Desk', 'Direct, unhurried concierge access via private WhatsApp or phone to our Milan and Bologna culinary masters for cellar pairings.'],
  ['local_shipping', '4. Cold-Chain & Wax-Sealed Gifting', 'Curated address registry for multi-recipient seasonal dispatch, packaged inside solid spruce caskets stamped with hot crimson wax seals.'],
];

const interests = ['Pistachio of Bronte DOP', 'Traditional Balsamic of Modena DOP', 'Artisanal Bronze Pasta', 'Calabrian Chilis & Antipasti', 'Alba White Truffles'];

const strengthSteps = [
  { text: 'Enter Cellar Key', cls: 'text-ink-tertiary', bar: '' },
  { text: 'Fragile Key', cls: 'text-status-red', bar: 'bg-status-red' },
  { text: 'Moderate Security', cls: 'text-badge-ink', bar: 'bg-secondary-container' },
  { text: 'Noble Reserve Strength', cls: 'text-pistachio-light', bar: 'bg-pistachio-light' },
  { text: 'Fortress Level Cellar Vault', cls: 'text-pistachio-light font-bold', bar: 'bg-pistachio-light' },
];

function scorePassword(pw: string) {
  if (!pw) return 0;
  const rules = [pw.length >= 8, /\d/.test(pw), /[^A-Za-z0-9]/.test(pw)].filter(Boolean).length;
  if (pw.length >= 12 && rules === 3) return 4;
  return Math.max(1, rules);
}

export default function Signup() {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [picked, setPicked] = useState<string[]>([interests[0], interests[1], interests[4]]);
  const [notice, setNotice] = useState<{ title: string; body: string } | null>(null);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const score = scorePassword(pw);
  const meetsRules = pw.length >= 8 && /\d/.test(pw) && /[^A-Za-z0-9]/.test(pw);
  const step = strengthSteps[score];

  function notify(title: string, body: string) {
    setNotice({ title, body });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(null), 5000);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!meetsRules) return;
    setPw('');
    notify('Application received', 'Preview only: accounts are not connected yet, so no account was created and nothing was sent.');
  }

  const toggle = (tag: string) => setPicked((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]));
  const notConnected = (what: string) => notify(`${what} isn't connected yet`, 'Sign-in providers will work once accounts are set up.');

  return (
    <Layout>
      <div
        role="status"
        className={`fixed bottom-8 right-4 left-4 sm:left-auto sm:right-8 z-50 transition-all duration-500 sm:max-w-md pointer-events-none ${notice ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <div className="bg-surface-container-lowest p-5 rounded-xl shadow-xl flex items-center gap-4 bg-gradient-to-r from-pistachio-light/10 to-transparent">
          <div className="w-10 h-10 rounded-full bg-pistachio-light text-on-tertiary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-xl">check_circle</span>
          </div>
          <div className="flex-1">
            <h5 className="font-headline-sm text-headline-sm text-on-surface">{notice?.title}</h5>
            <p className="font-body-sm text-body-sm text-ink-secondary">{notice?.body}</p>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-x-clip w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
        <div className="absolute top-10 left-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-16 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-pistachio-light" />
              <span className={`${label} text-pistachio-light tracking-widest`}>Anno Domini MMXXV · Privilegio Esclusivo</span>
            </div>
            <h1 className="font-headline-lg text-[34px] leading-[40px] sm:text-headline-lg text-on-surface tracking-tight">Guild Inscription &amp; Cellar Membership</h1>
          </div>
          <div className="flex items-center gap-3 text-ink-secondary text-body-sm font-body-sm bg-surface-parchment px-4 py-2.5 rounded-full self-start md:self-auto shadow-sm">
            <span className="material-symbols-outlined text-secondary text-lg">verified</span>
            <span>Consorzio Partner Guild · Direct-from-Estate DOP / IGP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl bg-surface-parchment p-8 lg:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] leading-3 tracking-widest uppercase text-secondary font-bold block">Providore Monograph · Folio N° IX</span>
                <h2 className="font-headline-md text-headline-md text-primary font-normal leading-tight">Join the La Taglia Epicurean Guild.</h2>
                <p className="font-body-md text-body-md text-ink-secondary leading-relaxed">
                  An intimate fraternity of connoisseurs granted access to guarded pantry reserves, autumn millings, and micro-parcels from Italy’s last true artisanal dynasts.
                </p>
              </div>
              <div className="relative my-8 h-64 w-full rounded-lg overflow-hidden shadow-md">
                <img src={heroImg} alt="Olive oil decanter, Bronte pistachios and a wax-sealed scroll" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-on-primary">
                  <span className="font-caption text-caption tracking-wider uppercase font-semibold">Bronte, Sicilia &amp; Spello, Umbria</span>
                  <span className="font-caption text-caption bg-surface-parchment/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white">Harvest Reserve 2024/25</span>
                </div>
              </div>
              <div className="space-y-6 pt-2">
                {privileges.map(([icon, title, body]) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">{icon}</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
                      <p className="font-body-sm text-body-sm text-ink-secondary leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-surface-container-low rounded-lg p-5 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className={`${label} text-secondary font-bold`}>Provenance Assurance</p>
                  <p className="font-caption text-caption text-ink-secondary">Cold-Chain Direct Air Dispatch from Malpensa &amp; Catania Hubs</p>
                </div>
                <div className="size-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-badge-ink shrink-0">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-surface-soft rounded-xl shadow-sm flex items-center gap-5">
              <img src={quoteImg} alt="Lorenzo Pedroni" className="w-16 h-16 rounded-full object-cover shadow-sm flex-shrink-0" />
              <div>
                <p className="font-headline-sm text-headline-sm italic text-on-surface leading-snug">“To belong to the Guild is to dine at the family table before the harvest leaves the province.”</p>
                <p className="font-caption text-caption text-ink-tertiary mt-1.5 uppercase tracking-wider font-semibold">Lorenzo Pedroni · Acetaia Pedroni, Nonantola</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-12 shadow-md">
              <div className="mb-8">
                <span className={`${label} text-badge-ink tracking-widest block mb-2 font-bold`}>New Member Application</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Inscribe for Membership</h2>
                <p className="font-body-md text-body-md text-ink-secondary mt-1">Create your private cellar account to unlock estate allocations and complimentary cold-chain dispatch.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <button type="button" onClick={() => notConnected('Apple sign-in')} className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-surface-soft hover:bg-surface-container transition-colors text-on-surface font-button-sm text-button-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.56-.69.95-1.64.84-2.6-.83.03-1.85.56-2.43 1.24-.52.6-.97 1.57-.85 2.49.93.07 1.88-.47 2.44-1.13z" /></svg>
                  <span>Continue with Apple</span>
                </button>
                <button type="button" onClick={() => notConnected('Google sign-in')} className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-surface-soft hover:bg-surface-container transition-colors text-on-surface font-button-sm text-button-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center my-8">
                <div className="w-full h-px bg-surface-container-highest" />
                <span className={`absolute bg-surface-container-lowest px-4 ${label} text-ink-tertiary tracking-widest text-center`}>Or Inscribe with Personal Dossier</span>
              </div>

              <form className="space-y-6" onSubmit={submit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field id="firstName" text="First Name"><input id="firstName" required autoComplete="given-name" placeholder="e.g. Gianluigi" className={input} /></Field>
                  <Field id="lastName" text="Last Name"><input id="lastName" required autoComplete="family-name" placeholder="e.g. Castiglione" className={input} /></Field>
                </div>
                <Field id="email" text="Primary Email Address">
                  <div className="relative">
                    <input id="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${input} pr-11`} />
                    <span className="material-symbols-outlined absolute right-3.5 top-3 text-ink-tertiary text-xl pointer-events-none">mail</span>
                  </div>
                  <p className="font-caption text-caption text-ink-tertiary mt-1.5">Used strictly for allocation confirmations and harvest telegrams.</p>
                </Field>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center gap-2">
                    <label htmlFor="password" className={`block ${label} text-ink-secondary`}>Cellar Key (Password)</label>
                    <span className={`font-caption text-caption font-semibold ${step.cls}`} aria-live="polite">{step.text}</span>
                  </div>
                  <div className="relative">
                    <input
                      id="password" type={show ? 'text' : 'password'} required autoComplete="new-password" placeholder="••••••••••••"
                      value={pw} onChange={(e) => setPw(e.target.value)} aria-describedby="pw-rules" aria-invalid={pw.length > 0 && !meetsRules}
                      className={`${input} pr-11`}
                    />
                    <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'} className="absolute right-3.5 top-3 text-ink-tertiary hover:text-on-surface focus:outline-none">
                      <span className="material-symbols-outlined text-xl">{show ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 pt-1.5" aria-hidden="true">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className={`h-1 rounded-full transition-colors duration-300 ${n <= score ? step.bar : 'bg-surface-container'}`} />
                    ))}
                  </div>
                  <p id="pw-rules" className={`font-caption text-caption ${pw && !meetsRules ? 'text-status-red' : 'text-ink-tertiary'}`}>At least 8 characters, one numeral, and one symbol.</p>
                </div>

                <fieldset className="space-y-2.5 pt-2">
                  <legend className={`block ${label} text-ink-secondary mb-2.5`}>
                    Curatorial Gastronomic Interests <span className="text-ink-tertiary normal-case font-normal">(select your cellar focuses)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((tag) => {
                      const on = picked.includes(tag);
                      return (
                        <button
                          key={tag} type="button" onClick={() => toggle(tag)} aria-pressed={on}
                          className={`px-3.5 py-2 rounded-full font-button-sm text-button-sm transition-colors flex items-center gap-1.5 ${on ? 'bg-surface-parchment text-secondary hover:bg-secondary-fixed shadow-sm' : 'bg-surface-soft text-ink-secondary hover:bg-surface-container'}`}
                        >
                          <span className={`material-symbols-outlined text-base ${on ? '' : 'opacity-0'}`}>check</span>
                          <span>{tag}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="space-y-3.5 pt-3">
                  <label className="flex items-start gap-3.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="mt-1 size-4 rounded text-primary focus:ring-primary border-none bg-surface-container" />
                    <span className="font-body-sm text-body-sm text-ink-secondary leading-snug">
                      Receive the printed quarterly <em className="text-on-surface font-headline-sm font-normal">Terroir Monograph</em> and confidential release telegrams before general announcement.
                    </span>
                  </label>
                  <label className="flex items-start gap-3.5 cursor-pointer">
                    <input type="checkbox" required className="mt-1 size-4 rounded text-primary focus:ring-primary border-none bg-surface-container" />
                    <span className="font-body-sm text-body-sm text-ink-secondary leading-snug">
                      I solemnly agree to the <span className="text-primary underline font-medium">Guild Provenance Covenant</span> and adhere to our private <span className="text-primary underline font-medium">Privacy &amp; Data Charter</span>.
                    </span>
                  </label>
                </div>

                <button type="submit" className="w-full py-4 px-6 sm:px-8 rounded-full bg-primary hover:bg-wine-hover text-on-primary font-button text-button transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group mt-4">
                  <span>Create Guild Cellar Account — Inscribe Now</span>
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>

                <div className="text-center pt-2">
                  <span className="font-body-sm text-body-sm text-ink-secondary">Already possess a cellar inscription?</span>
                  <a href="/login" className="font-button-sm text-button-sm text-primary hover:text-wine-hover ml-2 underline font-bold tracking-wider uppercase inline-flex items-center gap-1">
                    <span>Sign In to Your Cellar</span>
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>

                <div className="bg-surface-container-low rounded-lg p-3 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-ink-tertiary font-caption text-caption">
                    <Seal icon="lock">Encrypted connection</Seal>
                    <span aria-hidden="true">•</span>
                    <Seal icon="agriculture">Zero Middlemen</Seal>
                    <span aria-hidden="true">•</span>
                    <Seal icon="shield">Direct-from-Estate</Seal>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-surface-parchment rounded-xl p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="size-14 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary">Certified Cold-Chain Italian Dispatch</h4>
              <p className="font-body-sm text-body-sm text-ink-secondary">Guild member parcels are packed with insulated recycled hemp batting and zero-emission dry eutectic cooling gel.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-on-surface">
            <div className="text-right hidden sm:block">
              <p className={`${label} text-secondary font-bold`}>Consorzio Di Tutela</p>
              <p className="font-caption text-caption text-ink-tertiary">Verified Micro-Producers Only</p>
            </div>
            <div className="h-10 w-px bg-surface-container-highest hidden sm:block" />
            <a href="/#makers" className="px-5 py-2.5 rounded-full bg-on-surface text-surface font-button-sm text-button-sm hover:bg-wine-dark transition-colors whitespace-nowrap">Read Provenance Manifesto</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Field({ id, text, children }: { id: string; text: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className={`block ${label} text-ink-secondary`}>{text}</label>
      {children}
    </div>
  );
}

function Seal({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-sm text-pistachio-light">{icon}</span>
      <span>{children}</span>
    </span>
  );
}
