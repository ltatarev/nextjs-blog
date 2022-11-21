import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function CoverImage({ title, src, slug }) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-10/12', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      height={600}
      src={src}
      width={800}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link aria-label={title} as={`/posts/${slug}`} href="/posts/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

CoverImage.propTypes = {
  slug: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
