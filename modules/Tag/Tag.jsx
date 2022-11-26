import cn from 'classnames';
import PropTypes from 'prop-types';

export function Tag({ title, outline, customClassNames }) {
  const classNames = cn(
    'rounded-3xl font-bold uppercase text-sm px-5 py-1',
    {
      'bg-accent-1 text-slate-100': !outline,
      'border-2 border-accent-1 bg-slate-100 text-accent-1 hover:bg-accent-1 hover:text-slate-100':
        outline,
    },
    customClassNames,
  );

  return <div className={classNames}>{title}</div>;
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  customClassNames: PropTypes.string,
  outline: PropTypes.bool,
};

Tag.defaultProps = {
  customClassNames: null,
  outline: false,
};
