import React from 'react';
import { Text } from '@nextui-org/react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export function NavLink({ link }) {
  const router = useRouter();

  const isActive = link.route.replace('/', '') === router.route.replace('/', '');
  console.log(isActive, link.route);

  const classNames = cn(
    `mx-3 p-3 min-w-max 
    rounded-2xl 
    border-2 
    border-white 
    hover:border-blue-500 
    hover:bg-blue-500/20 
    hover:transition-all 
    hover:shadow-button 
    hover:shadow-blue-500`,
    { 'bg-blue-500/40 border-2 border-blue-500 hover:bg-blue-500/40': isActive },
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
