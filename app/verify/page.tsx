import type { ReactNode } from 'react';
import JsonLd from '../components/JsonLd';
import { Breadcrumb, ConfirmApproachBox, Eyebrow, FaqList, PAGE_BG, faqSchema } from '../components/CredentialsBlocks';
import { companyRegistry, contactChannels, officialDomain, redFlags, verifyFaq, verifyIndex } from '../data/credentials';
import { contactAddressFull } from '../data/contact';

export const metadata = {
  title: 'Verify Keningford Partners: Registry Records and Official Channels',
  description:
    'How to verify that Keningford Partners is a genuine, registered firm, how to recognize a real Keningford Partners communication, and how to spot fraudulent approaches that misuse the company name.',
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-sans text-[1.75rem] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[2.25rem]">
      {children}
    </h2>
  );
}

export default function VerifyPage() {
  return (
    <div className={PAGE_BG}>
      <JsonLd data={faqSchema(verifyFaq)} />

      <article className="container mx-auto px-6 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb label="Verify Keningford Partners" />

          <div className="mt-10">
            <Eyebrow>Trust · Verification</Eyebrow>
            <h1 className="font-sans text-[2.25rem] font-medium leading-[1.06] tracking-[-0.03em] text-navy md:text-[3rem] lg:text-[3.5rem]">
              Verify Keningford Partners
            </h1>
            <p className="mt-6 text-base leading-[1.6] tracking-[-0.01em] text-gray-500 md:text-lg">
              Keningford Partners is a registered Delaware capital advisory firm based in New York. Because bad actors
              sometimes misuse the names of real firms, this page sets out exactly how to confirm you are dealing with the
              genuine Keningford Partners, how to recognize a real communication from us, and how to spot fraudulent
              recruitment and capital-raising approaches. We are happy to be checked.
            </p>
          </div>

          <section className="mt-14 border-t border-navy/10 pt-12">
            <H2>Official status</H2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-gray-700">
              <p>
                {companyRegistry.legalName} is a company registered in the State of Delaware, United States
                {companyRegistry.delawareFileNumber ? ` (file no. ${companyRegistry.delawareFileNumber})` : ''}, operating
                as a capital advisory firm.
                {companyRegistry.lei ? ` The firm holds a global Legal Entity Identifier (LEI ${companyRegistry.lei})` : ''}
                {companyRegistry.lei && companyRegistry.duns
                  ? ` and a Dun & Bradstreet D-U-N-S number (${companyRegistry.duns}), both independently verifiable.`
                  : companyRegistry.lei
                    ? ', independently verifiable.'
                    : ''}{' '}
                We help established companies raise debt and equity capital and execute M&amp;A. We are not a commercial
                bank or a deposit-taker, we do not lend or take deposits, and we never hold client or investor money.
              </p>
              <p>
                Records for our company may show two addresses: our office is {contactAddressFull}, while the Delaware
                register records the statutory registered office at {companyRegistry.registeredOffice}. Both are the same
                company, {companyRegistry.legalName}.
              </p>
            </div>
          </section>

          <section className="mt-12 bg-white p-8 md:p-10">
            <p className="inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
              Verify independently
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {verifyIndex.map((source) => {
                const external = source.href.startsWith('http');
                return (
                  <li key={source.title}>
                    <a
                      href={source.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-navy underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-navy"
                    >
                      {source.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-14 border-t border-navy/10 pt-12">
            <H2>Recognizing a genuine Keningford Partners communication</H2>
            <p className="mt-5 text-base leading-relaxed text-gray-700">
              Genuine communications from Keningford Partners come from our own channels: emails from @{officialDomain}{' '}
              addresses and our website at {officialDomain}. If a message claims to be from Keningford Partners but does
              not match these official channels, or if anything about it feels off, do not act on it - contact us directly
              through the website to confirm before responding or sharing any information.
            </p>
          </section>

          <section className="mt-14 border-t border-navy/10 pt-12">
            <H2>Red flags to watch for</H2>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {redFlags.map((flag) => (
                <div key={flag.title} className="bg-white p-8">
                  <h3 className="font-sans text-lg font-medium tracking-[-0.01em] text-navy">{flag.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{flag.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-gray-700">
              If you receive a suspicious message using the Keningford Partners name, or you want to confirm that an
              approach is genuine, please contact us directly at{' '}
              <a href={`mailto:${contactChannels.email}`} className="text-navy underline underline-offset-2">
                {contactChannels.email}
              </a>{' '}
              and we will verify it for you.
            </p>
          </section>

          <section id="faq" className="mt-14 scroll-mt-24 border-t border-navy/10 pt-12">
            <H2>Verification FAQs</H2>
            <div className="mt-6">
              <FaqList items={verifyFaq} icon="plus" />
            </div>
          </section>

          <div className="mt-16">
            <ConfirmApproachBox />
          </div>
        </div>
      </article>
    </div>
  );
}
