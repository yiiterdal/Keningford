import Link from 'next/link';
import GuideFaq from './GuideFaq';
import { GuideIcon } from './GuideIcons';
import type { InvestorGuide } from '../data/investor-guides';

interface FeaturedGuideSectionProps {
  guide: InvestorGuide;
}

export default function FeaturedGuideSection({ guide }: FeaturedGuideSectionProps) {
  const guideHref = `/insights/guides/${guide.slug}`;

  return (
    <>
      <section className="border-b border-gray-100 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
                Featured Booklet · Free Download
              </p>

              <h2 className="font-serif text-2xl leading-snug text-navy md:text-[2rem] lg:text-[2.125rem]">
                {guide.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 md:text-base">
                {guide.excerpt}
              </p>

              <ul className="mt-7 space-y-3">
                {guide.takeaways.slice(0, 3).map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-gray-700 md:text-[15px]">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
                    {takeaway}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`${guideHref}#booklet`}
                  className="inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-navy-dark"
                >
                  Read the booklet →
                </Link>
                <Link
                  href={guideHref}
                  className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/40 hover:bg-gray-50"
                >
                  View the guide
                </Link>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600">
                Six to twelve months from a growth process?{' '}
                <Link href="/raise-readiness" className="font-medium text-navy underline-offset-2 hover:underline">
                  Take the raise readiness diagnostic
                </Link>{' '}
                before you read the full phase map.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
                <div
                  className="absolute -right-3 top-4 bottom-1 w-full border border-gray-200 bg-gray-50"
                  aria-hidden
                />
                <div className="relative border border-gray-200 bg-[#0e1c38] px-8 py-10 shadow-lg shadow-navy/10 md:px-9 md:py-11">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-[#BF9B5F]" aria-hidden />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                    Keningford Partners Research
                  </p>
                  <span className="mt-8 mb-7 inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white/80">
                    <GuideIcon id={guide.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-xl leading-snug text-white md:text-[1.3rem]">{guide.title}</p>
                  <div className="mt-7 h-px w-12 bg-white/20" aria-hidden />
                  <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {guide.readTime} · PDF Booklet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {guide.faq && guide.faq.length > 0 && (
        <section className="border-b border-gray-100 bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <GuideFaq items={guide.faq} limit={3} viewAllHref={`${guideHref}#faq`} />
          </div>
        </section>
      )}
    </>
  );
}
