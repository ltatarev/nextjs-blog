import PropTypes from 'prop-types';
import { mapMorePosts } from '../common/postUtils';
import { getAllPosts } from '../lib/api';
import {
  Container,
  FeaturedSection,
  HeroPost,
  Intro,
  Layout,
  MorePosts,
  Nav,
  ReadMoreButtonRow,
  SectionTitle,
} from '../modules';

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1, 5));

  return (
    <Layout>
      <Container>
        <Nav />
        <Intro />
        <SectionTitle>🌟 Nova objava</SectionTitle>
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && (
          <div className="mt-20 mb-10">
            <SectionTitle>📚 Ostale objave</SectionTitle>
            <MorePosts posts={morePosts} />
          </div>
        )}
        <ReadMoreButtonRow />
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
