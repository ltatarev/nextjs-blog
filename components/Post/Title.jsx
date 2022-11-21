import PropTypes from 'prop-types';

export function Title({ children }) {
  return (
    <h1 className="
        mb-12
        text-center
        text-3xl
        font-bold
        leading-tight
        tracking-tighter
        md:text-left
        md:text-7xl
        md:leading-none
        lg:text-4xl
      "
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
