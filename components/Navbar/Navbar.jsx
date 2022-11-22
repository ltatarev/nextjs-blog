import React from 'react';
import {
  Image,
  Navbar,
} from '@nextui-org/react';
import Link from 'next/link';
import { NavButtons } from './NavButtons';
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
    <Navbar
      disableBlur
      className="pt-14 shadow-none"
      containerCss={{ backgroundColor: 'rgb(245 245 245)' }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" className="px-5" showIn="xs" />
        <Link href="/"><Image height={100} src="/assets/logo.png" width={100} /></Link>
      </Navbar.Brand>
      <Navbar.Content className="w-2/3 justify-center  " hideIn="xs" variant="highlight-rounded">
        {ROUTES.map((item) => <NavLink key={item.route} link={item} />)}
        <NavButtons />
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
