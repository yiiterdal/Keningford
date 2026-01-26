const principles = [
  {
    number: '01',
    title: 'Strategic Assessment',
    description: 'Thorough evaluation of business objectives, market dynamics, and strategic alternatives to inform decision-making.',
  },
  {
    number: '02',
    title: 'Customized Execution',
    description: 'Disciplined, process-driven approach tailored to each client\'s unique circumstances and strategic goals.',
  },
  {
    number: '03',
    title: 'Institutional Network',
    description: 'Access to global capital sources and strategic partners through established institutional relationships.',
  },
  {
    number: '04',
    title: 'Long-term Partnership',
    description: 'Ongoing support and strategic counsel extending beyond transaction closure to ensure sustained success.',
  },
];

export default function OurApproach() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">Our Approach</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            A disciplined, client-focused methodology that emphasizes strategic clarity, execution excellence, and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {principles.map((principle, index) => (
            <div key={index}>
              <div className="text-5xl font-light text-gray-300 mb-4 tracking-tight">
                {principle.number}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}










