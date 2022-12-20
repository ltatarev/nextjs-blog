import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const CARD_TYPES = ['BOOK', 'CURRENT_READ', 'TV', 'GAME'];

export function FeaturedCard({
  title, label, imgSrc, AccentImage,
}) {
  const containerClasses = cn(
    `flex
    my-10   
    xl:w-1/4
    flex-col
    h-[22rem]
    mb-20
    xl:mb-52
    items-center`,
  );

  const innerContentClasses = cn(
    `flex
    flex-col
    h-full 
    text-center
    items-center
    rounded-2xl
    bg-white 
    p-8
    mx-8
    shadow-lg
    hover:shadow-xl
    hover:duration-100`,
  );

  const imageContainerClasses = cn('relative w-full flex justify-center px-2');

  return (
    <div className={containerClasses}>
      <div className={innerContentClasses}>
        <p className="text-xl font-bold">{title}</p>
        {!!label && (
          <p
            className="rounded-xl
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
          <Image priority className="my-2 rounded-2xl object-cover" height={100} src={imgSrc} width={150} />
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
};

FeaturedCard.defaultProps = {
  label: null,
};
