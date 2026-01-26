// app/components/TrackRecordSection.tsx
export default function TrackRecordSection() {
  const stats = [
    {
      value: '150+',
      label: 'Deals Executed'
    },
    {
      value: '$15B+',
      label: 'Total Transaction Value'
    },
    {
      value: '200+',
      label: 'Satisfied Clients'
    },
    {
      value: '20+',
      label: 'Years of Experience'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">Track Record</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proven expertise across industries and transaction types.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-navy mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
