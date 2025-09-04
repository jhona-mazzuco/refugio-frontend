'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaDiscord, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import classNames from 'classnames';

interface MenuOption {
  label: string;
  url: string;
}

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

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openClassName = classNames([
    {
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen,
    },
  ]);

  return (
    <>
      <div className={`flex items-center gap-8`}>
        <button
          className={`text-primary-900 cursor-pointer justify-self-start`}
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>

        <div className={'hidden lg:block'}>
          <HomeLogo />
        </div>
      </div>

      <div
        className={`w-full h-full fixed top-0 left-0 bg-black/50 z-40 ${openClassName}`}
      >
        <div
          className={`w-64 h-full bg-white p-4 transition-transform duration-300 z-50 ${openClassName}`}
        >
          <div className={`grid grid-rows-1`}>
            <button
              className="cursor-pointer justify-self-end"
              onClick={() => setIsOpen(false)}
            >
              <FaXmark />
            </button>

            <Image
              src={'/logo-with-title.webp'}
              alt={'Logo Refúgio Gamer'}
              width={150}
              height={79.3}
            />
          </div>
          <nav>
            <ul className="space-y-5 pt-4">
              {menuOptions.map((menuOption) => (
                <li key={menuOption.label}>
                  <Link
                    className={`text-lg font-heading font-semibold hover:text-hover hover:text-shadow-sm transition duration-200
                underline-offset-[23px] decoration-primary-300`}
                    href={menuOption.url}
                    onClick={() => setIsOpen(false)}
                  >
                    {menuOption.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function ActionsMenu() {
  return (
    <section className={'flex justify-end gap-3'}>
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

  return (
    <header className={'bg-white z-10 sticky top-0 '}>
      <nav
        className={`w-full max-w-5xl grid grid-cols-4 items-center p-2 border-b-1 border-gray-200 px-4 mx-auto`}
      >
        <MenuButton />

        <div className={`col-span-2 justify-self-center lg:hidden`}>
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
    </header>
  );
}

export default Navbar;
