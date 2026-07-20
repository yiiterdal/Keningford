import Image from 'next/image';
import Link from 'next/link';
import { recentMandates } from '../data/mandates';

export default function RecentMandates() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Current Mandates
            </p>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">Recent mandates</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              Active engagements across capital raising, fund placement, and strategic advisory.
            </p>
          </div>
          <Link href="/transactions" className="text-sm font-medium text-navy hover:underline">
            View transactions →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {recentMandates.map((mandate) => (
            <article
              key={mandate.client}
              className="flex h-full flex-col border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#BF9B5F]">
                    {mandate.status}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{mandate.client}</h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-gray-500">
                    {mandate.type}
                  </p>
                </div>
                {mandate.logo && (
                  <div className="flex h-10 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-gray-100 bg-white px-2.5">
                    <Image
                      src={mandate.logo.src}
                      alt={mandate.logo.alt}
                      width={96}
                      height={32}
                      className="h-7 w-auto max-w-[6.5rem] object-contain"
                    />
                  </div>
                )}
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{mandate.description}</p>
              {mandate.href ? (
                <Link href={mandate.href} className="text-sm font-medium text-navy hover:underline">
                  Read more →
                </Link>
              ) : (
                <Link href="/contact" className="text-sm font-medium text-navy hover:underline">
                  Contact our team →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
