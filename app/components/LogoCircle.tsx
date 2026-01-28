// app/components/LogoCircle.tsx
import Logo from './Logo';

interface LogoCircleProps {
  className?: string;
}

/**
 * Circular container for the KK logo.
 * - Perfect circle via rounded-full
 * - Background color matches brand dark navy
 * - Flexbox centers the logo vertically & horizontally
 * - Overflow hidden to keep logo inside the circle
 */
export default function LogoCircle({ className = '' }: LogoCircleProps) {
  return (
    <div
      className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0b1b33] flex items-center justify-center overflow-hidden shadow-lg ${className}`}
    >
      <Logo className="w-16 h-16 md:w-24 md:h-24 object-contain" />
    </div>
  );
}

