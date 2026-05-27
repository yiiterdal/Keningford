import { contactEmail } from '../data/contact';

export function buildApplicationEmail(jobTitle: string) {
  const subject = `Application: ${jobTitle}`;
  const body = `Dear Keningford Partners Recruiting Team,

I am writing to express my interest in the ${jobTitle} position.

[Please attach your resume and a brief note on your relevant experience.]

Best regards,`;

  return { to: contactEmail, subject, body };
}

export function mailtoApplicationUrl(jobTitle: string): string {
  const { to, subject, body } = buildApplicationEmail(jobTitle);
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${to}?${params.toString()}`;
}

/** Opens Gmail compose in the browser */
export function gmailApplicationUrl(jobTitle: string): string {
  const { to, subject, body } = buildApplicationEmail(jobTitle);
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Opens Outlook on the web compose window */
export function outlookApplicationUrl(jobTitle: string): string {
  const { to, subject, body } = buildApplicationEmail(jobTitle);
  const params = new URLSearchParams({
    to,
    subject,
    body,
  });
  return `https://outlook.office.com/mail/deeplink/compose?${params.toString()}`;
}
