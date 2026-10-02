import { useState } from 'react';
import Layout from '../components/Layout';
import { Toast, useToast } from '../components/Toast';
import {
  adjacentRegions,
  sicilyBox,
  sicilyEssays,
  sicilyFilters,
  sicilyHeroImg,
  sicilyMakers,
  sicilyProducts,
  sicilyStats,
} from '../regionData';

const label = 'font-label-caps text-label-caps uppercase';

export default function Region() {
  const [filter, setFilter] = useState('all');
  const toast = useToast();
  const reserve = (name: string, price: number) => toast.show(`Reserved: ${name} ($${price}.00) added to bag`);
  const visible = sicilyProducts.filter((p) => filter === 'all' || p.tags.includes(filter as never));

  return (
    <Layout>
      <Toast message={toast.message} />

      <div className="w-full bg-surface-container-low px-6 lg:px-12 py-4">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-ink-secondary ${label} tracking-widest text-xs`}>
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <span className="text-ink-tertiary">/</span>
            <a className="hover:text-primary transition-colors" href="/#regions">Italian Terroir Atlas</a>
            <span className="text-ink-tertiary">/</span>
            <span className="text-primary font-bold">Sicilia (Val di Noto &amp; Mount Etna)</span>
          </nav>
          <div className={`hidden sm:flex items-center gap-3 text-ink-secondary ${label} tracking-widest text-xs`}>
            <span className="inline-block size-2 rounded-full bg-pistachio-light" />
            Direct Harvest Reserve · D.O.P. Certified
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105" style={{ backgroundImage: `url('${sicilyHeroImg}')` }} />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 pt-16 pb-20 flex flex-col justify-between">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded bg-secondary-container text-button-ink ${label} tracking-widest`}>Terroir Dossier N° 01</span>
              <span className="text-secondary-fixed text-[10px] leading-3 font-semibold uppercase tracking-[0.35em]">Il Sole e La Lava</span>
            </div>
            <h1 className="font-headline-lg text-[32px] leading-[38px] sm:text-headline-lg text-white font-normal tracking-tight">
              Sicilia: Sun-Drenched Volcanic Terroir, Ancient Grains &amp; Sea-Salt Winds
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl leading-relaxed">
              From the mineral-dense basalt skirts of Mount Etna to the blistering winds of Pachino and the crystalline salt pans of Trapani, Sicily operates on primordial culinary time. Micro-estates harvest emerald pistachios on lava slopes every alternating year, hand-crank heirloom bronze busiata, and cure sun-drenched cherry pomodori in native extra virgin oil.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a className="px-8 py-4 rounded-full bg-secondary-container text-button-ink font-button text-button uppercase tracking-wider hover:bg-gold-hover transition-colors shadow-md text-center" href="#curated-catalog">
                Explore 9 Sicilian Provisions
              </a>
              <a className="px-7 py-4 rounded-full bg-white/10 text-white font-button text-button uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm text-center" href="#producer-dossier">
                Meet the Two Families
              </a>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-wine-dark/70 rounded-xl p-6 backdrop-blur-md">
            {sicilyStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className={`${label} tracking-widest text-secondary-fixed`}>{s.label}</span>
                <span className="font-headline-md text-2xl sm:text-headline-md text-white mt-1">{s.value}</span>
                <span className="font-caption text-caption text-surface-container-high/80 mt-0.5">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-[65px] z-40 bg-surface-container-lowest shadow-sm py-4 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {sicilyFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-full font-button-sm text-button-sm uppercase tracking-wider transition-colors ${filter === f.value ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-ink-secondary hover:text-on-surface hover:bg-surface-container'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 text-ink-tertiary font-caption text-caption min-w-max">
            <span className="material-symbols-outlined text-sm">ac_unit</span>
            Direct Cold-Chain Air Freight
          </div>
        </div>
      </section>

      <section id="curated-catalog" className="w-full bg-surface-parchment py-16 px-6 lg:px-12 scroll-mt-32">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className={`${label} text-secondary tracking-[0.25em]`}>Direct From Farm Gate</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1">The Sicilian Provisions Manifest</h2>
            </div>
            <p className="font-body-sm text-body-sm text-ink-secondary max-w-md">
              Every SKU originates from certified protected geographical origins in Sicily, packaged at peak harvest under the supervision of the Spina and Licata estates.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((p) => (
              <article key={p.name} className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
                  {p.badge && (
                    <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded ${label} tracking-wider shadow-sm ${p.badge.className}`}>{p.badge.label}</span>
                  )}
                  {p.href ? <a href={p.href}><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src={p.img} alt={p.name} loading="lazy" /></a> : <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src={p.img} alt={p.name} loading="lazy" />}
                </div>
                <div className="flex flex-col flex-1 p-6 justify-between gap-4">
                  <div>
                    <div className={`flex items-center justify-between gap-2 text-ink-secondary ${label} tracking-widest mb-1`}>
                      <span>{p.origin}</span>
                      <span>{p.size}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">{p.href ? <a href={p.href} className="hover:underline">{p.name}</a> : p.name}</h3>
                    <p className="font-body-sm text-body-sm text-ink-secondary mt-2 line-clamp-2">{p.desc}</p>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-low/40 -mx-6 -mb-6 px-6 py-4">
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">${p.price}.00</span>
                      <span className="block font-caption text-caption text-ink-tertiary">{p.perUnit}</span>
                    </div>
                    <button
                      onClick={() => reserve(p.name, p.price)}
                      className="px-5 py-2.5 rounded-full bg-secondary-container text-button-ink font-button-sm text-button-sm uppercase tracking-wider hover:bg-gold-hover transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-base">keyboard_double_arrow_left</span>
                      Reserve
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-parchment aspect-[4/3]">
              <img className="w-full h-full object-cover" src={sicilyBox.img} alt="Taste of Sicily Archival Linen Box" loading="lazy" />
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md flex items-center gap-3">
                <span className="material-symbols-outlined text-pistachio-light">verified</span>
                <span className={`${label} tracking-wider text-on-surface`}>Numbered Archival Edition · Box #048 of 250</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className={`${label} text-secondary tracking-[0.25em]`}>Limited Regional Curation</span>
              <h2 className="font-headline-lg text-[32px] leading-[38px] sm:text-headline-lg text-primary mt-2">Taste of Sicily Archival Linen Box</h2>
              <div className="flex flex-wrap items-baseline gap-3 mt-3">
                <span className="font-headline-md text-headline-md text-on-surface font-bold">$89.00</span>
                <span className="font-body-sm text-body-sm text-ink-secondary line-through">$107.00 Individual Value</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-ink-secondary leading-relaxed">
              An authoritative sensory crossing of the island. Encased in natural linen-wrapped binder board with brass latching, this collection convenes the defining culinary expressions of Mount Etna and the southern salt coast.
            </p>
            <div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-3">
              <h4 className={`${label} tracking-widest text-ink-secondary`}>Complete Five-Item Manifest</h4>
              <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface">
                {sicilyBox.items.map(([name, detail]) => (
                  <li key={name} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>{name}</strong> {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => reserve('Taste of Sicily Archival Linen Box', 89)}
                className="flex-1 sm:flex-none px-8 py-4 rounded-full bg-primary text-on-primary font-button text-button uppercase tracking-wider hover:bg-wine-hover transition-colors shadow-lg text-center"
              >
                Reserve Sicilian Box · $89
              </button>
              <button className="px-5 py-4 rounded-full bg-surface-container text-ink-secondary font-button-sm text-button-sm uppercase tracking-wider hover:bg-surface-variant transition-colors flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">menu_book</span>
                Tasting Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="producer-dossier" className="w-full bg-surface-parchment py-20 px-6 lg:px-12 scroll-mt-20">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-16">
          <div className="max-w-2xl">
            <span className={`${label} text-secondary tracking-[0.25em]`}>Maker Lineage</span>
            <h2 className="font-headline-lg text-[32px] leading-[38px] sm:text-headline-lg text-on-surface mt-2">Custodians of Volcanic Soil &amp; Coastal Sun</h2>
            <p className="font-body-md text-body-md text-ink-secondary mt-3">
              Behind every label sits an unyielding refusal to industrialize. We partner exclusively with multi-generational families who prune by hand, cure under sunlight, and refuse synthetic additives.
            </p>
          </div>
          {sicilyMakers.map((m) => (
            <div key={m.name} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
              <div className={`lg:col-span-5 relative min-h-[360px] ${m.imageRight ? 'lg:order-last' : ''}`}>
                <img className="absolute inset-0 w-full h-full object-cover" src={m.img} alt={m.family} loading="lazy" />
                <div className={`absolute top-4 ${m.tagClass} ${label} px-3 py-1 rounded tracking-widest`}>{m.tag}</div>
              </div>
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-headline-md text-headline-md text-primary">{m.name}</span>
                    <span className="text-ink-tertiary">·</span>
                    <span className={`${label} text-ink-secondary tracking-widest`}>{m.family}</span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-normal italic leading-relaxed">{m.quote}</p>
                  <p className="font-body-md text-body-md text-ink-secondary leading-relaxed">{m.body}</p>
                </div>
                <div className="flex flex-wrap items-center gap-6 bg-surface-container-low rounded-xl p-4">
                  {m.facts.map(([k, v]) => (
                    <div key={k}>
                      <span className="font-caption text-caption text-ink-tertiary uppercase">{k}</span>
                      <p className="font-subheading text-subheading text-on-surface">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className={`${label} text-secondary tracking-[0.25em]`}>Archival Field Essays</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1">Sicilian Culinary Anthropology</h2>
            </div>
            <a className="text-primary hover:text-wine-hover font-button-sm text-button-sm uppercase tracking-wider transition-colors flex items-center gap-1" href="/#stories">
              Read All Regional Stories <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sicilyEssays.map((e) => (
              <article key={e.title} className="bg-surface-container-lowest p-8 lg:p-10 rounded-2xl shadow-sm flex flex-col justify-between gap-8 overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className={`flex items-center gap-2 text-ink-tertiary ${label} tracking-widest`}>
                    <span>{e.meta[0]}</span><span>·</span><span>{e.meta[1]}</span>
                  </div>
                  <h3 className="font-headline-md text-2xl sm:text-headline-md text-on-surface">{e.title}</h3>
                  <p className="font-body-md text-body-md text-ink-secondary leading-relaxed">{e.body}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-surface-container-low/50 -mx-8 -mb-8 lg:-mx-10 lg:-mb-10 px-8 lg:px-10 py-5">
                  <span className="font-caption text-caption text-ink-secondary">{e.footer}</span>
                  <span className="font-button-sm text-button-sm text-primary uppercase font-bold tracking-wider hover:underline cursor-pointer">Read Full Monograph</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-on-primary py-16 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className={`text-secondary-fixed ${label} tracking-widest`}>Continuing the Journey</span>
              <h2 className="font-headline-md text-headline-md text-white mt-1">Explore Adjacent Terroirs</h2>
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high/80 max-w-sm">
              Traverse north through the Strait of Messina to the fiery chili terroirs of Calabria or the volcanic tomato soil of Campania.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adjacentRegions.map((r) => (
              <a key={r.title} href="/#regions" className="group relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] shadow-lg flex flex-col justify-end p-8 bg-wine-dark">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('${r.img}')` }} />
                <div className="relative z-10 flex flex-col gap-2">
                  <span className={`${label} text-secondary-fixed tracking-widest`}>{r.dossier}</span>
                  <h3 className="font-headline-md text-2xl sm:text-headline-md text-white group-hover:text-secondary-fixed transition-colors">{r.title}</h3>
                  <p className="font-body-sm text-body-sm text-surface-container-high/90">{r.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
