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
  /** Full document text rendered into the downloadable PDF. Run `npm run pdfs` after editing. */
  pdfContent?: string;
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
    pdfContent: `Energy and infrastructure M&A enters Q2 2026 with a distinct two-speed character. Contracted, inflation-linked cash flows are clearing at firm valuations with competitive lender support, while merchant-exposed and development-stage assets face wider bid-ask spreads and longer processes. This outlook examines transaction activity across power, renewables, and midstream, with emphasis on sponsor-to-sponsor transfers, asset-level carve-outs, and cross-border capital deployment.

## Deal Velocity and Volume

Transaction count across North American energy and infrastructure held broadly flat against the prior quarter, but composition shifted meaningfully. Sponsor-to-sponsor transfers accounted for a growing share of closed deals as funds raised in the 2019 to 2021 vintages reached the back half of their hold periods and portfolio rotation became a liquidity necessity rather than an option.

• Sponsor-to-sponsor transfers led deal flow, driven by fund-life pressure and a still-selective IPO window.
• Asset-level carve-outs from utilities and integrated players continued as balance-sheet discipline outweighed empire preservation.
• Auction processes for contracted platforms drew deep first-round fields; merchant-exposed assets frequently converted to bilateral negotiations.
• Average time from launch to signing extended for development-stage assets, while operating contracted assets cleared on schedule.

## Valuation Benchmarks

Valuation dispersion is the defining feature of the current market. The spread between contracted and merchant-exposed assets has widened to levels not seen since the last rate cycle, and buyers are pricing revenue quality line by line rather than applying platform multiples.

• Contracted renewables platforms with investment-grade offtake continued to command premium multiples, supported by lender appetite for inflation-linked cash flows.
• Merchant-exposed generation traded at meaningful discounts, with structure, earnouts, and seller rollover bridging valuation gaps.
• Midstream assets with take-or-pay contracts and demonstrated volume durability priced firmly; gathering systems with basin concentration risk did not.
• Buyers increasingly separated platform value from development pipeline value, paying for the former and optioning the latter.

## Capital Availability

Debt capital remains available but selective. Lenders are competing hardest for contracted cash flows with inflation linkage, while holding structure and covenant discipline on everything else.

• Project finance and infrastructure debt markets remained open throughout the quarter, with spreads tightening modestly for top-tier contracted assets.
• Private credit continued to take share in mid-market energy transactions, offering speed and structural flexibility against bank processes.
• Hybrid and holdco structures re-emerged for sponsors seeking leverage on portfolios with mixed contract profiles.
• Development-stage capital remains the scarcest tranche, concentrated among strategics and specialist funds.

## Cross-Border Dynamics

Middle East capital remains the most consequential cross-border force in the market, seeking North American and European platform entry points at scale. Sovereign-affiliated investors showed a clear preference for platform investments with existing management teams over asset-level acquisitions, and for partnership structures that retain sponsor alignment through the hold.

## Outlook for the Balance of 2026

We expect the two-speed market to persist through year-end. Contracted assets will continue to clear efficiently, sponsor rotation will sustain deal count, and the valuation gap on merchant exposure will close only as rate expectations settle. For sellers, preparation quality and revenue-contract documentation are the highest-return investments before launch. For buyers, the opportunity concentrates in complexity: carve-outs, mixed-contract portfolios, and situations where diligence capability substitutes for auction premium.

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
    pdfContent: `Middle-market capital markets in the first half of 2026 reward preparation over momentum. Capital is available across growth equity, private credit, and structured instruments, but it is priced and allocated with a discipline that did not exist in the prior cycle. This review summarizes conditions for middle-market companies seeking institutional financing, with focus on process readiness, term sheet trends, and sector-specific investor appetite.

## Growth Equity: Selective Pacing, Deeper Diligence

Growth equity deployment continued at a measured pace. Funds hold substantial dry powder, but investment committees are underwriting to profitability paths and unit economics rather than growth rates alone, and diligence has deepened accordingly.

• Median time-to-close for institutional growth rounds remained near fourteen weeks, roughly double the 2021 to 2022 cycle.
• Cohort-level revenue quality, net retention, and capital efficiency carried more underwriting weight than top-line growth.
• Term sheets carried more structure: participating preferences, broader pro-rata rights, and occasional anti-dilution provisions appeared with growing frequency.
• Inside-led rounds and structured extensions bridged companies between priced rounds, at the cost of future cap-table complexity.

## Private Credit: Competing on Structure

Private credit continued its expansion into territory banks have ceded, competing most effectively on speed, certainty, and structural flexibility rather than headline pricing.

• Unitranche structures priced competitively for sponsor-backed platforms with demonstrated cash conversion.
• Non-sponsored borrowers faced a higher documentation bar but found receptive lenders for recurring-revenue models.
• Covenant packages firmed at the margin; lenders traded pricing for protection rather than volume.
• Asset-based and hybrid facilities gained share among companies with contracted revenue but uneven EBITDA.

## Structured Capital: The Middle Path Widens

Preferred equity, convertible instruments, and revenue-linked structures continued to fill the space between straight debt and priced equity, particularly for companies unwilling to accept current equity marks but needing more capital than lenders will advance.

• Structured preferred with PIK toggles served sponsors managing leverage through the rate environment.
• Convertible instruments with valuation collars bridged founder and investor pricing views without forcing a mark.
• Minority structured solutions funded acquisitions and shareholder liquidity without control transfer.

## Cross-Border Considerations

Cross-border raises required earlier structural work than domestic processes. SPV architecture, governance alignment, and regulatory reviews are now critical-path items rather than closing mechanics, and processes that deferred them lost weeks in documentation.

## What Differentiates Successful Processes

Across observed mandates, the companies that cleared the market efficiently shared preparation habits rather than sector or scale: quality-of-earnings work completed before launch, lender-ready reporting packages, data rooms built to investor priority, and management teams able to defend unit economics without slides. Process readiness has become the primary differentiator in a market where capital is available but attention is rationed.

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
    pdfContent: `Biotech and life sciences financing in 2026 is defined by a shift in what investors underwrite. The science still opens the door, but capital now flows to companies that can demonstrate commercialization credibility: realistic timelines, defensible offtake or reimbursement assumptions, and governance ready for institutional scrutiny. This primer outlines the financing pathways available to growth-stage biotech and deep-tech companies and the preparation each pathway demands.

## The Diligence Shift: From Science Risk to Execution Risk

Investor diligence has moved decisively toward commercialization questions. Platform breadth and publication pedigree remain necessary, but they no longer carry a raise on their own.

• Commercialization timelines are stress-tested against regulatory precedent, not management ambition; a credible eighteen-month plan outperforms an aspirational nine-month one.
• Offtake credibility, whether pharma partnership, health-system contract, or government procurement, is underwritten as revenue quality, with counterparty and termination analysis.
• Reimbursement pathway analysis has moved from an appendix item to a first-meeting topic for anything touching clinical delivery.
• Data-room quality and KPI discipline are read as proxies for how the company will handle regulatory and partner scrutiny.

## Venture Crossover and Growth Equity

The crossover investor base that fueled the last cycle has returned selectively, concentrated in assets with near-term value inflection points.

• Crossover appetite concentrates on companies within eighteen months of a registrational readout or first commercial revenue.
• Insiders are anchoring a growing share of growth rounds, with external leads validating rather than setting terms.
• Structured equity, tranched closes tied to milestones, and warrant coverage appear more frequently in place of straight preferred.

## Strategic Capital and Partnerships

Strategic capital is playing a larger role alongside traditional growth equity, and for many companies it is the superior instrument: it validates the science, funds development, and defers dilution.

• Pharma and medtech corporate venture arms increased early-stage activity, frequently pairing equity with option-to-license structures.
• Milestone-based partnership payments funded development programs that equity markets would have priced punitively.
• The negotiation focus has shifted to control terms: exclusivity scope, data rights, and change-of-control provisions determine whether strategic capital helps or constrains the next round.

## Project-Level and Infrastructure-Style Financing

For capital-intensive scale-up assets, biomanufacturing capacity, GMP facilities, diagnostic networks, project-level financing has gained real traction, importing infrastructure discipline into life sciences.

• Facility-level debt against contracted capacity reduced equity burn for platform companies building physical scale.
• Government co-funding programs in the US, EU, and Gulf states funded strategic-capacity projects on terms no private instrument matches.
• The prerequisite is contract quality: project finance underwrites the offtake, not the science.

## Preparing for a 2026 Raise

Companies that cleared the market efficiently in the past year shared a preparation pattern: a data room built around commercialization evidence rather than publications, a financial model that separates platform spend from program spend, governance and reporting upgraded a full round earlier than felt necessary, and a financing strategy that sequenced strategic, project, and equity capital deliberately rather than defaulting to the next preferred round.

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
  {
    slug: 'healthcare-ai-equity-trajectory-2026',
    title: 'Healthcare AI Equity Trajectory: 2026 Sector Review',
    excerpt:
      'How growth-stage healthcare AI companies are positioning for institutional capital — reimbursement clarity, clinical validation, and enterprise distribution as the new underwriting baseline.',
    summary: `This sector review examines financing conditions for healthcare AI at growth stage, including valuation dispersion, investor diligence priorities, and structural terms observed in 2025–2026 processes.

## Key themes

- Premium multiples concentrated in assets with payer or provider distribution and contracted revenue
- Reimbursement and clinical validation moving to first-meeting diligence topics
- Structured equity and milestone tranches more common for pre-commercial platforms
- Narrative quality and data-room discipline as decisive process variables

## Methodology

Compiled from sector mandates, investor conversations, and public market comparables as of Q2 2026. For informational purposes only.`,
    pdfContent: `Healthcare AI financing in 2026 rewards companies that can be underwritten as durable healthcare businesses — not experimental technology projects. This review examines how growth-stage healthcare AI companies are accessing institutional capital, where multiples have held, and where processes have stalled.

## Market Context

Healthcare AI sits at the intersection of enterprise software capital flows and healthcare services underwriting standards. Investors with software mandates and investors with healthcare mandates are both active, but they converge only on assets that satisfy both lenses: recurring or contracted revenue, measurable clinical or economic outcomes, and a distribution path that does not depend on a single pilot customer.

## Valuation Dispersion

Valuation outcomes in 2025 and early 2026 were bifurcated. Assets with provider-system embedding, multi-site deployment, and revenue tied to workflow adoption cleared at premium multiples relative to horizontal software peers. Assets without reimbursement clarity, with concentrated customer bases, or with pilots that had not converted to contracts faced longer processes and more structured terms.

## Diligence Priorities

Investment committees moved reimbursement pathway analysis, payer mix disclosure, and clinical validation timelines into first-round diligence. Customer reference quality — particularly from health-system economic buyers — carried more weight than model performance metrics alone.

## Structure Trends

Structured equity, milestone-linked tranches, and insider-led extensions appeared more frequently for pre-commercial assets. For assets with visible ARR, straight preferred rounds remained available to companies with clean retention and capital efficiency metrics.

## Preparation Checklist

Companies preparing a 2026 raise should separate R&D from commercial spend in the financial model, document outcomes by cohort, and prepare payer and provider references before launch. Materials that treat clinical credibility and unit economics as one narrative consistently outperformed technology-only stories.

## Methodology

Compiled from sector mandates, investor conversations, and public market comparables as of Q2 2026. For informational purposes only.`,
    date: 'June 2026',
    type: 'Sector Primer',
    sector: 'Technology & Life Sciences',
    pages: 16,
    pdfUrl: '/reports/healthcare-ai-equity-trajectory-2026.pdf',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Healthcare technology and clinical systems',
  },
  {
    slug: 'founder-liquidity-secondary-tender-structures-2026',
    title: 'Founder Liquidity Without IPO: Secondary & Tender Structures',
    excerpt:
      'A practical primer on secondary tenders, company-sponsored repurchases, and structured liquidity — when they work, how they are priced, and what boards should prepare.',
    summary: `This primer outlines secondary liquidity instruments for growth-stage private companies, including tenders, selective repurchases, and combined primary-secondary structures.

## Key themes

- Extended private-company lifecycles making liquidity a board-level planning item
- Secondary programs as retention and cap-table management tools when executed with discipline
- Pricing, fairness, and investor communication as critical design elements
- Poorly structured secondaries creating more complexity than they resolve

## Methodology

Based on observed mandates and market practice through Q2 2026. For informational purposes only.`,
    pdfContent: `Growth-stage companies are staying private longer. For boards and founders, that shift makes liquidity design a strategic capability — not an afterthought reserved for pre-IPO planning. This primer outlines secondary tenders, company-sponsored repurchases, and combined primary-secondary structures, and the preparation each requires.

## Why Liquidity Moved Up the Agenda

Median timelines from early institutional rounds to public listing have extended. Early investors, employees, and founders accumulate paper value long before a traditional exit. Secondary liquidity programs can retain talent, manage cap-table concentration, and align holders — but only when structured with the same discipline as a primary raise.

## Instrument Overview

Secondary tenders allow existing holders to sell a portion of shares at a defined price. Company-sponsored repurchases use balance-sheet capital to buy back shares from selected classes. Combined primary-secondary rounds pair new capital with seller liquidity in a single process. Each instrument carries different signaling, tax, and governance implications.

## When Secondaries Work

Secondaries fit best when the operating business is performing, the cap table includes holders seeking partial liquidity, and management retention is a priority. They are a poor substitute for fixing broken unit economics or avoiding a necessary primary raise at a realistic mark.

## Design Considerations

Boards must address pricing methodology, pro-rata vs. selective participation, insider trading policies, and communication to investors not participating in the tender. Tax and legal coordination is critical-path, not closing mechanics.

## Common Pitfalls

Rushed secondaries without fairness analysis, unclear insider participation rules, or simultaneous unstructured primary negotiations often create cap-table complexity and investor friction that outweigh the liquidity benefit.

## Methodology

Based on observed mandates and market practice through Q2 2026. For informational purposes only.`,
    date: 'June 2026',
    type: 'Sector Primer',
    sector: 'Cross-Sector',
    pages: 14,
    pdfUrl: '/reports/founder-liquidity-secondary-tender-structures-2026.pdf',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Board and management reviewing shareholder liquidity planning',
  },
];

export function getReportBySlug(slug: string): ReportItem | undefined {
  return reports.find((item) => item.slug === slug);
}

export function getLatestReports(limit = 3): ReportItem[] {
  return reports.slice(0, limit);
}
