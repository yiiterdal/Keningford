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
  eyebrow?: string;
  quote?: {
    text: string;
    attribution: string;
  };
  closingNote?: string;
  clientLogo?: {
    src: string;
    alt: string;
  };
  clientWebsite?: string;
  highlights?: string[];
  stats?: {
    label: string;
    value: string;
    note?: string;
  }[];
  chart?: {
    title: string;
    caption?: string;
    bars: {
      label: string;
      value: number;
      display?: string;
    }[];
  };
}

export const newsItems: NewsItem[] = [
  {
    slug: 'keningford-advises-energycite-capital-raise',
    title: 'Advising EnergyCite on Its Current Capital Raise',
    eyebrow: 'Current Mandate',
    excerpt:
      'Keningford Partners is advising EnergyCite on its current capital raise. Founded by the inventor of the smart utility meter, EnergyCite is commercializing an AI-powered conservation app that gives residential customers real-time visibility into usage, rates, and monthly spend.',
    content: `NEW YORK, July 20, 2026. Keningford Partners announces that it is advising EnergyCite Inc. on its current capital raise.

EnergyCite was founded by Tomer Tamarkin, whose development team holds seven granted patents on the smart utility meter and related remote billing and in-home display systems across the United States, Israel, China, and the European Union. Over a twenty-year period, Mr. Tamarkin was instrumental in the nationwide transition from electro-mechanical utility meters to electronic smart meters — the installed infrastructure on which EnergyCite's product is designed to run.

## The Product

The company's proprietary application delivers up-to-the-second energy usage in kilowatt-hours, accumulated monthly bill totals in dollars and cents, and real-time cost of power directly to consumer mobile devices. The platform supports flat-rate, time-of-use, peak-demand, and dynamic real-time pricing structures, and is designed for licensing to residential electrical utility customers through investor-owned and municipal utilities nationwide.

## Market and Model

EnergyCite is pursuing a recurring-revenue licensing model with low overhead and high margin potential. Beta site completion is scheduled for Q2 2027. The company's total addressable market spans more than 100 million U.S. residential accounts served by smart electric utility meters, marketed through the nation's investor-owned utilities and leading municipal utilities.

## Our Role

The engagement reflects Keningford Partners' focus on growth-stage energy technology mandates where patent-protected IP, utility-sector go-to-market complexity, and institutional investor positioning require senior-led attention from origination through close.

Learn more about EnergyCite at energycite.com.`,
    closingNote:
      'Keningford Partners works with a small number of companies each year on capital raises and strategic transactions, providing direct, senior-led access to institutional investors.',
    clientLogo: {
      src: '/images/news/energycite-logo.png',
      alt: 'EnergyCite Inc. logo',
    },
    clientWebsite: 'https://energycite.com',
    highlights: [
      'Seven granted patents on smart metering and in-home display systems (U.S., Israel, China, EU)',
      'AI conservation app with real-time kWh usage, billing totals, and multi-rate pricing support',
      'Recurring-revenue licensing model targeting 100M+ U.S. residential smart-meter accounts',
      'Beta site completion targeted for Q2 2027',
    ],
    stats: [
      { label: 'Patents', value: '7', note: 'U.S., Israel, China, EU' },
      { label: 'Addressable accounts', value: '100M+', note: 'U.S. residential smart meters' },
      { label: 'Beta target', value: 'Q2 2027', note: 'Site completion schedule' },
      { label: 'Model', value: 'License', note: 'Recurring utility-channel revenue' },
    ],
    date: 'July 20, 2026',
    category: 'Transactions',
    imageUrl: '/images/news/energycite-team.png',
    imageAlt: 'EnergyCite engineering and research team collaborating in the lab',
  },
  {
    slug: 'keningford-advises-ecopha-biotech-capital-raise',
    title: 'Advising EcoPha Biotech on Its Current Capital Raise',
    eyebrow: 'Current Mandate',
    excerpt:
      'Keningford Partners is advising EcoPha Biotech on its current capital raise. The company is developing sustainable bioplastics and aviation fuel from a single non-edible feedstock — a dual-output platform anchored by a Queensland flagship project with government co-funding and strategic partnerships across aviation and industrial sectors.',
    content: `NEW YORK, June 29, 2026. Keningford Partners announces that it is advising EcoPha Biotech on its current capital raise.

EcoPha Biotech is developing a proprietary process that produces both sustainable bioplastics and aviation fuel from a single non-edible feedstock, addressing two high-growth end markets without competing for food-grade agricultural inputs. The company's technology targets industrial-scale production of drop-in alternatives for packaging, materials, and sustainable aviation fuel (SAF) applications where regulatory pressure and corporate offtake commitments are accelerating demand.

EcoPha's flagship project, based in Queensland, Australia, is supported by government co-funding and sits at the center of a multi-jurisdiction capital structure involving cross-border SPV coordination. The company has established strategic partnerships across the aviation and industrial sectors, positioning the platform for institutional capital that understands both deep-tech process development and long-cycle infrastructure deployment.

The engagement reflects Keningford Partners' focus on growth-stage biotech and deep-tech mandates where capital structure, cross-border entity coordination, technology narrative, and investor positioning require senior-led attention from origination through close.`,
    quote: {
      text: 'What stood out working with Keningford is the level of attention on a mandate like ours, multiple SPVs, multiple geographies, a lot of moving pieces. Haktan took the time to actually understand the technology and the story before taking it to investors, which isn\'t something we\'d experienced before. It\'s made the whole process feel far more credible.',
      attribution: 'Dr. Wilson Ling, CEO, EcoPha Biotech',
    },
    closingNote:
      'Keningford Partners works with a small number of companies each year on capital raises and strategic transactions, providing direct, senior-led access to institutional investors.',
    clientLogo: {
      src: '/images/news/ecopha-logo.png',
      alt: 'EcoPha Biotech logo',
    },
    date: 'June 29, 2026',
    category: 'Transactions',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Sustainable biotechnology research laboratory',
  },
  {
    slug: 'vertical-ai-capital-trajectory-h2-2026',
    title: 'Vertical AI Capital Trajectory: What H2 2026 Looks Like for Growth Rounds',
    excerpt:
      'Vertical AI has become one of the most contested growth-stage capital destinations. Investors are paying for workflow depth, retention, and defensible data — not model wrappers.',
    content: `Vertical AI companies entered the second half of 2026 with a paradox: capital is abundant for assets that look like software businesses, and scarce for assets that look like feature layers on foundation models.

The distinction shows up in process outcomes. Companies with embedded workflows, proprietary data loops, and measurable ROI for enterprise buyers are clearing growth rounds with competitive syndicates. Companies pitching horizontal capability without a defined buyer or retention curve are seeing longer processes, inside-led structures, and more frequent pass decisions at the partner level.

## What Investors Are Underwriting

Growth equity and crossover investors are underwriting vertical AI the way they underwrite durable software: cohort retention, payback on sales and marketing, and expansion within accounts matter more than model benchmarks.

## Valuation and Structure

Multiples remain elevated for assets with net retention above 110%, low services intensity, and a credible path to margin expansion. Assets without those characteristics are increasingly priced through structured equity, tranched closes, or insider-led extensions rather than fresh outside-led rounds at prior marks.

## Implications for Founders

Founders preparing a vertical AI raise should lead with workflow ownership, customer ROI, and data defensibility — not model selection alone. The investor conversation has moved from "what can the model do?" to "why does this company own the workflow?"

Keningford Partners advises growth-stage software and AI platforms on equity positioning, investor mapping, and process design. For sector-specific questions, contact the firm through its website.`,
    date: 'June 22, 2026',
    category: 'Market Insights',
    stats: [
      { label: 'Net retention bar', value: '110%+', note: 'Where multiples still hold' },
      { label: 'Process outcome', value: 'Selective', note: 'Workflow depth over model demos' },
      { label: 'Structure trend', value: 'Tranched', note: 'More common without software metrics' },
      { label: 'Founder focus', value: 'ROI proof', note: 'Own the workflow, not the model' },
    ],
    chart: {
      title: 'What clears a growth round in vertical AI',
      caption: 'Illustrative underwriting weight — not market survey data.',
      bars: [
        { label: 'Workflow ownership & retention', value: 92, display: 'Highest' },
        { label: 'Measurable customer ROI', value: 84, display: 'High' },
        { label: 'Defensible data loop', value: 78, display: 'High' },
        { label: 'Model benchmarks alone', value: 28, display: 'Low' },
      ],
    },
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Technology platform and enterprise software infrastructure',
  },
  {
    slug: 'healthcare-ai-equity-what-round-data-shows',
    title: 'Healthcare AI Equity: What Growth-Stage Round Data Actually Shows',
    excerpt:
      'Healthcare AI rounds in 2025–2026 closed at premium multiples relative to horizontal software — but only for assets with reimbursement clarity, clinical validation, and enterprise distribution.',
    content: `Healthcare AI sits at the intersection of two of this cycle's largest capital flows: enterprise software and healthcare services. The headline is attractive; the underwriting is selective.

Growth-stage healthcare AI rounds that cleared in 2025 and early 2026 shared a common profile: recurring or contracted revenue, a defined reimbursement or payer pathway, and clinical or operational outcomes that buyers could diligence without relying on pilot anecdotes.

## Where Multiples Held

Assets with provider-system distribution, proven workflow integration, and revenue tied to measurable cost or quality improvement commanded premium valuations relative to horizontal software peers. Investors treated these businesses as healthcare services platforms with software margins — not as experimental AI projects.

## Where Processes Stalled

Companies without a reimbursement narrative, with single-customer concentration, or with pilots that had not converted to multi-year contracts faced longer raises and more structured terms. Investment committees asked for payer mix analysis, regulatory risk disclosure, and clinical validation timelines earlier in the process.

## What Boards Should Prepare

Management teams entering a healthcare AI process should prepare payer and provider references, outcomes data by cohort, and a capital plan that separates R&D from commercial scale. The best-received materials treated clinical credibility and unit economics as one story.

Keningford Partners advises healthcare and technology-enabled services companies on growth equity and strategic capital. Questions on investor positioning can be directed to the firm through its contact page.`,
    date: 'June 18, 2026',
    category: 'Market Insights',
    stats: [
      { label: 'Premium profile', value: 'Contracted', note: 'Recurring or payer-backed revenue' },
      { label: 'Diligence focus', value: 'Outcomes', note: 'Clinical + unit economics as one story' },
      { label: 'Common stall', value: 'Pilots', note: 'Pilots that never convert to multi-year' },
      { label: 'Board prep', value: 'Payer mix', note: 'References and cohort outcomes ready' },
    ],
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Healthcare technology and clinical workflow systems',
  },
  {
    slug: 'family-office-allocation-shift-h2-2026',
    title: 'Family Office Allocation Shift: H2 2026 Watch',
    excerpt:
      'Family offices are redeploying toward direct investments, co-investments, and structured equity — with longer hold periods and sharper governance expectations than the prior cycle.',
    content: `Family office capital has re-emerged as a decisive force in growth-stage financing. Unlike fund capital with fixed lives, family office allocations can be patient, flexible, and relationship-driven — but the diligence bar has risen with it.

Through the first half of 2026, family offices increased direct and co-investment activity in vertical software, healthcare services, and energy transition adjacencies, often alongside established sponsors rather than as passive LP commitments.

## What Changed in Mandate Design

Offices are favoring structures that preserve governance visibility: board observation, information rights, and clarity on secondary liquidity expectations. They are also asking harder questions about downside cases, capital priority, and founder alignment than in the 2021–2022 cycle.

## Process Implications

Family office processes reward direct access to decision-makers, concise institutional materials, and transparent risk disclosure. Founders who route every conversation through layers of intermediaries often lose momentum before terms are discussed.

## How We Advise

Keningford Partners maps family office and institutional capital for growth-stage raises and structured transactions. Our investor guide on how family offices evaluate opportunities provides a deeper framework for founders preparing direct processes.`,
    date: 'June 14, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Private wealth and institutional investment discussion',
  },
  {
    slug: 'debt-first-capital-stack-founders-toolkit',
    title: 'The Debt-First Capital Stack: A Founder\'s Toolkit',
    excerpt:
      'When equity is expensive, growth-stage founders are rebuilding the capital stack with venture debt, structured credit, and hybrid instruments, without defaulting to dilution.',
    content: `For much of the last decade, the default growth-stage sequence was equity first, debt later. That order made sense when equity was cheap and speed mattered more than cost of capital. At current rates and diligence standards, the fully loaded cost of an equity round, dilution, structure, and process time, often exceeds what a carefully sized debt or hybrid layer would require.

Founders evaluating a raise in 2026 should treat capital stack design as a strategic decision, not a reflex. Debt is not always available, and it is not always right. But where recurring revenue, cash conversion, and collateral or contracted cash flows support it, a debt-first posture can preserve ownership while funding identifiable ROI.

## When Debt Belongs Near the Top of the Stack

Debt fits best when proceeds fund measurable outcomes: acquisitions with a clear synergy case, working capital against contracted backlog, or refinancing at better terms. Lenders underwrite visibility. Businesses with predictable retention, diversified customers, and disciplined monthly reporting clear faster than narrative-only growth stories.

## Structure Choices That Matter

Senior facilities, unitranche, venture debt, and preferred / structured common each solve different problems. The wrong instrument creates covenant pressure or unnecessary dilution; the right one buys runway and optionality for a later equity process on stronger terms.

## Process Discipline

Debt processes still require institutional materials, cohort analysis, concentration schedules, and a credible use-of-proceeds plan. Founders who treat lender diligence as lighter than equity diligence often discover the opposite: credit committees are rigorous on downside cases.

## How We Advise

Keningford Partners advises growth-stage companies on sequencing debt, equity, and hybrid capital as an integrated stack. For a structured view of raise timing, see our 14-week growth-round process map and raise readiness diagnostic.`,
    date: 'June 10, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Founder reviewing capital structure and financing documents',
  },
  {
    slug: 'founder-liquidity-without-ipo-secondary-tenders',
    title: 'Founder Liquidity Without IPO: Secondary Tender Structures',
    excerpt:
      'As the median time from Series A to IPO stretches past a decade, secondary tenders and structured liquidity programs have become a core tool for retention — not a sign of weakness.',
    content: `The median path from Series A to IPO has lengthened materially over the past decade. For many growth-stage companies, the practical implication is not whether liquidity will happen — but how to provide it without disrupting the primary capital strategy or signaling distress.

Secondary tenders, company-sponsored repurchase programs, and structured liquidity rounds have moved from exceptional events to recurring board topics. Done well, they retain key talent, reset cap tables, and allow existing investors to manage exposure without forcing an exit before the business is ready.

## When Secondaries Make Sense

Secondaries fit best when the primary business is performing, the cap table is crowded with early investors seeking partial liquidity, and management retention is a near-term priority. They are a poor substitute for fixing unit economics or avoiding a necessary primary raise.

## Structural Choices

Tenders can be pro-rata, selective by holder class, or paired with a primary component. Pricing methodology, insider participation rules, and disclosure to primary investors require careful design — particularly when the company is simultaneously evaluating a priced round.

## Process Discipline

Boards should treat a secondary program with the same preparation as a primary raise: fairness considerations, investor communication, and coordination with legal and tax advisors. Rushed secondaries create more cap-table complexity than they resolve.

Keningford Partners advises boards and founders on primary raises, secondary liquidity, and integrated capital structure design.`,
    date: 'June 9, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Founders and board members reviewing shareholder liquidity options',
  },
  {
    slug: 'down-round-playbook-structural-options-2026',
    title: 'The Down-Round Playbook: Structural Options for Founders in 2026',
    excerpt:
      'Down rounds are no longer exceptional. Founders facing a reset should compare four structural paths — and three questions — before signing terms.',
    content: `Down rounds have become a structural feature of the growth-stage market, not a failure mode to be hidden. Companies that need capital at a lower mark than the prior round have more instruments available than a straight priced reset — but each carries different signals to employees, customers, and future investors.

## Four Structural Paths

A straight priced down round is the cleanest economics but the hardest messaging. Structured preferred with PIK toggles, tranched equity tied to milestones, and insider-led extensions can bridge the company without a full mark reset — at the cost of future complexity. Convertible structures with collars can align founders and investors on interim valuation without forcing immediate dilution math.

## Three Founder Questions

Before signing, founders should answer: (1) does this structure preserve the hiring and customer narrative for the next twelve months; (2) does it leave room for a future primary on cleaner terms; and (3) does it align existing investors for follow-on support rather than passive exposure management.

## Board Preparation

Boards should model dilution under multiple exit scenarios, not just the current mark. The best outcomes in down-round situations combine realistic pricing with a credible operating plan and a syndicate that can support the next inflection.

Keningford Partners advises on structured equity, recapitalizations, and growth-round sequencing for founder-led businesses.`,
    date: 'June 7, 2026',
    category: 'Market Insights',
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Executive team evaluating capital structure alternatives',
  },
  {
    slug: 'q2-2026-lower-middle-market-capital-outlook',
    title: 'Q2 2026 Lower Middle Market Capital Outlook',
    excerpt:
      'Credit conditions, equity selectivity, and process length are reshaping how lower middle-market companies access institutional capital in the second half of 2026.',
    content: `The lower middle market enters the second half of 2026 under simultaneous pressure: lenders remain selective after several quarters of tighter standards, growth equity investors continue to prioritize profitability and unit economics, and process timelines have lengthened for both debt and equity raises.

Capital remains available for quality credits and differentiated equity stories. What has changed is the preparation bar and the cost of arriving unprepared.

## Credit Markets

Senior and unitranche lenders are favoring recurring-revenue profiles, clean quality-of-earnings outcomes, and conservative leverage. Cyclical industrials without visibility into near-term earnings face longer syndications and tighter covenants. Companies that present lender-ready reporting are clearing processes with fewer re-trades.

## Equity Markets

Growth equity pacing is selective. Investment committees spend more time on retention, payback, and capital efficiency than on top-line growth alone. Syndicates are larger on average, which extends diligence and documentation timelines. Founders should plan for a multi-month cycle rather than a compressed close.

## Implications for Issuers

Boards planning a capital event should start six to nine months ahead: data room readiness, investor or lender mapping, and narrative calibration around structural readiness. Incomplete preparation is now one of the largest drivers of failed or suboptimal processes.

Keningford Partners publishes ongoing market perspectives for founders and boards evaluating financing alternatives. For deal-level questions, contact the firm through the website.`,
    date: 'June 2, 2026',
    category: 'Market Insights',
    stats: [
      { label: 'Credit stance', value: 'Selective', note: 'Recurring revenue preferred' },
      { label: 'Equity pacing', value: 'Patient', note: 'Retention over top-line alone' },
      { label: 'Prep window', value: '6–9 mo', note: 'Before a formal process launch' },
      { label: 'Process risk', value: 'Unreadiness', note: 'Largest driver of failed raises' },
    ],
    chart: {
      title: 'What buyers and lenders are prioritizing',
      caption: 'Illustrative emphasis for lower middle-market processes in H2 2026.',
      bars: [
        { label: 'Reporting quality & QoE readiness', value: 90, display: 'Critical' },
        { label: 'Retention / cash conversion', value: 85, display: 'Critical' },
        { label: 'Conservative leverage case', value: 72, display: 'High' },
        { label: 'Growth narrative alone', value: 35, display: 'Secondary' },
      ],
    },
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Market data and capital markets analysis on a desk',
  },
  {
    slug: '14-week-growth-round-what-changed',
    title: 'The 14-Week Growth-Round Cycle: What Changed for Founders',
    excerpt:
      'Institutional growth equity processes have lengthened. Founders should treat fourteen weeks as the operational base case, and prepare runway accordingly.',
    content: `Median time-to-close for many U.S. growth-stage equity rounds has moved toward a fourteen-week cycle, against shorter medians earlier in the decade. The stretch is structural: harder term-sheet terms, larger syndicates, and deeper pre-commitment diligence.

Founders who still plan an eight-week close often discover that confirmatory work and legal documentation consume the buffer they thought they had. Runway planning should assume the longer cycle plus contingency.

## What Stretched the Timeline

Term sheets more frequently include participating preferences and broader pro-rata rights. Syndicates with multiple named co-investors add coordination overhead. Diligence now routinely includes multi-stage investment committee review and longer customer cohort analysis before a term sheet is finalized.

## What Founders Should Do Differently

Treat the four weeks before launch as part of the process, not optional prep. Build the data room to investor priority order, map prospects at the partner level, and stress-test narrative against structure, not valuation alone. Compare offers by modeling dilution under realistic exit scenarios.

## Where to Start

Keningford Partners published a full phase-by-phase map as an investor guide, and offers a raise readiness diagnostic for CEOs six to twelve months from launching a growth process. Both are designed to turn a longer cycle into a manageable operating plan rather than a surprise.`,
    date: 'June 1, 2026',
    category: 'Market Insights',
    stats: [
      { label: 'Base-case cycle', value: '14 wks', note: 'Median time-to-close, growth equity' },
      { label: 'Prior cycle', value: '~8 wks', note: 'Earlier-decade operational habit' },
      { label: 'Prep buffer', value: '+4 wks', note: 'Before first investor meeting' },
      { label: 'Runway plan', value: '+30%', note: 'Contingency on the full cycle' },
    ],
    chart: {
      title: 'Planning the growth-round calendar',
      caption: 'Illustrative weeks — see the full process map for phase detail.',
      bars: [
        { label: 'Preparation (pre-launch)', value: 4, display: '4 wks' },
        { label: 'Process to close', value: 14, display: '14 wks' },
        { label: 'Buffer (~30%)', value: 5, display: '~5 wks' },
        { label: 'End-to-end planning case', value: 23, display: '~6 mo' },
      ],
    },
    imageUrl: pexelsSrc(
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ),
    imageAlt: 'Founders and advisors planning an equity fundraising timeline',
  },
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
