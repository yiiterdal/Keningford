// app/components/CaseStudiesSection.tsx
export default function CaseStudiesSection() {
  const cases = [
    {
      title: 'Technology Platform Growth Financing',
      result: '$150M Series C',
      description: 'Led strategic equity raise for a high-growth technology platform, enabling international expansion and strengthening market position. Structured a syndicate of institutional investors and negotiated favorable terms while preserving founder control.',
      testimonial: 'Exceptional execution and deep market knowledge. The team delivered exactly what we needed.',
      client: 'CEO, Leading Technology Platform'
    },
    {
      title: 'Healthcare M&A Transaction',
      result: '$800M Acquisition',
      description: 'Managed competitive sale process for a healthcare services platform, achieving premium valuation through strategic buyer identification and optimal timing. Coordinated due diligence and negotiated transaction terms with multiple parties.',
      testimonial: 'Strategic guidance throughout the entire process. Their expertise made a material difference.',
      client: 'Chairman, Healthcare Group'
    },
    {
      title: 'Real Estate Capital Structure Optimization',
      result: '$500M Debt Refinancing',
      description: 'Optimized capital structure for a real estate portfolio through comprehensive debt refinancing. Secured favorable terms, extended maturities, and improved covenant flexibility to support long-term strategic initiatives.',
      testimonial: 'Delivered exceptional outcomes exceeding our expectations. Highly professional and results-oriented.',
      client: 'CFO, Real Estate Fund'
    }
  ];

  return (
    <section id="cases" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">Case Studies</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Representative engagements demonstrating our approach and results.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="border-b border-gray-200 pb-16 last:border-0 last:pb-0">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {caseStudy.result}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">{caseStudy.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                {caseStudy.description}
              </p>
              <div className="border-l-2 border-navy pl-6">
                <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial}"</p>
                <p className="text-sm text-gray-600">{caseStudy.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
