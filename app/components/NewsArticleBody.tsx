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
        <div className="mb-12 bg-[#f0f0f0] p-8 md:p-10">
          <p className="inline-flex items-center gap-2.5 border border-navy/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy md:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#BF9B5F]" aria-hidden />
            {outlineLabel}
          </p>
          <ul className="mt-6 space-y-4">
            {outline.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white text-[12px] font-medium text-navy">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pt-0.5 text-[15px] leading-[1.6] tracking-[-0.01em] text-gray-700">{item}</span>
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
                className="mb-5 mt-14 scroll-mt-28 font-sans text-[1.625rem] font-medium leading-[1.15] tracking-[-0.02em] text-navy first:mt-0 md:text-[2rem]"
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
          <blockquote className="my-12 bg-[#0f141c] p-8 md:p-10">
            <p className="mb-5 font-sans text-xl font-medium leading-[1.35] tracking-[-0.02em] text-white md:text-2xl">
              &ldquo;{article.quote.text}&rdquo;
            </p>
            <cite className="text-sm font-medium not-italic text-[#e8d5a8]">
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

      <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center bg-navy px-6 py-3 text-[13px] font-medium text-white transition hover:bg-navy-dark"
        >
          ← All news
        </Link>
        <Link
          href="/insights"
          className="inline-flex items-center border border-navy/15 px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30"
        >
          Insights hub →
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center border border-navy/15 px-6 py-3 text-[13px] font-medium text-navy transition hover:border-navy/30"
        >
          Contact the team →
        </Link>
      </div>
    </div>
  );
}
