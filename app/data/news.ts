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
      'After two years of repricing across rates, credit spreads, and equity multiples, issuers and sponsors are entering 2026 with clearer visibility, but capital providers are demanding more on quality, governance, and use of proceeds.',
    content: `After the repricing cycle of 2023 and 2024, capital markets opened 2026 on steadier footing. Base rates have largely settled, spreads for investment-grade and upper-tier leveraged issuers have normalized from their peaks, and public equity investors are rewarding companies that can show a credible path to profitable growth rather than growth at any cost.

The shift is subtle but meaningful. Issuers who could previously raise on narrative alone are now being asked to demonstrate margin discipline, cash conversion, and a capital structure that leaves room for strategic investment. Sponsors with dry powder are still deploying, but investment committees are spending more time on entry multiples, add-on integration risk, and exit pathway clarity than they did eighteen months ago.

## Corporate Issuers and Financing Structures

For corporate borrowers, the question is no longer whether capital is available, but how to structure it without giving up flexibility. Unitranche and senior secured facilities with covenant packages tailored to cyclical businesses remain in demand, as do preferred equity and structured common alongside traditional growth equity. Minority recapitalizations continue to attract founders and management teams who want partial liquidity without ceding operational control.

Lenders are also more deliberate about sector exposure. Business services and vertical software credits with recurring revenue profiles are clearing syndicates faster than cyclical industrials without clear visibility into 2026 earnings. Companies preparing for a financing event should expect more granular questions on customer concentration, churn, and working capital seasonality than in the prior cycle.

## Private Equity Activity

Private equity sponsors remain active, though pacing has become more selective. Secondary processes and continuation vehicles are increasingly part of the toolkit, particularly for assets where near-term IPO or strategic sale timelines are uncertain. General partners are also spending more time with limited partners on portfolio construction and pacing, rather than assuming automatic follow-on commitments.

Add-on activity has held up better than platform acquisitions in several subsectors. Sponsors with existing healthcare services or software platforms are prioritizing tuck-ins that improve density, payer mix, or product breadth over new thesis bets. That dynamic favors sellers who can articulate a clear strategic fit with a defined buyer universe.

## Sector Focus

The most active mandate flow we are seeing sits in business services, healthcare services, and vertical software, where recurring revenue, fragmentation, and operational improvement opportunities support durable sponsor interest. Industrials and energy transition adjacencies remain active for strategic acquirers seeking platform scale or technology access, though valuation gaps between buyers and sellers have widened in pockets of the market.

Healthcare services in particular continues to draw both strategic and financial buyer interest, with behavioral health, outpatient facilities, and physician services platforms among the more contested categories. Technology-enabled services businesses with strong retention metrics are also attracting crossover investor attention ahead of potential public market windows later in the year.

## Cross-Border Capital Flows

Cross-border capital flows have re-accelerated after a period of caution. Middle Eastern and Asian institutional investors continue to deploy into North American and European assets, while U.S. and European limited partners are selectively increasing exposure to emerging manager strategies and sector specialists.

These processes are operationally heavier than domestic mandates. Currency hedging, regulatory disclosure, and shareholder communication requirements make timelines more dependent on advisors who can coordinate diligence and documentation across jurisdictions. Boards should budget additional preparation time when a transaction involves multiple regulatory regimes or shareholder constituencies.

## Preparation and Process Discipline

For boards and management teams planning capital events in 2026, preparation timelines have lengthened. Investors expect audited-quality data rooms, clear capital allocation frameworks, and articulated downside cases. Companies that begin this work six to nine months ahead of a targeted launch are consistently achieving better outcomes on pricing, structure, and covenant flexibility than those entering suboptimal windows with incomplete materials.

That preparation extends to management presentations and investor Q&A. The best processes we have advised on in recent quarters shared a common trait: management teams who could speak credibly to unit economics, capital priorities, and competitive positioning without relying on slide decks to carry the conversation.

## What We Are Watching

Liquidity remains available for quality credits and differentiated equity stories, but the era of broad-based easy capital has not returned. Success in 2026 will favor issuers and sponsors who combine realistic valuation expectations with disciplined process execution and direct access to the right institutional counterparties, not the widest possible outreach.

We will be publishing additional sector notes on healthcare services and vertical software in the coming weeks. For questions on capital raising, liability management, or strategic alternatives, our team can be reached through the contact page.`,
    date: 'March 12, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Stock market trading screens and financial data',
  },
  {
    slug: 'keningford-partners-launches-in-new-york',
    title: 'Keningford Partners Launches as Boutique Capital Advisory and M&A Firm in New York',
    excerpt:
      'Keningford Partners has officially launched in New York, led by Founder and Managing Partner Tuna Yilar, with a principal-led model focused on capital raises, M&A advisory, and debt advisory from Series A through pre-IPO.',
    content: `NEW YORK, June 25, 2026. Keningford Partners, a boutique capital advisory and M&A firm, has officially launched in New York. The firm is led by Founder and Managing Partner Tuna Yilar, who previously built, operated, and exited his own investment bank before founding Keningford Partners.

Keningford Partners specializes in capital raises from Series A through pre-IPO stage, sell-side and buy-side M&A advisory, and debt advisory services. The firm operates on a principal-led model, with a deliberately limited number of active mandates at any given time to ensure direct, senior-level involvement on every engagement from origination through close.

## Founder Commentary

"I have sat on both sides of the table, as an owner, an operator, and an advisor," said Tuna Yilar, Founder and Managing Partner of Keningford Partners. "I started Keningford because founders deserve the person they actually met during the pitch to be the same person doing the work. That is not how most of this industry operates. It is how Keningford operates."

The firm works closely with founders and management teams to identify the right investor universe, develop a focused outreach strategy, and manage the capital raise or transaction process through to close.

## About Keningford Partners

Keningford Partners is a boutique capital advisory and M&A firm based in New York, founded by Tuna Yilar. The firm provides capital raise advisory, M&A advisory, and debt advisory services to companies from Series A through the pre-IPO stage.

For more information, visit keningfordpartners.com or contact the firm through its website.`,
    date: 'June 25, 2026',
    category: 'Firm News',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Glass skyscrapers in the New York financial district',
  },
  {
    slug: 'keningford-advises-growth-equity-financing',
    title: 'Keningford Partners Advises on $150 Million Growth Equity Financing',
    excerpt:
      'Keningford Partners served as exclusive financial advisor to a vertical software platform in a $150 million growth equity round led by a North American institutional syndicate.',
    content: `NEW YORK, February 28, 2026. Keningford Partners announced today that it served as exclusive financial advisor to a leading vertical software platform (the "Company") in connection with its $150 million growth equity financing. The transaction closed following a targeted six-month process that engaged a select group of institutional growth equity investors.

Keningford Partners was led on the mandate by R. Bennett, Partner, with support from the firm's capital raising and M&A teams in New York and London.

## About the Company

The Company provides mission-critical workflow software to mid-market enterprises in regulated industries. At the time of the financing, the business generated approximately 85% recurring revenue, net revenue retention above 115%, and a diversified customer base across North America.

Proceeds will fund product development, go-to-market expansion in the United States and Canada, and selective tuck-in acquisitions that extend the Company's data and compliance capabilities. Management indicated that no changes to day-to-day operations or go-to-market leadership were contemplated as part of the transaction.

## Advisory Scope

Keningford Partners' mandate encompassed strategic positioning of the equity story, preparation of investor materials and management presentations, identification and outreach to institutional investors, coordination of due diligence, and negotiation of economic terms and governance provisions.

The process generated competitive tension among three finalist investors, ultimately resulting in terms that reflected the Company's growth profile while preserving founder and management alignment through rolled equity and long-dated incentive structures. Legal counsel to the Company was provided by a leading technology M&A law firm; Keningford Partners coordinated closely with counsel on disclosure schedules, closing conditions, and definitive documentation timelines.

## Management Commentary

"We approached this financing with a clear view that the right investor mattered more than the highest headline price," said the Company's Chief Executive Officer. "Keningford helped us articulate our differentiation, run a disciplined process, and select a partner with sector expertise and a track record of supporting scaled software businesses through their next phase of growth."

## Investor Perspective

The lead investor, a North American growth equity firm with over $4 billion in assets under management, cited the Company's retention metrics, expanding addressable market, and management team's execution through prior macro cycles as key drivers of its investment thesis.

Existing shareholders, including the founding team and early-stage venture investors, participated in the round through a combination of secondary liquidity and reinvestment. Transaction terms include customary governance, information, and registration rights appropriate for a growth-stage private company.

## Contact

For more information on Keningford Partners' capital raising and strategic advisory capabilities, please contact the firm through its website or institutional relationship channels.`,
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
      'Deal volume in outpatient, behavioral health, and physician services remains elevated, but valuation dispersion between market leaders and the broader field has rarely been wider.',
    content: `Healthcare services continues to rank among the most active subsectors in global M&A. Transaction volume in North America and Western Europe ran above ten-year averages through the first quarter of 2026, even as public market valuations for many provider groups lagged private market comparables.

Unlike prior cycles driven primarily by financial sponsor arbitrage, current activity reflects a mix of strategic buyer platform builds, sponsor-led roll-ups, and public-to-private transitions where buyers see an opportunity to invest through a downturn in sentiment. The common thread is scale: acquirers are looking for platforms that can absorb labor cost pressure, negotiate payer contracts from a position of strength, and fund technology investment without diluting clinical quality.

## Structural Drivers

Demographic tailwinds, including aging populations, chronic disease prevalence, and increased utilization of outpatient care, support revenue visibility for well-positioned providers. Payers continue to shift site of care toward lower-cost settings, benefiting ambulatory surgery centers, home health platforms, and multi-specialty physician groups that can demonstrate quality outcomes and cost efficiency.

Labor markets remain tight for clinical staff, making scale advantages in recruiting, scheduling, and benefits administration increasingly material to margin performance. Platforms that can offer career pathways, scheduling flexibility, and centralized back-office support are finding it easier to retain clinicians than single-site operators competing on wages alone.

## Valuation Dynamics

Valuation dynamics have become more bifurcated. Platforms with demonstrated same-store growth, payer contract diversity, and clean regulatory histories are commanding premium multiples, often 12-15x EBITDA or higher for market leaders in high-growth niches such as behavioral health and dental support organizations.

Assets with customer concentration, reimbursement risk, or integration backlog trade at meaningful discounts, and in some cases struggle to attract competitive processes at all. Sellers who enter the market without a clear quality-of-earnings narrative or payer mix analysis often discover that buyer interest is narrower than expected, even in a generally active sector.

## Strategic Acquirers

Strategic acquirers, including large health systems, payers, and diversified healthcare services companies, are using M&A to acquire capabilities rather than simply scale. Recent themes include technology-enabled care management, data analytics for risk-based contracting, and geographic fill-in acquisitions that deepen regional density.

Antitrust scrutiny remains elevated in concentrated local markets, requiring earlier Hart-Scott-Rodino analysis and, in some cases, divestiture planning before launch. Boards evaluating strategic alternatives should treat regulatory review as a gating item, not a post-signing formality.

## Financial Sponsors and Credit Markets

Financial sponsors remain significant participants, with dedicated healthcare funds and generalist funds alike deploying into platforms with clear add-on pipelines. Credit markets have improved availability for healthcare services LBOs, though lenders are imposing stricter requirements around leverage, recurring EBITDA adjustments, and minimum liquidity cushions.

Sellers who present lender-ready financial reporting and clean quality-of-earnings outcomes are achieving faster closes and fewer post-signing re-trades. The gap between "deal-ready" and "almost ready" portfolios has become one of the most consequential variables in process outcomes.

## Cross-Border Activity

Cross-border activity is notable in diagnostics, contract research, and medical technology adjacencies, where European and U.S. strategics seek access to innovation pipelines and regulatory expertise. Middle Eastern sovereign wealth funds and family offices are selectively co-investing alongside established sponsors, particularly in assets with regional expansion potential.

## Implications for Sellers and Buyers

For management teams and investors evaluating healthcare services M&A in 2026, quality differentiation drives outcomes more than sector beta. Preparation, including normalized EBITDA bridges, payer mix analysis, and regulatory compliance documentation, remains the highest-return investment ahead of any formal process launch.

Keningford Partners is currently advising clients on sell-side and buy-side mandates across physician services, outpatient facilities, and healthcare technology-enabled services. Questions on process timing, valuation positioning, or buyer outreach can be directed to the firm through its contact page.`,
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
      'The firm has appointed three Managing Directors across M&A, capital raising, and restructuring advisory, extending senior coverage in technology, healthcare, and industrials.',
    content: `NEW YORK, December 3, 2025. Keningford Partners today announced the expansion of its senior advisory team with three Managing Director appointments effective January 2026. The hires deepen the firm's sector coverage and extend its ability to serve concurrent mandates across mergers & acquisitions, capital raising, and liability management advisory.

## Sarah Chen, Managing Director, M&A

Sarah Chen joins as Managing Director, Mergers & Acquisitions, based in New York. Ms. Chen brings over 18 years of investment banking experience, most recently as a Director at a global bulge-bracket firm where she led sell-side and buy-side mandates for software and technology-enabled services companies. She has advised on more than $12 billion of aggregate transaction value across M&A, divestitures, and strategic alternatives assignments.

At Keningford Partners, Ms. Chen will lead technology sector coverage and support cross-border processes involving U.S., European, and Asian acquirers.

## James Okonkwo, Managing Director, Capital Raising

James Okonkwo joins as Managing Director, Capital Raising, based in London. Mr. Okonkwo previously spent 14 years in private equity and growth equity investing before transitioning to advisory, including senior roles at two leading European funds. He has deep relationships with institutional investors across pension funds, sovereign wealth funds, and family offices, and has structured equity and hybrid capital solutions for mid-market companies in healthcare services and industrials.

He will focus on growth equity, minority recapitalizations, and co-investment syndication from the firm's London office.

## Elena Vasquez, Managing Director, Restructuring

Elena Vasquez joins as Managing Director, Restructuring & Liability Management, based in New York. Ms. Vasquez has advised boards and creditors on out-of-court restructurings, exchange offers, and distressed M&A for over 16 years, including leadership roles at a specialist restructuring advisory firm. Her experience spans sponsor-backed companies facing covenant pressure, cyclical industrials navigating demand softness, and growth companies recalibrating capital structures after rapid expansion.

She will work closely with the firm's M&A and capital raising teams on integrated liability management and strategic alternative mandates.

## Managing Partner Commentary

"Each of these professionals has operated at the most senior levels of their prior organizations and shares our conviction that clients deserve direct partner attention, not handoffs to junior teams after the pitch," said A. Morgan, Founding Partner. "Their appointments allow us to serve more concurrent mandates without compromising the bespoke, process-disciplined approach that defines Keningford Partners."

## Firm Coverage

The firm now maintains senior coverage across New York, London, and Dubai, supporting clients in North America, Europe, the Middle East, and Asia. Existing team members continue to lead engagements in strategic advisory, fairness opinions, and board advisory services.

Keningford Partners does not seek to be the largest advisory firm. It seeks to be the most trusted partner on complex, time-sensitive mandates where capital is strategic and outcomes depend on judgment, relationships, and execution precision.

For career and business inquiries, please visit the contact page or reach the firm directly through institutional relationship channels.`,
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
