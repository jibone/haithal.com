import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import HeroImage from "../components/hero-image";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Haithal.com</title>
        </Head>
        <Container>
          <Header size="large" currentPath="/" />

          <article className="grid grid-cols-3 gap-4">
            <HeroImage imgName="homepage_banner.jpg" />

            <section className="col-span-3">
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Hi There!
              </h1>
            </section>

            <section className="mb-2 col-span-3 md:col-span-2 md:mb-2">
              <p className="mt-4">
                I'm Haithal and welcome to my official website. Officially I do
                go by <strong>Haithal Asrar</strong> or <strong>@Miso</strong>{" "}
                on the interweb 👨🏻‍💻.
              </p>
            </section>

            <section className="mb-14 col-span-3 md:col-span-2 md:mb-16">
              <h2 className="text-2xl font-extrabold leading-tight mt-8 md:text-4xl">
                The Gist Of Haithal?
              </h2>

              <p className="mt-4">
                A native Kuala Lumpur millennial whom stuck in Apple's
                ecosystem, eats like a vacuums, also enjoy feeding people, plays
                video games during my free time and consume all things Japanese
                content.
              </p>
            </section>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
