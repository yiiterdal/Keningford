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
    <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#f0f0f0] p-6">
          <p className="text-[12px] font-medium text-gray-500">{stat.label}</p>
          <p className="mt-3 font-sans text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-navy md:text-[2rem]">{stat.value}</p>
          {stat.note && <p className="mt-2 text-xs leading-relaxed text-gray-500">{stat.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function ArticleBarChart({ chart }: { chart: ArticleChart }) {
  const max = Math.max(...chart.bars.map((bar) => bar.value), 1);

  return (
    <div className="my-12 bg-[#f0f0f0] p-8 md:p-10">
      <p className="inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
        <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
        Snapshot
      </p>
      <h3 className="mt-5 font-sans text-xl font-medium tracking-[-0.02em] text-navy md:text-2xl">{chart.title}</h3>
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
              <div className="h-2.5 w-full overflow-hidden bg-white">
                <div className="h-full bg-navy" style={{ width: `${width}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
