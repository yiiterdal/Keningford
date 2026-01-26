interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  variant?: 'default' | 'large';
}

const defaultImageUrl = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80&auto=format&fit=crop';
const defaultImageAlt = 'Modern city skyline with office buildings';

export default function Hero({ title, subtitle, imageUrl = defaultImageUrl, imageAlt = defaultImageAlt, variant = 'default' }: HeroProps) {
  const isLarge = variant === 'large';
  
  return (
    <section className={`relative overflow-hidden ${
      isLarge 
        ? 'pt-32 pb-32 md:pt-40 md:pb-48 lg:pt-48 lg:pb-56 xl:pt-56 xl:pb-64 min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh]'
        : 'pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 min-h-[60vh] md:min-h-[65vh]'
    }`}>
      {/* Real photographic background */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Subtle darkening overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Gradient transition to white at the bottom - only at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none z-20" />
      </div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8 tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light mt-6 md:mt-8">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
