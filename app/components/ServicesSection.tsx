// app/components/ServicesSection.tsx
export default function ServicesSection() {
  const services = [
    {
      title: 'Capital Raising',
      description: 'Debt and equity financing solutions for growth, acquisitions, and strategic initiatives. We structure and execute capital raises tailored to your objectives and market conditions.'
    },
    {
      title: 'Mergers & Acquisitions Advisory',
      description: 'Strategic M&A advisory from deal origination through execution and integration. We guide clients through complex transactions with disciplined execution and market expertise.'
    },
    {
      title: 'Strategic Financing Solutions',
      description: 'Customized financing structures to optimize capital efficiency and strategic flexibility. We design capital solutions that align with long-term business strategy.'
    },
    {
      title: 'Investor Relations & Positioning',
      description: 'Strategic positioning and investor communications to maximize valuation and market perception. We help articulate your value proposition to institutional investors and stakeholders.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Comprehensive financial advisory solutions tailored to your strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-0 md:last:border-b">
              <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
