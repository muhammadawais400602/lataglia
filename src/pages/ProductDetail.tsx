import { useState } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import { addProduct, useBasket } from '../cartStore';
import { useCatalog, useSettings } from '../storeApi';

const label = 'font-label-caps text-label-caps uppercase';
const money = (n: number) => `$${n.toFixed(2)}`;

export default function ProductDetail({ id }: { id: string }) {
  const { products, loaded } = useCatalog();
  const settings = useSettings();
  const [, setBasket] = useBasket();
  const toast = useToast();
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(0);
  const p = products.find((x) => x.id === id);

  if (!p) {
    return (
      <Layout>
        <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24 text-center">
          {loaded ? (
            <>
              <h1 className="font-headline-md text-headline-md text-primary mb-3">This product isn’t available</h1>
              <p className="text-ink-secondary mb-8">It may have sold out or been taken off the shelf.</p>
              <a href="/shop" className="inline-flex px-6 py-3 rounded-full bg-primary text-on-primary font-bold text-sm">Back to the shop</a>
            </>
          ) : (
            <p className="text-ink-secondary" role="status">Loading…</p>
          )}
        </section>
      </Layout>
    );
  }

  const photos = [...new Set([p.img, ...(p.images ?? [])].filter(Boolean))];
  const soldOut = p.stock <= 0;
  const max = Math.max(1, Math.min(99, p.stock));
  const line = qty * p.price;
  const away = Math.max(0, settings.freeShippingAt - line);
  const paragraphs = (p.description ?? '').split(/\n{2,}/).map((t) => t.trim()).filter(Boolean);

  function add() {
    setBasket((b) => addProduct(b, p!, qty));
    toast.show(`${qty} × ${p!.name} added to your basket`);
  }

  return (
    <Layout>
      <div className="w-full bg-surface-container-low py-3.5 px-6 lg:px-12">
        <nav aria-label="Breadcrumb" className="max-w-[1320px] mx-auto flex flex-wrap items-center gap-2 font-body-sm text-body-sm text-ink-secondary">
          <a className="hover:text-primary transition-colors" href="/">Home</a>
          <span className="text-ink-tertiary">/</span>
          <a className="hover:text-primary transition-colors" href="/shop">Shop</a>
          <span className="text-ink-tertiary">/</span>
          <span className="text-on-surface font-semibold truncate max-w-[220px] sm:max-w-md">{p.name}</span>
        </nav>
      </div>

      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-10 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
            <div className="relative bg-surface-parchment rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 lg:p-14 shadow-sm">
              {p.badge.label && <span className={`absolute top-5 left-5 z-10 ${label} px-3 py-1.5 rounded tracking-widest shadow-sm ${p.badge.className}`}>{p.badge.label}</span>}
              {photos[photo] ? <img key={photo} className="w-full h-full object-contain" src={photos[photo]} alt={p.name} /> : <span aria-hidden="true" className="material-symbols-outlined text-6xl text-ink-tertiary">image</span>}
            </div>
            {photos.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {photos.map((src, i) => (
                  <button key={src} type="button" onClick={() => setPhoto(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={photo === i}
                    className={`rounded-lg overflow-hidden aspect-square bg-surface-parchment p-1.5 transition-all ${photo === i ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}>
                    <img className="w-full h-full object-contain" src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col min-w-0">
            {(p.producer || p.place) && (
              <div className="flex flex-wrap items-center gap-2 text-wine-dark font-bold mb-2">
                {p.producer && <span>{p.producer}</span>}
                {p.producer && p.place && <span className="text-ink-tertiary">·</span>}
                {p.place && <span className="font-body-sm text-body-sm text-ink-secondary font-normal">{p.place}</span>}
              </div>
            )}
            <h1 className="font-headline-lg text-[30px] leading-[38px] sm:text-[36px] sm:leading-[44px] text-primary tracking-tight mb-5 break-words">{p.name}</h1>

            <div className="bg-surface-parchment p-5 rounded-xl mb-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">{money(p.price)}</span>
                {p.unit && <span className="font-body-sm text-body-sm text-ink-secondary">{p.unit}</span>}
              </div>
              <p className={`mt-2 text-sm font-semibold ${soldOut ? 'text-status-red' : p.stock <= 5 ? 'text-badge-ink' : 'text-tertiary'}`}>
                {soldOut ? 'Sold out' : p.stock <= 5 ? `Only ${p.stock} left` : 'In stock'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
              <div className="flex items-center justify-between bg-surface-container rounded-xl px-4 py-3 min-w-[130px]">
                <button type="button" aria-label="Decrease quantity" disabled={soldOut} onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-1 text-on-surface hover:text-primary disabled:opacity-40">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">remove</span>
                </button>
                <span className="font-bold text-on-surface px-4" aria-live="polite">{qty}</span>
                <button type="button" aria-label="Increase quantity" disabled={soldOut || qty >= max} onClick={() => setQty((q) => Math.min(max, q + 1))} className="p-1 text-on-surface hover:text-primary disabled:opacity-40">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>
              <button type="button" onClick={add} disabled={soldOut}
                className="flex-1 bg-secondary-container hover:bg-gold-hover text-button-ink font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">shopping_bag</span>
                {soldOut ? 'Sold out' : `Add to Bag · ${money(line)}`}
              </button>
            </div>
            {!soldOut && (
              <p className="text-sm text-ink-secondary mb-8">
                {away > 0 ? <>Add <strong className="text-on-surface">{money(away)}</strong> more for free shipping.</> : 'This qualifies for free shipping.'}
                {' '}<a href="/cart" className="font-semibold text-primary underline underline-offset-4">View basket</a>
              </p>
            )}

            {p.features && p.features.length > 0 && (
              <div className="bg-surface-container-low rounded-xl p-5 mb-4">
                <h2 className="font-headline-sm text-lg text-on-surface mb-3">About this item</h2>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink-secondary leading-relaxed">
                      <span aria-hidden="true" className="material-symbols-outlined text-base text-pistachio-light mt-0.5">check_circle</span>
                      <span className="min-w-0 break-words">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {paragraphs.length > 0 && (
          <div className="mt-12 lg:mt-16 max-w-3xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-5">Description</h2>
            <div className="space-y-4 text-body-md text-ink-secondary leading-relaxed">
              {paragraphs.map((t, i) => <p key={i} className="whitespace-pre-line break-words">{t}</p>)}
            </div>
          </div>
        )}
      </section>
      <Toast message={toast.message} />
    </Layout>
  );
}
