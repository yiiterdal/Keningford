import { pexelsSrc } from '../lib/image-utils';

export type NewsCategory = 'Firm News' | 'Market Insights' | 'Transactions';

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: NewsCategory;
  imageUrl: string;
  imageAlt: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: 'capital-markets-outlook-2026',
    title: 'Capital Markets Outlook for 2026',
    excerpt:
      'After two years of repricing across rates, credit spreads, and equity multiples, issuers and sponsors are entering 2026 with clearer visibility—but higher expectations from capital providers on quality, governance, and use of proceeds.',
    content: `Capital markets entered 2026 in a meaningfully different posture than the volatility-heavy environment of 2023–2024. Base rates have stabilized, credit spreads for investment-grade and upper-tier leveraged issuers have normalized, and equity markets are rewarding companies that can articulate a credible path to profitable growth rather than growth at any cost.

For corporate issuers, the bar has shifted from simply accessing capital to structuring it in a way that preserves strategic flexibility. We see continued demand for bespoke financing solutions—unitranche and senior secured facilities with covenant packages tailored to cyclical businesses, preferred equity and structured common alongside traditional growth equity, and minority recapitalizations that allow founders and management to partial liquidity without ceding operational control.

Private equity sponsors remain active, though pacing has become more selective. Dry powder is ample, but investment committees are spending more time on entry multiples, add-on integration risk, and exit pathway clarity. Secondary processes and continuation vehicles are increasingly part of the toolkit, particularly for assets where near-term IPO or strategic sale timelines are uncertain.

Across sectors, we expect the most active mandate flow in business services, healthcare services, and vertical software—areas where recurring revenue, fragmentation, and operational improvement opportunities support durable sponsor interest. Industrials and energy transition adjacencies remain active for strategic acquirers seeking platform scale or technology access.

Geographically, cross-border capital flows have re-accelerated. Middle Eastern and Asian institutional investors continue to deploy into North American and European assets, while U.S. and European limited partners are selectively increasing exposure to emerging manager strategies and sector specialists. Currency hedging, regulatory disclosure, and shareholder communication requirements make cross-border processes more complex—and more dependent on advisors who can coordinate timelines across jurisdictions.

For boards and management teams planning capital events in 2026, preparation timelines have lengthened. Investors expect audited-quality data rooms, clear capital allocation frameworks, and articulated downside cases. Companies that invest in this preparation early—often six to nine months ahead of a targeted launch—are achieving better outcomes on pricing, structure, and covenant flexibility than those rushing into suboptimal market windows.

Keningford Partners' outlook for the year ahead is cautiously constructive. Liquidity is available for quality credits and differentiated equity stories, but the era of broad-based easy capital has not returned. Success will favor issuers and sponsors who combine realistic valuation expectations with disciplined process execution and direct access to the right institutional counterparties—not the widest possible outreach.`,
    date: 'March 12, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Stock market trading screens and financial data',
  },
  {
    slug: 'keningford-advises-growth-equity-financing',
    title: 'Keningford Partners Advises on $150 Million Growth Equity Financing',
    excerpt:
      'Keningford Partners acted as exclusive financial advisor to a leading vertical software platform in a $150 million growth equity round led by a syndicate of North American institutional investors.',
    content: `Keningford Partners is pleased to announce that it served as exclusive financial advisor to a leading vertical software platform (the "Company") in connection with its $150 million growth equity financing. The transaction closed following a targeted, six-month process that engaged a select group of institutional growth equity investors rather than a broad auction.

The Company provides mission-critical workflow software to mid-market enterprises in regulated industries, with approximately 85% recurring revenue, net revenue retention above 115%, and a diversified customer base across North America. Proceeds from the financing will fund product development, go-to-market expansion in the United States and Canada, and selective tuck-in acquisitions that extend the Company's data and compliance capabilities.

Keningford Partners' mandate encompassed strategic positioning of the equity story, preparation of investor materials and management presentations, identification and outreach to institutional investors, coordination of due diligence, and negotiation of economic terms and governance provisions. The process generated competitive tension among three finalist investors, ultimately resulting in terms that reflected the Company's growth profile while preserving founder and management alignment through rolled equity and long-dated incentive structures.

"We approached this financing with a clear view that the right investor mattered more than the highest headline price," said the Company's Chief Executive Officer. "Keningford helped us articulate our differentiation, run a disciplined process, and select a partner with sector expertise and a track record of supporting scaled software businesses through their next phase of growth."

The lead investor, a North American growth equity firm with over $4 billion in assets under management, cited the Company's retention metrics, expanding addressable market, and management team's execution through prior macro cycles as key drivers of their investment thesis. Existing shareholders, including the founding team and early-stage venture investors, participated in the round through secondary liquidity and reinvestment.

Transaction terms include customary governance rights, information rights, and registration rights appropriate for a growth-stage private company, with no changes to day-to-day operational control. Legal counsel to the Company was provided by a leading technology M&A law firm; Keningford Partners coordinated closely with counsel on disclosure schedules, closing conditions, and definitive documentation timelines.

This transaction is representative of Keningford Partners' growth equity and capital raising practice, where we focus on connecting high-quality private companies with institutional capital sources that bring more than capital—sector relationships, operating resources, and patience around long-term value creation. The firm maintains active dialogue with growth equity, crossover, and family office investors across North America, Europe, and the Middle East.

For more information on Keningford Partners' capital raising and strategic advisory capabilities, please contact our team.`,
    date: 'February 28, 2026',
    category: 'Transactions',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Corporate executives reviewing transaction documents',
  },
  {
    slug: 'strategic-ma-activity-healthcare',
    title: 'Strategic M&A Activity Accelerates in Healthcare Services',
    excerpt:
      'Platform consolidation, payer mix evolution, and persistent sponsor appetite are driving elevated deal volume in outpatient, behavioral health, and physician services—though valuation dispersion between market leaders and the field has never been wider.',
    content: `Healthcare services continues to rank among the most active subsectors in global M&A, with transaction volume in North America and Western Europe running above ten-year averages through the first quarter of 2026. Unlike prior cycles driven primarily by financial sponsor arbitrage, current activity reflects a combination of strategic buyer platform builds, sponsor-led roll-ups, and public-to-private transitions where public market valuations have lagged private market comparables.

Several structural factors are sustaining momentum. Demographic tailwinds—aging populations, chronic disease prevalence, and increased utilization of outpatient care—support revenue visibility for well-positioned providers. Payers continue to shift site of care toward lower-cost settings, benefiting ambulatory surgery centers, home health platforms, and multi-specialty physician groups that can demonstrate quality outcomes and cost efficiency. Labor markets remain tight for clinical staff, making scale advantages in recruiting, scheduling, and benefits administration increasingly material to margin performance.

Valuation dynamics, however, have become more bifurcated. Platforms with demonstrated same-store growth, payer contract diversity, and clean regulatory histories are commanding premium multiples—often 12–15x EBITDA or higher for market leaders in high-growth niches such as behavioral health and dental support organizations. Assets with customer concentration, reimbursement risk, or integration backlog trade at meaningful discounts, and in some cases struggle to attract competitive processes at all.

Strategic acquirers—including large health systems, payers, and diversified healthcare services companies—are using M&A to acquire capabilities rather than simply scale. Recent themes include technology-enabled care management, data analytics for risk-based contracting, and geographic fill-in acquisitions that deepen regional density. Antitrust scrutiny remains elevated in concentrated local markets, requiring earlier Hart-Scott-Rodino analysis and, in some cases, divestiture planning before launch.

Financial sponsors remain significant participants, with dedicated healthcare funds and generalist funds alike deploying into platforms with clear add-on pipelines. Credit markets have improved availability for healthcare services LBOs, though lenders are imposing stricter requirements around leverage, recurring EBITDA adjustments, and minimum liquidity cushions. Sellers who present lender-ready financial reporting and quality-of-earnings outcomes are achieving faster closes and fewer post-signing re-trades.

Cross-border activity is notable in diagnostics, contract research, and medical technology adjacencies, where European and U.S. strategics seek access to innovation pipelines and regulatory expertise. Middle Eastern sovereign wealth funds and family offices are selectively co-investing alongside established sponsors, particularly in assets with regional expansion potential.

Keningford Partners is currently advising clients on sell-side and buy-side mandates across physician services, outpatient facilities, and healthcare technology-enabled services. Our team brings experience structuring competitive sale processes, negotiating rollover equity and employment terms for clinical leadership, and managing stakeholder communications with boards, regulators, and key referral partners throughout the transaction lifecycle.

For management teams and investors evaluating healthcare services M&A in 2026, the key takeaway is that quality differentiation drives outcomes more than sector beta. Preparation—including normalized EBITDA bridges, payer mix analysis, and regulatory compliance documentation—remains the highest-return investment ahead of any formal process launch.`,
    date: 'January 15, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Modern hospital corridor and healthcare facility',
  },
  {
    slug: 'keningford-expands-senior-team',
    title: 'Keningford Partners Expands Senior Advisory Team',
    excerpt:
      'The firm has added three Managing Directors across mergers & acquisitions, capital raising, and restructuring advisory, strengthening sector coverage in technology, healthcare, and industrials.',
    content: `Keningford Partners today announced the expansion of its senior advisory team with three Managing Director appointments effective January 2026. The hires reflect the firm's continued investment in senior-level client coverage and deepen expertise across mergers & acquisitions, capital raising, and liability management advisory.

Sarah Chen joins as Managing Director, Mergers & Acquisitions, based in New York. Ms. Chen brings over 18 years of investment banking experience, most recently as a Director at a global bulge-bracket firm where she led sell-side and buy-side mandates for software and technology-enabled services companies. She has advised on more than $12 billion of aggregate transaction value across M&A, divestitures, and strategic alternatives assignments. At Keningford Partners, Ms. Chen will lead technology sector coverage and support cross-border processes involving U.S., European, and Asian acquirers.

James Okonkwo joins as Managing Director, Capital Raising, based in London. Mr. Okonkwo previously spent 14 years in private equity and growth equity investing before transitioning to advisory, including senior roles at two leading European funds. He has deep relationships with institutional investors across pension funds, sovereign wealth funds, and family offices, and has structured equity and hybrid capital solutions for mid-market companies in healthcare services and industrials. He will focus on growth equity, minority recapitalizations, and co-investment syndication.

Elena Vasquez joins as Managing Director, Restructuring & Liability Management, based in New York. Ms. Vasquez has advised boards and creditors on out-of-court restructurings, exchange offers, and distressed M&A for over 16 years, including leadership roles at a specialist restructuring advisory firm. Her experience spans sponsor-backed companies facing covenant pressure, cyclical industrials navigating demand softness, and growth companies recalibrating capital structures after rapid expansion. She will work closely with the firm's M&A and capital raising teams on integrated liability management and strategic alternative mandates.

"Each of these professionals has operated at the most senior levels of their prior organizations and shares our conviction that clients deserve direct partner attention—not handoffs to junior teams after the pitch," said the firm's Managing Partner. "Their appointments allow us to serve more concurrent mandates without compromising the bespoke, process-disciplined approach that defines Keningford Partners."

The firm now maintains senior coverage across New York, London, and Dubai, supporting clients in North America, Europe, the Middle East, and Asia. Existing team members continue to lead engagements in strategic advisory, fairness opinions, and board advisory services.

Keningford Partners does not seek to be the largest advisory firm—it seeks to be the most trusted partner on complex, time-sensitive mandates where capital is strategic and outcomes depend on judgment, relationships, and execution precision. These hires reinforce that positioning as client demand remains strong across private capital markets activity.

For career and business inquiries, please visit our contact page or reach the firm directly through institutional relationship channels.`,
    date: 'December 3, 2025',
    category: 'Firm News',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3137058/pexels-photo-3137058.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Manhattan financial district skyline at dusk',
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getLatestNews(limit = 3): NewsItem[] {
  return newsItems.slice(0, limit);
}
