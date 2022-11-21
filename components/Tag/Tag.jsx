import PropTypes from 'prop-types';

export const TAGS = { RECENZIJA: 'Recenzija' };

export const TagShape = PropTypes.oneOf(Object.values(TAGS));

export function Tag({ title }) {
  return (
    <p className="
      rounded-3xl
      border-2
      border-pink
      bg-pink
      py-1
      px-5
      font-bold
      uppercase
      text-slate-50
      hover:border-indigo-500
      hover:bg-transparent
      hover:text-indigo-500
      hover:transition-all
      hover:duration-150"
    >
      {title}
    </p>
  );
}

Tag.propTypes = {
  title: TagShape.isRequired,
};
