import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import { SectionTitle } from '../Text';
import { ReadMoreButtonRow } from './ReadMoreButtonRow';

const STYLES = {
  LARGE_POST: { div: 'col-span-full sm:col-span-2', card: 'large' },
  PREVIEW_POST: { div: 'col-span-full sm:col-auto', card: 'preview' },
};

function PostRow({ posts, index }) {
  const isFirstPostLarge = index % 2 === 0;

  const firstPostClassNames = isFirstPostLarge ? STYLES.LARGE_POST : STYLES.PREVIEW_POST;
  const secondPostClassNames = isFirstPostLarge ? STYLES.PREVIEW_POST : STYLES.LARGE_POST;

  return (
    <>
      <div className={firstPostClassNames.div}>
        <Link as={`/posts/${posts[0].slug}`} href="/posts/[slug]">
          <Card variant={firstPostClassNames.card} {...posts[0]} />
        </Link>
      </div>
      {posts.length > 1 && (
        <div className={secondPostClassNames.div}>
          <Link as={`/posts/${posts[1].slug}`} href="/posts/[slug]">
            <Card variant={secondPostClassNames.card} {...posts[1]} />
          </Link>
        </div>
      )}
    </>
  );
}

PostRow.propTypes = {
  index: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
};

export function MorePosts({
  posts,
}) {
  return (
    <>
      <div className="mt-20 mb-10">
        <SectionTitle>📚 Ostale objave</SectionTitle>
        <div className="row-auto grid auto-rows-max grid-cols-3 gap-7">
          {posts.map((postDuo, index) => (
            <PostRow key={postDuo[0].slug} index={index} posts={postDuo} />
          ))}
        </div>
      </div>
      <ReadMoreButtonRow />
    </>
  );
}

MorePosts.propTypes = {
  posts: PropTypes.array.isRequired,
};
