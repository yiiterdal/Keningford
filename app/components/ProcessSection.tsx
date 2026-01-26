// app/components/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We conduct a thorough assessment of your business, objectives, and strategic priorities to understand your unique capital needs and positioning in the market.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'We develop a customized approach tailored to your specific circumstances, market dynamics, and long-term strategic goals, identifying optimal capital solutions and structures.'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We leverage our institutional network and relationships to identify and engage with appropriate capital sources, managing the process through negotiation and documentation.'
    },
    {
      number: '04',
      title: 'Partnership',
      description: 'We provide ongoing support through deal closure and beyond, ensuring successful execution and helping you navigate the complexities of capital markets and investor relations.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy text-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-5xl font-light text-gray-400 mb-4 tracking-tight">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
