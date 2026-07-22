export interface EngagementTimelineStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  output: string;
}

export const engagementTimelineSteps: EngagementTimelineStep[] = [
  {
    number: '01',
    phase: 'Initial conversation',
    title: 'Fit',
    description:
      'It starts with a confidential conversation to understand your objectives, timeline, and stakeholder dynamics, and to assess mutual fit before any formal commitment.',
    output:
      'A clear view of mandate scope, strategic priorities, and whether Keningford is the right partner for the assignment.',
  },
  {
    number: '02',
    phase: 'Weeks 2–3',
    title: 'Focus',
    description:
      'We build a deeper understanding of your business, financial profile, capital structure, and competitive positioning, including investor or buyer mapping where relevant.',
    output:
      'A positioning brief and target list aligned to your sector, scale, and transaction objectives.',
  },
  {
    number: '03',
    phase: 'Week 4',
    title: 'Frame',
    description:
      'We present strategic options and frame the optimal structure, valuation range, process design, and path forward, with clear trade-offs for board and management.',
    output:
      'A board-ready view of the opportunity, recommended structure, and execution roadmap.',
  },
  {
    number: '04',
    phase: 'Weeks 5–6',
    title: 'Forge',
    description:
      'We formalize the mandate, prepare marketing materials and data room architecture, and commit senior attention to your company\u2019s transaction.',
    output:
      'Signed engagement, approved process plan, and investor-ready materials.',
  },
  {
    number: '05',
    phase: 'Execution phase',
    title: 'Forward',
    description:
      'We run the process, from selective investor or buyer outreach through diligence coordination, term negotiation, and documentation to close.',
    output:
      'Closed transaction or signed term sheet with terms optimized for your strategic agenda.',
  },
];

export const engagementTimelineSummary =
  'Every engagement starts with a confidential fit conversation. Execution is then scoped around the size, complexity, and urgency of the mandate.';
