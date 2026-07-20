import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import JsonLd from '../../components/JsonLd';
import NewsCardImage, { ARTICLE_SIZES } from '../../components/NewsCardImage';
import NewsMeta from '../../components/NewsMeta';
import { getNewsBySlug, newsItems } from '../../data/news';
import { newsArticleSchema } from '../../lib/json-ld';
import type { Metadata } from 'next';

interface NewsArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsArticlePageProps): Metadata {
  const article = getNewsBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };

  const publishedTime = new Date(article.date).toISOString();

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      publishedTime,
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = getNewsBySlug(params.slug);
  if (!article) notFound();

  const blocks = article.content.split('\n\n').filter(Boolean);

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <JsonLd data={newsArticleSchema(article)} />
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
          />

          <NewsMeta category={article.category} date={article.date} className="mb-6" />

          {article.eyebrow && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#BF9B5F]">
              {article.eyebrow}
            </p>
          )}

          <h1 className="mb-8 text-3xl font-semibold leading-tight text-navy md:text-4xl">
            {article.title}
          </h1>

          <NewsCardImage
            src={article.imageUrl}
            alt={article.imageAlt}
            priority
            sizes={ARTICLE_SIZES}
            aspectClassName="aspect-[21/9]"
            className="mb-8"
            clientLogo={article.clientLogo}
          />

          {article.clientLogo && (
            <div className="mb-10 flex flex-col items-center gap-4 border border-gray-200 bg-gray-50 px-6 py-8 sm:flex-row sm:justify-between sm:px-8">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                <div className="flex h-16 items-center justify-center bg-white px-5 py-3 shadow-sm sm:h-[4.5rem]">
                  <Image
                    src={article.clientLogo.src}
                    alt={article.clientLogo.alt}
                    width={280}
                    height={72}
                    className="max-h-12 max-w-[14rem] w-auto object-contain sm:max-h-14"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Client
                  </p>
                  <p className="mt-1 text-base font-semibold text-navy">
                    {article.clientLogo.alt.replace(/ logo$/i, '')}
                  </p>
                </div>
              </div>
              {article.clientWebsite && (
                <a
                  href={article.clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy-dark"
                >
                  Visit website →
                </a>
              )}
            </div>
          )}

          {article.highlights && article.highlights.length > 0 && (
            <div className="mb-10 border border-gray-200 border-t-2 border-t-[#BF9B5F] bg-gray-50 p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
                At a Glance
              </p>
              <ul className="mt-5 space-y-4">
                {article.highlights.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="shrink-0 font-serif text-sm leading-[1.7] text-[#BF9B5F]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] leading-[1.7] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose max-w-none">
            {blocks.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="mb-4 mt-10 text-2xl font-semibold text-navy first:mt-0"
                  >
                    {block.slice(3)}
                  </h2>
                );
              }

              if (block.includes('energycite.com') && article.clientWebsite) {
                const parts = block.split(/(energycite\.com)/i);
                return (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                    {parts.map((part, i) =>
                      part.toLowerCase() === 'energycite.com' ? (
                        <a
                          key={i}
                          href={article.clientWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-navy underline-offset-2 hover:underline"
                        >
                          {part}
                        </a>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )}
                  </p>
                );
              }

              return (
                <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                  {block}
                </p>
              );
            })}

            {article.quote && (
              <blockquote className="my-8 border-l-[3px] border-[#BF9B5F] pl-5">
                <p className="mb-2.5 text-lg italic leading-relaxed text-navy">
                  &ldquo;{article.quote.text}&rdquo;
                </p>
                <cite className="text-sm font-semibold not-italic text-[#BF9B5F]">
                  {article.quote.attribution}
                </cite>
              </blockquote>
            )}

            {article.closingNote && (
              <p className="border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-600">
                {article.closingNote}
              </p>
            )}
          </div>

          <Link href="/news" className="mt-8 inline-block text-sm font-medium text-navy hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
    </section>
  );
}
