'use client';

import ScrollRevealText from './ScrollRevealText';
import WhyItWorks from './WhyItWorks';

export default function FirmPositioning() {
  return (
    <section className="bg-white" data-reveal-root>
      <div className="container mx-auto px-6 py-24 md:px-8 md:py-32">
        <ScrollRevealText
          className="max-w-none text-[1.5rem] font-medium leading-[1.3] tracking-[-0.02em] md:text-[1.75rem] lg:text-[2rem]"
          text="Keningford Partners provides strategic capital advisory and financial services to leading companies and institutional investors. We combine deep market knowledge, extensive transaction experience, and disciplined execution to deliver customized solutions that support our clients' strategic objectives."
        />
      </div>
      <WhyItWorks />
    </section>
  );
}
