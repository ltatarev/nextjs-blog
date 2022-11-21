import React from 'react';
import {
  Navbar,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail } from '../Icons';
import { NavLink } from './NavLink';

const ROUTES = [
  {
    route: '/',
    title: 'Početna',
  },
  {
    route: '/blog',
    title: 'Blog',
  },
  {
    route: '/about',
    title: 'O meni',
  },
  {
    route: '/contact',
    title: 'Kontakt',
  },
];

export function Nav() {
  return (
    <Navbar className="mt-14 bg-white shadow-none" variant="static">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Image height={100} src="/assets/logo.png" width={100} />
      </Navbar.Brand>
      <Navbar.Content className="flex w-2/3 justify-center" hideIn="xs" variant="highlight-rounded">
        {ROUTES.map((item) => <NavLink key={item.route} link={item} />)}
        <div className="flex w-1/2 justify-end">
          <Link className="mx-5" href="#"><Instagram /></Link>
          <Link className="mx-5" href="#"><Mail /></Link>
        </div>
      </Navbar.Content>
      <Navbar.Collapse>
        {ROUTES.map((item) => (
          <Navbar.CollapseItem key={item.route}>
            <Link href={item.route}>{item.title}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
