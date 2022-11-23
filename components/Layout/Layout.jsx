import PropTypes from 'prop-types';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div>
      <div className="h-full min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
