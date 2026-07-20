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

  return (
    <section className="py-24 md:py-32 bg-gray-50" data-reveal-root>
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
          {capabilities.map((capability, index) => {
            const anim = cardAnimations[index];
            return (
              <div key={capability.href} ref={anim.ref} style={anim.style}>
                <CapabilityServiceCard capability={capability} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
