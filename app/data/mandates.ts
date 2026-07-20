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
    client: 'EnergyCite',
    type: 'Capital Raising',
    description:
      'Capital raise for EnergyCite Inc. — patented smart-meter IP and an AI conservation app delivering real-time kWh usage, billing visibility, and multi-rate pricing to U.S. residential utility customers.',
    status: 'Active',
    href: '/news/keningford-advises-energycite-capital-raise',
    logo: { src: '/images/news/energycite-logo.png', alt: 'EnergyCite logo' },
  },
  {
    client: 'EcoPha Biotech',
    type: 'Capital Raising',
    description:
      'Cross-border raise for a dual-output biotech platform — sustainable bioplastics and aviation fuel from one non-edible feedstock, with a Queensland flagship backed by government co-funding.',
    status: 'Active',
    href: '/news/keningford-advises-ecopha-biotech-capital-raise',
    logo: { src: '/images/news/ecopha-logo.png', alt: 'EcoPha Biotech logo' },
  },
  {
    client: 'Healthcare Services Platform',
    type: 'Debt Advisory',
    description:
      'Debt advisory for a multi-site healthcare services platform evaluating refinancing options and covenant flexibility ahead of growth acquisitions.',
    status: 'Active',
  },
];
