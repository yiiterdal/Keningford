import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GuideBooklet from '../../../components/GuideBooklet';
import JsonLd from '../../../components/JsonLd';
import { contactEmail } from '../../../data/contact';
import { getInvestorGuideBySlug, investorGuidePdfUrl, investorGuides } from '../../../data/investor-guides';
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
  const introBlocks: string[] = [];
  for (const block of blocks) {
    if (block.startsWith('## ')) break;
    introBlocks.push(block);
  }
  const keyFindings = guide.stats ?? guide.takeaways;

  return (
    <>
      {guide.faq && guide.faq.length > 0 && <JsonLd data={faqPageSchema(guide.faq)} />}

      {/* Article header */}
      <section className="bg-white pt-32 md:pt-40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: 'Insights', href: '/insights' },
                { label: 'Investor Guides', href: '/insights' },
                { label: guide.title },
              ]}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
              Investor Guide · {guide.readTime}
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-navy md:text-[2.75rem] md:leading-[1.15]">
              {guide.title}
            </h1>
            <p className="mt-6 text-sm text-gray-500">
              <time>{guide.date}</time>
              <span aria-hidden className="mx-3 text-gray-300">
                |
              </span>
              <span className="font-medium text-gray-600">Keningford Partners Research</span>
            </p>
            <div aria-hidden className="mt-8 h-px w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Article lead and key findings */}
      <section className="bg-white pb-14 pt-8 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-5">
              {introBlocks.map((block, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'text-lg leading-[1.8] text-gray-800 md:text-xl md:leading-[1.75]'
                      : 'text-base leading-[1.9] text-gray-700 md:text-[17px]'
                  }
                >
                  {block}
                </p>
              ))}
            </div>

            <div className="mt-12 border border-gray-200 border-t-2 border-t-[#BF9B5F] bg-gray-50 p-7 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                Key Findings
              </p>
              <ul className="mt-6 space-y-5">
                {keyFindings.map((finding, index) => (
                  <li key={finding} className="flex gap-4">
                    <span className="shrink-0 font-serif text-sm leading-[1.8] text-[#BF9B5F]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] leading-[1.8] text-gray-700">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded document */}
      <section id="booklet" className="scroll-mt-28 border-t border-gray-100 bg-white py-14 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-9 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                The Paper
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">Read the full paper</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                Page through the document below, or download the PDF to keep and share.
              </p>
            </div>
            <GuideBooklet
              title={guide.title}
              readTime={guide.readTime}
              date={guide.date}
              excerpt={guide.excerpt}
              content={guide.content}
              pdfUrl={investorGuidePdfUrl(guide.slug)}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {guide.faq && guide.faq.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-9 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                  FAQ
                </p>
                <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
                  Frequently asked questions
                </h2>
              </div>
              <div className="space-y-3">
                {guide.faq.map((item) => (
                  <details key={item.question} className="group border border-gray-200 bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 [&::-webkit-details-marker]:hidden md:px-7">
                      <span className="text-[15px] font-semibold leading-snug text-navy md:text-base">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="flex h-7 w-7 shrink-0 items-center justify-center border border-gray-200 text-gray-400 transition group-open:rotate-45 group-open:border-[#BF9B5F] group-open:text-[#BF9B5F]"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="border-t border-gray-100 px-6 py-5 text-[15px] leading-[1.85] text-gray-600 md:px-7">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="bg-[#0e1c38] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a062]">
              Next Step
            </p>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              Discuss this with our team
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-white/65">
              If you are a growth-stage CEO six to twelve months from launching a process, Keningford
              Partners will run a no-cost readiness review against the framework in this paper, and
              tell you which workstreams are ready, which need attention, and what your operational
              runway needs to be at launch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white px-7 py-3.5 text-sm font-medium text-navy transition hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
