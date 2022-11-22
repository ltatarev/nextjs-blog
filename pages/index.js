import { Button, Row } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { meta } from '../common/meta';
import { mapMorePosts } from '../common/postUtils';
import {
  Container,
  HeroPost,
  Intro,
  Layout,
  MorePosts,
  Nav,
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
        <Nav />
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        <Row className="mb-10 flex place-content-end">
          <Link href="/blog">
            <Button
              auto
              bordered
              ghost
              shadow
              className="group self-end hover:bg-purple-800"
              color="secondary"
              iconRight={<RightArrow />}
            >
              Pročitaj više na blogu
            </Button>
          </Link>
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
