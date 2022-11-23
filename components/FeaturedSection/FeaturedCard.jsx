import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const CARD_TYPES = ['BOOK', 'CURRENT_READ', 'TV', 'GAME'];

export function FeaturedCard({
  title, label, imgSrc, AccentImage, main,
}) {
  const containerClasses = cn(
    `flex
    mt-10   
    xl:w-1/3
    flex-col
    items-center`,
    { 'xl:w-1/3': main },
  );

  const innerContentClasses = cn(
    `flex
    flex-col
    text-center
    items-center
    rounded-2xl
    bg-white
    p-8
    -mb-32
    shadow-lg
    hover:-translate-y-0.5
    hover:shadow-xl
    hover:duration-100`,
    { 'w-1/2': main },
  );

  const imageContainerClasses = cn(
    'relative h-60 w-full flex justify-center px-2',
    { 'h-5/6 mt-5': main },
  );

  const imageWidth = main ? 320 : 150;
  const imageHeight = main ? 200 : 100;

  return (
    <div className={containerClasses}>
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
        <div className={imageContainerClasses}>
          <Image
            className="my-2 rounded-2xl object-cover"
            height={imageHeight}
            src={imgSrc}
            width={imageWidth}
          />
        </div>
      </div>
      {AccentImage}
    </div>

  );
}

FeaturedCard.propTypes = {
  AccentImage: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  main: PropTypes.bool,
};

FeaturedCard.defaultProps = {
  label: null,
  main: false,
};
