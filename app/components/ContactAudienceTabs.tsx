'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CalEmbed from './CalEmbed';
import { getCalBookingUrl, getCalLink, isSchedulingEnabled } from '../lib/scheduling';
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mb-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[1.5] tracking-[-0.01em] text-gray-600">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0f0f0]" aria-hidden>
            <svg className="h-3 w-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const panelTitle = 'mb-3 font-sans text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-navy md:text-[28px]';
const panelBody = 'mb-6 max-w-xl text-base leading-[1.6] tracking-[-0.01em] text-gray-600';
const primaryButton =
  'inline-flex items-center justify-center bg-navy px-7 py-3.5 text-sm font-medium text-white transition hover:bg-navy-dark';

export default function ContactAudienceTabs() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<ContactTab>('consultation');
  const showScheduling = isSchedulingEnabled();
  const wide = activeTab === 'consultation' && showScheduling;

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
    <section className="bg-[#f0f0f0] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            Get in Touch
          </p>
          <h2 className="mx-auto max-w-[700px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            How can we help?
          </h2>
          <div className="mt-8 inline-flex gap-1 bg-white p-1" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 text-[13px] font-medium transition-colors sm:px-5 sm:text-sm ${
                  activeTab === tab.id ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 lg:grid-cols-12">
          <div className={`bg-white p-8 md:p-10 ${wide ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
            {activeTab === 'consultation' && (
              <div id="schedule" className="scroll-mt-28">
                <h3 className={panelTitle}>Schedule a meeting</h3>
                <p className={panelBody}>
                  Choose a time for a confidential consultation with our senior team on capital raising, M&A, or
                  strategic advisory.
                </p>
                {showScheduling ? (
                  <>
                    <CalEmbed calLink={getCalLink()} minHeight={640} />
                    <p className="mt-4 text-[13px] text-gray-500">
                      Calendar not loading?{' '}
                      <a
                        href={getCalBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy hover:underline"
                      >
                        Open the booking page →
                      </a>
                    </p>
                  </>
                ) : (
                  <div className="bg-[#f0f0f0] px-6 py-10 text-center">
                    <p className="mb-4 text-[15px] leading-relaxed text-gray-600">
                      Online scheduling is being updated. Please reach out by email or phone and we will arrange a
                      time promptly.
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
                <h3 className={panelTitle}>Professional referrals</h3>
                <p className={panelBody}>
                  We work with advisors, attorneys, accountants, and other professionals who refer clients on capital
                  raises, M&A, and strategic transactions. Referrals are handled with discretion and senior attention
                  from the first conversation.
                </p>
                <CheckList
                  items={[
                    'Sell-side and buy-side M&A mandates',
                    'Growth equity and private capital raises',
                    'Debt advisory and liability management',
                  ]}
                />
                <a href={`mailto:${contactReferralsEmail}?subject=Professional%20Referral`} className={primaryButton}>
                  Refer a client →
                </a>
              </div>
            )}

            {activeTab === 'investors' && (
              <div>
                <h3 className={panelTitle}>Institutional investors</h3>
                <p className={panelBody}>
                  We maintain relationships with private equity firms, credit funds, family offices, and strategic
                  investors across sectors. If you are an institutional investor interested in our deal flow or
                  co-investment opportunities, our team welcomes a confidential introduction.
                </p>
                <CheckList
                  items={[
                    'Curated deal flow across growth and middle-market mandates',
                    'Direct access to senior bankers on active processes',
                    'Sector coverage in technology, healthcare, biotech, and industrials',
                  ]}
                />
                <a href={`mailto:${contactInvestorsEmail}?subject=Investor%20Inquiry`} className={primaryButton}>
                  Connect with our team →
                </a>
              </div>
            )}
          </div>

          <aside className={`flex flex-col bg-white p-8 md:p-10 ${wide ? 'lg:col-span-12' : 'lg:col-span-4'}`}>
            <h3 className="mb-8 font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
              Contact
            </h3>
            <dl className={wide ? 'grid grid-cols-1 gap-6 md:grid-cols-3' : 'space-y-6'}>
              <div>
                <dt className="mb-1 text-[12px] font-medium text-gray-500">Email</dt>
                <dd>
                  <a href={`mailto:${contactEmail}`} className="text-[15px] text-navy hover:underline">
                    {contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[12px] font-medium text-gray-500">Phone</dt>
                <dd>
                  <a href={contactPhoneHref} className="text-[15px] text-navy hover:underline">
                    {contactPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[12px] font-medium text-gray-500">Office</dt>
                <dd>
                  <address className="text-[15px] not-italic leading-relaxed text-navy">
                    {contactAddressLine1}
                    <br />
                    {contactAddressLine2}
                  </address>
                </dd>
              </div>
            </dl>

            <p className="mt-10 border-t border-navy/[0.08] pt-6 text-sm leading-relaxed text-gray-500">
              All inquiries are handled with discretion and responded to promptly by our senior team members.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
