import { contactEmail } from '../data/contact';
import {
  formatEnergyCiteSubmissionHtml,
  formatEnergyCiteSubmissionText,
  type EnergyCiteFormData,
} from './energycite-onboarding';

function parseResendError(body: string): string {
  try {
    const parsed = JSON.parse(body) as { message?: string; error?: string };
    return parsed.message || parsed.error || body;
  } catch {
    return body;
  }
}

export async function sendEnergyCiteSubmission(
  data: EnergyCiteFormData,
  submittedAt: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Email service is not configured. Please contact Keningford Partners.');
  }

  const to = process.env.ENERGYCITE_FORM_TO || contactEmail;
  const from =
    process.env.ENERGYCITE_FORM_FROM || 'Keningford Partners <onboarding@resend.dev>';
  const subject = `EnergyCite Onboarding: ${data.companyName.trim() || 'New submission'}`;

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
    const message = parseResendError(errorBody);

    if (response.status === 403 && from.includes('resend.dev')) {
      throw new Error(
        'Email could not be sent: Resend test mode only delivers to your Resend account email. Verify keningfordpartners.com in Resend and set ENERGYCITE_FORM_FROM, or set ENERGYCITE_FORM_TO to your Resend signup email for testing.',
      );
    }

    throw new Error(message || 'Failed to send submission email');
  }
}
