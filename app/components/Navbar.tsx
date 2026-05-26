'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/transactions', label: 'Transactions' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-[#1E293B] ${
        scrolled ? 'shadow-md shadow-black/20' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-white tracking-tight"
          aria-label="Keningford Partners"
        >
          Keningford Partners
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white -mb-4"></span>
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-sm bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] transition hover:bg-gray-100"
          >
            Contact
          </Link>
        </nav>

        <button 
          aria-label="menu" 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1E293B] border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-gray-300 hover:text-white ${isActive(link.href) ? 'font-semibold text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-sm bg-white px-4 py-2 text-sm font-semibold text-[#1E293B]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
