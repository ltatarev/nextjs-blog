import React from 'react';
import { Text } from '@nextui-org/react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const BASE_CLASSES = `mx-3 p-3 min-w-max 
  rounded-2xl 
  border
  border-white
  hover:border-purple-500/0
  hover:bg-purple-500/20 
  hover:transition-all`;

const ACTIVE_CLASSES = `bg-purple-500/0 
  border-purple-500 
  shadow-button 
  shadow-purple-500 
  hover:bg-purple-500/40 h
  over:border-purple-500`;

export function NavLink({ link }) {
  const router = useRouter();

  const isActive = link.route.replace('/', '') === router.route.replace('/', '');

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
