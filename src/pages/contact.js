import {
  Container, Layout, Nav,
} from '../modules';

export default function Contact() {
  return (
    <Layout>
      <Container>
        <Nav />
        <div className="my-16">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-8xl">
            Contact.
          </h1>
        </div>
      </Container>
    </Layout>
  );
}
