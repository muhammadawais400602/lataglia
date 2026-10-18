export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-primary-container">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-5" aria-label="La Taglia, home">
              <img src="/logo-white.png" alt="La Taglia · Artisanal Italy" width={1057} height={259} loading="lazy" className="h-14 w-auto" />
            </a>
            <p className="text-white/80 text-sm max-w-sm leading-relaxed mb-6 font-body-sm">
              Curators of fine regional Italian culinary heritage. Direct discovery from multi-generational family producers across Sicilia, Campania, Emilia-Romagna and beyond.
            </p>
            <div className="text-xs text-white/60">
              Imported directly under strict cold-chain and protected geographical origin standards.
            </div>
          </div>
          <FooterCol title="Collections" items={[
            { href: '/shop?category=pistachio', label: 'The Pistachio Edit' },
            { href: '/shop?category=pasta', label: 'Artisanal Bronze Pasta' },
            { href: '/shop?category=balsamics', label: 'Traditional Balsamic DOP' },
            { href: '/shop?category=oils', label: 'Extra Virgin Olive Oils' },
            { href: '/#bestsellers', label: 'Best Sellers' },
          ]} />
          <FooterCol title="Assistance" items={[
            { href: '/about', label: 'About Us' },
            { href: '/about#our-story', label: 'Our Story' },
            { href: '/blog', label: 'Blog' },
            { href: '/about#people', label: 'Meet the Producers' },
            { href: '/gifts#corporate', label: 'Corporate Gifting' },
            { href: '/about#faq', label: 'Shipping & Freshness' },
            { href: '/about#contact', label: 'Contact Concierge' },
          ]} />
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} La Taglia Artisanal LLC. All rights reserved.</p>
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
