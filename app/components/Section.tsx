// app/components/Section.tsx
import type { ReactNode } from 'react';

export default function Section({ title, children, className = '' }: { title?: string; children?: ReactNode; className?: string }) {
  return (
    <section className={`section ${className}`}>
      {title && <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{title}</h2>}
      <div className="text-base text-gh-800">{children}</div>
    </section>
  );
}
