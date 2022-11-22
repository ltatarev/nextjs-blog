import PropTypes from 'prop-types';
import { mapMorePosts } from '../common/postUtils';
import {
  Container,
  FeaturedSection,
  HeroPost,
  Intro,
  Layout,
  MorePosts,
  Nav,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1, 5));

  return (
    <Layout>
      <Container>
        <Nav />
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        <FeaturedSection />
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
