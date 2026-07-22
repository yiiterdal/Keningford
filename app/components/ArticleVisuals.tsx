interface ArticleStat {
  label: string;
  value: string;
  note?: string;
}

interface ArticleChartBar {
  label: string;
  value: number;
  display?: string;
}

interface ArticleChart {
  title: string;
  caption?: string;
  bars: ArticleChartBar[];
}

export function ArticleStatsStrip({ stats }: { stats: ArticleStat[] }) {
  if (stats.length === 0) return null;

  return (
    <div className="mb-10 grid grid-cols-1 gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-gray-50 px-5 py-5 md:px-6 md:py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">{stat.label}</p>
          <p className="mt-2 font-serif text-2xl text-navy md:text-[1.75rem]">{stat.value}</p>
          {stat.note && <p className="mt-2 text-xs leading-relaxed text-gray-500">{stat.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function ArticleBarChart({ chart }: { chart: ArticleChart }) {
  const max = Math.max(...chart.bars.map((bar) => bar.value), 1);

  return (
    <div className="my-10 border border-gray-200 bg-white p-6 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">Snapshot</p>
      <h3 className="mt-2 font-serif text-xl text-navy md:text-2xl">{chart.title}</h3>
      {chart.caption && <p className="mt-2 text-sm leading-relaxed text-gray-500">{chart.caption}</p>}

      <div className="mt-8 space-y-5">
        {chart.bars.map((bar) => {
          const width = Math.max(8, Math.round((bar.value / max) * 100));
          return (
            <div key={bar.label}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-navy">{bar.label}</span>
                <span className="shrink-0 text-sm tabular-nums text-gray-600">
                  {bar.display ?? String(bar.value)}
                </span>
              </div>
              <div className="h-2.5 w-full bg-gray-100">
                <div className="h-full bg-navy" style={{ width: `${width}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
