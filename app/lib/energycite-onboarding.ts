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
  companyName: '',
  incState: '',
  founded: '',
  hq: '',
  ceoName: '',
  oneLiner: '',
  website: '',
  stage: '',
  productName: '',
  productDesc: '',
  moat: '',
  devStage: '',
  partnerships: '',
  competitors: '',
  tam: '',
  sam: '',
  revenueModel: '',
  unitPrice: '',
  projRevenue: '',
  launchDate: '',
  profitability: '',
  channel: '',
  totalRaised: '',
  raiseTarget: '',
  offeringType: '',
  priceA: '',
  priceB: '',
  useProceeds: '',
  priorInvestors: '',
  minInvest: '',
  invType: [],
  geo: [],
  checkSize: '',
  numInvestors: '',
  strategicValue: '',
  excludeInvestors: '',
  closeTimeline: '',
  team: '',
  exit: '',
  exitTimeline: '',
  exitDetails: '',
  additionalNotes: '',
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

export function validateEnergyCiteForm(_data: EnergyCiteFormData): string | null {
  return null;
}
