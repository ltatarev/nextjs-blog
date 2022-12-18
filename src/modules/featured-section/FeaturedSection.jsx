import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FeaturedCard } from './FeaturedCard';

export function FeaturedSection() {
  const t = useTranslations('FeaturedSection');

  return (
    <div className="flex w-full flex-row flex-wrap justify-center">
      <FeaturedCard
        AccentImage={(
          <Image
            className="relative
            -top-52
            -left-28"
            height={200}
            src="/assets/featured/Reading.png"
            width={160}
          />
        )}
        imgSrc="/assets/featured/BookOfMonth.jpg"
        label={t('bookLabel')}
        title={t('book')}
      />
      <FeaturedCard
        main
        AccentImage={(
          <Image
            className="relative
            -top-28
            -right-20"
            height={220}
            src="/assets/featured/Main.png"
            width={180}
          />
        )}
        imgSrc="/assets/featured/CurrentRead.png"
        label={t('currentReadLabel')}
        title={t('currentRead')}
      />
      <FeaturedCard
        AccentImage={(
          <Image
            className="relative
            -top-32
            -right-24"
            height={200}
            src="/assets/featured/Watching.png"
            width={150}
          />
        )}
        imgSrc="/assets/featured/TV.png"
        label={t('tvLabel')}
        title={t('tv')}
      />
      <FeaturedCard
        AccentImage={(
          <Image
            className="relative
            -top-32
            -right-24"
            height={200}
            src="/assets/featured/Play.png"
            width={150}
          />
        )}
        imgSrc="/assets/featured/TV.png"
        label={t('gameLabel')}
        title={t('game')}
      />
    </div>
  );
}
