import PropTypes from 'prop-types';

export function Container({ children }) {
  return (
    <div className="bg-neutral-100">
      <div className="container mx-auto ">{children}</div>
    </div>
  );
}

Container.propTypes = { children: PropTypes.node.isRequired };
