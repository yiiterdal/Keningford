interface ReportDownloadButtonProps {
  pdfUrl: string;
  title: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function ReportDownloadButton({
  pdfUrl,
  title,
  variant = 'primary',
  className = '',
}: ReportDownloadButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2';

  const variantClasses =
    variant === 'primary'
      ? 'border border-navy bg-navy px-5 py-2.5 text-white hover:bg-navy/90'
      : 'border border-gray-300 px-5 py-2.5 text-navy hover:border-navy hover:bg-gray-50';

  return (
    <a
      href={pdfUrl}
      download
      className={`${baseClasses} ${variantClasses} ${className}`}
      aria-label={`Download ${title} PDF`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download PDF
    </a>
  );
}
