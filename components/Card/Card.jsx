import { useMemo } from 'react';
import { Text } from '@nextui-org/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Tag, TagShape } from '../Tag';
import { PreviewCard } from './PreviewCard';

const SUMMARY_LENGTH = 800;

export const CARD_VARIANTS = {
  PREVIEW: 'preview',
  LARGE: 'large',
};

export function Card(props) {
  const {
    title,
    subtitle,
    excerpt,
    coverImage,
    tag,
    date,
    variant,
  } = props;

  const summary = useMemo(() => {
    if (excerpt.length > SUMMARY_LENGTH) { return `${excerpt.substring(0, SUMMARY_LENGTH)}...`; }

    return excerpt;
  }, [excerpt]);

  if (variant === CARD_VARIANTS.PREVIEW) {
    return <PreviewCard {...props} />;
  }

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
        <div className="col-span-8 sm:col-span-3">
          <div className="relative h-full w-full min-w-fit">
            <Image className="rounded-xl object-cover" layout="fill" src={coverImage} />
          </div>
        </div>
        <div className="col-span-8 flex flex-col md:col-span-5">
          <div className="m-2 mb-5 flex-1">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="pt-2 font-serif italic">{subtitle}</p>
            <p className="py-3">{summary}</p>
          </div>
          <div className="m-2 grid grid-cols-2">
            <span className="justify-self-start">
              <Tag outline title={tag} />
            </span>
            <span className="justify-self-end">
              <Text className="pt-2 text-sm opacity-80">Objavljeno: {date}</Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  coverImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: TagShape.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(CARD_VARIANTS)),
};

Card.defaultProps = {
  variant: CARD_VARIANTS.LARGE,
};
