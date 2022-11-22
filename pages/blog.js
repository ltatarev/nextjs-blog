import Head from 'next/head';
import { meta } from '../common/meta';
import {
  Container,
  Intro,
  Layout,
  Nav,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Container>
        <Nav />
        <Intro />

      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'tag',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
