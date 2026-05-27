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
    imageUrl: '/images/partners/haktan-tuna-yilar.jpg',
  },
  {
    name: 'Kevin Lark',
    title: 'Senior Advisor',
    bio: 'Senior advisor on strategic mandates, with decades of experience advising boards and management teams.',
    imageUrl: '/images/partners/kevin-lark.jpg',
  },
  {
    name: 'Daria Kyrychenko',
    title: 'Director, Business Development',
    bio: 'Leads client development and institutional outreach across North America and Europe.',
    imageUrl: '/images/partners/daria-kyrychenko.jpg',
  },
  {
    name: 'Yigit Erdal',
    title: 'Managing Partner',
    bio: 'Leads cross-border M&A and private capital advisory for US and European family offices and founders.',
    imageUrl: '/images/partners/yigit-erdal.jpg',
  },
];

export const careerOpenings: CareerOpening[] = [
  {
    id: 'analyst-investment-banking',
    title: 'Investment Banking Analyst',
    department: 'Investment Banking',
    location: 'New York, NY (on-site)',
    type: 'Full-time',
    experience: '0-2 years',
    summary:
      'We are seeking an Analyst to join our lean deal team and support active M&A and capital raising mandates. This is a hands-on role on a boutique platform. You will work directly with Partners on live client work, not on internal projects alone.',
    responsibilities: [
      'Prepare financial models, valuation work, and board/investor presentation materials',
      'Support comparable company and precedent transaction analysis',
      'Assist with buyer/investor lists, outreach tracking, and data room organization',
      'Help coordinate due diligence requests and internal workstream updates',
      'Attend client and investor calls as appropriate, with Partner oversight',
    ],
    requirements: [
      "Bachelor's degree in Finance, Economics, Business, or a related field",
      'Strong Excel and PowerPoint skills; prior internship in banking, consulting, or corporate finance preferred',
      'High attention to detail, discretion, and ability to manage multiple deadlines',
      'Eligible to work in the United States',
    ],
  },
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
