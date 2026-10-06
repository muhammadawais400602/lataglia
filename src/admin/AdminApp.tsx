import { useCallback, useEffect, useState, type FormEvent } from 'react';
import type { Order, Product, Settings } from '../shared/types';
import { adminApi, ApiError, type Session } from './api';
import Customers from './Customers';
import Orders from './Orders';
import Overview from './Overview';
import Products from './Products';
import SettingsPanel from './SettingsPanel';
import { label } from './ui';

const TABS = [
  { id: 'overview', label: 'Overview', icon: 'monitoring' },
  { id: 'orders', label: 'Orders', icon: 'receipt_long' },
  { id: 'products', label: 'Products', icon: 'inventory_2' },
  { id: 'customers', label: 'Customers', icon: 'group' },
  { id: 'settings', label: 'Settings', icon: 'tune' },
] as const;
type Tab = (typeof TABS)[number]['id'];

const tabFromHash = (): Tab => {
  const h = window.location.hash.slice(1);
  return (TABS.find((t) => t.id === h)?.id ?? 'overview') as Tab;
};

function Logo({ light }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`size-6 ${light ? 'text-secondary-container' : 'text-primary'}`}>
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd" /></svg>
      </span>
      <span className={`font-headline-sm text-xl font-bold ${light ? 'text-white' : 'text-on-surface'}`}>La Taglia</span>
    </span>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [failed, setFailed] = useState(false);

  const refresh = useCallback(() => {
    adminApi.session().then(setSession).catch(() => setFailed(true));
  }, []);
  useEffect(() => {
    document.title = 'La Taglia · Admin';
    refresh();
  }, [refresh]);

  if (failed) return <Centered><p className="text-ink-secondary">The admin service isn't reachable. Check that the site deployed with its /api functions.</p></Centered>;
  if (!session) return <Centered><span aria-hidden="true" className="material-symbols-outlined animate-spin text-primary text-3xl">progress_activity</span></Centered>;
  if (!session.signedIn) return <AdminLogin session={session} onSignedIn={refresh} />;
  return <Dashboard session={session} onSignedOut={() => setSession({ ...session, signedIn: false })} />;
}

function Centered({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen flex items-center justify-center p-6 text-center">{children}</div>;
}

function AdminLogin({ session, onSignedIn }: { session: Session; onSignedIn: () => void }) {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      await adminApi.login(pw);
      setPw('');
      onSignedIn();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Could not sign in');
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-primary p-12 text-on-primary">
        <div className="absolute -right-24 -bottom-24 size-96 rounded-full bg-wine-hover/40 blur-3xl pointer-events-none" />
        <Logo light />
        <div className="relative max-w-md">
          <p className={`${label} text-secondary-fixed mb-4`}>Cellar Office · Riservato</p>
          <h1 className="font-headline-lg text-headline-lg text-white mb-5">The keeper's ledger.</h1>
          <p className="text-white/80 leading-relaxed">Orders, provisions, customers and the shop's settings, in one place for the people who run La Taglia.</p>
        </div>
        <p className="relative text-xs text-white/50">Fondata 1934 · Reggio Emilia &amp; New York</p>
      </aside>

      <main className="flex items-center justify-center bg-surface-parchment px-4 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex justify-center"><Logo /></div>
          <form onSubmit={submit} className="bg-surface-container-lowest rounded-xl shadow-md p-8 sm:p-10">
            <div className={`flex items-center gap-2 ${label} text-wine-dark mb-3`}>
              <span className="size-2 rounded-full bg-pistachio-light" />
              Administrator access
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Bentornato</h2>
            <p className="text-sm text-ink-secondary mb-8">Enter the admin password to open the dashboard.</p>

            {!session.passwordConfigured ? (
              <div role="alert" className="rounded-lg bg-secondary-fixed p-4 text-sm text-on-secondary-fixed">
                <p className="font-bold mb-1">Admin password not set up yet</p>
                <p>In Vercel, open this project → Settings → Environment Variables, add <code className="rounded bg-white/60 px-1">ADMIN_PASSWORD</code> (at least 8 characters), then redeploy.</p>
              </div>
            ) : (
              <>
                <label htmlFor="admin-password" className={`block ${label} text-ink-secondary mb-2`}>Password</label>
                <div className="relative">
                  <span aria-hidden="true" className="material-symbols-outlined absolute left-3.5 top-3.5 text-ink-tertiary text-xl pointer-events-none">lock</span>
                  <input
                    id="admin-password" type={show ? 'text' : 'password'} autoComplete="current-password" required autoFocus
                    value={pw} onChange={(e) => setPw(e.target.value)} aria-invalid={Boolean(err)} aria-describedby={err ? 'admin-err' : undefined}
                    className="w-full rounded-md border-0 bg-surface-container-low py-3.5 pl-11 pr-11 text-on-surface placeholder:text-ink-tertiary focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="••••••••••••"
                  />
                  <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'} className="absolute right-3.5 top-3.5 text-ink-tertiary hover:text-on-surface">
                    <span aria-hidden="true" className="material-symbols-outlined text-xl">{show ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                {err && <p id="admin-err" role="alert" className="mt-3 text-sm font-semibold text-status-red">{err}</p>}
                <button type="submit" disabled={busy || !pw} className="mt-6 w-full flex items-center justify-center gap-2 rounded-md bg-primary py-4 font-bold text-on-primary shadow-md hover:bg-wine-hover transition-colors disabled:opacity-60">
                  {busy ? 'Opening…' : 'Open dashboard'}
                  <span aria-hidden="true" className={`material-symbols-outlined text-xl ${busy ? 'animate-spin' : ''}`}>{busy ? 'progress_activity' : 'arrow_forward'}</span>
                </button>
              </>
            )}
          </form>
          <p className="mt-6 text-center text-xs text-ink-tertiary"><a href="/" className="hover:text-primary">← Back to the shop</a></p>
        </div>
      </main>
    </div>
  );
}

function Dashboard({ session, onSignedOut }: { session: Session; onSignedOut: () => void }) {
  const [tab, setTab] = useState<Tab>(tabFromHash);
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [focus, setFocus] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [loadErr, setLoadErr] = useState('');
  const readOnly = session.storage === 'none';

  const guard = useCallback(
    async <T,>(p: Promise<T>) => {
      try {
        return await p;
      } catch (e) {
        if (e instanceof ApiError && e.status === 401) onSignedOut();
        throw e;
      }
    },
    [onSignedOut],
  );

  const load = useCallback(() => {
    setLoadErr('');
    Promise.all([guard(adminApi.orders()), guard(adminApi.products()), guard(adminApi.settings())])
      .then(([o, p, s]) => {
        setOrders(o);
        setProducts(p);
        setSettings(s);
      })
      .catch((e) => setLoadErr(e instanceof Error ? e.message : 'Could not load data'));
  }, [guard]);

  useEffect(load, [load]);
  useEffect(() => {
    const on = () => setTab(tabFromHash());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  const go = (t: Tab) => {
    window.location.hash = t;
    setTab(t);
    setMenu(false);
  };
  const openOrder = (id: string) => {
    go('orders');
    setFocus(id);
  };

  async function signOut() {
    await adminApi.logout().catch(() => {});
    onSignedOut();
  }

  const openCount = orders.filter((o) => o.status === 'new').length;
  const current = TABS.find((t) => t.id === tab)!;

  const nav = (
    <nav className="flex flex-col gap-1" aria-label="Admin sections">
      {TABS.map((t) => (
        <button
          key={t.id} type="button" onClick={() => go(t.id)} aria-current={tab === t.id ? 'page' : undefined}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${tab === t.id ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-xl">{t.icon}</span>
          <span className="flex-1 text-left">{t.label}</span>
          {t.id === 'orders' && openCount > 0 && <span className="rounded-full bg-secondary-container px-2 py-0.5 text-[11px] font-bold text-button-ink">{openCount}</span>}
        </button>
      ))}
    </nav>
  );

  const sideFooter = (
    <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
      <a href="/" target="_blank" rel="noopener" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white">
        <span aria-hidden="true" className="material-symbols-outlined text-xl">storefront</span> View shop
      </a>
      <button type="button" onClick={signOut} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white">
        <span aria-hidden="true" className="material-symbols-outlined text-xl">logout</span> Sign out
      </button>
    </div>
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[248px_1fr] bg-background">
      <aside className="hidden lg:flex sticky top-0 h-screen flex-col justify-between bg-primary p-5">
        <div className="space-y-8">
          <div className="px-2 pt-1"><Logo light /><p className={`${label} text-white/50 mt-2`}>Cellar office</p></div>
          {nav}
        </div>
        {sideFooter}
      </aside>

      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-primary px-4 py-3">
        <Logo light />
        <button type="button" onClick={() => setMenu((m) => !m)} aria-expanded={menu} aria-label="Menu" className="rounded-lg p-2 text-white hover:bg-white/10">
          <span aria-hidden="true" className="material-symbols-outlined">{menu ? 'close' : 'menu'}</span>
        </button>
      </header>
      {menu && <div className="lg:hidden sticky top-[60px] z-30 bg-primary px-4 pb-4 space-y-4 shadow-xl">{nav}{sideFooter}</div>}

      <main className="min-w-0 px-4 sm:px-8 py-8 lg:py-10">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className={`${label} text-secondary`}>La Taglia admin</p>
              <h1 className="font-headline-md text-[28px] leading-9 sm:text-headline-md text-on-surface">{current.label}</h1>
            </div>
            <button type="button" onClick={load} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-secondary hover:text-primary">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">refresh</span> Refresh
            </button>
          </div>

          {session.storage !== 'database' && (
            <div role="status" className={`rounded-xl px-5 py-4 text-sm ${readOnly ? 'bg-error-container text-on-error-container' : 'bg-secondary-fixed text-on-secondary-fixed'}`}>
              <p className="font-bold flex items-center gap-2"><span aria-hidden="true" className="material-symbols-outlined text-lg">{readOnly ? 'cloud_off' : 'science'}</span>{readOnly ? 'Database not connected: read-only' : 'Local test mode'}</p>
              <p className="mt-1">
                {readOnly
                  ? 'Nothing can be saved and checkout cannot record orders. In Vercel, add MONGODB_URI (your MongoDB Atlas connection string) under Settings → Environment Variables, then redeploy.'
                  : 'Data lives in the dev server’s memory and resets on restart. Set MONGODB_URI to keep it.'}
              </p>
            </div>
          )}
          {loadErr && <p role="alert" className="rounded-xl bg-error-container px-5 py-4 text-sm font-semibold text-on-error-container">{loadErr}</p>}

          {settings && (
            <>
              {tab === 'overview' && <Overview orders={orders} products={products} onOpenOrder={openOrder} onGo={go} />}
              {tab === 'orders' && (
                <Orders
                  orders={orders}
                  tagLibrary={settings.tags}
                  focusId={focus}
                  onFocus={setFocus}
                  readOnly={readOnly}
                  onSave={async (patch) => {
                    const updated = await guard(adminApi.updateOrder(patch));
                    setOrders((list) => list.map((o) => (o.id === updated.id ? updated : o)));
                  }}
                  onLoadSamples={async () => setOrders(await guard(adminApi.loadSampleOrders()))}
                />
              )}
              {tab === 'products' && <Products products={products} readOnly={readOnly} onSave={async (next) => setProducts(await guard(adminApi.saveProducts(next)))} />}
              {tab === 'customers' && <Customers orders={orders} onOpenOrder={openOrder} />}
              {tab === 'settings' && <SettingsPanel settings={settings} session={session} readOnly={readOnly} onSave={async (s) => setSettings(await guard(adminApi.saveSettings(s)))} />}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
