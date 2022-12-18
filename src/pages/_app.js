// eslint-disable-next-line camelcase
import { DM_Sans } from '@next/font/google';
import { NextIntlProvider } from 'next-intl';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const dmSans = DM_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dmSans',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${dmSans.variable} font-sans`}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </main>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
