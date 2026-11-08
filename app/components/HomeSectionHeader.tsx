interface HomeSectionHeaderProps {
  pill: string;
  title: string;
  description?: string;
  align?: 'split' | 'center';
  tone?: 'light' | 'dark';
}

const TITLE_CLASS =
  'font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] md:text-[2.5rem] lg:text-[3rem]';

export default function HomeSectionHeader({
  pill,
  title,
  description,
  align = 'split',
  tone = 'light',
}: HomeSectionHeaderProps) {
  const dark = tone === 'dark';
  const pillTone = dark
    ? 'border-white/10 bg-white/[0.06] text-white'
    : `border-navy/10 text-navy ${align === 'center' ? 'bg-white' : 'bg-[#eef1f5]'}`;
  const dotTone = dark ? 'bg-[#e8d5a8]' : 'bg-[#BF9B5F]';
  const titleTone = dark ? 'text-white' : 'text-navy';
  const descriptionTone = dark ? 'text-white/60' : 'text-gray-500';

  const pillNode = (
    <p
      className={`mb-6 inline-flex items-center gap-2.5 border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] md:text-[11px] ${pillTone}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 ${dotTone}`} aria-hidden />
      {pill}
    </p>
  );

  if (align === 'center') {
    return (
      <div className="mb-14 text-center md:mb-16">
        {pillNode}
        <h2 className={`mx-auto max-w-[700px] ${TITLE_CLASS} ${titleTone}`}>{title}</h2>
        {description && (
          <p className={`mx-auto mt-5 max-w-[600px] text-base leading-[1.4] tracking-[-0.01em] ${descriptionTone}`}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-12">
      <div className="lg:col-span-7">
        {pillNode}
        <h2 className={`max-w-[550px] ${TITLE_CLASS} ${titleTone}`}>{title}</h2>
      </div>
      {description && (
        <p
          className={`max-w-[350px] text-base leading-[1.4] tracking-[-0.01em] lg:col-span-5 lg:justify-self-end ${descriptionTone}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
