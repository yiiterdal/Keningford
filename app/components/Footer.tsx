import Link from 'next/link';
import { cookiePolicyTitle } from '../data/cookie-policy';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactLinkedIn,
  contactPhone,
  contactPhoneHref,
} from '../data/contact';
import { primaryNavLinks } from '../data/navigation';
import { capabilities } from '../data/capabilities';
import {
  FooterMailIcon,
  FooterMapPinIcon,
  FooterPhoneIcon,
  FooterProfileIcon,
} from './FooterIcons';

const audienceLinks = [
  { href: '/investors', label: 'For Investors' },
  { href: '/contact?tab=referrals', label: 'Referrals' },
  { href: '/resources', label: 'Resources' },
  { href: '/raise-readiness', label: 'Raise Readiness' },
];

const profileLinks = [
  { href: contactLinkedIn, label: 'LinkedIn', icon: 'linkedin' as const },
  { href: 'https://pitchbook.com/profiles/advisor/1405195-84', label: 'PitchBook', icon: 'pitchbook' as const },
  { href: 'https://www.crunchbase.com/organization/keningford-partners', label: 'Crunchbase', icon: 'crunchbase' as const },
];

const footerServiceLabels: Record<string, string> = {
  '/capabilities/buy-side-advisory': 'Buy-side Advisory',
  '/capabilities/valuation-fairness-opinions': 'Valuation & Fairness',
};

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4a062]">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1628] text-white">
      <div className="container mx-auto px-6 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-5 inline-block">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-white md:text-[1.75rem]">
                Keningford Partners
              </h3>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Independent capital advisory and financial services for leading companies and institutional
              investors.
            </p>

            <div className="mt-8 space-y-3 text-sm leading-relaxed text-white/70">
              <div className="flex items-start gap-3">
                <FooterMailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c4a062]/80" />
                <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-white">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FooterPhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c4a062]/80" />
                <a href={contactPhoneHref} className="transition-colors hover:text-white">
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FooterMapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c4a062]/80" />
                <div>
                  <div>{contactAddressLine1}</div>
                  <div>{contactAddressLine2}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/60">
              {profileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FooterProfileIcon id={link.icon} className="h-4 w-4 shrink-0 text-[#c4a062]/80" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
            <FooterColumn title="Company">
              <ul className="space-y-2.5 text-sm text-white/70">
                {primaryNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title="Services">
              <ul className="space-y-2.5 text-sm text-white/70">
                {capabilities.map((capability) => (
                  <li key={capability.href}>
                    <Link href={capability.href} className="transition-colors hover:text-white">
                      {footerServiceLabels[capability.href] ?? capability.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Partners">
              <ul className="space-y-2.5 text-sm text-white/70">
                {audienceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/55 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p>© {year} Keningford Partners. All rights reserved.</p>
          <p className="md:text-center">Confidential · By appointment only</p>
          <Link href="/privacy" className="transition-colors hover:text-white/90 md:text-right">
            {cookiePolicyTitle} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
