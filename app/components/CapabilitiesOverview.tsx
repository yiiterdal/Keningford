'use client';

import Link from 'next/link';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

const capabilities = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic M&A advisory from deal origination through execution and integration.',
    href: '/capabilities/mergers-acquisitions',
  },
  {
    title: 'Capital Raising',
    description: 'Debt and equity financing solutions for growth, acquisitions, and strategic initiatives.',
    href: '/capabilities/capital-raising',
  },
  {
    title: 'Strategic Advisory',
    description: 'Customized strategic advisory services to optimize capital efficiency and strategic flexibility.',
    href: '/capabilities/strategic-advisory',
  },
  {
    title: 'Valuation & Fairness Opinions',
    description: 'Independent valuation services and fairness opinions for M&A transactions and strategic initiatives.',
    href: '/capabilities/valuation-fairness-opinions',
  },
  {
    title: 'Restructuring',
    description: 'Strategic restructuring advisory for companies facing operational or financial challenges.',
    href: '/capabilities/restructuring',
  },
];

export default function CapabilitiesOverview() {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const cardAnimations = capabilities.map((_, index) => 
    useFadeInAnimation({ delay: 200 + index * 100, duration: 800 })
  );

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div 
          ref={headerAnimation.ref}
          style={headerAnimation.style}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">Capabilities</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Comprehensive advisory services across the capital markets spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const anim = cardAnimations[index];
            return (
              <Link
                key={index}
                href={capability.href}
                ref={anim.ref}
                style={anim.style}
                className="group bg-white p-8 border border-gray-200 hover:border-navy transition-all duration-200 hover:shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:underline">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {capability.description}
                </p>
                <span className="text-sm text-navy font-medium">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}










