import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";
import HeroImage from "../components/hero-image";

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About - Haithal.</title>
        </Head>
        <Container>
          <Header size="small" currentPath="/about" />

          <article>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:test-left">
              About
            </h1>

            <HeroImage imgName="about_banner.jpg" />

            <div className="max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl tracking-tight leading-tight mb-6">
                Who Am I? 🙋🏻‍♂️
              </h2>

              <p className="mb-4">
                A 31 year old (INFJ-T : The Advocate) who has his fare share of
                ups and downs but nevertheless tries to make the best in life.
                The type of guy who doesn’t mind to talk about his feelings and
                immerses himself in conversation to understand and make a better
                human connection. An inner introverted at heart but an extrovert
                when needed.
              </p>

              <p className="mb-4">
                Studied in Mass Communication & work experience mainly in client
                servicing for various Advertising Agencies and clients whereby
                it's bittersweet with unforgettable and wish to forget memories.
                During my early career years I also dabbled in Broadcasting for
                a kids channel and also delve into marketing for a local beauty
                parlour. The possibilities are endless as life is all about
                learning and experiencing.
              </p>

              <h2 className="text-2xl tracking-tight leading-tight mb-6">
                Key quotes that I stand by: 📕
              </h2>

              <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote mb-4">
                <p>
                  <i>
                    "There is no such things as coincidence, only the
                    inevitable"
                  </i>
                </p>
              </blockquote>

              <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote mb-4">
                <p>
                  <i>
                    "In every conflict or conversation find the middle ground
                    where both parties agrees upon"
                  </i>
                </p>
              </blockquote>

              <h2 className="text-2xl tracking-tight leading-tight mb-6">
                Intrigued? Make A Connection With Me 😉
              </h2>
              <p className="mb-4">
                📷 &nbsp;Instagram:{" "}
                <a
                  href="https://www.instagram.com/haithal/"
                  className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors"
                >
                  instagram.com/haithal
                </a>
              </p>
              <p className="mb-4">
                💼 &nbsp;LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/haithal/"
                  className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors"
                >
                  linkedin.com/in/haithal/
                </a>
              </p>
              <p className="mb-4">📧 &nbsp;Email: Haithal @ outlook.com</p>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default About;
