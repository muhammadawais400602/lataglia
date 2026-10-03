export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-primary-container">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="size-6 text-[#FEB62C]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-headline-sm tracking-tight">La Taglia</h3>
            </div>
            <p className="text-white/80 text-sm max-w-sm leading-relaxed mb-6 font-body-sm">
              Curators of fine regional Italian culinary heritage. Direct discovery from multi-generational family producers across Sicilia, Campania, Emilia-Romagna and beyond.
            </p>
            <div className="text-xs text-white/60">
              Imported directly under strict cold-chain and protected geographical origin standards.
            </div>
          </div>
          <FooterCol title="Collections" items={[
            { href: '/#pistachio', label: 'The Pistachio Edit' },
            { href: '/#pasta', label: 'Artisanal Bronze Pasta' },
            { href: '/shop', label: 'Traditional Balsamic DOP' },
            { href: '/shop', label: 'Extra Virgin Olive Oils' },
            { href: '/#bestsellers', label: 'Best Sellers' },
          ]} />
          <FooterCol title="Regions" items={[
            { href: '/#regions', label: 'Sicilia' },
            { href: '/#regions', label: 'Campania' },
            { href: '/#regions', label: 'Emilia-Romagna' },
            { href: '/#regions', label: 'Calabria' },
            { href: '/#regions', label: 'Lombardia' },
            { href: '/#regions', label: 'Piemonte' },
          ]} />
          <FooterCol title="Assistance" items={[
            { href: '/gifts#corporate', label: 'Corporate Gifting' },
            { href: '/#makers', label: 'Meet the Producers' },
            { href: '/shop#shipping', label: 'Shipping & Freshness' },
            { href: '#', label: 'Order Tracking' },
            { href: '#', label: 'Contact Concierge' },
          ]} />
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} La Taglia Providore Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Terms of Service</a>
            <a className="hover:underline" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-headline-sm text-sm uppercase tracking-widest text-[#FEB62C] mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-white/80 font-body-sm">
        {items.map((i, idx) => (
          <li key={idx}><a className="hover:text-white transition-colors" href={i.href}>{i.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
