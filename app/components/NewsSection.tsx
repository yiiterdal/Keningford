import Image from 'next/image';
import Link from 'next/link';
import { getLatestNews } from '../data/news';
import { IMAGE_SIZES } from '../lib/image-utils';
import { estimateReadMinutes, formatInsightDate } from '../lib/news-content';

const HOMEPAGE_IMAGES: Record<string, { src: string; alt: string; position: string }> = {
  'vertical-ai-capital-trajectory-h2-2026': {
    src: '/images/home/news-meeting.jpg',
    alt: 'Two executives in discussion at a table overlooking the city',
    position: 'center',
  },
  'healthcare-ai-equity-what-round-data-shows': {
    src: '/images/home/news-coffee.jpg',
    alt: 'Hands holding a cup of coffee during a working conversation',
    position: 'center 62%',
  },
  'family-office-allocation-shift-h2-2026': {
    src: '/images/home/news-towers.jpg',
    alt: 'Glass office towers against an overcast sky',
    position: 'center 40%',
  },
};

export default function NewsSection() {
  const homepageHiddenSlugs = new Set([
    'keningford-advises-energycite-capital-raise',
    'keningford-advises-ecopha-biotech-capital-raise',
  ]);
  const latestNews = getLatestNews(6)
    .filter((item) => !homepageHiddenSlugs.has(item.slug))
    .slice(0, 3);

  if (latestNews.length === 0) return null;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-6 inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            Insights
          </p>
          <h2 className="mx-auto max-w-[700px] font-sans text-[2rem] font-medium leading-[1.083] tracking-[-0.0225em] text-navy md:text-[2.5rem] lg:text-[3rem]">
            Perspectives on markets and transactions.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {latestNews.map((item) => {
            const image = HOMEPAGE_IMAGES[item.slug] ?? { src: item.imageUrl, alt: item.imageAlt, position: 'center' };
            const minutes = estimateReadMinutes(item.content);
            return (
              <article key={item.slug}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex h-full flex-col border-b border-gray-200 pb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-4"
                >
                  <div className="relative mb-5 aspect-[16/9] overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={IMAGE_SIZES.newsCard}
                      quality={100}
                      style={{ objectPosition: image.position }}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-medium leading-[1.3] tracking-[-0.01em] text-navy md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-auto flex items-center pt-8 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
                    {formatInsightDate(item.date)}
                    <span className="mx-3 h-px w-4 bg-gray-300" aria-hidden />
                    {minutes} MIN READ
                  </p>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/news" className="text-sm font-medium text-navy hover:underline">
            View all insights
          </Link>
        </div>
      </div>
    </section>
  );
}
