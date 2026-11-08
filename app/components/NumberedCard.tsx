export default function NumberedCard({
  index,
  title,
  body,
  tone = 'white',
}: {
  index: number;
  title: string;
  body: string;
  tone?: 'white' | 'gray';
}) {
  const card = tone === 'white' ? 'bg-white' : 'bg-[#f0f0f0]';
  const badge = tone === 'white' ? 'bg-[#f0f0f0]' : 'bg-white';
  return (
    <article className={`flex h-full flex-col p-8 ${card}`}>
      <span className={`flex h-10 w-10 items-center justify-center text-[13px] font-medium text-navy ${badge}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-10 font-sans text-xl font-medium leading-[1.18] tracking-[-0.01em] text-navy md:text-[22px]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500">{body}</p>
    </article>
  );
}
