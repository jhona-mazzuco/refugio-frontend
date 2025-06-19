import './global.css';
import { Exo_2, Orbitron } from 'next/font/google';
import Navbar from '@refugiogamer/components/Navbar';
import Footer from '@refugiogamer/components/Footer';

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

export const metadata = {
  title: 'Refúgio Gamer',
  description:
    'O Refúgio Gamer é um portal independente sobre games, com reviews sinceras, notícias equilibradas e conteúdo feito por quem realmente joga. Aqui, a paixão pelos videogames é levada a sério.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        suppressHydrationWarning
        className={`${exoFont.variable} ${orbitronFont.variable} antialiased`}
      >
        <Navbar />
        <main className={'py-4'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
