import Link from 'next/link';
import { SCHEDULE_HREF } from '../lib/scheduling';

export default function HomeCta({ tone = 'gray' }: { tone?: 'gray' | 'white' }) {
  return (
    <section className={`py-24 md:py-32 ${tone === 'gray' ? 'bg-[#f0f0f0]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 text-center md:px-8">
        <p className={`mb-6 inline-flex items-center gap-2.5 border border-navy/10 px-4 py-2 ${tone === 'gray' ? 'bg-white' : 'bg-[#eef1f5]'} text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]`}>
          <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
          Strategic Partnership
        </p>
        <h2 className="mx-auto max-w-[700px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
          Begin with a confidential conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-base leading-[1.4] tracking-[-0.01em] text-gray-500">
          To learn more about our capabilities and how we can assist with your strategic objectives, please contact our
          team.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={SCHEDULE_HREF}
            className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy/90"
          >
            Schedule a consultation
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-navy/15 bg-white px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}
