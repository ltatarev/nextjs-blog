import PropTypes from 'prop-types';
import { CoverImage } from './CoverImage';
import { Title } from './Title';

export function PostHeader({
  title, coverImage, date,
}) {
  return (
    <>
      <Title>{title}</Title>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage src={coverImage} title={title} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-lg">
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}

PostHeader.propTypes = {
  coverImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
