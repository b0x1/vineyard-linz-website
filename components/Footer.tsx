import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { name: 'Wer sind wir? Was ist die Vineyard Linz?', href: '/wer-sind-wir/' },
  { name: 'Warum ist uns Jesus so wichtig?', href: '/jesus/' },
  { name: 'Die Vision der Vineyard Linz – Kirche lebt Liebe', href: '/vision/' },
  { name: 'Der Auftrag der Vineyard Linz – Linz lebt Liebe', href: '/unser-auftrag-linz-lebt-liebe/' },
  { name: 'Warum braucht Linz eine neue Kirche?', href: '/warum-braucht-linz-eine-neue-kirche/' },
  { name: 'Was wollen wir eigentlich?', href: '/was-wollen-wir/' },
  { name: 'Vineyard Linz Hubs', href: '/hubs/' },
  { name: 'Wie kann ich Gott erleben?', href: '/wie-kann-ich-gott-erleben/' },
  { name: 'Wofür lohnt es sich zu leben?', href: '/wofuer-lohnt-es-sich-zu-leben/' },
  { name: 'Vineyard Linz finanziell unterstützen', href: '/unterstuetze-uns/' },
  { name: 'Vineyard Linz kontaktieren', href: '/kontaktiere-uns/' },
  { name: 'Impressum – www.vineyard-linz.church', href: '/impressum-und-rechtshinweise/' },
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/VineyardLinz', icon: '/images/twitter.png' },
  { name: 'Facebook', href: 'https://www.facebook.com/VineyardLinz', icon: '/images/facebook.png' },
  { name: 'WhatsApp', href: '/kontaktiere-uns/#whatsapp', icon: '/images/whatsapp.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/vineyardlinz/', icon: '/images/instagram.jpg' },
];

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
           <Link href="/" className="mb-8">
            <Image
              src="/images/vlinz-logo-mono-red.png"
              alt="Vineyard Linz Logo"
              width={229}
              height={46}
              className="h-auto"
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-brand transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Vineyard Linz. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
