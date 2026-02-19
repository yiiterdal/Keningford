import Hero from '../components/Hero';
import Divider from '../components/Divider';

export const metadata = {
  title: 'About | Keningford',
  description: 'With over 20 years of combined experience, we have established ourselves as a trusted partner for leading companies and institutional investors worldwide.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About"
        subtitle="Strategic capital advisory and financial services for leading companies and institutional investors."
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop"
        imageAlt="Professional business meeting"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Firm overview */}
            <div className="mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Keningford is a global investment bank focused on structuring complex capital solutions for companies and institutional investors. We specialize in transactions where capital is truly strategic — situations that require precision, creativity, and access to the right investors rather than the widest audience.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our work spans growth capital, recapitalizations, bespoke credit, and strategic M&amp;A across sectors ranging from industrials and business services to technology, healthcare, and financial services. In each case, we engineer financing structures that align long-term capital with ambitious growth objectives.
              </p>
            </div>

            <Divider />

            {/* Our Foundation */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-6">Our Foundation</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Keningford was founded by senior investment bankers who have spent their careers navigating high-stakes, time‑sensitive transactions. Drawing on experience across multiple cycles and market regimes, our team brings a rigorous approach to structuring, negotiation, and investor alignment.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We operate as an embedded partner rather than a transactional intermediary&mdash;helping clients design capital strategies, not just execute single deals. Whether optimizing an existing balance sheet, raising capital for transformative growth, or evaluating strategic alternatives, we focus on turning each transaction into a durable inflection point for the business.
              </p>
            </div>

            {/* Differentiators */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-6">Our Differentiators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Institutional Relationships</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Deep relationships with pension funds, sovereign wealth funds, family offices, private equity and credit investors across global markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Customized Approach</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    No one-size-fits-all solutions. Every mandate is tailored to the client&apos;s capital structure, ownership dynamics, and strategic priorities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Proven Execution</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Track record of closing complex cross-border and multi-stakeholder transactions with disciplined process management and clear communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
