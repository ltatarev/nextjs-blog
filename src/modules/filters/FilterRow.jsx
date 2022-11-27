import PropTypes from 'prop-types';
import { Tag } from '../tag';

export function FilterRow({ titles }) {
  return (
    <div className="my-20 flex flex-row place-content-center">
      {titles.map((title, index) => (
        <Tag key={title} outline customClassNames="mx-5" index={index} title={title} />
      ))}
    </div>
  );
}

FilterRow.propTypes = {
  titles: PropTypes.array.isRequired,
};
