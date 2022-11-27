import PropTypes from 'prop-types';

export function PostHeader({ title, subtitle }) {
  return (
    <div className="my-10  place-content-center py-5 text-center align-text-bottom">
      <p className="inline text-4xl font-extrabold">{title}</p>
      <p className="ml-2 inline align-bottom text-3xl italic">- {subtitle}</p>
    </div>
  );
}

PostHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
