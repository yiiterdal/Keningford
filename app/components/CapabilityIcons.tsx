import type { ReactElement } from 'react';
import type { CapabilityIconId } from '../data/capabilities';

interface IconProps {
  className?: string;
}

function MaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V8m0 8-3-3m3 3 3-3M17 8v8m0-8 3 3m-3-3-3 3" />
    </svg>
  );
}

function CapitalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18V6m0 12h16M8 14l3-3 3 3 4-5" />
    </svg>
  );
}

function StrategicIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m6 0 5.447 2.724A2 2 0 0121 6.618v8.764a2 2 0 01-1.553 1.894L15 20m-6 0h6m-6 0v-18m6 18V2"
      />
    </svg>
  );
}

function ValuationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M7 8h10M5 8l2 11h10l2-11M12 8v11" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    </svg>
  );
}

function RestructuringIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 0113.66-5.66M20 12a8 8 0 01-13.66 5.66M4 4v4h4M20 20v-4h-4"
      />
    </svg>
  );
}

const iconMap: Record<CapabilityIconId, (props: IconProps) => ReactElement> = {
  ma: MaIcon,
  capital: CapitalIcon,
  strategic: StrategicIcon,
  valuation: ValuationIcon,
  restructuring: RestructuringIcon,
};

export function CapabilityIcon({ id, className }: { id: CapabilityIconId; className?: string }) {
  const Icon = iconMap[id];
  return <Icon className={className} />;
}
