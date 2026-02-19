'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const capabilityLinks = [
  { href: '/capabilities/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/capabilities/capital-raising', label: 'Capital Raising' },
  { href: '/capabilities/strategic-advisory', label: 'Strategic Advisory' },
  { href: '/capabilities/valuation-fairness-opinions', label: 'Valuation & Fairness Opinions' },
  { href: '/capabilities/restructuring', label: 'Restructuring' },
];

export default function SidebarNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-full flex items-center justify-between py-4 text-navy font-medium"
      >
        <span>Capabilities</span>
        <svg
          className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <nav className={`${open ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-1 py-4">
          {capabilityLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-navy font-semibold'
                    : 'text-gray-600 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}












