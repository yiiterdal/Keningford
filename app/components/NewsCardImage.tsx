import Image from 'next/image';
import { IMAGE_BLUR_DATA_URL, IMAGE_QUALITY, IMAGE_SIZES, isFullBleedImage } from '../lib/image-utils';

interface NewsCardImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
  clientLogo?: {
    src: string;
    alt: string;
  };
}

const DEFAULT_SIZES = IMAGE_SIZES.newsCard;
const ARTICLE_SIZES = IMAGE_SIZES.newsArticle;

export default function NewsCardImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = DEFAULT_SIZES,
  aspectClassName = 'aspect-[16/10]',
  clientLogo,
}: NewsCardImageProps) {
  const serveUnoptimized = isFullBleedImage(src);

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${aspectClassName} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        quality={IMAGE_QUALITY}
        sizes={sizes}
        unoptimized={serveUnoptimized}
        placeholder={serveUnoptimized ? 'empty' : 'blur'}
        blurDataURL={serveUnoptimized ? undefined : IMAGE_BLUR_DATA_URL}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/10 pointer-events-none" aria-hidden="true" />
      {clientLogo && (
        <div className="absolute bottom-4 left-4 flex h-12 items-center justify-center overflow-hidden rounded-sm border border-gray-100 bg-white px-3 py-2 shadow-sm md:h-14">
          <Image
            src={clientLogo.src}
            alt={clientLogo.alt}
            width={140}
            height={48}
            className="h-8 w-auto max-w-[8rem] object-contain md:h-10"
          />
        </div>
      )}
    </div>
  );
}

export { ARTICLE_SIZES, DEFAULT_SIZES };
