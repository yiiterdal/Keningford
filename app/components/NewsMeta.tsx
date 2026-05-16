interface NewsMetaProps {
  category: string;
  date: string;
  className?: string;
}

export default function NewsMeta({ category, date, className = '' }: NewsMetaProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-gray-500 ${className}`}
    >
      <span>{category}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={date}>{date}</time>
    </div>
  );
}
