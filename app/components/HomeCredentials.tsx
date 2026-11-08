import Link from 'next/link';
import { companyRegistry } from '../data/credentials';

export default function HomeCredentials() {
  const { legalName, lei } = companyRegistry;
  const href = lei ? `https://search.gleif.org/#/record/${lei}` : '/credentials';
  const external = Boolean(lei);

  return (
    <section aria-label="Registered legal entity" className="border-y border-navy/[0.08] bg-[#f5f5f5] py-9">
      <div className="container mx-auto px-6 text-center md:px-8">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
          {lei ? 'Verified legal entity' : 'Registered legal entity'}
        </p>
        <Link
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-navy/15 text-navy"
            aria-hidden
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className="w-full text-center sm:w-auto sm:text-left">
            <span className="block font-sans font-medium text-[19px] tracking-[0.02em] text-navy">
              {lei ? `LEI ${lei}` : legalName}
            </span>
            <span className="mt-0.5 block text-[13px] text-gray-500 transition-colors group-hover:text-navy">
              {lei
                ? `${legalName} - view the public record`
                : 'Registered in the State of Delaware - view our company credentials'}
              <span aria-hidden> →</span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
