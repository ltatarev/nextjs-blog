import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from '../card';

const STYLES = {
  LARGE_POST: { div: 'col-span-full lg:col-span-2', card: 'large' },
  PREVIEW_POST: { div: 'col-span-full lg:col-auto', card: 'preview' },
};

function PostRow({ posts, index }) {
  const isFirstPostLarge = index % 2 === 0;

  const firstPostClassNames = isFirstPostLarge ? STYLES.LARGE_POST : STYLES.PREVIEW_POST;
  const secondPostClassNames = isFirstPostLarge ? STYLES.PREVIEW_POST : STYLES.LARGE_POST;

  return (
    <>
      <div className={firstPostClassNames.div}>
        <Link as={`/blog/${posts[0].slug}`} href="/blog/[slug]">
          <Card variant={firstPostClassNames.card} {...posts[0]} />
        </Link>
      </div>
      {posts.length > 1 && (
        <div className={secondPostClassNames.div}>
          <Link as={`/blog/${posts[1].slug}`} href="/blog/[slug]">
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

export function MorePosts({ posts }) {
  return (
    <div className="row-auto grid auto-rows-max grid-cols-3 gap-7">
      {posts.map((postDuo, index) => (
        <PostRow key={postDuo[0].slug} index={index} posts={postDuo} />
      ))}
    </div>
  );
}

MorePosts.propTypes = {
  posts: PropTypes.array.isRequired,
};
