import Link from 'next/link';
import Hero from '../components/Hero';
import TransactionsGrid from '../components/TransactionsGrid';
import { transactionStats, transactions } from '../data/transactions';
import { unsplashSrc } from '../lib/image-utils';

export default function TransactionsPage() {
  return (
    <>
      <Hero
        eyebrow="Transactions"
        title="Representative transactions."
        subtitle="A selection of mandates across M&A, capital raising, strategic advisory, and restructuring."
        imageUrl={unsplashSrc('photo-1554224155-6726b3ff858f')}
        imageAlt="Financial district with modern skyscrapers"
      />

      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8 border border-gray-200 bg-[#0b1426] px-6 py-5 text-white md:px-8">
            <p className="font-serif text-3xl md:text-4xl">{transactionStats.headline}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
              {transactionStats.label}
            </p>
          </div>

          <TransactionsGrid transactions={transactions} />

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">
            Transactions listed are representative of advisory experience across Keningford Partners
            and affiliated advisors. Figures may reflect completed, in-progress, or confidential
            engagements. For questions on our capabilities, please{' '}
            <Link href="/contact" className="text-navy hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
