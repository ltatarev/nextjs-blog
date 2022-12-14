import { Loading } from '@nextui-org/react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib';
import {
  Container, Layout, Nav, PostBody, PostCard, PostHeader,
} from '@/src/modules';

export default function Post({ post }) {
  const t = useTranslations('Post');
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title || t('title')}</title>
      </Head>
      <Container>
        <Nav slug={post.slug} />
        {router.isFallback ? (
          <Loading />
        ) : (
          <article className="mb-32 flex flex-col">
            <div className="max-w-6xl self-center">
              <PostHeader date={post.date} subtitle={post.subtitle} tag={post.tag} title={post.title} />
              <PostCard post={post} />
              <PostBody content={post.content} />
            </div>
          </article>
        )}
      </Container>
    </Layout>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export async function getStaticPaths({ locales }) {
  const allPosts = getAllPosts(locales[0], ['slug', 'locale']);

  const paths = allPosts.map((post) => ({
    locale: post.locale,
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  const post = getPostBySlug(params.slug, locale, ['title', 'date', 'slug', 'genres', 'rating', 'externalLink', 'excerptTitle', 'author', 'content', 'excerpt', 'subtitle', 'tag', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
      // eslint-disable-next-line import/no-dynamic-require
      messages: require(`../../../locales/${locale}.json`),
    },
  };
}
