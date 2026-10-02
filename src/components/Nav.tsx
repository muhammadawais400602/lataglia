import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 bg-brand-50/85 backdrop-blur border-b border-brand-200">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl tracking-wide">
          La Taglia
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-brand-700' : 'text-brand-900 hover:text-brand-700'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !px-4 !py-2 text-sm">Reserve</Link>
        </nav>
      </div>
    </header>
  );
}
