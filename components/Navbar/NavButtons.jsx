import React from 'react';
import { socials } from '../../common/meta';
import { Instagram, Mail } from '../Icons';

export function NavButtons() {
  return (
    <div className="flex w-1/2 justify-end">
      <a className="mx-5" href={socials.instagram} rel="noreferrer" target="_blank">
        <Instagram />
      </a>
      <a className="mx-5" href={`mailto:${socials.email}`} rel="noreferrer" target="_blank">
        <Mail />
      </a>
    </div>
  );
}
