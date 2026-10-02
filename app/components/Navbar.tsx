"use client";

import { useState } from "react";

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Regions", href: "#regions" },
  { label: "Gifts", href: "#gifts" },
  { label: "Stories", href: "#stories" },
  { label: "About", href: "#makers" },
];

function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#fbf9f9] border-b border-[#f1e9ea] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-12 py-3">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 text-[#191011]">
            <svg
              className="w-5 h-5 text-primary"
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
            <span className="font-serif text-xl font-bold tracking-tight">
              La Taglia
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#191011] hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <label className="hidden sm:flex min-w-36 max-w-60 h-10 items-center bg-[#f1e9ea] rounded px-3 gap-2 text-[#8e5760]">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search delicacies..."
              className="bg-transparent flex-1 min-w-0 text-sm text-[#191011] placeholder:text-[#8e5760] focus:outline-none"
            />
          </label>
          <button className="h-10 min-w-[76px] px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] rounded hover:bg-wine-hover transition-colors">
            Sign In
          </button>
          <button
            aria-label="Shopping bag"
            className="h-10 w-10 flex items-center justify-center bg-[#f1e9ea] text-[#191011] rounded hover:bg-[#dcc0c1] transition-colors"
          >
            <BagIcon />
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-7 h-7"
          >
            <span
              className="block w-5 h-px bg-[#1a1918] transition-transform duration-200"
              style={open ? { transform: "translateY(6px) rotate(45deg)" } : undefined}
            />
            <span
              className="block w-5 h-px bg-[#1a1918] transition-opacity duration-200"
              style={open ? { opacity: 0 } : undefined}
            />
            <span
              className="block w-5 h-px bg-[#1a1918] transition-transform duration-200"
              style={open ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#f1e9ea] bg-[#fbf9f9] px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-stone-700 py-1"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
