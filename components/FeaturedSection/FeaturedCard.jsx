import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const CARD_TYPES = ['BOOK', 'CURRENT_READ', 'TV', 'GAME'];

export function FeaturedCard({
  title, label, imgSrc, AccentImage, main,
}) {
  const innerContentClasses = cn(
    `flex
    flex-col
    items-center
    align-middle
    rounded-2xl
    bg-white
    p-8
    text-center
    shadow-sm
    hover:-translate-y-0.5
    hover:shadow-xl
    hover:duration-100`,
    { 'h-[22rem] px-12 -my-6': main },
  );

  const imageWidth = main ? 320 : 150;
  const imageHeight = main ? 300 : 100;

  return (
    <div className="mx-20
      flex
      h-3/4
      w-1/6
      flex-col"
    >
      <div
        className={innerContentClasses}
      >
        <p className="text-xl font-bold">{title}</p>
        {!!label && (
        <p className="my-3
            w-min
            rounded-xl
            bg-purple-200
            px-5
            py-1
            text-xs
            font-bold
            uppercase
            leading-relaxed"
        >
          {label}
        </p>
        )}
        <Image
          className="rounded-xl object-cover py-1"
          height={imageHeight}
          src={imgSrc}
          width={imageWidth}
        />
      </div>
      {AccentImage}
    </div>

  );
}

FeaturedCard.propTypes = {
  AccentImage: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  main: PropTypes.bool,
};

FeaturedCard.defaultProps = {
  main: false,
};
