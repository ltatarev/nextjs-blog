import PropTypes from 'prop-types';
import { Tag } from '../Tag/Tag';

const BACKGROUND_CLASSES = [
  'mx-5 border-green-600 text-green-600 hover:bg-green-600 hover:text-slate-100 shadow-filter shadow-green-600',
  'mx-5 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-slate-100 shadow-filter shadow-blue-600',
  'mx-5 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-slate-100 shadow-filter shadow-purple-600',
  'mx-5 shadow-filter shadow-accent-1',
];

export function FilterRow({ titles }) {
  return (
    <div className="my-10 flex flex-row flex-wrap place-content-center">
      {titles.map((title, index) => (
        <Tag
          key={title}
          outline
          customClassNames={BACKGROUND_CLASSES[index]}
          index={index}
          title={title}
        />
      ))}
    </div>
  );
}

FilterRow.propTypes = {
  titles: PropTypes.array.isRequired,
};
