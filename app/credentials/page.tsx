import Link from 'next/link';
import JsonLd from '../components/JsonLd';
import { Eyebrow, FaqList, PAGE_BG, TalkToPersonBand, faqSchema } from '../components/CredentialsBlocks';
import { companyFacts, companyRegistry, contactChannels, credentialsFaq, verificationSources } from '../data/credentials';
import { transactionPortfolio } from '../data/transaction-portfolio';

export const metadata = {
  title: 'Credentials & Company Information',
  description: `${companyRegistry.legalName} is a Delaware-registered capital advisory firm based in New York. Our company registration, team, track record, and how to verify us independently.`,
};

const deals = transactionPortfolio.filter((company) => company.detail);

const dueDiligence = [
  ...verificationSources,
  {
    title: 'Speak with us',
    description: `Email ${contactChannels.email} and a real person replies, usually same day.`,
    href: '/contact',
  },
];

export default function CredentialsPage() {
  return (
    <div className={PAGE_BG}>
      <JsonLd data={faqSchema(credentialsFaq)} />

      <section className="pb-14 pt-36 md:pb-16 md:pt-44">
        <div className="container mx-auto px-6 md:px-8">
          <Eyebrow>Firm credentials</Eyebrow>
          <h1 className="max-w-3xl font-sans text-[2.25rem] font-medium leading-[1.06] tracking-[-0.03em] text-navy md:text-[3rem] lg:text-[3.5rem]">
            Who we are, and how to verify us.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-[1.6] tracking-[-0.01em] text-gray-500 md:text-lg">
            {companyRegistry.legalName} is a capital-advisory firm registered in the State of Delaware and based in New
            York. Below are our company details, our leadership, our completed track record, and every way you can check
            us out independently. We believe a firm that asks investors and operators to trust it should be easy to verify
            - so here is everything in one place.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="flex h-full flex-col bg-white p-8">
                <p className="text-[12px] font-medium text-gray-500">{fact.label}</p>
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="mt-6 block font-sans text-xl font-medium tracking-[-0.01em] text-navy underline-offset-4 hover:underline md:text-[22px]"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <p className="mt-6 font-sans text-xl font-medium tracking-[-0.01em] text-navy md:text-[22px]">{fact.value}</p>
                )}
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{fact.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>What we are</Eyebrow>
            <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">An advisor for serious capital raises.</h2>
          </div>
          <div className="space-y-6 text-base leading-[1.6] tracking-[-0.01em] text-gray-600 md:text-lg lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p>
              We help operating companies and institutional investors raise debt and equity and execute M&amp;A by
              introducing them to institutional investors, family offices and strategic partners - primarily across
              North America and Europe - and running the process end to end, from first call to executed term sheet.
            </p>
            <p>
              We represent the company raising capital. We are not the investor, we are not the fund manager, and we never
              take custody of anyone&apos;s money. Our role is access, process and relationships, and we are paid an
              advisory fee plus a success fee earned on capital actually raised.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Track record</Eyebrow>
              <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">Completed transactions.</h2>
            </div>
            <Link
              href="/transactions"
              className="inline-flex w-fit items-center gap-2 border border-navy/15 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30"
            >
              View all transactions <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {deals.map((deal) => {
              const [amount, type] = deal.detail!.split(' · ');
              return (
                <div key={deal.name} className="flex h-full flex-col bg-white p-7">
                  <p className="font-sans text-[2rem] font-medium leading-none tracking-[-0.03em] text-navy">{amount}</p>
                  <p className="mt-3 text-[15px] text-gray-600">{type}</p>
                  <p className="mt-auto pt-8 text-[15px] font-medium text-navy">{deal.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-gray-500">{deal.industry}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="verify-sources" className="scroll-mt-24 bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <Eyebrow>Due diligence</Eyebrow>
          <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">Verify us independently.</h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.5] tracking-[-0.01em] text-gray-500">
            Don&apos;t take our word for it. Every one of these is a public, third-party source you can check in a couple
            of minutes.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
            {dueDiligence.map((source) => {
              const external = source.href.startsWith('http');
              return (
                <a
                  key={source.title}
                  href={source.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-start justify-between gap-6 bg-[#f0f0f0] p-8 transition-colors hover:bg-[#e8e8e8]"
                >
                  <span>
                    <span className="block font-sans text-xl font-medium tracking-[-0.01em] text-navy">{source.title}</span>
                    <span className="mt-2 block text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{source.description}</span>
                  </span>
                  <span aria-hidden className="mt-1 text-gray-400 transition-colors group-hover:text-navy">
                    {external ? '↗' : '→'}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-24 md:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">Frequently asked.</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={credentialsFaq} icon="chevron" />
          </div>
        </div>
      </section>

      <TalkToPersonBand />
    </div>
  );
}
