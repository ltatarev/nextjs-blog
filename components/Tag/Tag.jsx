import cn from 'classnames';
import PropTypes from 'prop-types';

export const TAGS = { RECENZIJA: 'Recenzija' };

export const TagShape = PropTypes.oneOf(Object.values(TAGS));

export function Tag({ title, outline }) {
  const classNames = cn(
    'rounded-3xl font-bold uppercase text-sm px-5 py-1',
    {
      'bg-accent-1 text-slate-100': !outline,
      'border-2 border-accent-1 bg-slate-100 text-accent-1': outline,
    },
  );

  return (
    <div className={classNames}>
      {title}
    </div>
  );
}

Tag.propTypes = {
  title: TagShape.isRequired,
  outline: PropTypes.bool,
};

Tag.defaultProps = {
  outline: false,
};
