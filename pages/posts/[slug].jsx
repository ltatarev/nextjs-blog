import { Loading } from '@nextui-org/react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import {
  Container, Header, Layout, PostBody, PostHeader,
} from '../../modules';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <Loading />
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title}</title>
              <meta content={post.ogImage.url} property="og:image" />
            </Head>
            <PostHeader
              author={post.author}
              coverImage={post.coverImage}
              date={post.date}
              title={post.title}
            />
            <PostBody content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
