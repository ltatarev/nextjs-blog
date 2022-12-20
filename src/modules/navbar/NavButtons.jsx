import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const BASE_CLASS = 'mx-1 px-1 rounded-xl bg-opacity-20 hover:bg-opacity-40';

export function NavButtons({ slug }) {
  const router = useRouter();

  const enClassNames = cn(BASE_CLASS, { 'bg-accent-1 hover:text-white': router.locale === 'en' }, { 'hover:bg-accent-1 hover:text-white': router.locale !== 'en' });
  const hrClassNames = cn(BASE_CLASS, { 'bg-accent-2 hover:text-white': router.locale === 'hr' }, { 'hover:bg-accent-2 hover:text-white': router.locale !== 'hr' });

  const href = { pathname: router.route, ...(!!slug && { query: { slug } }) };

  return (
    <div className="flex flex-row">
      <span className="flex flex-row">
        <Link
          className={enClassNames}
          href={href}
          locale="en"
        >
          🇬🇧
        </Link>
        /
        <Link
          className={hrClassNames}
          href={href}
          locale="hr"
        >
          🇭🇷
        </Link>
      </span>
    </div>
  );
}

NavButtons.propTypes = {
  slug: PropTypes.string,
};

NavButtons.defaultProps = {
  slug: null,
};
