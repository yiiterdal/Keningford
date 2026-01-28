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

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With over 20 years of combined experience, we have established ourselves as a trusted partner for leading companies and institutional investors worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our global network spans North America, Europe, Middle East, and Asia, enabling us to connect clients with capital sources and strategic partners across borders. We focus on delivering institutional-grade advisory services with the discipline and discretion required in capital markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team brings extensive experience in investment banking, corporate finance, and strategic advisory, working with companies ranging from mid-market to large-cap across diverse industries.
              </p>
            </div>

            <Divider />

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-navy mb-6">Our Differentiators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Institutional Relationships</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Deep connections with pension funds, sovereign wealth funds, family offices, and private equity firms across global markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Customized Approach</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    No one-size-fits-all solutions. Every engagement is tailored to your unique strategic objectives, market positioning, and capital requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Proven Execution</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Track record of successfully closing complex transactions in challenging market conditions, with disciplined process management and strategic insight.
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
