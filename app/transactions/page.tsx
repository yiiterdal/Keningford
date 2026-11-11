import Link from 'next/link';
import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import ImageBand from '../components/ImageBand';
import TransactionsGrid from '../components/TransactionsGrid';
import TransactionLogoGrid from '../components/TransactionLogoGrid';
import { transactionPortfolio } from '../data/transaction-portfolio';
import { transactions } from '../data/transactions';
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

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <TransactionsGrid transactions={transactions} />
        </div>
      </section>

      <ImageBand
        image="/images/bands/towers-lit-v2.jpg"
        imageAlt="Office towers with illuminated windows at night"
        pill="Track Record"
        title="Sell-side, capital raising, strategic, and restructuring mandates across sectors."
        description="Transactions shown may reflect completed, in-progress, or confidential engagements across Keningford Partners and affiliated advisors."
        primaryCta={{ label: 'Discuss a mandate →', href: '/contact' }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <TransactionLogoGrid companies={transactionPortfolio} />

          <p className="mt-14 max-w-3xl text-xs leading-relaxed text-gray-500">
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

      <HomeCta />
    </>
  );
}
