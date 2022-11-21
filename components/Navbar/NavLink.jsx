import React from 'react';
import {
  Navbar,
} from '@nextui-org/react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export function NavLink({ link }) {
  const router = useRouter();

  const isActive = link.route === router.route;

  const classNames = cn(
    'mx-3 rounded-2xl border-2 border-transparent hover:border-2 hover:bg-blue-500/20 hover:transition-all',
    { 'bg-blue-500/40 hover:bg-blue-500/40': isActive },
  );

  return (
    <Navbar.Link
      key={link.route}
      className={classNames}
      href={link.route}
    >
      {link.title}
    </Navbar.Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired,
};
