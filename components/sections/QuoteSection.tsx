import Image from 'next/image';

interface QuoteSectionProps {
  author: string;
  image?: string;
  children: React.ReactNode;
}

export default function QuoteSection({ author, image, children }: QuoteSectionProps) {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {image && (
          <div className="flex justify-center mb-6">
            <Image src={image} alt="Icon" width={60} height={60} className="w-12 h-12" />
          </div>
        )}
        <blockquote className="text-2xl md:text-3xl italic text-gray-800 mb-6 leading-snug">
          &bdquo;{children}&ldquo;
        </blockquote>
        <cite className="text-brand font-bold not-italic uppercase tracking-wider">{author}</cite>
      </div>
    </section>
  );
}
