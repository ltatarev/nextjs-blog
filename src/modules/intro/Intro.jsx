import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Intro() {
  const t = useTranslations('Intro');

  return (
    <section className="my-16 flex flex-col items-center md:mb-12">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-8xl">{t('title')}</h1>
      <h4 className="mt-5 text-center text-lg">{t('subtitle')}</h4>
      <Image priority height={227} src="/assets/hero.png" width="227" />
    </section>
  );
}
