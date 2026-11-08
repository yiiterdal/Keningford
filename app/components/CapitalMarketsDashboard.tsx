'use client';

import { useState } from 'react';
import { marketDashboard, marketDashboardWeek } from '../data/market-dashboard';
import type { DashboardCategoryId } from '../data/market-dashboard';

export default function CapitalMarketsDashboard() {
  const [activeCategory, setActiveCategory] = useState<DashboardCategoryId>(marketDashboard[0].id);
  const active = marketDashboard.find((category) => category.id === activeCategory) ?? marketDashboard[0];

  return (
    <section>
      <div className="mb-12 flex flex-col gap-8 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            Capital Markets Dashboard
          </p>
          <h2 className="max-w-[550px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            This week in capital markets.
          </h2>
          <p className="mt-4 text-[13px] font-medium text-gray-500">{marketDashboardWeek}</p>
        </div>

        <div className="flex w-fit flex-wrap gap-1.5 lg:gap-1 lg:bg-[#f0f0f0] lg:p-1">
          {marketDashboard.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-[13px] font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-navy text-white'
                  : 'bg-[#f0f0f0] text-gray-600 hover:text-navy lg:bg-transparent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {active.items.map((item) => (
          <article key={item.headline} className="flex h-full flex-col bg-[#f0f0f0] p-8">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-medium text-gray-500">
              <span className="bg-white px-3 py-1">{item.date}</span>
              {item.sector && <span className="bg-white px-3 py-1">{item.sector}</span>}
            </div>
            <h3 className="font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
              {item.headline}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{item.summary}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-gray-500">
        Illustrative weekly snapshot for market context, not live market data or investment advice.
      </p>
    </section>
  );
}
