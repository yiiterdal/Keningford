import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import JsonLd from '../../components/JsonLd';
import NewsArticleBody from '../../components/NewsArticleBody';
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

  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <JsonLd data={newsArticleSchema(article)} />
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-4xl">
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

          <h1 className="mb-6 font-serif text-3xl leading-tight text-navy md:mb-8 md:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">{article.excerpt}</p>

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
                  className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-navy-dark"
                >
                  Visit website →
                </a>
              )}
            </div>
          )}

          <NewsArticleBody article={article} />
        </div>
      </div>
    </section>
  );
}
