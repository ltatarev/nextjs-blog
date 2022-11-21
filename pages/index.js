import Head from 'next/head';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import {
  Card, Container, Intro, Layout,
} from '../components';
import { getAllPosts } from '../lib/api';

//  {morePosts.length > 0 && <MoreStories posts={morePosts} />}

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>{meta.title}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <>
              <h4 className="my-5 text-3xl font-bold text-slate-800">
                🌟 Nova objava
              </h4>
              <Card
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                excerpt={heroPost.excerpt}
                slug={heroPost.slug}
                subtitle={heroPost.subtitle}
                tag={heroPost.tag}
                title={heroPost.title}
              />
            </>
          )}
        </Container>
      </Layout>
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
