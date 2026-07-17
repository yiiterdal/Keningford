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
    client: 'EcoPha Biotech',
    type: 'Capital Raising',
    description:
      'Advising on a cross-border capital raise for sustainable bioplastics and aviation fuel, with government co-funding and strategic partnerships across aviation and industrial sectors.',
    status: 'Active',
    href: '/news/keningford-advises-ecopha-biotech-capital-raise',
    logo: { src: '/images/news/ecopha-logo.png', alt: 'EcoPha Biotech logo' },
  },
  {
    client: 'Energy Infrastructure Platform',
    type: 'Capital Raising',
    description:
      'Advising a renewable energy platform on growth equity and project-level debt to fund contracted pipeline expansion across distributed generation assets.',
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
