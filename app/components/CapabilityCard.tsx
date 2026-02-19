import Link from 'next/link';

interface CapabilityCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CapabilityCard({ title, description, href }: CapabilityCardProps) {
  return (
    <Link
      href={href}
      className="group block pb-8 hover:pb-6 transition-all duration-200"
    >
      <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-navy-dark transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-sm text-navy font-medium group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}












