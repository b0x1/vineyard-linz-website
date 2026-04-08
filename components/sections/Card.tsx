import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
  children: React.ReactNode;
}

export default function Card({ title, subtitle, link, linkText, children }: CardProps) {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-brand text-sm font-bold mb-6 uppercase tracking-wider">{subtitle}</p>
      <div className="text-gray-600 mb-8 flex-grow leading-relaxed">
        {children}
      </div>
      <Link
        href={link}
        className="text-brand font-bold uppercase text-sm border-b-2 border-brand pb-1 self-start hover:text-brand-dark hover:border-brand-dark transition-colors"
      >
        {linkText}
      </Link>
    </div>
  );
}
