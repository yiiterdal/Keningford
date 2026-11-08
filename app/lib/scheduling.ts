const DEFAULT_CAL_LINK = 'haktan-tuna-yılar-5srfpw/discovery-call';

/** Set NEXT_PUBLIC_SCHEDULING_ENABLED=false to hide the booking embed. Enabled by default. */
export function isSchedulingEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SCHEDULING_ENABLED !== 'false';
}

/** Cal.com link in "username/event-slug" form, override with NEXT_PUBLIC_CAL_LINK in .env.local or Vercel. */
export function getCalLink(): string {
  const configured = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return configured || DEFAULT_CAL_LINK;
}

export function getCalBookingUrl(): string {
  return `https://cal.com/${getCalLink()}`;
}

export const SCHEDULE_HREF = '/contact?tab=consultation#schedule';
