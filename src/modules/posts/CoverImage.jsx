import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function CoverImage({ title, src, slug }) {
  const image = (
    <Image
      priority
      alt={`Cover Image for ${title}`}
      className={cn('w-4/12', {
        'transition-shadow duration-200 hover:shadow-lg': slug,
      })}
      height={300}
      src={src}
      width={300}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link aria-label={title} as={`/blog/${slug}`} href="/blog/[slug]">
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
