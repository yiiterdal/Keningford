'use client';

import { useState } from 'react';
import { marketDashboard, marketDashboardWeek } from '../data/market-dashboard';
import type { DashboardCategoryId } from '../data/market-dashboard';

export default function CapitalMarketsDashboard() {
  const [activeCategory, setActiveCategory] = useState<DashboardCategoryId>(marketDashboard[0].id);
  const active = marketDashboard.find((category) => category.id === activeCategory) ?? marketDashboard[0];

  return (
    <section className="border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-5 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BF9B5F]">
              Capital Markets Dashboard
            </p>
            <h2 className="text-xl font-semibold text-navy md:text-2xl">This week</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-gray-500">{marketDashboardWeek}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-gray-200 px-6 py-4 md:px-8">
        {marketDashboard.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
              activeCategory === category.id
                ? 'bg-navy text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-navy'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="divide-y divide-gray-100 px-6 md:px-8">
        {active.items.map((item) => (
          <article key={item.headline} className="py-5">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-gray-400">
              <span>{item.date}</span>
              {item.sector && <span>{item.sector}</span>}
            </div>
            <h3 className="mb-2 text-base font-semibold text-navy">{item.headline}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{item.summary}</p>
          </article>
        ))}
      </div>

      <p className="border-t border-gray-200 px-6 py-4 text-xs leading-relaxed text-gray-500 md:px-8">
        Illustrative weekly snapshot for market context, not live market data or investment advice.
      </p>
    </section>
  );
}
