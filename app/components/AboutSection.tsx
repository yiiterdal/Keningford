// app/components/AboutSection.tsx
export default function AboutSection() {
  const differentiators = [
    {
      title: 'Institutional Relationships',
      description: 'Deep connections with pension funds, sovereign wealth funds, family offices, and private equity firms across global markets.'
    },
    {
      title: 'Customized Approach',
      description: 'No one-size-fits-all solutions. Every engagement is tailored to your unique strategic objectives, market positioning, and capital requirements.'
    },
    {
      title: 'Proven Execution',
      description: 'Track record of successfully closing complex transactions in challenging market conditions, with disciplined process management and strategic insight.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-8">About Us</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-16">
            <p className="text-lg">
              With over 20 years of combined experience, we have established ourselves as a trusted partner for leading companies and institutional investors worldwide.
            </p>
            <p className="text-lg">
              Our global network spans North America, Europe, Middle East, and Asia, enabling us to connect clients with capital sources and strategic partners across borders. We focus on delivering institutional-grade advisory services with the discipline and discretion required in capital markets.
            </p>
            <p className="text-lg">
              Our team brings extensive experience in investment banking, corporate finance, and strategic advisory, working with companies ranging from mid-market to large-cap across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {differentiators.map((diff, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-navy mb-3">{diff.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
