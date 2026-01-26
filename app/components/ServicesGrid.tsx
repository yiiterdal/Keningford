// app/components/ServicesGrid.tsx

const services = [
  {
    title: 'Capital advisory',
    body: 'Raise the right capital, structure term sheets, and manage financing processes with minimal disruption.'
  },
  {
    title: 'M&A advisory',
    body: 'Buy-side and sell-side guidance with disciplined valuation and process control.'
  },
  {
    title: 'Board & strategic finance',
    body: 'Governance-ready financial frameworks and scenario planning that align with long-term strategy.'
  }
];

export default function ServicesGrid() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="p-8 border border-gray-200 rounded-md bg-white">
            <h3 className="font-semibold mb-3 text-lg">{s.title}</h3>
            <p className="text-gh-600 text-sm">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
