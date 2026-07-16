import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import { GuideIcon } from '../../../components/GuideIcons';
import JsonLd from '../../../components/JsonLd';
import { getInvestorGuideBySlug, investorGuides } from '../../../data/investor-guides';
import { getResourceBySlug } from '../../../data/resources';
import { faqPageSchema } from '../../../lib/json-ld';
import type { Metadata } from 'next';

interface GuidePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return investorGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getInvestorGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide Not Found' };
  return { title: guide.title, description: guide.excerpt };
}

export default function InvestorGuidePage({ params }: GuidePageProps) {
  const guide = getInvestorGuideBySlug(params.slug);
  if (!guide) notFound();

  const blocks = guide.content.split('\n\n').filter(Boolean);
  const downloadResource = guide.downloadResourceSlug
    ? getResourceBySlug(guide.downloadResourceSlug)
    : undefined;
  const otherGuides = investorGuides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      {guide.faq && guide.faq.length > 0 && <JsonLd data={faqPageSchema(guide.faq)} />}

      {/* Title band */}
      <section className="bg-[#0e1c38] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: 'Insights', href: '/insights' },
                { label: 'Investor Guides', href: '/insights' },
                { label: guide.title },
              ]}
              variant="dark"
            />
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c4a062]/40 bg-[#c4a062]/10 text-[#c4a062]">
                <GuideIcon id={guide.icon} className="h-5 w-5" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c4a062]">
                Investor Guide · {guide.readTime}
              </p>
            </div>
            <h1 className="mt-5 font-serif text-3xl leading-tight text-white md:text-4xl">{guide.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">{guide.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Key takeaways */}
            <div className="border border-gray-200 bg-gray-50 p-7 md:p-8">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Key Takeaways
              </p>
              <ul className="space-y-3.5">
                {guide.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3.5">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" />
                    <span className="text-[15px] leading-relaxed text-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booklet as the primary reading experience */}
            <div id="booklet" className="mt-14 scroll-mt-28">
              <div className="mb-7 text-center">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                  Read the Guide
                </p>
                <h2 className="font-serif text-2xl text-navy md:text-3xl">Flip through the booklet</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                  Use the contents page to jump to a section, or download the full PDF to keep.
                </p>
              </div>
              <GuideBooklet
                title={guide.title}
                readTime={guide.readTime}
                excerpt={guide.excerpt}
                content={guide.content}
                icon={guide.icon}
                resource={downloadResource}
              />
            </div>

            {/* Full text, collapsed by default to keep the page scannable */}
            <details className="group mt-12 border border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-navy">Prefer to read it as one page?</span>
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center border border-gray-300 text-navy transition-transform group-open:rotate-180"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 py-8 md:px-8">
                {blocks.map((block, index) => {
                  if (block.startsWith('## ')) {
                    return (
                      <h2 key={index} className="mb-4 mt-10 text-xl font-semibold text-navy first:mt-0 md:text-2xl">
                        {block.slice(3)}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="mb-5 text-base leading-[1.85] text-gray-700">
                      {block}
                    </p>
                  );
                })}
              </div>
            </details>

            {/* FAQ accordion */}
            {guide.faq && guide.faq.length > 0 && (
              <div className="mt-14">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                  FAQ
                </p>
                <h2 className="mb-6 font-serif text-2xl text-navy">Frequently asked questions</h2>
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                  {guide.faq.map((item) => (
                    <details key={item.question} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                        <span className="text-[15px] font-medium text-navy">{item.question}</span>
                        <span
                          aria-hidden
                          className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="pb-6 pr-8 text-[15px] leading-relaxed text-gray-600">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* More guides */}
      {otherGuides.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-14 md:py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-serif text-2xl text-navy">More investor guides</h2>
              <Link href="/insights" className="text-sm font-medium text-navy hover:underline">
                All insights →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {otherGuides.map((other) => (
                <Link
                  key={other.slug}
                  href={`/insights/guides/${other.slug}`}
                  className="group border border-gray-200 bg-white p-6 transition-colors hover:border-[#BF9B5F]"
                >
                  <span className="mb-4 flex h-9 w-9 items-center justify-center bg-navy/5 text-navy">
                    <GuideIcon id={other.icon} className="h-5 w-5" />
                  </span>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                    {other.readTime}
                  </p>
                  <h3 className="text-base font-semibold leading-snug text-navy group-hover:underline">
                    {other.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
