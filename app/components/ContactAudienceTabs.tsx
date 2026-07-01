'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CalendlyEmbed from './CalendlyEmbed';
import { getCalendlyUrl, isCalendlyConfigured } from '../lib/calendly';
import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactInvestorsEmail,
  contactPhone,
  contactPhoneHref,
  contactReferralsEmail,
} from '../data/contact';

type ContactTab = 'consultation' | 'referrals' | 'investors';

const tabs: { id: ContactTab; label: string }[] = [
  { id: 'consultation', label: 'Consultation' },
  { id: 'referrals', label: 'Referrals' },
  { id: 'investors', label: 'Investors' },
];

function isContactTab(value: string | null): value is ContactTab {
  return value === 'consultation' || value === 'referrals' || value === 'investors';
}

export default function ContactAudienceTabs() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<ContactTab>('consultation');
  const showCalendly = isCalendlyConfigured();

  useEffect(() => {
    if (isContactTab(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const setTab = (tab: ContactTab) => {
    setActiveTab(tab);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    window.history.replaceState(null, '', url.toString());
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Get in Touch
              </p>
              <h2 className="text-2xl font-semibold text-navy">How can we help?</h2>
            </div>
            <div className="flex flex-wrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTab(tab.id)}
                  className={`px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                    activeTab === tab.id
                      ? 'bg-navy text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-navy'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {activeTab === 'consultation' && (
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">Schedule a meeting</h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    Choose a time for a confidential consultation with our senior team on capital
                    raising, M&A, or strategic advisory.
                  </p>
                  {showCalendly ? (
                    <div className="overflow-hidden border border-gray-200 bg-white">
                      <CalendlyEmbed url={getCalendlyUrl()} minHeight={620} />
                    </div>
                  ) : (
                    <div className="border border-gray-200 bg-gray-50 px-6 py-10 text-center">
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        Online scheduling is being updated. Please reach out by email or phone and we
                        will arrange a time promptly.
                      </p>
                      <a href={`mailto:${contactEmail}`} className="font-medium text-navy hover:underline">
                        {contactEmail}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'referrals' && (
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">Professional referrals</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    We work with advisors, attorneys, accountants, and other professionals who refer
                    clients on capital raises, M&A, and strategic transactions. Referrals are handled
                    with discretion and senior attention from the first conversation.
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-gray-600">
                    <li>· Sell-side and buy-side M&A mandates</li>
                    <li>· Growth equity and private capital raises</li>
                    <li>· Debt advisory and liability management</li>
                  </ul>
                  <a
                    href={`mailto:${contactReferralsEmail}?subject=Professional%20Referral`}
                    className="inline-flex border border-navy px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                  >
                    Refer a client →
                  </a>
                </div>
              )}

              {activeTab === 'investors' && (
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">Institutional investors</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    We maintain relationships with private equity firms, credit funds, family offices,
                    and strategic investors across sectors. If you are an institutional investor
                    interested in our deal flow or co-investment opportunities, our team welcomes a
                    confidential introduction.
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-gray-600">
                    <li>· Curated deal flow across growth and middle-market mandates</li>
                    <li>· Direct access to senior bankers on active processes</li>
                    <li>· Sector coverage in technology, healthcare, biotech, and industrials</li>
                  </ul>
                  <a
                    href={`mailto:${contactInvestorsEmail}?subject=Investor%20Inquiry`}
                    className="inline-flex border border-navy px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                  >
                    Connect with our team →
                  </a>
                </div>
              )}
            </div>

            <aside className="space-y-8 lg:col-span-2">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Contact
                </h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <div className="mb-1 text-xs font-medium text-gray-500">Email</div>
                    <a href={`mailto:${contactEmail}`} className="text-navy hover:underline">
                      {contactEmail}
                    </a>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-medium text-gray-500">Phone</div>
                    <a href={contactPhoneHref} className="text-navy hover:underline">
                      {contactPhone}
                    </a>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-medium text-gray-500">Office</div>
                    <address className="not-italic leading-relaxed text-navy">
                      {contactAddressLine1}
                      <br />
                      {contactAddressLine2}
                    </address>
                  </div>
                </div>
              </div>

              <p className="border-t border-gray-200 pt-6 text-sm leading-relaxed text-gray-600">
                All inquiries are handled with discretion and responded to promptly by our senior
                team members.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
