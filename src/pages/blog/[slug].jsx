import { Loading } from '@nextui-org/react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib';
import {
  Container, Layout, Nav, PostBody, PostCard, PostHeader,
} from '@/src/modules';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Nav />
        {router.isFallback ? (
          <Loading />
        ) : (
          <article className="mb-32">
            <PostHeader subtitle={post.subtitle} tag={post.tag} title={post.title} />
            <PostCard post={post} />
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
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'excerpt', 'subtitle', 'tag', 'coverImage']);
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
