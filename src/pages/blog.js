import PropTypes from 'prop-types';
import { getAllPosts } from '../../lib/api';
import { mapMorePosts } from '../common/postUtils';
import {
  Container, FilterRow, HeroPost, Layout, MorePosts, Nav,
} from '../modules';

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1));

  return (
    <Layout>
      <Container>
        <Nav />
        <div className="my-16">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-8xl">
            Blog.
          </h1>
          <div className="mt-20">
            {heroPost && <HeroPost post={heroPost} />}
            <FilterRow titles={['Recenzije', 'Preporuke', 'New in', 'Wrap up']} />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          </div>
        </div>
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
