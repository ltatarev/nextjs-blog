import Image from 'next/image';
import PropTypes from 'prop-types';

export function PostCard({ post }) {
  return (
    <div
      className="
        h-full
        content-center
        rounded-xl
        bg-slate-50
        p-5
        shadow-xl
        transition-all
        duration-200
        ease-in
        hover:-translate-y-0.5
        hover:shadow-2xl
        hover:duration-100"
    >
      <div className="grid h-full grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-3">
          <div className="relative h-72 w-72">
            <Image className="rounded-xl object-cover" layout="fill" src={post.coverImage} />
          </div>
        </div>
        <div className="col-span-8 flex flex-col md:col-span-5">
          <div className="m-2 mb-5 flex-1">
            <h2 className="text-4xl font-bold">{post.title}</h2>
            <p className="pt-2 font-serif italic">{post.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
