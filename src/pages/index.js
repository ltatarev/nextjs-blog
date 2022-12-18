import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { getAllPosts } from '@/lib/api';
import { mapMorePosts } from '@/src/common';
import {
  Container, FeaturedSection, HeroPost, Intro, Layout, MorePosts, Nav, ReadMoreButtonRow, SectionTitle,
} from '@/src/modules';

export default function Home({ allPosts }) {
  const t = useTranslations('Home');

  const heroPost = allPosts[0];
  const morePosts = mapMorePosts(allPosts.slice(1, 5));

  return (
    <Layout>
      <Container>
        <Nav />
        <Intro />
        <SectionTitle>{t('newPost')}</SectionTitle>
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && (
          <div className="mt-20 mb-10">
            <SectionTitle>{t('olderPosts')}</SectionTitle>
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

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(['title', 'subtitle', 'tag', 'date', 'slug', 'coverImage', 'excerpt', 'locale']);

  const localizedPosts = allPosts.filter(({ locale: postLocale }) => postLocale === locale);

  return {
    // eslint-disable-next-line import/no-dynamic-require
    props: { allPosts: localizedPosts, messages: require(`../../locales/${locale}.json`) },
  };
};
