import React from 'react';
import Image from 'next/image';
import { FeaturedCard } from './FeaturedCard';

export function FeaturedSection() {
  return (
    <div className="flex w-full flex-row ">
      <div className="m-10 flex h-3/4 flex-col ">
        <FeaturedCard />
        <Image
          className="relative -top-60 -left-10"
          height={200}
          src="/assets/featured/Reading.png"
          width={160}
        />
      </div>
    </div>
  );
}

FeaturedSection.propTypes = {

};

FeaturedSection.defaultProps = {

};
