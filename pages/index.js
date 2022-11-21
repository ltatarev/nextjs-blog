import { Button, Row } from '@nextui-org/react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import { mapMorePosts } from '../common/postUtils';
import {
  Container,
  HeroPost,
  Intro,
  Layout,
  MorePosts,
  RightArrow,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1));

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        <Row className="my-10 flex place-content-end">
          <Button
            auto
            bordered
            ghost
            shadow
            className="self-end hover:bg-purple-500"
            color="secondary"
            iconRight={<RightArrow />}
          >
            Pročitaj više na blogu
          </Button>
        </Row>
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
