import { pexelsSrc } from '../lib/image-utils';

export type ReportType = 'Market Outlook' | 'Sector Primer' | 'Capital Markets Review';

export type ReportSector =
  | 'Energy & Infrastructure'
  | 'Technology & Life Sciences'
  | 'Cross-Sector';

export interface ReportItem {
  slug: string;
  title: string;
  excerpt: string;
  summary: string;
  date: string;
  type: ReportType;
  sector: ReportSector;
  pages: number;
  pdfUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export const reports: ReportItem[] = [
  {
    slug: 'q2-2026-energy-infrastructure-ma-outlook',
    title: 'Q2 2026 Energy & Infrastructure M&A Outlook',
    excerpt:
      'Deal velocity, valuation benchmarks, and capital availability across power, renewables, and midstream assets in North America and the Middle East.',
    summary: `This quarterly outlook examines transaction activity across energy and infrastructure, with emphasis on sponsor-to-sponsor transfers, asset-level carve-outs, and cross-border capital deployment.

## Key themes

- Sponsor liquidity and portfolio rotation driving secondary deal flow
- Valuation dispersion widening between contracted and merchant-exposed assets
- Lender appetite firming for contracted cash flows with inflation linkage
- Middle East capital continuing to seek North American and European platform entry points

## Methodology

Findings draw on proprietary deal tracking, lender dialogue, and sponsor interviews conducted during Q1 2026. Figures are indicative and for general information only; they do not constitute investment advice or an offer of services.`,
    date: 'April 2026',
    type: 'Market Outlook',
    sector: 'Energy & Infrastructure',
    pages: 24,
    pdfUrl: '/reports/q2-2026-energy-infrastructure-ma-outlook.pdf',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Solar panels at an energy infrastructure facility',
  },
  {
    slug: 'h1-2026-middle-market-capital-markets-review',
    title: 'H1 2026 Middle Market Capital Markets Review',
    excerpt:
      'A structured review of raise activity, pricing dynamics, and investor positioning across growth equity, private credit, and structured capital.',
    summary: `This semi-annual review summarizes capital markets conditions for middle-market companies seeking institutional financing, with focus on process readiness, term sheet trends, and sector-specific investor appetite.

## Key themes

- Growth equity pacing remains selective; profitability and unit economics under heightened scrutiny
- Private credit competing more directly on flexible structures for sponsor-backed platforms
- Cross-border raises requiring earlier SPV and governance alignment
- Quality-of-earnings and lender-ready reporting as a differentiator in competitive processes

## Methodology

Based on observed mandates, investor conversations, and market data through March 2026. Not a recommendation to buy, sell, or transact in any security or asset class.`,
    date: 'March 2026',
    type: 'Capital Markets Review',
    sector: 'Cross-Sector',
    pages: 18,
    pdfUrl: '/reports/h1-2026-middle-market-capital-markets-review.pdf',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/7948058/pexels-photo-7948058.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Financial charts and market data on a display',
  },
  {
    slug: '2026-biotech-life-sciences-financing-landscape',
    title: '2026 Biotech & Life Sciences Financing Landscape',
    excerpt:
      'How growth-stage biotech and deep-tech companies are positioning for institutional capital across venture crossover, strategic capital, and project finance.',
    summary: `This sector primer outlines financing pathways for biotech and life sciences companies at growth stage, including considerations for government co-funding, strategic partnerships, and cross-border SPV structures.

## Key themes

- Investor diligence shifting toward commercialization timelines and offtake credibility
- Strategic capital playing a larger role alongside traditional growth equity
- Project-level financing gaining traction for capital-intensive scale-up assets
- Narrative and data-room quality as decisive factors in competitive raises

## Methodology

Compiled from sector mandates, investor feedback, and public market comparables as of Q1 2026. For informational purposes only.`,
    date: 'February 2026',
    type: 'Sector Primer',
    sector: 'Technology & Life Sciences',
    pages: 20,
    pdfUrl: '/reports/2026-biotech-life-sciences-financing-landscape.pdf',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Scientist working in a biotechnology laboratory',
  },
];

export function getReportBySlug(slug: string): ReportItem | undefined {
  return reports.find((item) => item.slug === slug);
}

export function getLatestReports(limit = 3): ReportItem[] {
  return reports.slice(0, limit);
}
