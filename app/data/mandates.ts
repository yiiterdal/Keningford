export interface RecentMandate {
  client: string;
  type: string;
  description: string;
  status: 'Active' | 'Completed';
  href?: string;
  logo?: { src: string; alt: string };
}

export const recentMandates: RecentMandate[] = [
  {
    client: 'Energy Technology Platform',
    type: 'Capital Raising',
    description:
      'Confidential capital raise for an energy technology platform focused on conservation software and usage visibility for residential utility customers. Client identity and size undisclosed.',
    status: 'Active',
  },
  {
    client: 'Biotech Platform',
    type: 'Capital Raising',
    description:
      'Confidential cross-border raise for a dual-output biotech platform addressing sustainable materials and aviation fuel. Client identity and size undisclosed.',
    status: 'Active',
  },
  {
    client: 'Healthcare Services Platform',
    type: 'Debt Advisory',
    description:
      'Debt advisory for a multi-site healthcare services platform evaluating refinancing options and covenant flexibility ahead of growth acquisitions.',
    status: 'Active',
  },
];
