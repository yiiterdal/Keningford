export interface InvestorGuideFaqItem {
  question: string;
  answer: string;
}

export type GuideIconId = 'building' | 'handshake' | 'balance' | 'search' | 'document' | 'calendar';

export interface InvestorGuide {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string;
  icon: GuideIconId;
  faq?: InvestorGuideFaqItem[];
  downloadResourceSlug?: string;
}

export const investorGuides: InvestorGuide[] = [
  {
    slug: 'how-family-offices-evaluate-opportunities',
    title: 'How Family Offices Evaluate Opportunities',
    excerpt:
      'What family offices look for beyond headline returns, alignment, governance, liquidity, and relationship quality.',
    readTime: '6 min read',
    icon: 'building',
    content: `Family offices evaluate opportunities through a lens that differs materially from institutional fund managers. Return potential matters, but so do alignment with the family's values, governance rights, liquidity expectations, and the quality of the relationship with sponsors and management teams.

## Investment Criteria

Most family offices begin with sector and stage fit, then assess the durability of cash flows, downside protection, and the credibility of the capital strategy. Direct investments often receive more scrutiny on management quality and governance than fund commitments.

## Process Dynamics

Family offices typically move deliberately. They favor concise, institutional-quality materials, clear use of proceeds, and direct access to decision-makers. A fragmented process with multiple handoffs often signals misalignment before terms are even discussed.

## What Differentiates Winners

The best-received opportunities combine a credible equity story, transparent risk disclosure, and a capital structure that leaves room for strategic optionality. Founders who can articulate unit economics and capital priorities without relying on slides alone consistently outperform in family office processes.`,
  },
  {
    slug: 'how-lps-select-funds',
    title: 'How LPs Select Funds',
    excerpt:
      'How institutional limited partners underwrite emerging and established managers in a selective deployment environment.',
    readTime: '7 min read',
    icon: 'handshake',
    content: `Limited partners are deploying more selectively than in prior cycles. Investment committees are spending more time on track record quality, team stability, portfolio construction, and the specificity of the manager's edge.

## Diligence Priorities

LPs evaluate prior fund performance net of fees, loss ratios, pacing, and the consistency of underwriting through market cycles. For emerging managers, the bar is higher on differentiation, anchor investor quality, and operational infrastructure.

## Relationship Capital

Access matters. Warm introductions from trusted advisors, existing managers, or portfolio company CEOs carry weight. Cold outreach without a clear thesis and relevant comparables rarely advances.

## Structuring Considerations

LPs are increasingly attentive to fee structures, key person provisions, and co-investment rights. Managers who present a disciplined portfolio strategy and realistic fund size relative to opportunity set are better positioned in competitive fundraises.`,
  },
  {
    slug: 'debt-vs-equity',
    title: 'Debt vs Equity',
    excerpt:
      'A practical framework for founders evaluating financing alternatives without defaulting to equity dilution.',
    readTime: '5 min read',
    icon: 'balance',
    content: `The debt versus equity decision is rarely binary. Founders should evaluate cost of capital, flexibility, covenant constraints, dilution, and the strategic signal each structure sends to customers, employees, and future investors.

## When Debt Fits

Recurring revenue businesses with predictable cash conversion can often support senior or unitranche debt at attractive terms. Debt works best when proceeds fund identifiable ROI, acquisitions with synergy cases, working capital for contracted growth, or refinancing at better terms.

## When Equity Fits

Equity remains appropriate when the business needs risk capital for unproven initiatives, balance sheet repair, or market expansion where cash payback is uncertain. The right equity partner can also bring sector expertise and follow-on capacity.

## Hybrid Structures

Preferred equity, convertible instruments, and structured common can bridge gaps between pure debt and pure equity. The optimal structure depends on growth profile, existing leverage, and investor universe.`,
  },
  {
    slug: 'how-due-diligence-works',
    title: 'How Due Diligence Works',
    excerpt:
      'What institutional investors examine in financial, commercial, and legal diligence, and how to prepare.',
    readTime: '8 min read',
    icon: 'search',
    content: `Due diligence is the process by which investors validate the investment thesis, identify risks, and build conviction for pricing and structure. Preparation quality directly affects timeline, re-trade risk, and ultimate terms.

## Financial Diligence

Investors examine revenue quality, margin durability, working capital seasonality, customer concentration, and normalized EBITDA bridges. Quality-of-earnings work is standard in middle-market processes.

## Commercial Diligence

Market size, competitive positioning, retention metrics, and pricing power receive significant attention. Management's ability to discuss these topics credibly in Q&A often matters as much as the data room.

## Legal and Governance

Cap tables, material contracts, IP ownership, litigation, and regulatory exposure are reviewed in parallel. Clean documentation and proactive disclosure reduce friction in final documentation.`,
  },
  {
    slug: 'what-makes-a-great-investment-memo',
    title: 'What Makes a Great Investment Memo',
    excerpt:
      'The elements institutional investors expect in a concise, credible investment memorandum.',
    readTime: '6 min read',
    icon: 'document',
    content: `A strong investment memo distills a complex business into a clear thesis, supported by evidence and honest risk disclosure. It is not a marketing deck, it is the document that earns a second meeting.

## Structure That Works

Lead with the opportunity in one paragraph: what the company does, why it wins, and what capital will enable. Follow with market context, business model, financial profile, use of proceeds, and risks.

## Evidence Over Adjectives

Replace superlatives with metrics: retention, payback, cohort performance, pipeline conversion, and capital efficiency. Investors discount narrative without supporting data.

## Risks and Mitigants

Acknowledging risks builds credibility. The best memos pair each material risk with a mitigant or management plan. Omission of obvious risks signals inexperience or evasiveness.`,
  },
  {
    slug: '14-week-growth-round-equity-process-map',
    title: 'The 14-Week Growth-Round Equity Process Map',
    excerpt:
      'How growth-stage equity cycles lengthened, and what founders should do each phase from readiness through close.',
    readTime: '12 min read',
    icon: 'calendar',
    content: `Growth-stage equity processes have lengthened. What was often an eight-week median cycle earlier in the decade is now closer to a fourteen-week base case for many institutional rounds. Founders launching a growth raise in 2026 should plan runway for that timeline plus buffer for confirmatory diligence and legal close, not treat a compressed close as the default.

Three forces stretched the cycle. Term sheets carry more structure: participating preferences, broader pro-rata rights, and occasional anti-dilution provisions appear more frequently than in the prior easy-capital window. Syndicates are larger and more diverse, which adds coordination time. Investor diligence has deepened, multi-stage investment committee review, longer cohort analysis, and pre-term-sheet structuring conversations are now routine rather than exceptional.

This guide maps the fourteen-week cycle into phases, clarifies what founders should be doing in each window, and aligns with the readiness framework Keningford Partners uses when advising growth-stage CEOs.

## Weeks −4 to 0: Readiness Before Launch

The four weeks before the first investor meeting are the highest-leverage period. Three workstreams should run in parallel: building the data room in investor-priority order (cohort economics, monthly P&L reconciled to budget, concentration analysis, preference math under exit scenarios), mapping twenty-five to forty prospects at the partner level, and calibrating the narrative around structural readiness, not growth metrics alone.

## Weeks 1–3: Outreach and First Meetings

Launch a sequenced outreach list. Prioritize fit over breadth. Use early meetings to test narrative clarity and identify diligence questions that will recur. Update materials based on pattern feedback rather than one-off objections.

## Weeks 4–8: Deep Diligence and Competitive Tension

Serious investors move into detailed diligence. Maintain a controlled Q&A process, keep the data room current, and run parallel conversations so no single counterparty controls timing. Management should be able to speak to unit economics and capital priorities without relying solely on slides.

## Weeks 9–11: Term Sheets and Structure

Compare offers on more than headline valuation. Model participation, pro-rata, and anti-dilution effects on founder outcomes across exit scenarios. A modest valuation premium can be offset by structure that increases dilution at exit.

## Weeks 12–14: Confirmatory Diligence and Close

Lock exclusivity only when terms and process confidence justify it. Complete confirmatory work, documentation, and closing conditions with counsel. Build a thirty-percent time buffer into runway planning for slip risk.

## Practical Implications

If readiness work is complete at launch, a fourteen-week cycle is often manageable on existing runway. If readiness is incomplete, a bridge sized to finish preparation plus the cycle plus buffer may be necessary, sized to the work it funds, not as a pre-emption of the growth round.

Founders six to twelve months from a growth process can start with Keningford's raise readiness diagnostic, then use this map to sequence preparation against a realistic close window.`,
    downloadResourceSlug: 'fundraising-timeline',
    faq: [
      {
        question: 'How long does a growth round take in 2026?',
        answer:
          'Cooley GO\u2019s Quarterly Venture Financing Reports place the median time-to-close for US growth-stage equity rounds at roughly fourteen weeks in H1 2025, against an eight-week median in 2023. Keningford Partners expects the fourteen-to-eighteen-week range to remain the operational base case through 2026 and 2027, because the structural drivers, deeper diligence, larger syndicates, harder term-sheet structure, are not cyclical.',
      },
      {
        question: 'What should a founder be doing in the weeks before launching a growth-round process?',
        answer:
          'The four weeks before the first investor meeting are the highest-leverage period in the cycle. Three workstreams run in parallel: building the data room to investor-priority order (customer cohort analysis, monthly P&L reconciled to budget, customer concentration, preference math under multiple exit scenarios), mapping twenty-five to forty prospects at the partner level, and calibrating the narrative around structural readiness rather than growth metrics alone.',
      },
      {
        question: 'How have growth-stage term sheets changed in recent years?',
        answer:
          'Carta\u2019s State of Private Markets data shows participating preferences appearing in roughly 38 percent of growth-stage rounds in H1 2025, against approximately 22 percent in 2022. NVCA Yearbook data shows pro-rata-in-perpetuity provisions in roughly 32 percent of growth rounds in 2024–2025, against an estimated 18 percent in 2021, with full-ratchet anti-dilution re-emerging in a small share of late growth-stage rounds in 2025.',
      },
      {
        question: 'Should a founder take a bridge round before launching a growth round?',
        answer:
          'We advise founders to size a bridge to the work it is funding, structural readiness preparation, not pre-emption of the growth round itself. If readiness work is complete at launch, a fourteen-week cycle is typically manageable on existing runway. If readiness work is incomplete, a bridge may be necessary, sized to complete the work plus the cycle plus a buffer of roughly thirty percent.',
      },
      {
        question: 'Who is Keningford Partners?',
        answer:
          'Keningford Partners is a New York-based, principal-led capital advisory and M&A firm advising companies from Series A through the pre-IPO stage, alongside institutional investors, on equity, debt, and strategic transactions. Every mandate is led directly by senior bankers from origination through close.',
      },
      {
        question: 'Where can a founder reach Keningford Partners?',
        answer:
          'Founders six to twelve months from launching a growth-round process can request a raise readiness review through our contact page or by writing to info@keningfordpartners.com.',
      },
    ],
  },
];

export function getInvestorGuideBySlug(slug: string): InvestorGuide | undefined {
  return investorGuides.find((guide) => guide.slug === slug);
}
