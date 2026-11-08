import Link from 'next/link';
import type { NewsItem } from '../data/news';
import { extractArticleHeadings } from '../lib/news-content';
import { IMAGE_SIZES } from '../lib/image-utils';
import NewsCardImage from './NewsCardImage';
import NewsMeta from './NewsMeta';
import NewsReadMore from './NewsReadMore';

interface NewsListingProps {
  items: NewsItem[];
  showFeatured?: boolean;
}

function TopicPills({ item }: { item: NewsItem }) {
  const topics = item.highlights?.slice(0, 3) ?? extractArticleHeadings(item.content).slice(0, 3);
  if (topics.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {topics.map((topic) => (
        <li
          key={topic}
          className="bg-[#f0f0f0] px-3 py-1 text-[12px] font-medium text-gray-600"
        >
          {topic.length > 48 ? `${topic.slice(0, 46)}…` : topic}
        </li>
      ))}
    </ul>
  );
}

export default function NewsListing({ items, showFeatured = true }: NewsListingProps) {
  if (items.length === 0) return null;

  const featured = showFeatured ? items[0] : undefined;
  const secondary = showFeatured ? items.slice(1) : items;

  return (
    <div className="space-y-12 md:space-y-16">
      {featured && (
        <Link
          href={`/news/${featured.slug}`}
          className="group grid grid-cols-1 gap-8 border-b border-gray-200 pb-12 md:grid-cols-12 md:gap-10 md:pb-16"
        >
          <div className="md:col-span-7">
            <NewsCardImage
              src={featured.imageUrl}
              alt={featured.imageAlt}
              sizes={IMAGE_SIZES.newsList}
              aspectClassName="aspect-[16/10] md:aspect-[21/12]"
              clientLogo={featured.clientLogo}
              priority
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            {featured.eyebrow && (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#BF9B5F]">
                {featured.eyebrow}
              </p>
            )}
            <NewsMeta category={featured.category} date={featured.date} className="mb-3" />
            <h2 className="font-sans text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-navy group-hover:underline md:text-[2.25rem] lg:text-[2.5rem]">
              {featured.title}
            </h2>
            <p className="mt-5 text-base leading-[1.5] tracking-[-0.01em] text-gray-500">{featured.excerpt}</p>
            <TopicPills item={featured} />
            <div className="mt-6">
              <NewsReadMore />
            </div>
          </div>
        </Link>
      )}

      {secondary.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {secondary.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex h-full flex-col border-b border-gray-200 pb-8"
            >
              <NewsCardImage
                src={item.imageUrl}
                alt={item.imageAlt}
                sizes={IMAGE_SIZES.newsCard}
                aspectClassName="aspect-[16/10]"
                clientLogo={item.clientLogo}
              />
              <div className="flex flex-1 flex-col pt-5">
                {item.eyebrow && (
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#BF9B5F]">
                    {item.eyebrow}
                  </p>
                )}
                <NewsMeta category={item.category} date={item.date} className="mb-2" />
                <h3 className="font-sans text-lg font-medium leading-[1.3] tracking-[-0.01em] text-navy group-hover:underline md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.5] tracking-[-0.02em] text-gray-500 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-4">
                  <NewsReadMore />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
