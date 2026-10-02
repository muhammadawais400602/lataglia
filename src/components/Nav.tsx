const links = [
  { href: '#shop', label: 'Shop' },
  { href: '#regions', label: 'Regions' },
  { href: '#gifts', label: 'Gifts' },
  { href: '#stories', label: 'Stories' },
  { href: '#makers', label: 'About' },
];

export default function Nav() {
  return (
    <header className="w-full bg-[#fbf9f9] border-b border-solid border-b-[#f1e9ea] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between whitespace-nowrap px-6 lg:px-12 py-3">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-3 text-[#191011]" href="#">
            <div className="size-5 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-[#191011] text-xl font-bold leading-tight tracking-[-0.015em] font-headline-sm">La Taglia</h2>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} className="text-[#191011] text-sm font-medium hover:text-primary transition-colors" href={l.href}>
                {l.label}
              </a>
            ))}
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
            <button className="flex min-w-[76px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-primary text-on-primary text-sm font-bold tracking-[0.015em] hover:bg-wine-hover transition-colors">
              <span className="truncate">Sign In</span>
            </button>
            <button aria-label="Shopping bag" className="flex cursor-pointer items-center justify-center rounded h-10 w-10 bg-[#f1e9ea] text-[#191011] hover:bg-outline-variant transition-colors">
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
