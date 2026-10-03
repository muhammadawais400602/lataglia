import { useEffect, useRef, useState, type FormEvent } from 'react';
import Layout from '../components/Layout';

const bgImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXPtI8EnVKIdaDdhAiXO0b0h6IqlIWbNsNksJeGGG4tQp-kUiaqrLrhF0Vs1cExWoxu-c6YRmpHbYUn15oAKJFMKz1fIX10MKgmv73BsluzP-nUXmZj5nfKJH7Y8m4cY4vzRLm8Zuz_bC6LjjNKrWI1OrrrZY3nBnJnt_tp4j95wCjCiGl2v0SbHJUgcuUpD6a1G_D56PuPp649gyYUsqd_r85D0pElq5qnCzPgWWwIcTN5aPDgWVYA';

const label = 'font-label-caps text-label-caps uppercase';
const input = 'w-full pl-11 pr-4 py-3.5 rounded-md border-0 bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-ink-tertiary focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all';

const perks = [
  ['spa', 'Bronte Pistachio Edit', 'Guaranteed priority access to biennial volcanic slope harvests.'],
  ['liquor', 'Balsamico Tradizionale', 'Direct cask disbursements from 25-year Reggio Emilia attics.'],
  ['nature', 'Alba White Truffles', 'Autumn morning courier dispatch within 48 hours of forage.'],
  ['wine_bar', 'Sommelier Concierge', 'Bespoke cellar pairing guidance and seasonal dinner curation.'],
];

export default function Login() {
  const [show, setShow] = useState(false);
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  function notify(msg: string, ms = 4000) {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), ms);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setToast('Validating Cellar Ledger...');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setBusy(false);
      setPw('');
      notify("Sign-in isn't connected yet. Preview only: nothing was checked or sent.");
    }, 1200);
  }

  const notConnected = (what: string) => notify(`${what} isn't connected yet.`);

  return (
    <Layout>
      <aside
        aria-live="polite"
        className={`fixed bottom-8 right-4 left-4 sm:left-auto sm:right-8 z-50 transition-all duration-300 pointer-events-none ${toast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <div className="bg-on-surface text-surface px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <span className={`material-symbols-outlined text-secondary-container ${busy ? 'animate-pulse' : ''}`}>key</span>
          <span className="font-body-sm text-body-sm">{toast}</span>
        </div>
      </aside>

      <section className="w-full px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <aside className="lg:col-span-5 relative overflow-hidden rounded-xl bg-primary text-on-primary shadow-2xl order-2 lg:order-1">
            <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay" style={{ backgroundImage: `url('${bgImg}')` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/40 via-primary/60 to-primary" />
            <div className="relative p-8 sm:p-11 flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary-container/50 bg-secondary-container/10 text-secondary-container ${label} tracking-widest`}>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    Privileged Allocation
                  </span>
                  <span className="text-[10px] tracking-[0.42em] font-semibold uppercase text-white/50">Fondata 1934</span>
                </div>
                <div>
                  <p className={`${label} tracking-[0.2em] text-secondary-fixed mb-3`}>Il Circolo del Terroir</p>
                  <h1 className="font-headline-lg text-[36px] leading-[42px] sm:text-headline-lg text-white mb-5">The Private Cellar &amp; Estate Allocations</h1>
                  <p className="font-body-md text-body-md text-white/80 leading-relaxed">
                    Curated custody for patrons of authentic Italian gastronomy. By entering, you unlock access to rare culinary reserves produced under strict Consorzio DOP charters.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {perks.map(([icon, title, body]) => (
                    <div key={title} className="rounded-lg bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="material-symbols-outlined text-secondary-container text-lg">{icon}</span>
                        <span className="font-button-sm text-button-sm text-white leading-tight">{title}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-white/65 leading-snug">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-8">
                <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <blockquote className="font-headline-sm text-xl font-normal italic text-white/90 leading-relaxed mt-2 mb-6">
                  “We safeguard the ancient tables of Italy. Every vessel resting in your cellar holds the labor, climate, and soil of families we have known for decades.”
                </blockquote>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-button-sm text-button-sm text-white">MJ &amp; Jennifer Taglia</p>
                    <p className="font-caption text-caption text-white/60">Custodians of the Guild · Reggio Emilia &amp; New York</p>
                  </div>
                  <div className="size-10 rounded-lg border border-secondary-container/50 bg-secondary-container/15 flex items-center justify-center font-headline-sm text-secondary-container shrink-0">LT</div>
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-12 shadow-md max-w-[640px] mx-auto">
              <div className="pb-8 mb-8 border-b border-surface-container-high">
                <div className={`flex items-center gap-2 ${label} text-wine-dark tracking-widest mb-3`}>
                  <span className="size-2 rounded-full bg-pistachio-light" />
                  Private Access Portal
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Bentornato al Mercato</h2>
                <p className="font-body-md text-body-md text-ink-secondary mt-2">Enter your credentials to access stored provisions, active cold-chain shipments, and restricted vintage allocations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <button type="button" onClick={() => notConnected('Apple sign-in')} className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-button-sm text-button-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.56-.69.95-1.64.84-2.6-.83.03-1.85.56-2.43 1.24-.52.6-.97 1.57-.85 2.49.93.07 1.88-.47 2.44-1.13z" /></svg>
                  <span>Continue with Apple</span>
                </button>
                <button type="button" onClick={() => notConnected('Google sign-in')} className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-button-sm text-button-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
                    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" fill="#34A853" />
                    <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-8">
                <div className="w-full h-px bg-surface-container-highest" />
                <span className={`absolute bg-surface-container-lowest px-4 ${label} text-ink-tertiary tracking-widest`}>Or Enter Via Estate Dossier</span>
              </div>

              <form className="space-y-6" onSubmit={submit}>
                <div className="space-y-2">
                  <label htmlFor="cellar-email" className={`block ${label} text-ink-secondary`}>Cellar Inscription Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-ink-tertiary text-xl pointer-events-none">mail</span>
                    <input id="cellar-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={input} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label htmlFor="cellar-password" className={`block ${label} text-ink-secondary`}>Password &amp; Vault Pin</label>
                    <button type="button" onClick={() => notConnected('Password reset')} className="font-button-sm text-button-sm text-wine-dark underline underline-offset-4 hover:text-wine-hover">Forgot your cellar key?</button>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-ink-tertiary text-xl pointer-events-none">lock</span>
                    <input
                      id="cellar-password" name="password" type={show ? 'text' : 'password'} required autoComplete="current-password" placeholder="••••••••••••"
                      value={pw} onChange={(e) => setPw(e.target.value)} className={`${input} pr-11`}
                    />
                    <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'} className="absolute right-3.5 top-3.5 text-ink-tertiary hover:text-on-surface focus:outline-none">
                      <span className="material-symbols-outlined text-xl">{show ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input id="trusted-device" type="checkbox" defaultChecked className="mt-1 size-4 rounded text-primary focus:ring-primary border-none bg-surface-container" />
                  <label htmlFor="trusted-device" className="font-body-sm text-body-sm text-ink-secondary leading-snug cursor-pointer">
                    Keep me authenticated on this trusted tasting salon terminal.
                    <span className="block font-caption text-caption text-ink-tertiary mt-0.5">Session safeguarded for 45 days of unhurried cellar curation.</span>
                  </label>
                </div>
                <button type="submit" disabled={busy} className="w-full py-4 px-8 rounded-md bg-primary hover:bg-wine-hover text-on-primary font-button text-button shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group disabled:opacity-70">
                  <span>{busy ? 'Validating…' : 'Access Cellar & Provisions'}</span>
                  <span className={`material-symbols-outlined text-xl transition-transform ${busy ? 'animate-spin' : 'group-hover:translate-x-1'}`}>{busy ? 'progress_activity' : 'arrow_forward'}</span>
                </button>
              </form>

              <div className="mt-8 p-5 rounded-lg bg-surface-parchment flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined">loyalty</span>
                  </div>
                  <div>
                    <p className="font-button-sm text-button-sm text-on-surface">New to La Taglia?</p>
                    <p className="font-body-sm text-body-sm text-ink-secondary">Inscribe for Guild Membership &amp; First Harvest Allocations.</p>
                  </div>
                </div>
                <a href="/signup" className="shrink-0 self-start sm:self-auto px-4 py-2 rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-button-sm text-button-sm hover:border-primary hover:text-primary transition-colors">Inscribe Now →</a>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-container-high">
                <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${label} text-ink-secondary tracking-wider`}>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-pistachio-light">lock_clock</span>Encrypted Connection</span>
                  <span className="text-outline-variant" aria-hidden="true">•</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-badge-ink">verified_user</span>Discretion Assured</span>
                  <span className="text-outline-variant" aria-hidden="true">•</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-wine-dark">gavel</span>Direct Consorzio DOP Authentication</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
