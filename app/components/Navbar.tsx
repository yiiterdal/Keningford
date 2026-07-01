'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { hasHeroOverlay, primaryNavLinks } from '../data/navigation';

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

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  const isTransparent = hasHeroOverlay(pathname) && !scrolled;

  const headerClasses = isTransparent
    ? 'fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300'
    : `fixed top-0 left-0 right-0 z-50 bg-[#0b1426] transition-all duration-300 ${
        scrolled ? 'shadow-md shadow-black/20' : ''
      }`;

  const linkClasses = (href: string) =>
    isActive(href) ? 'text-white' : 'text-white/70 hover:text-white';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg font-semibold tracking-tight text-white md:text-xl"
          aria-label="Keningford Partners"
        >
          Keningford Partners
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[13px] font-normal transition-colors ${linkClasses(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 whitespace-nowrap border border-white/60 px-4 py-2 text-[12px] font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </Link>
        </nav>

        <button aria-label="menu" onClick={() => setOpen(!open)} className="text-white lg:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b1426]/95 backdrop-blur-sm lg:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href) ? 'font-semibold text-white' : 'text-white/75 hover:text-white'}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit border border-white/60 px-4 py-2 text-sm font-medium text-white"
            >
              Contact
            </Link>
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
              <Link
                href="/contact?tab=referrals"
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white"
              >
                Referrals
              </Link>
              <Link
                href="/contact?tab=investors"
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white"
              >
                Investors
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
