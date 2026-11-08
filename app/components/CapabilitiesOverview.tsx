'use client';

import { capabilities } from '../data/capabilities';
import CapabilityServiceCard from './CapabilityServiceCard';
import HomeSectionHeader from './HomeSectionHeader';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface CapabilitiesOverviewProps {
  showHeader?: boolean;
}

export default function CapabilitiesOverview({ showHeader = true }: CapabilitiesOverviewProps) {
  const headerAnimation = useFadeInAnimation({ delay: 0, duration: 800 });
  const cardAnimations = capabilities.map((_, index) =>
    useFadeInAnimation({ delay: 200 + index * 80, duration: 700 }),
  );

  return (
    <section className="bg-[#f0f0f0] py-20 md:py-28" data-reveal-root>
      <div className="container mx-auto px-6 md:px-8">
        {showHeader && (
          <div ref={headerAnimation.ref} style={headerAnimation.style}>
            <HomeSectionHeader
              pill="Capabilities"
              title="Advisory across the decisions that move capital."
              description="Comprehensive advisory services across the capital markets spectrum."
              align="center"
            />
          </div>
        )}

        {!showHeader && (
          <p
            ref={headerAnimation.ref}
            style={headerAnimation.style}
            className="mb-14 max-w-2xl text-lg leading-relaxed text-gray-600 md:mb-16 md:text-xl"
          >
            Comprehensive advisory services across the capital markets spectrum.
          </p>
        )}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
