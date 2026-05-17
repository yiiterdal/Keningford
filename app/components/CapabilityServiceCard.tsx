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
      className={`group flex h-full flex-col bg-white border border-gray-200 p-8 md:p-10 transition-all duration-200 hover:border-navy hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${className}`}
    >
      <span
        className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-gray-100 text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white"
        aria-hidden
      >
        <CapabilityIcon id={capability.icon} className="h-6 w-6" />
      </span>

      <h3 className="font-serif text-2xl md:text-[1.65rem] font-medium text-navy mb-4 leading-snug">
        {capability.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm md:text-[0.9375rem] mb-8 flex-1">
        {capability.description}
      </p>

      <span className="text-sm font-semibold text-navy group-hover:underline">Learn more →</span>
    </Link>
  );
}
