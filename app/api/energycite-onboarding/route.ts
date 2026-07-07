import { NextResponse } from 'next/server';
import {
  type EnergyCiteFormData,
  validateEnergyCiteForm,
} from '../../lib/energycite-onboarding';
import { sendEnergyCiteSubmission } from '../../lib/send-energycite-submission';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      data?: EnergyCiteFormData;
      honeypot?: string;
      submittedAt?: string;
    };

    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!body.data) {
      return NextResponse.json({ error: 'Missing form data' }, { status: 400 });
    }

    const validationError = validateEnergyCiteForm(body.data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const submittedAt = body.submittedAt || new Date().toISOString();
    await sendEnergyCiteSubmission(body.data, submittedAt);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('EnergyCite onboarding submission failed:', error);
    return NextResponse.json(
      { error: 'Unable to submit the form. Please try again or contact Keningford Partners directly.' },
      { status: 500 },
    );
  }
}
