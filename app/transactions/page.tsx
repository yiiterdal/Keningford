import Hero from '../components/Hero';
import TransactionsGrid from '../components/TransactionsGrid';
import { transactions } from '../data/transactions';
import { unsplashSrc } from '../lib/image-utils';

export default function TransactionsPage() {
  return (
    <>
      <Hero
        eyebrow="Transactions"
        title="Representative engagements across sectors."
        subtitle="Representative engagements demonstrating our experience across industries and transaction types."
        imageUrl={unsplashSrc('photo-1554224155-6726b3ff858f')}
        imageAlt="Financial district with modern skyscrapers"
      />

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-8">
          <TransactionsGrid transactions={transactions} />
        </div>
      </section>
    </>
  );
}
