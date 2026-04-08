import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

export default function HeroSection({ title, image, children }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="flex flex-col items-center text-center">
        {image && (
          <div className="mb-8">
            <Image src={image} alt={title} width={400} height={200} className="h-auto w-auto max-w-[300px] md:max-w-[400px]" />
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">{title}</h1>
        <div className="max-w-2xl text-lg text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
