// app/components/StatsBlock.tsx

export default function StatsBlock() {
  const stats = [
    { label: 'Years experience', value: '20+' },
    { label: 'Selected mandates', value: '50+' },
    { label: 'Repeat clients', value: 'High' }
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
        {stats.map((s) => (
          <div key={s.label} className="py-6">
            <div className="text-3xl font-semibold">{s.value}</div>
            <div className="text-gh-600 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
