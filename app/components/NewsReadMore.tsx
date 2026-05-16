export default function NewsReadMore() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 decoration-navy/25 group-hover:underline">
      Read more
      <svg
        className="w-3.5 h-3.5 text-navy/70 group-hover:text-navy transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}
