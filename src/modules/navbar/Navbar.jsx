import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Close, Menu } from '../icons';
import { NavButtons } from './NavButtons';
import { NavLink } from './NavLink';

const ROUTES = [
  {
    route: '/',
    title: 'home',
    classes: {
      BASE: 'hover:border-purple-500/0 hover:bg-purple-500/20',
      ACTIVE: `bg-purple-500/0 
      border-purple-300 
      shadow-button 
      shadow-purple-500 
      hover:bg-purple-500/40 
      hover:border-purple-500`,
    },
  },
  {
    route: '/blog',
    title: 'blog',
    classes: {
      BASE: 'hover:border-blue-500/0 hover:bg-blue-500/20',
      ACTIVE: `bg-blue-500/0 
      border-blue-300 
      shadow-button 
      shadow-blue-500 
      hover:bg-blue-500/40 
      hover:border-blue-500`,
    },
  },
  {
    route: '/about',
    title: 'about',
    classes: {
      BASE: 'hover:border-rose-500/0 hover:bg-rose-500/20',
      ACTIVE: `bg-rose-500/0
      border-rose-300
      shadow-button
      shadow-rose-500
      hover:bg-rose-500/40
      hover:border-rose-500`,
    },
  },
  /*  {
    route: '/contact',
    title: 'contact',
    classes: {
      BASE: 'hover:border-green-500/0 hover:bg-green-500/20',
      ACTIVE: `bg-green-500/0
      border-green-300
      shadow-button
      shadow-green-500
      hover:bg-green-500/40
      hover:border-green-500`,
    },
  }, */
];

export function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className={`mt-8 w-full ${navbar ? 'h-screen bg-neutral-100' : ''}`}>
      <div className="mx-auto justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5 ">
            <Link href="/">
              <Image height={70} src="/assets/logo.png" width={70} />
            </Link>
            <div className="md:hidden">
              <button className="rounded-md p-2 text-gray-700 outline-none" type="button" onClick={() => setNavbar(!navbar)}>
                {navbar ? <Menu /> : <Close />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? 'block' : 'hidden'}`}>
            <ul
              className="mt-2
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
        <div className={`md:block ${navbar ? 'block p-4' : 'hidden'}`}>
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}
