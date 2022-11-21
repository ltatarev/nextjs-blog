import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

export const TAGS = { RECENZIJA: 'Recenzija' };

export const TagShape = PropTypes.oneOf(Object.values(TAGS));

export function Tag({ title }) {
  return (
    <Button
      auto
      className="
        rounded-3xl
        border-accent-1
        bg-accent-1
        font-bold
        uppercase
        text-slate-50
      "
    >
      {title}
    </Button>
  );
}

Tag.propTypes = {
  title: TagShape.isRequired,
};
