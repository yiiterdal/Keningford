export function estimateReadMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.ceil(words / 130));
}

export function formatInsightDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date.toUpperCase();
  return parsed
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase();
}

export function extractArticleHeadings(content: string): string[] {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3).trim())
    .filter(Boolean);
}

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export type ContentBlock =
  | { type: 'heading'; text: string; id: string }
  | { type: 'paragraph'; text: string };

export function parseArticleBlocks(content: string): ContentBlock[] {
  return content
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('## ')) {
        const text = block.slice(3).trim();
        return { type: 'heading' as const, text, id: slugifyHeading(text) };
      }
      return { type: 'paragraph' as const, text: block };
    });
}
