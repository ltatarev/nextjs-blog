import { Container, Layout, Nav } from '@/src/modules';

export default function About() {
  return (
    <Layout>
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
