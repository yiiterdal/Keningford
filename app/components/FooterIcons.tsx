import type { ReactElement } from 'react';

interface IconProps {
  className?: string;
}

export function FooterMailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 5 8-5M4 7v10h16V7" />
    </svg>
  );
}

export function FooterPhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4h2l1.2 4.8a1 1 0 00.58.65l3.62 1.45a1 1 0 00.95-.12l3.2-2.13a11.5 11.5 0 003.9 3.9l-2.13 3.2a1 1 0 00-.12.95l1.45 3.62a1 1 0 00.65.58L20 17.5v2a1.5 1.5 0 01-1.55 1.5 17 17 0 01-13.95-13.95A1.5 1.5 0 016.5 4z"
      />
    </svg>
  );
}

export function FooterMapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6-5.33 6-10a6 6 0 10-12 0c0 4.67 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.25" />
    </svg>
  );
}

export function FooterLinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.144 1.144 0 01-2.063-2.065 2.065 2.065 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function FooterPitchBookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
    </svg>
  );
}

export function FooterCrunchbaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.8V7.2h2.4v9.6h-2.4zm5.4 0c-1.32 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4 2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4z" />
    </svg>
  );
}

type ProfileIconId = 'linkedin' | 'pitchbook' | 'crunchbase';

const profileIconMap: Record<ProfileIconId, (props: IconProps) => ReactElement> = {
  linkedin: FooterLinkedInIcon,
  pitchbook: FooterPitchBookIcon,
  crunchbase: FooterCrunchbaseIcon,
};

export function FooterProfileIcon({ id, className }: { id: ProfileIconId; className?: string }) {
  const Icon = profileIconMap[id];
  return <Icon className={className} />;
}
