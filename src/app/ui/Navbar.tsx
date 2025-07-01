'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaDiscord } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

interface MenuOption {
  label: string;
  url: string;
}

function MenuButton() {
  return (
    <div className={`flex items-center gap-8`}>
      <button className={`text-primary-900 cursor-pointer justify-self-start`}>
        <FaBars />
      </button>

      <div className={'hidden lg:block'}>
        <HomeLogo />
      </div>
    </div>
  );
}

function ActionsMenu() {
  return (
    <section className={'flex justify-end gap-3'}>
      <button className={'cursor-pointer'}>
        <FaSearch />
      </button>

      <Link href={'https://discord.gg/M5W7TPguxk'} target="_blank">
        <FaDiscord />
      </Link>
    </section>
  );
}

function HomeLogo() {
  return (
    <Link href="/" tabIndex={1}>
      <Image src="/logo.webp" alt="Logo Refúgio Gamer" width={40} height={40} />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const menuOptions: MenuOption[] = [
    {
      label: 'Ínicio',
      url: '/',
    },
    {
      label: 'Notícias',
      url: '/noticias',
    },
    {
      label: 'Análises',
      url: '/analises',
    },
    {
      label: 'Resumos',
      url: '/resumos',
    },
    {
      label: 'Calendário',
      url: '/calendario',
    },
  ];

  return (
    <nav
      className={`grid grid-cols-4 items-center p-2 border-b-1 border-gray-200 px-4 mx-auto sticky top-0 bg-white`}
    >
      <MenuButton />

      <div className={`col-span-2 justify-self-center sm:hidden`}>
        <HomeLogo />
      </div>

      <ul
        className={
          'hidden lg:flex flex-row gap-3 justify-center items-center center list-none col-span-2'
        }
      >
        {menuOptions.map(({ label, url }, idx) => (
          <li key={idx}>
            <Link
              href={url}
              className={`
                text-md px-2 font-heading font-semibold hover:text-hover hover:text-shadow-sm transition duration-200
                underline-offset-[23px] decoration-primary-300 ${pathname === url && 'underline'}
              `}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ActionsMenu />
    </nav>
  );
}

export default Navbar;
