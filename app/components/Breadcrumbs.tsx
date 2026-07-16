import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Use "dark" on navy/dark hero bands. */
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className={`flex items-center gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className={isDark ? 'text-white/35' : 'text-gray-400'}>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-navy'}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={isDark ? 'text-white/90' : 'text-gray-900'}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}












