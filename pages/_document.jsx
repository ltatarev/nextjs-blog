import { CssBaseline } from '@nextui-org/react';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { Meta } from '../modules/Layout/Meta';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // eslint-disable-next-line react/jsx-no-useless-fragment
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}
          <Meta />
        </Head>
        <body className="bg-neutral-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
