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
          />

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
