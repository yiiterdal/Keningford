import type { ReactElement } from 'react';
import type { GuideIconId } from '../data/investor-guides';

interface IconProps {
  className?: string;
}

function BuildingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 21V7l8-4 8 4v14M4 21h16M9 21v-6h6v6M9 11h.01M9 15h.01M15 11h.01M15 15h.01"
      />
    </svg>
  );
}

function HandshakeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12l4-4 4 3 3-3 2 2 3-3 4 4M2 12l4 4M22 12l-4 4M6 16l3 3 3-2 3 2 3-3"
      />
    </svg>
  );
}

function BalanceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18M12 7l-7 2 3 6a4 4 0 0 0 8 0l3-6-7-2zM5 21h14"
      />
    </svg>
  );
}

function SearchDocIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3h9a1 1 0 0 1 1 1v13.5M9 3 4 8v12a1 1 0 0 0 1 1h9M9 3v5H4M9 11h5m-5 4h3M15 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm3.5 1.5L20 20"
      />
    </svg>
  );
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-5-5zM13 3v5h5M9 13h6M9 17h6"
      />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM8 12h2m4 0h2M8 16h2m4 0h2"
      />
    </svg>
  );
}

const iconMap: Record<GuideIconId, (props: IconProps) => ReactElement> = {
  building: BuildingIcon,
  handshake: HandshakeIcon,
  balance: BalanceIcon,
  search: SearchDocIcon,
  document: DocumentIcon,
  calendar: CalendarIcon,
};

export function GuideIcon({ id, className }: { id: GuideIconId; className?: string }) {
  const Icon = iconMap[id];
  return <Icon className={className} />;
}
