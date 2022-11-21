import Image from 'next/image';

export function Intro() {
  return (
    <section className="my-16 flex flex-col items-center md:mb-12">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-8xl">
        Blog.
      </h1>
      <h4 className="mt-5 text-center text-lg">
        A statically generated blog example using
      </h4>
      <Image height={227} src="/assets/hero.png" width="227" />
    </section>
  );
}
