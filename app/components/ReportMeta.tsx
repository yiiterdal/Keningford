interface ReportMetaProps {
  type: string;
  sector: string;
  date: string;
  pages: number;
  className?: string;
}

export default function ReportMeta({
  type,
  sector,
  date,
  pages,
  className = '',
}: ReportMetaProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-gray-500 ${className}`}
    >
      <span>{type}</span>
      <span aria-hidden="true">·</span>
      <span>{sector}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={date}>{date}</time>
      <span aria-hidden="true">·</span>
      <span>{pages} pages</span>
    </div>
  );
}
