import cn from 'classnames';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { CATEGORY_NAMES } from './tags';

export function Tag({ title, outline, removeSpace }) {
  const t = useTranslations('Tags');

  const classNames = cn('rounded-3xl font-bold my-2 text-center text-slate-50 uppercase text-sm px-4 py-1 hover:cursor-pointer w-fit h-fit', {
    'mr-2': !removeSpace,
    'bg-tag-4 text-slate-100': !outline,
    'bg-tag-1': title === CATEGORY_NAMES[0] && !outline,
    'border-2 border-tag-1 text-tag-1 hover:bg-tag-1 hover:text-slate-100 shadow-filter shadow-tag-1': title === CATEGORY_NAMES[0] && outline,
    'bg-tag-2': title === CATEGORY_NAMES[1] && !outline,
    'border-2 border-tag-2 text-tag-2 hover:bg-tag-2 hover:text-slate-100 shadow-filter shadow-tag-2': title === CATEGORY_NAMES[1] && outline,
    'bg-tag-3': title === CATEGORY_NAMES[2] && !outline,
    'border-2 border-tag-3 text-tag-3 hover:bg-tag-3 hover:text-slate-100 shadow-filter shadow-tag-3': title === CATEGORY_NAMES[2] && outline,
    'bg-tag-4': title === CATEGORY_NAMES[3] && !outline,
    'border-2 border-tag-4 bg-slate-100 text-tag-4 hover:bg-tag-4 hover:text-slate-100 shadow-filter shadow-tag-4': title === CATEGORY_NAMES[3] && outline,
  });

  return <div className={classNames}>{t(title)}</div>;
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  removeSpace: PropTypes.bool,
};

Tag.defaultProps = {
  outline: false,
  removeSpace: false,
};
