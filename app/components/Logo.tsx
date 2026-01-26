// app/components/Logo.tsx
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-4 md:p-6 shadow-2xl ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Keningford Logo"
      >
        <defs>
          {/* Enhanced gold gradient with more depth */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="25%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#9A7209" />
          </linearGradient>
          {/* Inner highlight gradient */}
          <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.2" />
          </linearGradient>
          {/* Enhanced shadow for depth */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
            <feOffset dx="1.5" dy="1.5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      
      {/* Left vertical bar of K - with enhanced styling */}
      <path
        d="M 20 20 L 20 100"
        stroke="url(#goldGradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Top diagonal of K */}
      <path
        d="M 20 50 L 70 20"
        stroke="url(#goldGradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Bottom diagonal of K */}
      <path
        d="M 20 50 L 70 100"
        stroke="url(#goldGradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Subtle inner highlight for 3D effect */}
      <path
        d="M 20 20 L 20 100"
        stroke="url(#goldHighlight)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 20 50 L 70 20"
        stroke="url(#goldHighlight)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 20 50 L 70 100"
        stroke="url(#goldHighlight)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      </svg>
    </div>
  );
}
