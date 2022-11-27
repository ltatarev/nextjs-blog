import PropTypes from 'prop-types';
import { Tag } from '../tag';

const BACKGROUND_CLASSES = [
  'mx-5 border-green-500 text-green-500 hover:bg-green-500 hover:text-slate-100 shadow-filter shadow-green-500',
  'mx-5 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-slate-100 shadow-filter shadow-blue-500',
  'mx-5 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-slate-100 shadow-filter shadow-purple-500',
  'mx-5 shadow-filter shadow-accent-1',
];

export function FilterRow({ titles }) {
  return (
    <div className="my-10 flex flex-row flex-wrap place-content-center">
      {titles.map((title, index) => (
        <Tag key={title} outline customClassNames={BACKGROUND_CLASSES[index]} index={index} title={title} />
      ))}
    </div>
  );
}

FilterRow.propTypes = {
  titles: PropTypes.array.isRequired,
};
