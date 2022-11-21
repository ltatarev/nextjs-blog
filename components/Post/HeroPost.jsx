import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import { SectionTitle } from '../Text';

export function HeroPost({
  post,
}) {
  return (
    <>
      <SectionTitle>
        🌟 Nova objava
      </SectionTitle>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <Card
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
          subtitle={post.subtitle}
          tag={post.tag}
          title={post.title}
        />
      </Link>
    </>
  );
}

HeroPost.propTypes = {
  post: PropTypes.object.isRequired,
};
