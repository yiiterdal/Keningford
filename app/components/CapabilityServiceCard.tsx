import Link from 'next/link';
import type { CapabilityItem } from '../data/capabilities';
import { CapabilityIcon } from './CapabilityIcons';

interface CapabilityServiceCardProps {
  capability: CapabilityItem;
  className?: string;
}

export default function CapabilityServiceCard({ capability, className = '' }: CapabilityServiceCardProps) {
  return (
    <Link
      href={capability.href}
      className={`group flex h-full flex-col bg-white p-8 transition-shadow duration-150 hover:shadow-[0_1px_0_rgba(11,20,38,0.06),0_8px_24px_-16px_rgba(11,20,38,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:p-9 ${className}`}
    >
      <span
        className="mb-8 inline-flex h-10 w-10 items-center justify-center bg-[#f0f0f0] text-navy"
        aria-hidden
      >
        <CapabilityIcon id={capability.icon} className="h-5 w-5" />
      </span>

      <h3 className="mb-3 font-sans text-xl font-medium leading-[1.18] text-navy md:text-[22px]">
        {capability.title}
      </h3>

      <p className="text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{capability.description}</p>
    </Link>
  );
}
