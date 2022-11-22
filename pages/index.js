import Head from 'next/head';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import { mapMorePosts } from '../common/postUtils';
import {
  Container,
  FeaturedSection,
  Footer,
  HeroPost,
  Intro,
  MorePosts,
  Nav,
} from '../components';
import { Meta } from '../components/Layout/Meta';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1, 5));

  return (
    <>
      <Head>
        <Meta />
        <title>{meta.title}</title>
      </Head>
      <Container>
        <Nav />
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        <FeaturedSection />
      </Container>
      <Footer />
    </>
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
