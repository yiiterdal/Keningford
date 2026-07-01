const DEFAULT_CALENDLY_URL = 'https://calendly.com/tuna-keningfordpartners/30min';

/** Set NEXT_PUBLIC_CALENDLY_ENABLED=true to show the embed. Disabled by default. */
export function isCalendlyEnabled(): boolean {
  return process.env.NEXT_PUBLIC_CALENDLY_ENABLED === 'true';
}

/** Calendly scheduling page URL — override with NEXT_PUBLIC_CALENDLY_URL in .env.local or Vercel. */
export function getCalendlyUrl(): string {
  const configured = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return configured || DEFAULT_CALENDLY_URL;
}

export function isCalendlyConfigured(): boolean {
  if (!isCalendlyEnabled()) return false;
  const url = getCalendlyUrl();
  return url.startsWith('https://calendly.com/');
}
