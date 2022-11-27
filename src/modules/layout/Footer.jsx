import { Container } from '../container';
import { Instagram } from '../icons';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex flex-col items-center py-10 lg:flex-row">
          <h3
            className="
            mb-10
            text-center
            font-bold
            leading-tight
            tracking-tighter
            lg:mb-0
            lg:w-1/2
            lg:pr-4
            lg:text-left
          "
          >
            2022.
          </h3>
          <div className="flex flex-col justify-end lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              className="mx-3 font-bold hover:underline"
              href="https://www.instagram.com/knjigarica"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
