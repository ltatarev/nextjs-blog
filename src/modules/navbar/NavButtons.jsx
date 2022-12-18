import React from 'react';
import Link from 'next/link';

export function NavButtons() {
  return (
    <div className="flex flex-row">
      <span className="flex flex-row">
        <Link className="mx-1" href="/" locale="en">
          🇬🇧
        </Link>
        /
        <Link className="mx-1" href="/" locale="hr">
          🇭🇷
        </Link>
      </span>
    </div>
  );
}
