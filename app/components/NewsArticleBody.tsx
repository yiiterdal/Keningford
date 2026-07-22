import Link from 'next/link';
import type { NewsItem } from '../data/news';
import { extractArticleHeadings, parseArticleBlocks } from '../lib/news-content';
import { ArticleBarChart, ArticleStatsStrip } from './ArticleVisuals';

interface NewsArticleBodyProps {
  article: NewsItem;
}

export default function NewsArticleBody({ article }: NewsArticleBodyProps) {
  const headings = extractArticleHeadings(article.content);
  const outline = article.highlights?.length ? article.highlights : headings;
  const outlineLabel = article.highlights?.length ? 'At a Glance' : 'In This Note';
  const blocks = parseArticleBlocks(article.content);

  return (
    <div>
      {article.stats && article.stats.length > 0 && <ArticleStatsStrip stats={article.stats} />}

      {outline.length > 0 && (
        <div className="mb-10 border border-gray-200 border-t-2 border-t-[#BF9B5F] bg-gray-50 p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BF9B5F]">
            {outlineLabel}
          </p>
          <ul className="mt-5 space-y-3">
            {outline.map((item, index) => (
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

      {article.chart && <ArticleBarChart chart={article.chart} />}

      <div className="max-w-none">
        {blocks.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2
                key={`${block.id}-${index}`}
                id={block.id}
                className="mb-4 mt-12 scroll-mt-28 border-t border-gray-100 pt-10 text-2xl font-semibold text-navy first:mt-0 first:border-t-0 first:pt-0"
              >
                {block.text}
              </h2>
            );
          }

          if (block.text.includes('energycite.com') && article.clientWebsite) {
            const parts = block.text.split(/(energycite\.com)/i);
            return (
              <p key={index} className="mb-6 text-lg leading-[1.85] text-gray-700">
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
            <p
              key={index}
              className={
                index === 0
                  ? 'mb-6 text-xl leading-[1.75] text-gray-800'
                  : 'mb-6 text-lg leading-[1.85] text-gray-700'
              }
            >
              {block.text}
            </p>
          );
        })}

        {article.quote && (
          <blockquote className="my-10 border-l-[3px] border-[#BF9B5F] bg-gray-50 py-5 pl-5 pr-5 md:pl-6">
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

      <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-8">
        <Link href="/news" className="text-sm font-medium text-navy hover:underline">
          ← All news
        </Link>
        <Link href="/insights" className="text-sm font-medium text-gray-500 hover:text-navy hover:underline">
          Insights hub →
        </Link>
        <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-navy hover:underline">
          Contact the team →
        </Link>
      </div>
    </div>
  );
}
