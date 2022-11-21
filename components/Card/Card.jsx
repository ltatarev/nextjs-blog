import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Tag, TagShape } from '../Tag';

const SUMMARY_LENGTH = 800;

export function Card({
  title,
  subtitle,
  excerpt,
  slug,
  coverImage,
  tag,
  date,
}) {
  const summary = useMemo(() => {
    if (excerpt.length > SUMMARY_LENGTH) { return `${excerpt.substring(0, SUMMARY_LENGTH)}...`; }

    return excerpt;
  }, [excerpt]);

  return (
    <div
      className="
        max-w-full
        rounded-xl
        bg-slate-50
        p-5
        shadow-xl
        transition-all
        duration-150
        hover:-translate-y-1
        hover:shadow-2xl
        hover:duration-150"
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-3">
            <Image height={630} src={coverImage} width={1300} />
          </div>
          <div className="col-span-8 flex flex-col md:col-span-5">
            <div className="m-2 mb-5 flex-1">
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="pt-2 font-serif italic">{subtitle}</p>
              <p className="py-3">{summary}</p>
            </div>
            <div className="m-2 grid grid-cols-2">
              <span className="justify-self-start">
                <Tag title={tag} />
              </span>
              <span className="justify-self-end">
                <p className="pt-2 text-sm opacity-80">Objavljeno: {date}</p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  coverImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: TagShape.isRequired,
  title: PropTypes.string.isRequired,
};
