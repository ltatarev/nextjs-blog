import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { Goodreads } from '../icons';
import { GenreTags } from './GenreTags';

const times = (n, func = (i) => i) => Array.from({ length: n }).map((_, i) => func(i));

export function PostCard({ post }) {
  const t = useTranslations('PostCard');

  const title = post.excerptTitle;
  const rating = post.rating ? parseInt(post.rating, 10) : 5;
  const genres = post.genres.split(',');

  return (
    <div
      className="h-full
        content-center
        rounded-xl
        bg-slate-50
        p-5
        shadow-lg"
    >
      <div className="grid h-full grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2">
          <div className="relative h-80 w-full">
            <Image priority className="rounded-xl object-cover" layout="fill" src={post.coverImage} />
          </div>
        </div>
        <div className="col-span-8 flex flex-col place-content-between md:col-span-6">
          <div className="m-2 mb-5">
            <h2 className="text-2xl font-bold uppercase">{title}</h2>
            <p className="pt-2 font-serif">{post.excerpt}</p>
          </div>
          <div className="my-5 flex flex-row">
            {genres.map((item, index) => (
              <GenreTags key={item} index={index} tag={item} />
            ))}
          </div>
          <div className="flex flex-row place-content-between">
            <div className="my-2 text-lg font-bold">
              {t('rating').toUpperCase()} {times(rating, () => '⭐️')}
            </div>
            {post.externalLink && (
              <a href={post.externalLink}>
                <div className="flex h-10 w-10 justify-center rounded-full pt-1">
                  <Goodreads />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
