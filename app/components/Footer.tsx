const collections = [
  { label: "The Pistachio Edit", href: "#pistachio" },
  { label: "Artisanal Bronze Pasta", href: "#pasta" },
  { label: "Traditional Balsamic DOP", href: "#shop" },
  { label: "Extra Virgin Olive Oils", href: "#shop" },
  { label: "Best Sellers", href: "#bestsellers" },
];

const regions = [
  "Sicilia",
  "Campania",
  "Emilia-Romagna",
  "Calabria",
  "Lombardia",
  "Piemonte",
];

const assistance = [
  { label: "Corporate Gifting", href: "#corporate" },
  { label: "Meet the Producers", href: "#makers" },
  { label: "Shipping & Freshness", href: "#" },
  { label: "Order Tracking", href: "#" },
  { label: "Contact Concierge", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-[#7a1f2e]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-amber"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <h3 className="font-serif text-2xl font-bold tracking-tight">
                La Taglia
              </h3>
            </div>
            <p className="text-white/80 text-sm max-w-sm leading-relaxed mb-6">
              Curators of fine regional Italian culinary heritage. Direct
              discovery from multi-generational family producers across Sicilia,
              Campania, Emilia-Romagna and beyond.
            </p>
            <p className="text-xs text-white/60">
              Imported directly under strict cold-chain and protected
              geographical origin standards.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-amber mb-4">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {collections.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="hover:text-white transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-amber mb-4">
              Regions
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {regions.map((r) => (
                <li key={r}>
                  <a href="#regions" className="hover:text-white transition-colors">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-amber mb-4">
              Assistance
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {assistance.map((a) => (
                <li key={a.label}>
                  <a href={a.href} className="hover:text-white transition-colors">
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 La Taglia Providore Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
