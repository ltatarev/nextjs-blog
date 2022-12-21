import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Container, Layout, Nav } from '@/src/modules';

export default function About() {
  const t = useTranslations('About');

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Container>
        <Nav />
        <div className="my-16">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-8xl">About.</h1>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  // eslint-disable-next-line import/no-dynamic-require
  props: { messages: require(`../../locales/${locale}.json`) },
});
