import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BASE_CLASS = 'mx-1 px-1 rounded-xl bg-opacity-20 hover:bg-opacity-40';

export function NavButtons() {
  const router = useRouter();

  const enClassNames = cn(BASE_CLASS, { 'bg-accent-1 hover:text-white': router.locale === 'en' }, { 'hover:bg-accent-1 hover:text-white': router.locale !== 'en' });

  const hrClassNames = cn(BASE_CLASS, { 'bg-accent-2 hover:text-white': router.locale === 'hr' }, { 'hover:bg-accent-2 hover:text-white': router.locale !== 'hr' });

  return (
    <div className="flex flex-row">
      <span className="flex flex-row">
        <Link className={enClassNames} href={router.route} locale="en">
          🇬🇧
        </Link>
        /
        <Link className={hrClassNames} href={router.route} locale="hr">
          🇭🇷
        </Link>
      </span>
    </div>
  );
}
