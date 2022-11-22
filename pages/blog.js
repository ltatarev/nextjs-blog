import Head from 'next/head';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import {
  Container,
  Intro,
  Layout,
  Nav,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Blog({ allPosts }) {
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

Blog.propTypes = { allPosts: PropTypes.array.isRequired };

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
