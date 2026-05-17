'use client';

import { capabilities } from '../data/capabilities';
import CapabilityServiceCard from './CapabilityServiceCard';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface CapabilitiesOverviewProps {
  showHeader?: boolean;
}

export default function CapabilitiesOverview({ showHeader = true }: CapabilitiesOverviewProps) {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const cardAnimations = capabilities.map((_, index) =>
    useFadeInAnimation({ delay: 200 + index * 100, duration: 800 }),
  );

  const topRow = capabilities.slice(0, 3);
  const bottomRow = capabilities.slice(3);

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        {showHeader && (
          <header ref={headerAnimation.ref} style={headerAnimation.style} className="mb-14 md:mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">Capabilities</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Comprehensive advisory services across the capital markets spectrum.
            </p>
          </header>
        )}

        {!showHeader && (
          <p
            ref={headerAnimation.ref}
            style={headerAnimation.style}
            className="mb-14 md:mb-16 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Comprehensive advisory services across the capital markets spectrum.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {topRow.map((capability, index) => {
            const anim = cardAnimations[index];
            return (
              <div key={capability.href} ref={anim.ref} style={anim.style}>
                <CapabilityServiceCard capability={capability} />
              </div>
            );
          })}
        </div>

        <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-6">
          {bottomRow.map((capability, index) => {
            const anim = cardAnimations[index + 3];
            return (
              <div
                key={capability.href}
                ref={anim.ref}
                style={anim.style}
                className="lg:col-span-2 lg:col-start-auto first:lg:col-start-2"
              >
                <CapabilityServiceCard capability={capability} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
