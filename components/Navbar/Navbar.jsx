import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Close, Menu } from '../Icons';
import { NavButtons } from './NavButtons';
import { NavLink } from './NavLink';

const ROUTES = [
  {
    route: '/',
    title: 'Početna',
    color: 'purple',
  },
  {
    route: '/blog',
    title: 'Blog',
    color: 'blue',
  },
  {
    route: '/about',
    title: 'O meni',
    color: 'rose',
  },
  {
    route: '/contact',
    title: 'Kontakt',
    color: 'blue',
  },
];

export function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className={`mt-8 w-full ${
      navbar ? 'h-screen bg-neutral-100' : ''
    }`}
    >
      <div className="mx-auto justify-between md:flex md:items-center lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5 ">
            <Link href="/">
              <Image height={70} src="/assets/logo.png" width={70} />
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none"
                type="button"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <Menu /> : <Close />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="mt-2
              items-center
              justify-center
              space-y-8
              md:flex
              md:space-x-6
              md:space-y-0"
            >
              {ROUTES.map((item) => (
                <li key={item.route} className="py-2">
                  <NavLink link={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`hidden lg:block ${navbar ? 'hidden' : ''}`}>
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}
