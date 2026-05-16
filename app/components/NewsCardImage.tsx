import Image from 'next/image';
import { IMAGE_BLUR_DATA_URL, IMAGE_QUALITY, IMAGE_SIZES } from '../lib/image-utils';

interface NewsCardImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
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
}: NewsCardImageProps) {
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
        placeholder="blur"
        blurDataURL={IMAGE_BLUR_DATA_URL}
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-navy/10 pointer-events-none" aria-hidden="true" />
    </div>
  );
}

export { ARTICLE_SIZES, DEFAULT_SIZES };
