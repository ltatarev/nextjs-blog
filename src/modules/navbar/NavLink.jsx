import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { isRouteActive } from './routeService';

export function NavLink({ link }) {
  const router = useRouter();

  const isActive = isRouteActive(link, router);

  const BASE_CLASSES = `mx-3 
    my-5 p-3 
    min-w-max 
    rounded-2xl 
    border
    border-transparent
    hover:transition-all`;

  const classNames = cn(BASE_CLASSES, link.classes.BASE, { [link.classes.ACTIVE]: isActive });

  return (
    <Link replace className={classNames} href={link.route}>
      <p className="inline text-lg font-bold">{link.title}</p>
    </Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired,
};
