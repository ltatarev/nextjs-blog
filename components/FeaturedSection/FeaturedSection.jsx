import React from 'react';
import Image from 'next/image';
import { FeaturedCard } from './FeaturedCard';

export function FeaturedSection() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-center">
      <FeaturedCard
        AccentImage={(
          <Image
            className="relative
            -top-40
            -left-28
            hover:-translate-y-0.5
            hover:duration-100"
            height={200}
            src="/assets/featured/Reading.png"
            width={160}
          />
        )}
        imgSrc="/assets/featured/BookOfMonth.jpg"
        label="Studeni"
        title="Knjiga mjeseca"
      />
      <FeaturedCard
        main
        AccentImage={(
          <Image
            className="relative
            -top-10
            -right-32
            hover:-translate-y-0.5
            hover:duration-100"
            height={220}
            src="/assets/featured/Main.png"
            width={180}
          />
        )}
        imgSrc="/assets/featured/CurrentRead.png"
        title="Trenutno čitam"
      />
      <FeaturedCard
        AccentImage={(
          <Image
            className="relative
            -top-5
            -right-24
            hover:-translate-y-0.5
            hover:duration-100"
            height={200}
            src="/assets/featured/Watching.png"
            width={150}
          />
      )}
        imgSrc="/assets/featured/TV.png"
        label="Serija"
        title="TV preporuka"
      />
    </div>
  );
}

// -mb-52 to make up for image taking space on the bottom
