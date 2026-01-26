// app/components/CTAButton.tsx
'use client';
import Link from 'next/link';

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'navy' | 'white';
  onClick?: () => void;
}

export default function CTAButton({ href = '#contact', children, variant = 'navy', onClick }: CTAButtonProps) {
  const baseClasses = "inline-block px-8 py-3 text-sm font-medium tracking-wide";
  
  const variantClasses = variant === 'white' 
    ? "bg-white text-navy hover:bg-gray-100" 
    : "bg-navy text-white hover:bg-navy-dark";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
