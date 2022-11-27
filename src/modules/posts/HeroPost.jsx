import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from '../card';

export function HeroPost({ post }) {
  return (
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
  );
}

HeroPost.propTypes = {
  post: PropTypes.object.isRequired,
};
