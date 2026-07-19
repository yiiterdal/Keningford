export interface Resource {
  slug: string;
  title: string;
  description: string;
  pages: string;
  /** Structured document text: "## " headings, "• " bullets, plain paragraphs. Rendered into the PDF. */
  content: string;
  /** Generated PDF served from /public. Run `npm run pdfs` after editing content. */
  pdfUrl: string;
}

export const resources: Resource[] = [
  {
    slug: 'due-diligence-checklist',
    title: 'Due Diligence Checklist',
    description:
      'A practical checklist for founders preparing financial, commercial, and legal diligence ahead of a capital raise or sale process.',
    pages: '12 pages',
    pdfUrl: '/downloads/resources/due-diligence-checklist.pdf',
    content: `Due diligence is where processes are won or lost. Investors rarely walk away because a business has risks; they walk away because risks surface late, undocumented, or contradicted by earlier claims. This checklist organizes the preparation work into the same workstreams institutional investors use, so that the data room answers questions before they are asked.

## How to Use This Checklist

Work through each section before launch, not during the process. Assign a single internal owner per workstream, date-stamp every document, and flag anything that cannot be produced within 48 hours. A gap identified four weeks before launch is a preparation item; the same gap identified during exclusivity is a re-trade.

## Financial

The financial workstream carries the most weight and attracts the earliest scrutiny. Investors will rebuild your numbers independently; your job is to make their rebuild match yours.

• Audited or reviewed financial statements for the last three fiscal years, with auditor letters and any restatements explained.
• Monthly management accounts for the trailing twenty-four months, reconciled to the audited statements.
• Revenue bridge by customer, product, and geography, tying opening to closing revenue for each period.
• Customer cohort analysis showing retention, expansion, and payback by acquisition vintage.
• Normalized EBITDA schedule with every adjustment documented and defensible.
• Working capital analysis covering seasonality, receivable aging, and any customer prepayment dynamics.
• Thirteen-week cash flow forecast and monthly runway model under base and downside cases.

## Commercial

Commercial diligence tests whether the growth story survives contact with the customer base. Expect investors to call customers directly.

• Complete customer list with revenue concentration analysis; be ready to discuss any customer above ten percent of revenue.
• Pipeline and backlog summary with historical conversion rates by stage, not just current pipeline value.
• Pricing history, discounting practices, and any most-favored-nation commitments.
• Churn and retention metrics, gross and net, defined consistently with the metrics in your deck.
• Competitive landscape overview with honest win/loss data and named competitors.
• Contracted versus non-contracted revenue split, with renewal schedules for the top twenty accounts.

## Legal and Corporate

Legal diligence rarely creates value but frequently destroys timelines. Clean documentation is the cheapest acceleration available.

• Capitalization table with full option pool detail, vesting schedules, and any outstanding warrants or convertible instruments.
• Preference stack summary showing liquidation waterfall under at least three exit scenarios.
• Material contracts flagged for change-of-control, exclusivity, and assignment provisions.
• Intellectual property ownership documentation, including assignment agreements from every founder, employee, and contractor who touched core IP.
• Litigation history and any pending or threatened claims, however immaterial they appear.
• Regulatory licenses, data protection compliance posture, and any open correspondence with regulators.

## Tax and Regulatory

• Corporate structure chart with tax residency of every entity.
• Transfer pricing documentation for any intercompany arrangements.
• Open tax years, ongoing audits, and any positions taken that a buyer's advisor might challenge.
• Sales tax, VAT, and payroll tax compliance across every jurisdiction with employees or revenue.

## Operations and HR

• Organization chart with tenure, compensation bands, and identified key-person dependencies.
• Employment agreements for the leadership team, including non-compete and IP assignment terms.
• Option grants reconciled to board approvals; unapproved grants are a recurring closing-delay item.
• Key supplier and vendor agreements with concentration analysis mirroring the customer view.

## Common Gaps That Stall Processes

In our experience the same five gaps account for most diligence delays: unreconciled management accounts, undocumented EBITDA adjustments, missing IP assignments from early contractors, option grants without board approvals, and customer contracts missing signatures. Every one of them is inexpensive to fix before launch and expensive to fix during exclusivity.`,
  },
  {
    slug: 'fundraising-timeline',
    title: 'Fundraising Timeline',
    description:
      'A week-by-week roadmap aligned to a 14-week institutional growth-round cycle, from readiness through close.',
    pages: '8 pages',
    pdfUrl: '/downloads/resources/fundraising-timeline.pdf',
    content: `The median institutional growth round now closes in roughly fourteen weeks, nearly double the cycle of the easy-capital window. This roadmap maps the full cycle week by week, including the four preparation weeks before launch that determine how the remaining fourteen unfold. Treat the timeline as a base case: well-prepared processes compress it, and unprepared ones extend it.

## How to Read This Timeline

Weeks are numbered from the first investor meeting. Negative weeks are preparation. Each phase lists the work that must be complete by the end of the window; slippage in any phase pushes the close date roughly one-for-one, so runway planning should assume the full cycle plus a thirty percent buffer.

## Weeks −4 to 0: Readiness

The highest-leverage period in the entire cycle. Three workstreams run in parallel and all three must finish before the first meeting.

• Build the data room in investor-priority order: cohort economics first, then monthly P&L reconciled to budget, concentration analysis, and preference math under three exit scenarios.
• Map twenty-five to forty prospects at the partner level, not the firm level; know each partner's board seats, check size, and lead follow-on record.
• Calibrate the narrative around structural readiness: why this amount, why now, and what the capital makes true in eighteen months.
• Pressure-test the model in a dry run with a friendly investor or advisor before any live meeting.

## Weeks 1–3: Outreach and First Meetings

• Launch sequenced outreach in two or three waves, prioritized by fit rather than breadth; keep the first wave small enough to iterate.
• Hold first management meetings and log every question asked; recurring questions are diligence themes, one-off questions are noise.
• Update materials on pattern feedback only. Rewriting the deck after every meeting signals uncertainty.
• Hold second-wave outreach until the narrative has stabilized against first-wave feedback.

## Weeks 4–8: Deep Diligence and Competitive Tension

• Run a controlled Q&A process: one intake channel, forty-eight-hour response standard, and a living FAQ so answers stay consistent across investors.
• Keep the data room current; a stale data room mid-process reads as a company losing control of its numbers.
• Maintain parallel conversations so no single counterparty controls the clock; sequencing intent matters more than volume.
• Prepare management to discuss unit economics and capital priorities without slides; partner-level conviction is built in unscripted exchanges.

## Weeks 9–11: Term Sheets and Structure

• Compare offers on structure, not headline valuation: model participation, pro-rata, and anti-dilution effects across at least three exit scenarios.
• A four percent valuation premium can cost five to seven points of founder dilution at exit once structure is modeled; do the math before choosing a lead.
• Reference-check the lead partner with founders from their existing portfolio, including at least one company that underperformed.
• Negotiate the term sheet fully before signing; economics agreed at term sheet rarely improve in documentation.

## Weeks 12–14: Confirmatory Diligence and Close

• Grant exclusivity only when terms, syndicate, and process confidence justify shutting down the alternatives.
• Complete confirmatory diligence, definitive documentation, and closing conditions with counsel driving a dated checklist.
• Track every closing condition to a named owner and a date; unowned conditions are where closings slip.
• Plan communications for close: employees, existing investors, and customers hear it from you, not from the press release.

## Runway Math

A fourteen-week cycle plus a thirty percent buffer is roughly eighteen weeks, call it four and a half months from first meeting to funds wired. Add the four preparation weeks and the honest planning number is close to six months. If current runway cannot support six months plus two quarters of post-close operating cushion, size a bridge to the readiness work it funds, not as a pre-emption of the round itself.`,
  },
  {
    slug: 'board-deck-checklist',
    title: 'Board Deck Checklist',
    description:
      'What boards and management teams should include when presenting capital strategy, financing options, or transaction alternatives.',
    pages: '6 pages',
    pdfUrl: '/downloads/resources/board-deck-checklist.pdf',
    content: `Capital decisions are the board decisions with the longest consequences, and the quality of the decision is bounded by the quality of the materials. This checklist covers what a board deck should contain when management is presenting a financing, a transaction alternative, or a capital strategy shift, so that directors can discharge their duties on a complete record.

## Executive Summary

The first page should let a director who reads nothing else still understand the decision.

• The specific decision required from the board, stated as a resolution, not a theme.
• The recommended path with a two-sentence rationale.
• The alternatives considered and the reason each was set aside.
• What changes if the board waits a quarter: the honest cost of optionality.

## Business Update

Capital decisions made against a stale operating picture get relitigated. Anchor the deck in current performance first.

• Performance versus plan for revenue, gross margin, EBITDA, and cash, with variance explanations rather than restated targets.
• Key risks and mitigants, updated from the prior meeting rather than copied forward.
• Pipeline and retention indicators that support or challenge the forward plan the financing is built on.

## Capital Context

• Current capital structure: instruments outstanding, preference stack, covenant positions, and maturity schedule.
• Runway under base and downside cases, with the assumptions that separate the two.
• Financing alternatives compared side by side on dilution, control terms, cost of capital, and execution risk, not on headline price alone.
• Market timing considerations, supported by comparable transactions rather than sentiment.

## Process and Governance

• Proposed timeline with decision gates the board will own, so directors know when they will be asked to act.
• Advisors engaged or proposed, with scope and fees.
• Conflicts identified and managed: insider participation, investor-appointed directors on both sides of a decision, and any related-party dimensions.
• Fiduciary considerations counsel has flagged, documented in the record.

## Appendix Standards

• Full model output for the scenarios referenced in the body, so the board sees the machinery, not just the conclusions.
• Preference waterfall under at least three exit values.
• Term sheet or indicative terms in full, not summarized, when a specific instrument is on the table.`,
  },
  {
    slug: 'data-room-guide',
    title: 'Data Room Guide',
    description:
      'How to structure a lender- and investor-ready data room that reduces friction and accelerates diligence.',
    pages: '10 pages',
    pdfUrl: '/downloads/resources/data-room-guide.pdf',
    content: `A data room is not a document dump; it is the operational proof of the claims in your narrative. Investors form a view of management quality from the data room long before they form a view of the business, because the room shows how the company keeps its own records. This guide covers structure, sequencing, and the operating discipline that keeps diligence moving.

## Structure

• Numbered folders aligned to diligence workstreams, so investor request lists map one-to-one onto your structure.
• An index document at the root with one-line descriptions of every folder and a change log.
• Consistent file naming: date, document type, and entity, in that order.
• Version control with superseded documents archived, never deleted; auditors and counsel will ask what changed.
• Access permissions tiered by process stage: teaser-stage visitors do not need employment agreements.

## Core Folders

• 01 Corporate and legal: formation documents, cap table, board minutes, and material contracts flagged for change-of-control provisions.
• 02 Financial statements and KPIs: audited statements, monthly management accounts, and the KPI definitions document that keeps every metric consistent.
• 03 Commercial and customers: customer contracts, concentration analysis, cohort data, and pipeline reporting.
• 04 Operations and HR: organization chart, key employment agreements, and option grant reconciliation.
• 05 Tax and regulatory: structure chart, filings, open items, and licenses.

## Sequencing: Build in Investor-Priority Order

Populate the room in the order investors will read it, not the order documents are easiest to gather. Cohort economics and monthly P&L reconciled to budget come first; they answer the first investment-committee question. Corporate housekeeping matters, but it convinces no one to invest; it only prevents them from closing.

## Q&A Operating Discipline

• Route every question through a single intake channel with an internal owner; parallel side-channels create inconsistent answers.
• Hold a forty-eight-hour response standard, and communicate proactively when an answer needs longer.
• Maintain a living FAQ so the tenth investor gets the same answer as the first, in the same words.
• Log which folders each party opens; access patterns tell you who is doing real work before their next call tells you.

## Best Practices

• Upload complete, executed documents; placeholders and unsigned versions read as unfinished housekeeping.
• Redact what is genuinely sensitive, but excessive blackouts invite more questions than they close.
• Refresh monthly financials on a fixed calendar day so investors learn the rhythm.
• Run a pre-launch audit against this guide with someone who did not build the room; the builder cannot see the gaps.`,
  },
  {
    slug: 'investor-update-template',
    title: 'Investor Update Template',
    description:
      'A template for quarterly investor communications covering performance, capital priorities, and strategic developments.',
    pages: '5 pages',
    pdfUrl: '/downloads/resources/investor-update-template.pdf',
    content: `Consistent investor updates are the cheapest capital-markets instrument a company has. They compound trust between raises, keep pro-rata capital warm, and make every future process faster because the audience is already current. This template covers the structure, the metrics discipline, and the tone that make updates worth reading.

## Why Updates Matter More Than They Feel

The investors most likely to lead or anchor your next round are the ones already on your cap table, and their conviction is built quarter by quarter, not in the pitch meeting. A company that reports honestly through a difficult stretch raises its next round on credibility; a company that goes quiet raises it on suspicion.

## The Template

Subject line: [Company], Q[X] 20[XX] Investor Update.

• Highlights: three to five bullets covering the quarter's key wins, stated as facts with numbers rather than adjectives.
• Metrics snapshot: revenue, growth rate, gross margin, net retention, cash balance, and monthly burn, in the same order every quarter.
• Performance versus plan: where the quarter landed against budget, with a sentence of explanation for each material variance.
• Challenges: two or three honest items, each with the response underway; omitting the obvious problem costs more credibility than stating it.
• Capital and strategy: current runway, capital priorities for the next two quarters, and any financing intentions early enough that no one is surprised later.
• Team and product: senior hires, departures worth noting, and shipped milestones.
• Asks: specific, answerable requests, a named introduction, a candidate referral, a customer connection. Vague asks generate no responses.

## Metrics Discipline

Report the same metrics, defined the same way, every quarter. If a definition must change, flag the change and restate the prior period. Investors forgive bad quarters; they do not forgive moving definitions, because a moved definition contaminates every number that came before it.

## Cadence and Tone

• Send within three weeks of quarter close, every quarter, including the bad ones; the update you least want to send is the one that matters most.
• Keep it under two pages of reading; depth belongs in the appendix or the data room.
• Write in plain declarative sentences and let the numbers carry the argument.
• Close with the asks, they are the part of the update that generates a return the same week.`,
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}
