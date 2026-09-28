import Image from 'next/image';
import type { CareerPartner } from '../data/careers';
import { IMAGE_QUALITY } from '../lib/image-utils';

interface TeamGridProps {
  members: CareerPartner[];
}

const cardClassName =
  'flex h-full min-h-[26rem] w-full flex-col items-center border border-gray-200 bg-white px-6 py-8 rounded-sm';

function TeamCard({ member }: { member: CareerPartner }) {
  return (
    <article className={cardClassName}>
      {member.imageUrl ? (
        <div className="relative mx-auto mb-5 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            sizes="80px"
            quality={IMAGE_QUALITY}
            className={`object-cover grayscale ${member.imageObjectPosition ?? 'object-center'}`}
          />
        </div>
      ) : (
        <div
          className="mx-auto mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1E293B] text-xl font-semibold text-white"
          aria-hidden
        >
          {member.name.charAt(0)}
        </div>
      )}
      <h3 className="w-full text-center text-base font-semibold leading-snug text-navy">{member.name}</h3>
      <p className="mb-5 mt-1.5 min-h-[2.5rem] w-full text-center text-xs font-medium uppercase tracking-wide leading-snug text-gray-500">
        {member.title}
      </p>
      <p className="w-full text-center text-sm leading-relaxed text-pretty text-gray-600">{member.bio}</p>
    </article>
  );
}

export default function TeamGrid({ members }: TeamGridProps) {
  const topRow = members.slice(0, 4);
  const bottomRow = members.slice(4);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
        {topRow.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
      {bottomRow.length > 0 && (
        <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:w-[calc(75%-0.5rem)]">
          {bottomRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
