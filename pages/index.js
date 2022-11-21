import Head from 'next/head';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import {
  Container, HeroPost, Intro, Layout, MorePosts,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </Container>
    </Layout>
  );
}

Home.propTypes = { allPosts: PropTypes.array.isRequired };

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
