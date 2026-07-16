import { NextResponse } from 'next/server';
import { contactEmail } from '../../data/contact';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      company?: string;
      resourceSlug?: string;
      resourceTitle?: string;
      honeypot?: string;
    };

    if (body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const email = body.email?.trim();
    const resourceSlug = body.resourceSlug?.trim();
    const resourceTitle = body.resourceTitle?.trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!resourceSlug || !resourceTitle) {
      return NextResponse.json({ error: 'Missing resource information.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      const from =
        process.env.RESOURCES_FROM_EMAIL?.trim() ||
        process.env.CAREERS_FROM_EMAIL?.trim() ||
        'Keningford Partners <onboarding@resend.dev>';

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [contactEmail],
          subject: `Resource download: ${resourceTitle}`,
          text: [
            `Resource: ${resourceTitle}`,
            `Slug: ${resourceSlug}`,
            `Email: ${email}`,
            body.company ? `Company: ${body.company}` : null,
            `Submitted: ${new Date().toISOString()}`,
          ]
            .filter(Boolean)
            .join('\n'),
        }),
      });
    } else {
      console.info('Resource lead captured:', {
        email,
        company: body.company,
        resourceSlug,
        resourceTitle,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resource lead submission failed:', error);
    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}
