export type EnergyCiteFormData = {
  companyName: string;
  incState: string;
  founded: string;
  hq: string;
  ceoName: string;
  oneLiner: string;
  website: string;
  stage: string;
  productName: string;
  productDesc: string;
  moat: string;
  devStage: string;
  partnerships: string;
  competitors: string;
  tam: string;
  sam: string;
  revenueModel: string;
  unitPrice: string;
  projRevenue: string;
  launchDate: string;
  profitability: string;
  channel: string;
  totalRaised: string;
  raiseTarget: string;
  offeringType: string;
  priceA: string;
  priceB: string;
  useProceeds: string;
  priorInvestors: string;
  minInvest: string;
  invType: string[];
  geo: string[];
  checkSize: string;
  numInvestors: string;
  strategicValue: string;
  excludeInvestors: string;
  closeTimeline: string;
  team: string;
  exit: string;
  exitTimeline: string;
  exitDetails: string;
  additionalNotes: string;
};

export const ENERGYCITE_INITIAL_VALUES: EnergyCiteFormData = {
  companyName: 'EnergyCite, Inc.',
  incState: 'Nevada',
  founded: '2018',
  hq: 'Carmichael, CA',
  ceoName: 'Tomer D. Tamarkin',
  oneLiner:
    'AI-powered energy management system leveraging 140M installed smart meters to deliver real-time billing data and conservation tools to US utility customers.',
  website: 'https://energycite.com',
  stage: 'Pre-launch',
  productName: 'EMS-2020 / EnergyCite App',
  productDesc:
    'AI-based energy management application that connects to utility smart meters via ZigBee radio, providing residential customers with real-time energy usage, projected billing, and automated conservation features on their smartphone.',
  moat:
    'Patent portfolio (3 granted US patents: 7,379,791 / 8,306,668 / 8,639,390) covering the system topology whereby utility billing data, real-time power data, and display/control of power are integrated. Any utility deploying compatible smart meters must navigate these patents.',
  devStage: 'Pre-production',
  partnerships:
    "Wasion Meter Company (PRC) — 10% equity strategic investor, world's largest meter manufacturer. Southern California Edison — 2006-2008 joint development (CPUC benchmark specification). Owon Technologies / Lilliput (Xiamen) — manufacturing partner.",
  competitors: 'Nest Labs (Thermostat), Honeywell, Sense Energy Monitor',
  tam: '140M residential smart meter endpoints in US',
  sam: '168 IOUs + top 100 Municipal Utilities',
  revenueModel:
    'Monthly subscription lease of $0.50 per meter per month, charged to utilities who license the system for their customer base. Secondary revenue from transaction fees, media delivery, and licensing royalties.',
  unitPrice: '$0.50/meter/month',
  projRevenue: '$588M/year at 70% TAM penetration',
  launchDate: 'Q2 2027 beta site completion',
  profitability: '18-24 months from product launch',
  channel: 'B2B (Utility)',
  totalRaised: '~$3.5M+',
  raiseTarget: '$5,000,000',
  offeringType: 'Reg D 504 Equity',
  priceA: '$1.00 per share',
  priceB: '$3.00 per share',
  useProceeds:
    'R&D completion ($400K) · Patent reinstatement & IP ($50K) · Working capital / 24-month runway ($1.2M) · Sales & marketing / utility outreach ($800K) · COO onboarding — Jeremy Tamarkin ($200K) · Advisory & legal fees ($250K) · Office & operations build-out ($500K) · Contingency reserve ($600K)',
  priorInvestors:
    'Wasion Meter Company, PRC ($500K, 10% equity) · Pat Boone ($325K, VP Investor Relations, Board) · Tom & Emily Tamarkin ($250K self-funded) · ~100 Reg D investors ($1K–$100K each)',
  minInvest: '$5,000',
  invType: ['Utility CVC', 'Smart Meter Manufacturer', 'Fusion/Energy VC'],
  geo: ['USA', 'Canada'],
  checkSize: '$250K – $1M',
  numInvestors: '5–10 investors',
  strategicValue:
    'Distribution access through utility networks, regulatory guidance, industry credibility for utility partnerships, and potential joint product development.',
  excludeInvestors: '',
  closeTimeline: 'Summer 2026 (3-4 months)',
  team: 'Tomer D. Tamarkin — CEO & Chairman. Inventor of smart utility meter system. 7 patents worldwide. 20+ year operator. // Emily Tamarkin — Corporate Secretary, Co-founder. // Jeremy Tamarkin — Incoming COO (upon funding). 12 years Platt Electrical Distribution, sales & operations. // Pat Boone — VP Investor Relations, Board Member. $325K invested. // Dr. Irvin Lindemuth — Board Advisor. Father of magnetized target fusion. // Rabbi Avi Schwartz — Board Member, digital media & communications.',
  exit: 'Shareholder Buyback 10x',
  exitTimeline: 'Within 6 months of profitability (est. mid-2028)',
  exitDetails:
    'All shareholders (except Tomer Tamarkin) will be offered a one-time cash buyout at 10x the price paid per share within 6 months of the company achieving profitability, targeted mid-2028. Shares at $1.00 buy out at $10.00; shares at $3.00 buy out at $30.00.',
  additionalNotes:
    "Patent reinstatement (US 8,639,390) is in progress — USPTO Section 2590 petition filed with Ted Wood ESQ. Please do not reference this patent as 'active' in investor materials until status is confirmed. The General Fusion GFUZ listing (July 10, 2026) creates a strong timing window for fusion-adjacent investor outreach.",
};

const SECTIONS: { title: string; fields: { label: string; key: keyof EnergyCiteFormData }[] }[] = [
  {
    title: '1. Company Overview',
    fields: [
      { label: 'Legal Company Name', key: 'companyName' },
      { label: 'State of Incorporation', key: 'incState' },
      { label: 'Founded Year', key: 'founded' },
      { label: 'Headquarters', key: 'hq' },
      { label: 'CEO / Founder Name', key: 'ceoName' },
      { label: 'One-Line Description', key: 'oneLiner' },
      { label: 'Website', key: 'website' },
      { label: 'Stage / Status', key: 'stage' },
    ],
  },
  {
    title: '2. Product & Technology',
    fields: [
      { label: 'Product Name', key: 'productName' },
      { label: 'Product Description', key: 'productDesc' },
      { label: 'Core Differentiator / Moat', key: 'moat' },
      { label: 'Development Stage', key: 'devStage' },
      { label: 'Key Partnerships', key: 'partnerships' },
      { label: 'Key Competitors', key: 'competitors' },
    ],
  },
  {
    title: '3. Market & Revenue',
    fields: [
      { label: 'TAM', key: 'tam' },
      { label: 'SAM', key: 'sam' },
      { label: 'Revenue Model', key: 'revenueModel' },
      { label: 'Unit Price', key: 'unitPrice' },
      { label: 'Projected Revenue at Scale', key: 'projRevenue' },
      { label: 'Target Launch Date', key: 'launchDate' },
      { label: 'Time to Profitability', key: 'profitability' },
      { label: 'Sales Channel', key: 'channel' },
    ],
  },
  {
    title: '4. Capital & Financials',
    fields: [
      { label: 'Total Capital Raised', key: 'totalRaised' },
      { label: 'Current Raise Target', key: 'raiseTarget' },
      { label: 'Offering Type', key: 'offeringType' },
      { label: 'Share Price (Series A)', key: 'priceA' },
      { label: 'Share Price (Series B)', key: 'priceB' },
      { label: 'Use of Proceeds', key: 'useProceeds' },
      { label: 'Prior Investors', key: 'priorInvestors' },
      { label: 'Minimum Investment', key: 'minInvest' },
    ],
  },
  {
    title: '5. Investor Preferences',
    fields: [
      { label: 'Preferred Investor Types', key: 'invType' },
      { label: 'Geographic Focus', key: 'geo' },
      { label: 'Target Check Size', key: 'checkSize' },
      { label: 'Ideal Number of Investors', key: 'numInvestors' },
      { label: 'Strategic Value Beyond Capital', key: 'strategicValue' },
      { label: 'Investors to Exclude', key: 'excludeInvestors' },
      { label: 'Timeline to Close', key: 'closeTimeline' },
    ],
  },
  {
    title: '6. Team & Exit',
    fields: [
      { label: 'Key Team Members', key: 'team' },
      { label: 'Exit Strategy', key: 'exit' },
      { label: 'Exit Timeline', key: 'exitTimeline' },
      { label: 'Exit Details', key: 'exitDetails' },
      { label: 'Additional Notes', key: 'additionalNotes' },
    ],
  },
];

function formatValue(value: string | string[]): string {
  if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : '—';
  return value.trim() || '—';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function formatEnergyCiteSubmissionText(
  data: EnergyCiteFormData,
  submittedAt: string,
): string {
  const lines = [
    'EnergyCite Client Onboarding Form',
    `Submitted: ${submittedAt}`,
    '',
  ];

  for (const section of SECTIONS) {
    lines.push(section.title);
    lines.push('—'.repeat(section.title.length));
    for (const field of section.fields) {
      lines.push(`${field.label}: ${formatValue(data[field.key])}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

export function formatEnergyCiteSubmissionHtml(
  data: EnergyCiteFormData,
  submittedAt: string,
): string {
  const sections = SECTIONS.map((section) => {
    const rows = section.fields
      .map((field) => {
        const value = formatValue(data[field.key]);
        return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#5C5A55;vertical-align:top;width:38%;">${escapeHtml(field.label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#1F3A5F;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`;
      })
      .join('');

    return `<h2 style="font-family:Arial,sans-serif;font-size:16px;color:#1F3A5F;margin:24px 0 8px;">${escapeHtml(section.title)}</h2><table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${rows}</table>`;
  }).join('');

  return `<div style="font-family:Arial,sans-serif;color:#1A1916;"><p style="font-size:14px;color:#5C5A55;">Submitted ${escapeHtml(submittedAt)}</p>${sections}</div>`;
}

export const ENERGYCITE_REQUIRED_FIELDS: (keyof EnergyCiteFormData)[] = [
  'companyName',
  'incState',
  'ceoName',
  'oneLiner',
  'stage',
  'productDesc',
  'moat',
  'devStage',
  'revenueModel',
  'raiseTarget',
  'offeringType',
  'useProceeds',
  'closeTimeline',
];

export function validateEnergyCiteForm(data: EnergyCiteFormData): string | null {
  for (const key of ENERGYCITE_REQUIRED_FIELDS) {
    const value = data[key];
    if (Array.isArray(value) ? value.length === 0 : !String(value).trim()) {
      return `Missing required field: ${key}`;
    }
  }
  if (data.invType.length === 0) return 'Missing required field: invType';
  if (data.geo.length === 0) return 'Missing required field: geo';
  return null;
}
