import PropTypes from 'prop-types';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="h-full">
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
