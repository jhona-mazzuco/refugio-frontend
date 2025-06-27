import './globals.css';
import { Exo_2, Orbitron } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
    <body
      className={ `flex flex-col ${ exoFont.variable } ${ orbitronFont.variable } antialiased` }
    >
    <main className={ `max-w-5xl mx-auto` }>
      <Navbar/>
      <div className={ 'py-4' }>{ children }</div>
      <Footer/>
    </main>
    </body>
    </html>
  );
}
