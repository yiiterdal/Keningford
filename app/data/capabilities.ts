export type CapabilityIconId = 'ma' | 'capital' | 'strategic' | 'valuation' | 'restructuring';

export interface CapabilityItem {
  title: string;
  description: string;
  href: string;
  icon: CapabilityIconId;
}

export const capabilities: CapabilityItem[] = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic M&A advisory from deal origination through execution and integration.',
    href: '/capabilities/mergers-acquisitions',
    icon: 'ma',
  },
  {
    title: 'Capital Raising',
    description: 'Debt and equity financing solutions for growth, acquisitions, and strategic initiatives.',
    href: '/capabilities/capital-raising',
    icon: 'capital',
  },
  {
    title: 'Strategic Advisory',
    description:
      'Customized strategic advisory services to optimize capital efficiency and strategic flexibility.',
    href: '/capabilities/strategic-advisory',
    icon: 'strategic',
  },
  {
    title: 'Valuation & Fairness Opinions',
    description:
      'Independent valuation services and fairness opinions for M&A transactions and strategic initiatives.',
    href: '/capabilities/valuation-fairness-opinions',
    icon: 'valuation',
  },
  {
    title: 'Restructuring',
    description: 'Strategic restructuring advisory for companies facing operational or financial challenges.',
    href: '/capabilities/restructuring',
    icon: 'restructuring',
  },
];
