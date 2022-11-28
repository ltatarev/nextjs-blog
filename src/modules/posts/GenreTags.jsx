import cn from 'classnames';
import PropTypes from 'prop-types';

export function GenreTags({ tag, index }) {
  const classNames = cn('mr-5 w-fit rounded-full  px-5 py-2 text-xs font-bold sm:text-sm', {
    'bg-purple-300': index === 0,
    'bg-pink-300': index === 1,
    'bg-tag-5': index === 2,
  });

  return (
    <div className={classNames}>
      {tag}
    </div>
  );
}

GenreTags.propTypes = {
  index: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
};
