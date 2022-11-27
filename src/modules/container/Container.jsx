import PropTypes from 'prop-types';

export function Container({ children }) {
  return (<div className="container mx-auto px-5">{children}</div>);
}

Container.propTypes = { children: PropTypes.node.isRequired };
