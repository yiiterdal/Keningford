export interface Resource {
  slug: string;
  title: string;
  description: string;
  pages: string;
  content: string;
}

export const resources: Resource[] = [
  {
    slug: 'due-diligence-checklist',
    title: 'Due Diligence Checklist',
    description:
      'A practical checklist for founders preparing financial, commercial, and legal diligence ahead of a capital raise or sale process.',
    pages: '12 pages',
    content: `Financial
• Audited or reviewed financials (3 years)
• Monthly management accounts (trailing 12 months)
• Revenue bridge and customer cohort analysis
• Normalized EBITDA schedule with clear adjustments
• Working capital analysis and seasonality

Commercial
• Customer list with concentration analysis
• Pipeline and backlog summary
• Pricing, churn, and retention metrics
• Competitive landscape overview

Legal & Corporate
• Cap table and option pool detail
• Material contracts and change-of-control provisions
• IP ownership documentation
• Litigation and regulatory disclosures`,
  },
  {
    slug: 'fundraising-timeline',
    title: 'Fundraising Timeline',
    description:
      'A week-by-week roadmap aligned to a 14-week institutional growth-round cycle — from readiness through close.',
    pages: '8 pages',
    content: `Weeks −4 to 0: Readiness
• Build data room in investor-priority order
• Map 25–40 prospects at partner level
• Calibrate narrative around structural readiness

Weeks 1–3: Outreach
• Launch sequenced outreach by fit
• Hold first management meetings
• Capture recurring diligence themes

Weeks 4–8: Diligence
• Run controlled Q&A and data room updates
• Maintain competitive tension across investors
• Refine model and use-of-proceeds narrative

Weeks 9–11: Terms
• Compare term sheets beyond headline valuation
• Model participation, pro-rata, and dilution at exit
• Select lead and negotiate structure

Weeks 12–14: Close
• Confirmatory diligence and documentation
• Exclusivity only when process confidence justifies it
• Close with runway buffer for slip risk`,
  },
  {
    slug: 'board-deck-checklist',
    title: 'Board Deck Checklist',
    description:
      'What boards and management teams should include when presenting capital strategy, financing options, or transaction alternatives.',
    pages: '6 pages',
    content: `Executive summary
• Decision required from the board
• Recommended path and rationale

Business update
• Performance vs. plan
• Key risks and mitigants

Capital context
• Current capital structure and runway
• Financing alternatives compared side-by-side
• Market timing considerations

Process & governance
• Proposed timeline and advisors
• Conflicts and fiduciary considerations`,
  },
  {
    slug: 'data-room-guide',
    title: 'Data Room Guide',
    description:
      'How to structure a lender- and investor-ready data room that reduces friction and accelerates diligence.',
    pages: '10 pages',
    content: `Structure
• Numbered folders aligned to diligence workstreams
• Index document with clear descriptions
• Version control and access permissions

Core folders
1. Corporate & legal
2. Financial statements & KPIs
3. Commercial & customers
4. Operations & HR
5. Tax & regulatory

Best practices
• Upload complete documents — avoid placeholders
• Redact sensitively but avoid excessive blackouts
• Assign an internal owner for Q&A response times`,
  },
  {
    slug: 'investor-update-template',
    title: 'Investor Update Template',
    description:
      'A template for quarterly investor communications covering performance, capital priorities, and strategic developments.',
    pages: '5 pages',
    content: `Subject: [Company] — Q[X] Investor Update

Highlights
• Key wins this quarter
• Metrics snapshot (revenue, growth, retention)

Performance
• Results vs. plan
• Challenges and responses

Capital & strategy
• Capital priorities next quarter
• Hiring, product, or market expansion updates

Asks (if any)
• Introductions, advisors, or strategic support needed`,
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}
