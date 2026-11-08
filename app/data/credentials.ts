import {
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactLinkedIn,
  contactPhone,
  contactPhoneHref,
} from './contact';

export const PITCHBOOK_URL = 'https://pitchbook.com/profiles/advisor/1405195-84';
export const CRUNCHBASE_URL = 'https://www.crunchbase.com/organization/keningford-partners';
export const DELAWARE_ENTITY_SEARCH_URL = 'https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx';

/**
 * Registry identifiers. Leave a field empty until it is confirmed;
 * empty fields are hidden on /credentials and /verify.
 */
export const companyRegistry = {
  legalName: 'Keningford Partners LLC',
  jurisdiction: 'State of Delaware, United States',
  registeredOffice: '8 The Green, Suite B, Dover, Delaware, USA',
  delawareFileNumber: '',
  formationYear: '',
  lei: '',
  duns: '',
};

export const officialDomain = 'keningfordpartners.com';

export interface CompanyFact {
  label: string;
  value: string;
  note: string;
  href?: string;
}

export const companyFacts: CompanyFact[] = [
  {
    label: 'Legal Entity',
    value: companyRegistry.legalName,
    note: 'The registered company behind the brand.',
  },
  {
    label: 'Registered In',
    value: 'State of Delaware',
    note: companyRegistry.delawareFileNumber
      ? `Delaware Division of Corporations (file no. ${companyRegistry.delawareFileNumber}).`
      : 'Delaware Division of Corporations, United States.',
  },
  ...(companyRegistry.lei
    ? [
        {
          label: 'Legal Entity Identifier',
          value: companyRegistry.lei,
          note: 'Global LEI. View the public record.',
          href: `https://search.gleif.org/#/record/${companyRegistry.lei}`,
        },
      ]
    : []),
  ...(companyRegistry.formationYear
    ? [
        {
          label: 'Established',
          value: companyRegistry.formationYear,
          note: `${companyRegistry.legalName} formed in ${companyRegistry.formationYear}.`,
        },
      ]
    : []),
  {
    label: 'What We Do',
    value: 'Capital advisory & M&A',
    note: 'Debt and equity raises, M&A and strategic advisory.',
  },
  {
    label: 'Offices',
    value: 'New York',
    note: `${contactAddressLine1}, ${contactAddressLine2}. Coverage across North America and Europe.`,
  },
  {
    label: 'Contact',
    value: contactEmail,
    note: 'A real person replies, usually same day.',
    href: `mailto:${contactEmail}`,
  },
  {
    label: 'Public Profiles',
    value: 'LinkedIn · PitchBook · Crunchbase',
    note: 'Independent listings you can check in minutes.',
    href: '#verify-sources',
  },
];

export interface VerificationSource {
  title: string;
  description: string;
  href: string;
}

export const verificationSources: VerificationSource[] = [
  {
    title: 'Delaware Division of Corporations',
    description: `Search "${companyRegistry.legalName}" on the official Delaware Division of Corporations entity register.`,
    href: DELAWARE_ENTITY_SEARCH_URL,
  },
  ...(companyRegistry.lei
    ? [
        {
          title: 'GLEIF LEI record',
          description: `Global Legal Entity Identifier record (LEI ${companyRegistry.lei}).`,
          href: `https://search.gleif.org/#/record/${companyRegistry.lei}`,
        },
      ]
    : []),
  {
    title: 'LinkedIn',
    description: 'Our company page, leadership and ongoing updates.',
    href: contactLinkedIn,
  },
  {
    title: 'Crunchbase',
    description: 'Our independent company profile on the Crunchbase business database.',
    href: CRUNCHBASE_URL,
  },
  {
    title: 'PitchBook',
    description: 'Our advisor profile on the PitchBook private-markets database.',
    href: PITCHBOOK_URL,
  },
  {
    title: 'Our team',
    description: 'Real, named people with public profiles - meet the leadership behind every mandate.',
    href: '/about#team',
  },
  {
    title: 'Track record',
    description: 'Completed transactions advised by the Keningford Partners team, through to financial close.',
    href: '/transactions',
  },
];

/** Full index of official and independent records listed on /verify */
export const verifyIndex: VerificationSource[] = [
  ...verificationSources,
  { title: 'What investors should know', description: 'Information for investors and capital partners.', href: '/investors' },
  { title: 'Our credentials', description: 'Company details, team and track record in one place.', href: '/credentials' },
  { title: 'Frequently asked questions', description: 'Answers about who we are and how we work.', href: '/credentials#faq' },
  {
    title: 'Official information for internship and job candidates',
    description: 'Current openings and how we recruit.',
    href: '/careers',
  },
  {
    title: 'Where is Keningford Partners located?',
    description: `New York office at ${contactAddressLine1}.`,
    href: '/contact',
  },
  { title: 'Privacy and cookie policy', description: 'How we handle personal data.', href: '/privacy' },
];

export const contactChannels = {
  email: contactEmail,
  phone: contactPhone,
  phoneHref: contactPhoneHref,
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const credentialsFaq: FaqItem[] = [
  {
    question: 'Where is Keningford Partners registered?',
    answer: `Its legal entity, ${companyRegistry.legalName}, is registered in the State of Delaware, United States, with the Delaware Division of Corporations${
      companyRegistry.formationYear ? `, formed in ${companyRegistry.formationYear}` : ''
    }. You can verify it independently on the public Delaware entity register. We have a named, public leadership team and a track record of completed capital-raising and M&A transactions.`,
  },
  {
    question: 'What does Keningford Partners do?',
    answer:
      'We are a capital advisory firm. We help operating companies and institutional investors raise debt and equity and execute M&A by introducing them to institutional investors, family offices and strategic partners, and we run the process through to a close. We represent the company raising capital; we are not the investor and not the fund manager.',
  },
  {
    question: 'Where is Keningford Partners based?',
    answer: `${companyRegistry.legalName} is registered in the State of Delaware and headquartered in New York, with coverage across North America and Europe. You can reach the team directly at ${contactEmail}.`,
  },
  {
    question: 'How can I verify Keningford Partners independently?',
    answer: `Search "${companyRegistry.legalName}" on the Delaware Division of Corporations register; view us on LinkedIn, Crunchbase and PitchBook; review the named team and the public track record; or simply email us and speak to a real person before deciding anything.`,
  },
  {
    question: 'Does Keningford Partners hold or manage client or investor money?',
    answer:
      'No. We act as an advisor only, and we never take custody of client or investor funds. Capital moves directly between the company raising it and the investor. We are paid an advisory and success fee for arranging and running the process.',
  },
  {
    question: 'How does Keningford Partners get paid?',
    answer:
      'Transparently - a fixed engagement fee plus a success fee earned on capital actually raised. The terms are set out in a written engagement letter before any work begins. There are no hidden charges, and the firm never takes custody of funds. The engagement fee is non-refundable and there is no money-back guarantee.',
  },
  {
    question: 'Will Keningford Partners ask me for my passwords or login details?',
    answer: `No. We never ask clients, investors, candidates or team members for passwords or login details of any kind. You keep full and sole control of your own accounts at all times. If anyone contacts you claiming to be from Keningford Partners and asks for a password or account access, it is not genuine - please verify with us directly through ${officialDomain}.`,
  },
];

export const verifyFaq: FaqItem[] = [
  {
    question: 'Will Keningford Partners ask for my LinkedIn password or account access?',
    answer:
      'No. Keningford Partners will never ask you to share your LinkedIn or any other password, or to hand over access to a personal account. You keep full and sole control of your accounts at all times. If anyone contacts you claiming to be from Keningford Partners and asks for a password or account access, it is not genuine - please verify with us directly.',
  },
  {
    question: 'Where is Keningford Partners registered?',
    answer: `${companyRegistry.legalName} is a company registered in the State of Delaware, United States${
      companyRegistry.delawareFileNumber ? ` (file no. ${companyRegistry.delawareFileNumber})` : ''
    }, operating as a capital advisory firm. You can confirm the registration on the Delaware Division of Corporations entity register, and find the firm on LinkedIn, Crunchbase and PitchBook. We are happy to be checked and encourage every prospective client, candidate or partner to verify us independently.`,
  },
  {
    question: 'Is Keningford Partners a commercial bank?',
    answer:
      'No. Keningford Partners is an investment banking and capital advisory firm - not a commercial bank or a deposit-taker. We do not lend, take deposits, or hold client or investor money.',
  },
  {
    question: 'How do I know a message from Keningford Partners is genuine?',
    answer: `Genuine communications come from our own channels - emails from addresses ending in @${officialDomain} and our website at ${officialDomain}. If you are ever unsure whether a message is really from us, contact us directly through the website before responding or sharing any information.`,
  },
  {
    question: 'Will Keningford Partners ever ask me to pay a fee to release or unlock funds?',
    answer:
      'No. Keningford Partners never asks anyone to pay in order to "release", "unlock" or "guarantee" funds, and never takes custody of money. Any request to pay a fee to release funds is a hallmark of advance-fee fraud and is not something we, or any legitimate firm, would ask of you.',
  },
];

export const redFlags = [
  {
    title: 'A request to pay to "release" or "unlock" funds',
    description:
      'No legitimate firm, including Keningford Partners, asks you to pay a fee to release, unlock or guarantee funds. This is the most common hallmark of advance-fee fraud.',
  },
  {
    title: 'Anyone asking you to transfer or handle money',
    description:
      'Keningford Partners never takes custody of money - capital flows directly between the investor and the company. Be cautious of anyone asking you to move funds on their behalf.',
  },
  {
    title: 'Pressure, urgency or secrecy',
    description:
      'A genuine process gives you time to verify and welcomes your questions. High-pressure tactics, demands for an immediate decision, or requests to keep things secret are warning signs.',
  },
  {
    title: 'Channels that do not match our official ones',
    description: `Genuine Keningford Partners contact comes from @${officialDomain} addresses and our website. Treat approaches from other domains or unverifiable messaging accounts with caution until you have confirmed them with us directly.`,
  },
];
