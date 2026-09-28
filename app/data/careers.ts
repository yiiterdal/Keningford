import { mailtoApplicationUrl } from '../lib/mail-compose';
import { contactEmail } from './contact';

export type CareerDepartment =
  | 'Investment Banking'
  | 'Capital Markets'
  | 'Operations'
  | 'Business Development';

export interface CareerOpening {
  id: string;
  title: string;
  department: CareerDepartment;
  location: string;
  type: 'Full-time' | 'Internship';
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CareerValue {
  title: string;
  description: string;
}

export interface CareerPartner {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  /** Tailwind object-position class for circular crop framing */
  imageObjectPosition?: string;
}

export const careerValues: CareerValue[] = [
  {
    title: 'High-Stakes Mandates',
    description:
      'Work on complex capital raises, recapitalizations, and strategic M&A alongside senior bankers from day one, not peripheral support roles.',
  },
  {
    title: 'Direct Client Exposure',
    description:
      'Participate in management meetings, investor presentations, and transaction execution with founders, boards, and institutional sponsors.',
  },
  {
    title: 'Meritocratic Growth',
    description:
      'Small teams, flat hierarchy, and early responsibility for analysts and associates who demonstrate judgment, discipline, and ownership.',
  },
];

export const careerPartners: CareerPartner[] = [
  {
    name: 'Tuna Yilar',
    title: 'Managing Partner',
    bio: 'Co-leads strategic advisory, marketing, and financial advisory for growth-stage and established companies.',
    imageUrl: '/images/team/tuna-yilar.jpg',
  },
  {
    name: 'Yigit Erdal',
    title: 'Managing Partner',
    bio: 'Leads cross-border M&A and private capital advisory for US and European family offices and founders.',
    imageUrl: '/images/team/yigit-erdal.jpg',
  },
  {
    name: 'George Dorkhom',
    title: 'Senior Advisor',
    bio: 'Advises on industrials, aerospace and defense, and technology mandates, with three decades leading business transformation and M&A globally.',
    imageUrl: '/images/team/george-dorkhom.jpg',
  },
  {
    name: 'Kevin Lark',
    title: 'Senior Advisor',
    bio: 'Senior advisor on strategic mandates, with decades of experience advising boards and management teams.',
    imageUrl: '/images/team/kevin-lark.jpg',
  },
  {
    name: 'Daria Kyrychenko',
    title: 'Director, Business Development',
    bio: 'Leads client development and institutional outreach across North America and Europe.',
    imageUrl: '/images/team/daria-kyrychenko.jpg',
  },
  {
    name: 'Jason Atyabi, CPA',
    title: 'Board Advisor',
    bio: 'International finance executive with two decades across technical accounting, audit management, strategic planning, and IPO due diligence. Advises on fractional CFO mandates and board-level oversight.',
    imageUrl: '/images/team/jason-atyabi.jpg',
  },
  {
    name: 'Joy Shome',
    title: 'Analyst',
    bio: "Supports the firm's investment analysis and execution across active mandates, from screening through diligence support.",
    imageUrl: '/images/team/joy-shome.jpg',
  },
];

export const founderProfile = {
  name: 'Tuna Yilar',
  title: 'Founder and Managing Partner',
  imageUrl: '/images/partners/haktan-tuna-yilar.jpg',
  bio: [
    'Tuna Yilar founded Keningford Partners after building, operating, and exiting his own investment bank. He leads the firm on a principal-led model, with direct senior involvement on every mandate from origination through close.',
    'The firm advises founders and management teams on capital raises from Series A through pre-IPO, sell-side and buy-side M&A, and debt advisory. Priorities include cross-border SPV structuring, real estate capital introduction, and growth-stage biotech and deep-tech mandates.',
    'Before founding Keningford, Mr. Yilar operated on both sides of the table as an owner, operator, and advisor. That perspective shapes the firm\'s conviction that clients deserve the same senior banker they met during the pitch to lead execution through close.',
  ],
};

export const careerOpenings: CareerOpening[] = [
  {
    id: 'associate-ma',
    title: 'Associate, M&A & Capital Markets',
    department: 'Capital Markets',
    location: 'New York, NY (on-site)',
    type: 'Full-time',
    experience: '2-4 years',
    summary:
      'The Associate will take ownership of day-to-day execution on sell-side M&A and private capital processes, working closely with Partners on middle-market and growth-company mandates across North America and cross-border situations.',
    responsibilities: [
      'Lead financial modeling, valuation, and marketing materials for active processes',
      'Manage investor/buyer outreach, meeting scheduling, and process correspondence',
      'Draft teasers, CIM sections, and management presentation content with Partner review',
      'Coordinate with legal, tax, and accounting advisors on diligence and documentation',
      'Support junior team members on formatting, analysis, and process discipline',
    ],
    requirements: [
      "Bachelor's degree required; MBA or CFA progress a plus",
      '2-4 years of experience in investment banking, corporate development, or a related advisory role',
      'Demonstrated experience running workstreams on live transactions',
      'Comfort interfacing with founders, management teams, and institutional investors',
    ],
  },
  {
    id: 'intern-stajyer',
    title: 'Investment Banking Intern',
    department: 'Investment Banking',
    location: 'New York, NY (hybrid)',
    type: 'Internship',
    experience: 'Student / graduate',
    summary:
      'Our stajyer program is designed for motivated students and recent graduates who want direct exposure to boutique investment banking. Interns are embedded on live deal teams and receive structured feedback from Partners and Associates throughout the engagement.',
    responsibilities: [
      'Support financial models, market research, and presentation preparation under Associate supervision',
      'Help maintain investor/buyer trackers, meeting notes, and data room organization',
      'Conduct industry and company research for pitch and process materials',
      'Participate in internal training on valuation, transaction process, and professional standards',
      'Complete assigned workstreams with clear deadlines and attention to confidentiality',
    ],
    requirements: [
      'Currently enrolled in or recently completed a degree in Finance, Economics, Business, or a related field',
      'Minimum 10-week commitment; 6-month placements considered for strong candidates',
      'Solid Excel and PowerPoint fundamentals; prior internship or coursework in finance preferred',
      'Professional written and spoken English; additional languages a plus for cross-border work',
      'Must sign confidentiality agreement and comply with firm policies on information handling',
    ],
  },
];

export const careersContactEmail = contactEmail;

export { gmailApplicationUrl, mailtoApplicationUrl, outlookApplicationUrl } from '../lib/mail-compose';

export function careerApplicationMailto(jobTitle: string): string {
  return mailtoApplicationUrl(jobTitle);
}
