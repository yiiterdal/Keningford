import Link from 'next/link';
import { cookiePolicyTitle } from '../data/cookie-policy';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';

const companyLinks = [
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/transactions', label: 'Transactions' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const profileLinks = [
  {
    href: 'https://pitchbook.com/profiles/advisor/1405195-84',
    label: 'PitchBook',
  },
  {
    href: 'https://www.crunchbase.com/organization/keningford-partners',
    label: 'Crunchbase',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1628] text-white">
      <div className="container mx-auto px-6 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div className="sm:col-span-2 md:col-span-4">
            <Link href="/" className="mb-5 inline-block">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-white md:text-[1.75rem]">
                Keningford Partners
              </h3>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Independent capital advisory and financial services for leading companies and institutional
              investors.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4a062]">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white/90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4a062]">
              Profiles
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              {profileLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white/90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4a062]">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm leading-relaxed text-white/55">
              <div>
                <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-white/90">
                  {contactEmail}
                </a>
              </div>
              <div>
                <a href={contactPhoneHref} className="transition-colors hover:text-white/90">
                  {contactPhone}
                </a>
              </div>
              <div>
                <div>{contactAddressLine1}</div>
                <div>{contactAddressLine2}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 md:mt-14">
          <Link
            href="/privacy"
            className="block text-center text-sm text-white/50 transition-colors hover:text-white/80"
          >
            {cookiePolicyTitle} →
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} Keningford Partners. All rights reserved.</p>
          <p className="md:text-center">Confidential · By appointment only</p>
        </div>
      </div>
    </footer>
  );
}