import { Grid } from '@nextui-org/react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import { SectionTitle } from '../Text';

export function MorePosts({
  posts,
}) {
  return (
    <div className="my-20">
      <SectionTitle>📚 Ostale objave</SectionTitle>
      <Grid.Container gap={2}>
        {posts.map((post) => (
          <Grid key={post.slug} md>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <Card variant="preview" {...post} />
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}

MorePosts.propTypes = {
  posts: PropTypes.array.isRequired,
};
