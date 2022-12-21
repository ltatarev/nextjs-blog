import Head from 'next/head';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { getAllPosts } from '@/lib/api';
import { mapMorePosts } from '@/src/common';
import {
  Container, HeroPost, Layout, MorePosts, Nav, TagsRow,
} from '@/src/modules';

export default function Blog({ allPosts }) {
  const t = useTranslations('Blog');

  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1));

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Container>
        <Nav />
        <div className="my-16">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-8xl">Blog.</h1>
          <div className="mt-20">
            {heroPost && <HeroPost post={heroPost} />}
            <TagsRow />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

Blog.propTypes = { allPosts: PropTypes.array.isRequired };

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale, ['title', 'subtitle', 'tag', 'date', 'slug', 'coverImage', 'excerpt', 'locale']);

  return {
    // eslint-disable-next-line import/no-dynamic-require
    props: { allPosts, messages: require(`../../../locales/${locale}.json`) },
  };
};
