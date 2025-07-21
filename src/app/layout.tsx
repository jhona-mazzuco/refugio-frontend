import './globals.css';
import { Exo_2, Orbitron } from 'next/font/google';
import Navbar from '@/app/ui/Navbar';
import Footer from '@/app/ui/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const exoFont = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-exo',
});

const orbitronFont = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-orbitron',
});

const title = 'Refúgio Gamer';
const description =
  'O Refúgio Gamer é um portal independente sobre games, com reviews sinceras, notícias equilibradas e conteúdo feito por quem realmente joga. Aqui, a paixão pelos videogames é levada a sério.';

export const metadata = {
  title,
  description,
  keywords: [
    'Refúgio Gamer',
    'games',
    'videogames',
    'notícias',
    'reviews de jogos',
    'notícias de games',
    'análise de jogos',
    'comunidade gamer',
    'crítica de jogos',
    'jogos independentes',
    'AAA',
    'indie',
    'consoles',
    'PC gamer',
    'playstation',
    'ps',
    'ps5',
    'ps4',
    'xbox',
    'xone',
    'xsx',
    'xss',
    'nintendo',
    'sony',
    'microsoft',
    'ms',
    'switch',
    'switch 2',
    'ds',
    'showcase',
    'state of play',
    'direct',
  ],
  openGraph: {
    title,
    description,
    images: [
      {
        url: 'https://bucket.refugiogamer.com/logo_0a9505b507.webp',
        alt: `Logo Refúgio Gamer`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env['NEXT_PUBLIC_GTM_ID'];
  return (
    <html lang="pt">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body
        className={`flex flex-col ${exoFont.variable} ${orbitronFont.variable} antialiased`}
      >
        <Navbar />
        <main
          className={`max-w-5xl min-h-(--min-height-app) mx-auto px-1 lg:px-0 py-4`}
        >
          {children}
        </main>
        <Footer />
      </body>
      {!!gtmId && <GoogleAnalytics gaId={gtmId} />}
    </html>
  );
}
