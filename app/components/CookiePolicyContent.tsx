import {
  cookiePolicyIntro,
  cookiePolicySections,
  cookiePolicyTitle,
  type PolicySection,
} from '../data/cookie-policy';

function renderParagraphs(paragraphs: string[] | undefined, keyPrefix: string) {
  if (!paragraphs?.length) return null;
  return paragraphs.map((text, index) => (
    <p
      key={`${keyPrefix}-p-${index}`}
      className="text-sm text-gray-600 leading-relaxed mb-4 last:mb-0"
    >
      {text}
    </p>
  ));
}

function renderBullets(bullets: string[] | undefined, keyPrefix: string) {
  if (!bullets?.length) return null;
  return (
    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-4 last:mb-0">
      {bullets.map((item, index) => {
        const urlMatch = item.match(/(https?:\/\/\S+)/);
        if (urlMatch) {
          const label = item.replace(/:\s*https?:\/\/\S+/, '').trim();
          return (
            <li key={`${keyPrefix}-b-${index}`}>
              {label}:{' '}
              <a
                href={urlMatch[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline break-all hover:text-navy/80"
              >
                {urlMatch[1]}
              </a>
            </li>
          );
        }
        return <li key={`${keyPrefix}-b-${index}`}>{item}</li>;
      })}
    </ul>
  );
}

function renderSection(section: PolicySection) {
  return (
    <article key={section.id} id={section.id} className="scroll-mt-32">
      <h3 className="text-base font-semibold text-navy mb-3">{section.title}</h3>
      {renderParagraphs(section.paragraphs, section.id)}
      {renderBullets(section.bullets, section.id)}
      {section.subsections?.map((sub, subIndex) => (
        <div key={`${section.id}-sub-${subIndex}`} className="mb-6 last:mb-0">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">{sub.title}</h4>
          {renderParagraphs(sub.paragraphs, `${section.id}-sub-${subIndex}`)}
          {renderBullets(sub.bullets, `${section.id}-sub-${subIndex}`)}
        </div>
      ))}
    </article>
  );
}

interface CookiePolicyContentProps {
  showTitle?: boolean;
  className?: string;
}

export default function CookiePolicyContent({
  showTitle = true,
  className = '',
}: CookiePolicyContentProps) {
  return (
    <div className={className}>
      {showTitle && (
        <h2
          id="privacy-policy-heading"
          className="text-2xl md:text-3xl font-semibold text-navy mb-4 leading-tight"
        >
          {cookiePolicyTitle}
        </h2>
      )}
      <p className="text-sm text-gray-600 leading-relaxed mb-8">{cookiePolicyIntro}</p>
      <div className="space-y-10">{cookiePolicySections.map(renderSection)}</div>
    </div>
  );
}
