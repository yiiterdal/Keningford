'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { hasHeroOverlay, insightsDropdownLinks, primaryNavLinks } from '../data/navigation';
import { capabilities } from '../data/capabilities';

interface NavDropdownConfig {
  items: { label: string; href: string }[];
  viewAllLabel: string;
  viewAllHref: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const dropdowns: Record<string, NavDropdownConfig> = useMemo(
    () => ({
      '/capabilities': {
        items: capabilities.map((capability) => ({ label: capability.title, href: capability.href })),
        viewAllLabel: 'View all capabilities →',
        viewAllHref: '/capabilities',
      },
      '/insights': {
        items: insightsDropdownLinks,
        viewAllLabel: 'View all insights →',
        viewAllHref: '/insights',
      },
    }),
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openDropdown]);

  const openDropdownFor = (href: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(href);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

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
          {primaryNavLinks.map((link) => {
            const dropdown = dropdowns[link.href];

            if (!dropdown) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap text-[13px] font-normal transition-colors ${linkClasses(link.href)}`}
                >
                  {link.label}
                </Link>
              );
            }

            const isOpen = openDropdown === link.href;

            return (
              <div
                key={link.href}
                className="relative flex items-center"
                onMouseEnter={() => openDropdownFor(link.href)}
                onMouseLeave={scheduleCloseDropdown}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpenDropdown(null)}
                  className={`whitespace-nowrap text-[13px] font-normal transition-colors ${linkClasses(link.href)}`}
                >
                  {link.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenDropdown((prev) => (prev === link.href ? null : link.href))}
                  aria-expanded={isOpen}
                  aria-label={`Toggle ${link.label} submenu`}
                  className={`ml-1 flex items-center p-1 transition-colors ${linkClasses(link.href)}`}
                >
                  <svg
                    className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                    onMouseEnter={() => openDropdownFor(link.href)}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <div className="overflow-hidden border border-white/10 bg-[#0b1426] shadow-xl shadow-black/30">
                      <ul className="py-2">
                        {dropdown.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-white/5"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={dropdown.viewAllHref}
                        onClick={() => setOpenDropdown(null)}
                        className="block border-t border-white/10 px-5 py-3 text-[12px] font-medium text-[#c4a062] transition-colors hover:bg-white/5"
                      >
                        {dropdown.viewAllLabel}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            {primaryNavLinks.map((link) => {
              const dropdown = dropdowns[link.href];

              if (!dropdown) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={isActive(link.href) ? 'font-semibold text-white' : 'text-white/75 hover:text-white'}
                  >
                    {link.label}
                  </Link>
                );
              }

              const isMobileOpen = mobileOpenDropdown === link.href;

              return (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={isActive(link.href) ? 'font-semibold text-white' : 'text-white/75 hover:text-white'}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileOpenDropdown((prev) => (prev === link.href ? null : link.href))}
                      aria-expanded={isMobileOpen}
                      aria-label={`Toggle ${link.label} submenu`}
                      className="p-1 text-white/75 hover:text-white"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {isMobileOpen && (
                    <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-white/70 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit border border-white/60 px-4 py-2 text-sm font-medium text-white"
            >
              Contact
            </Link>
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
              <Link
                href="/investors"
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white"
              >
                For Investors
              </Link>
              <Link
                href="/contact?tab=referrals"
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white"
              >
                Referrals
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
