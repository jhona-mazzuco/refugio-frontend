import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className={ `p-2 border-t-1 border-neutral-200 grid sm:grid-cols-4 justify-center items-center max-w-7xl mx-auto` }
    >
      <Image
        width={ 100 }
        height={ 54 }
        src="/logo-with-title.webp"
        alt="Logo Refúgio Gamer"
        className={ 'justify-self-center sm:justify-self-start' }
      />

      <p className={ 'font-sm text-neutral-500 text-center sm:col-span-2' }>
        Copyright © { year } Refúgio Gamer - Todos os direitos reservados
        <span className="block">
          Designed By
          <Link
            className={ 'font-semibold hover:text-hover transition duration-200' }
            href={ 'https://www.linkedin.com/in/kevin-silva-oliveira' }
            target="_blank"
          >
            &nbsp;Kevin Oliveira
          </Link>
        </span>
      </p>
    </footer>
  );
}
