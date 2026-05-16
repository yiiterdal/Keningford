import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import NewsCardImage, { ARTICLE_SIZES } from '../../components/NewsCardImage';
import NewsMeta from '../../components/NewsMeta';
import { getNewsBySlug, newsItems } from '../../data/news';

interface NewsArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsArticlePageProps) {
  const article = getNewsBySlug(params.slug);
  if (!article) return { title: 'Article Not Found | Keningford Partners' };

  return {
    title: `${article.title} | Keningford Partners`,
    description: article.excerpt,
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = getNewsBySlug(params.slug);
  if (!article) notFound();

  const paragraphs = article.content.split('\n\n').filter(Boolean);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
          />

          <NewsMeta category={article.category} date={article.date} className="mb-6" />

          <h1 className="text-3xl md:text-4xl font-semibold text-navy mb-8 leading-tight">
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
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <Link href="/news" className="inline-block mt-8 text-sm font-medium text-navy hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
    </section>
  );
}
