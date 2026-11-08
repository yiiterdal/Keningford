import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import HomeCta from '../../components/HomeCta';
import JsonLd from '../../components/JsonLd';
import NewsArticleBody from '../../components/NewsArticleBody';
import NewsCardImage, { ARTICLE_SIZES } from '../../components/NewsCardImage';
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
    <>
    <section className="bg-white pb-24 pt-32 md:pb-32 md:pt-40">
      <JsonLd data={newsArticleSchema(article)} />
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
          />

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2.5 border border-navy/10 bg-[#eef1f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
              {article.eyebrow ?? article.category}
            </span>
            <span className="text-[13px] font-medium text-gray-500">
              {article.eyebrow ? `${article.category} · ` : ''}
              <time dateTime={article.date}>{article.date}</time>
            </span>
          </div>

          <h1 className="font-sans text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-navy md:text-[3rem] lg:text-[3.5rem]">
            {article.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-[1.5] tracking-[-0.01em] text-gray-500">{article.excerpt}</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl md:mt-16">
          <NewsCardImage
            src={article.imageUrl}
            alt={article.imageAlt}
            priority
            sizes={ARTICLE_SIZES}
            aspectClassName="aspect-[16/9] md:aspect-[21/9]"
            clientLogo={article.clientLogo}
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          {article.clientLogo && (
            <div className="mb-10 flex flex-col items-center gap-4 bg-[#f0f0f0] px-6 py-8 sm:flex-row sm:justify-between sm:px-8">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                <div className="flex h-16 items-center justify-center bg-white px-5 py-3 sm:h-[4.5rem]">
                  <Image
                    quality={100}
                    src={article.clientLogo.src}
                    alt={article.clientLogo.alt}
                    width={280}
                    height={72}
                    className="max-h-12 max-w-[14rem] w-auto object-contain sm:max-h-14"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    Client
                  </p>
                  <p className="mt-1 text-lg font-medium tracking-[-0.01em] text-navy">
                    {article.clientLogo.alt.replace(/ logo$/i, '')}
                  </p>
                </div>
              </div>
              {article.clientWebsite && (
                <a
                  href={article.clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[13px] font-medium text-white hover:bg-navy-dark"
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
    <HomeCta />
    </>
  );
}
