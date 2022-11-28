import Image from 'next/image';
import PropTypes from 'prop-types';

export function PostCard({ post }) {
  const title = post.excerptTitle ? post.excerptTitle : 'Kratki sadržaj';

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
          <div className="relative h-full w-full">
            <Image className="rounded-xl object-cover" layout="fill" src={post.coverImage} />
          </div>
        </div>
        <div className="col-span-8 flex flex-col md:col-span-6">
          <div className="m-2 mb-5 flex-1">
            <h2 className="text-2xl font-bold uppercase">{title}</h2>
            <p className="pt-2 font-serif">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
