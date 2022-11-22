import React from 'react';
import Image from 'next/image';

export const CARD_TYPES = ['BOOK', 'CURRENT_READ', 'TV', 'GAME'];

export function FeaturedCard() {
  return (
    <div
      className="flex
      w-auto
      flex-col
      items-center
      rounded-2xl
      bg-white
      p-8
      text-center
      shadow-sm"
    >
      <p className="text-xl font-bold">Trenutno čitam</p>
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
        Svibanj
      </p>
      <Image
        className="rounded-xl object-cover"
        height={100}
        src="/assets/featured/BookMonth.jpg"
        width={100}
      />
    </div>

  );
}

FeaturedCard.propTypes = {

};

FeaturedCard.defaultProps = {

};
