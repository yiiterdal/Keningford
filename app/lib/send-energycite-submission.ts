import { contactEmail } from '../data/contact';
import {
  formatEnergyCiteSubmissionHtml,
  formatEnergyCiteSubmissionText,
  type EnergyCiteFormData,
} from './energycite-onboarding';

export async function sendEnergyCiteSubmission(
  data: EnergyCiteFormData,
  submittedAt: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const to = process.env.ENERGYCITE_FORM_TO || contactEmail;
  const from =
    process.env.ENERGYCITE_FORM_FROM || 'Keningford Partners <onboarding@resend.dev>';
  const subject = `EnergyCite Onboarding — ${data.companyName}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text: formatEnergyCiteSubmissionText(data, submittedAt),
      html: formatEnergyCiteSubmissionHtml(data, submittedAt),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || 'Failed to send submission email');
  }
}
