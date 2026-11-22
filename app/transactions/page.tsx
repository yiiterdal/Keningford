import Hero from '../components/Hero';
import HomeCta from '../components/HomeCta';
import ImageBand from '../components/ImageBand';
import TransactionsGrid from '../components/TransactionsGrid';
import { transactions } from '../data/transactions';
import { unsplashSrc } from '../lib/image-utils';

export default function TransactionsPage() {
  return (
    <>
      <Hero
        eyebrow="Transactions"
        title="Representative transactions."
        subtitle="Anonymous, confidential mandates across M&A, capital raising, strategic advisory, and restructuring. Client names and values are not disclosed."
        imageUrl={unsplashSrc('photo-1554224155-6726b3ff858f')}
        imageAlt="Financial district with modern skyscrapers"
      />

      <section className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <TransactionsGrid transactions={transactions} />
          <p className="mt-14 max-w-3xl text-xs leading-relaxed text-gray-500">
            All transactions shown are anonymized. Client identities, counterparties, and deal values remain confidential
            unless a client has expressly authorized public disclosure. Engagements may be completed, in progress, or
            confidential across Keningford Partners and affiliated advisors.
          </p>
        </div>
      </section>

      <ImageBand
        image="/images/bands/towers-lit-v2.jpg"
        imageAlt="Office towers with illuminated windows at night"
        pill="Track Record"
        title="Sell-side, capital raising, strategic, and restructuring mandates across sectors."
        description="Client names and transaction values are confidential. Details are shared only under NDA with qualified counterparties."
        primaryCta={{ label: 'Discuss a mandate →', href: '/contact' }}
        secondaryCta={{ label: 'Our capabilities', href: '/capabilities' }}
      />

      <HomeCta />
    </>
  );
}
