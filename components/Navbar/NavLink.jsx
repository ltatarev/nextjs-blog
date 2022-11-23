import React from 'react';
import { Text } from '@nextui-org/react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export function NavLink({ link }) {
  const router = useRouter();
 
  const isActive = link.route.replace('/', '') === router.route.replace('/', '');

  const BASE_CLASSES = `mx-3 my-5 p-3 min-w-max 
    rounded-2xl 
    border
    border-transparent
    hover:border-${link.color}-500/0
    hover:bg-${link.color}-500/20 
    hover:transition-all`;

  const ACTIVE_CLASSES = `bg-${link.color}-500/0 
    border-${link.color}-300 
    shadow-button 
    shadow-${link.color}-500 
    hover:bg-${link.color}-500/40 
    hover:border-${link.color}-500`;

  const classNames = cn(
    BASE_CLASSES,
    { [ACTIVE_CLASSES]: isActive },
  );

  return (
    <Link
      key={link.route}
      className={classNames}
      href={link.route}
    >
      <Text b size="$md">
        {link.title}
      </Text>
    </Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired,
};
