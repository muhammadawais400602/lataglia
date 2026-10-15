import { useEffect, useRef, useState } from 'react';
import { allRegions, regionHref } from '../regions';
import { useRegionImage } from '../regions/regionPhotos';

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/regions', label: 'Regions' },
  { href: '/gifts', label: 'Gifts' },
  { href: '/story', label: 'Our Story' },
  { href: '/about', label: 'About' },
];

function RegionCard({ r, compact, onPick }: { r: (typeof allRegions)[number]; compact?: boolean; onPick?: () => void }) {
  const imgOf = useRegionImage();
  const href = regionHref(r.name);
  return (
    <a href={href ?? '/regions'} onClick={onPick} className={`group flex items-start rounded-lg transition-colors hover:bg-surface-parchment focus-visible:bg-surface-parchment ${compact ? 'gap-3 p-2' : 'gap-3 p-2.5'}`}>
      <span className={`relative block shrink-0 overflow-hidden rounded-md bg-surface-container ${compact ? 'size-12' : 'size-14'}`}>
        <img src={imgOf(r)} alt="" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {!href && !compact && <span className="absolute inset-x-0 bottom-0 bg-black/55 py-0.5 text-center text-[9px] font-bold uppercase tracking-widest text-white">Soon</span>}
      </span>
      <span className="min-w-0 flex-1 whitespace-normal">
        <span className="block truncate font-headline-sm text-base leading-tight text-on-surface group-hover:text-primary">{r.name}</span>
        <span className={`text-xs leading-relaxed text-ink-secondary mt-1 ${compact ? 'line-clamp-1' : 'line-clamp-2'}`}>{compact && !href ? 'Story coming soon' : r.blurb}</span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileRegions, setMobileRegions] = useState(false);
  const closeTimer = useRef<number>();

  // The header is sticky, so an open mobile menu taller than the screen must scroll on its own.
  // Lock the page behind it so a swipe moves the menu, not the page.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  const show = () => { window.clearTimeout(closeTimer.current); setMega(true); };
  const hide = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setMega(false), 140); };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMega(false);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); window.clearTimeout(closeTimer.current); };
  }, []);
  return (
    <header className="w-full bg-[#fbf9f9] border-b border-solid border-b-[#f1e9ea] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between whitespace-nowrap px-6 lg:px-12 py-3">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-3 text-[#191011]" href="/">
            <div className="size-5 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-[#191011] text-xl font-bold leading-tight tracking-[-0.015em] font-headline-sm">La Taglia</h2>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) =>
              l.href === '/regions' ? (
                <div key={l.href} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && hide()}>
                  <a href={l.href} aria-haspopup="true" aria-expanded={mega} aria-controls="regions-menu"
                    className={`inline-flex items-center gap-0.5 text-sm font-medium transition-colors ${mega ? 'text-primary' : 'text-[#191011] hover:text-primary'}`}>
                    {l.label}
                    <span aria-hidden="true" className={`material-symbols-outlined text-base transition-transform ${mega ? 'rotate-180' : ''}`}>expand_more</span>
                  </a>
                  <div id="regions-menu" className={`absolute inset-x-0 top-full border-t border-[#f1e9ea] bg-surface-container-lowest shadow-xl transition-all duration-200 ${mega ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'}`}>
                    <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
                      <div className="flex items-baseline justify-between mb-2 px-3">
                        <p className="font-label-caps text-label-caps uppercase tracking-widest text-ink-tertiary">Italy, region by region · {allRegions.length} regions</p>
                        <a href="/regions" className="text-sm font-bold text-primary hover:underline underline-offset-4">All regions →</a>
                      </div>
                      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-1">
                        {allRegions.map((r) => <RegionCard key={r.name} r={r} onPick={() => setMega(false)} />)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a key={l.href} className="text-[#191011] text-sm font-medium hover:text-primary transition-colors" href={l.href}>
                  {l.label}
                </a>
              ),
            )}
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <label className="hidden sm:flex flex-col min-w-36 !h-10 max-w-60">
            <div className="flex w-full flex-1 items-stretch rounded h-full bg-[#f1e9ea]">
              <div className="text-[#8e5760] flex border-none items-center justify-center pl-3">
                <span className="material-symbols-outlined text-lg">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#191011] focus:outline-none focus:ring-0 border-none bg-transparent h-full placeholder:text-[#8e5760] px-3 text-sm font-normal"
                placeholder="Search delicacies..."
                defaultValue=""
              />
            </div>
          </label>
          <div className="flex items-center gap-2">
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center rounded h-10 w-10 bg-[#f1e9ea] text-[#191011]"
            >
              <span className="material-symbols-outlined text-xl">{open ? 'close' : 'menu'}</span>
            </button>
            <a href="/login" className="flex min-w-[76px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-primary text-on-primary text-sm font-bold tracking-[0.015em] hover:bg-wine-hover transition-colors">
              <span className="truncate">Sign In</span>
            </a>
            <a href="/cart" aria-label="Shopping bag" className="flex cursor-pointer items-center justify-center rounded h-10 w-10 bg-[#f1e9ea] text-[#191011] hover:bg-outline-variant transition-colors">
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
            </a>
          </div>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[#f1e9ea] px-6 py-2 flex flex-col max-h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain">
          {links.map((l) =>
            l.href === '/regions' ? (
              <div key={l.href} className="border-b border-[#f1e9ea]">
                <button type="button" onClick={() => setMobileRegions((v) => !v)} aria-expanded={mobileRegions}
                  className="w-full flex items-center justify-between py-3 text-[#191011] text-base font-medium hover:text-primary">
                  {l.label}
                  <span aria-hidden="true" className={`material-symbols-outlined text-xl transition-transform ${mobileRegions ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {mobileRegions && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-3">
                    {allRegions.map((r) => <RegionCard key={r.name} r={r} compact onPick={() => setOpen(false)} />)}
                    <a href="/regions" onClick={() => setOpen(false)} className="p-2 text-sm font-bold text-primary">All regions →</a>
                  </div>
                )}
              </div>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[#191011] text-base font-medium border-b border-[#f1e9ea] last:border-0 hover:text-primary">
                {l.label}
              </a>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
