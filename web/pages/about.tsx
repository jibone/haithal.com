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
                Who Am I?
              </h2>
              <p className="mb-4">
                A 30 year old who has his fare share of ups and downs but
                nevertheless tries to make the best in life. A ESFJ-T (The
                Consul) if you’re into the 16 personality test, and yeah, the
                type of guy who doesn’t mind to talk about his feelings and
                immerses himself in conversation to understand and make human
                connection better. An inner introverted at heart but an
                extrovert when needed.
              </p>
              <p className="mb-4">
                Has the tendency to compartmentalise items into their own
                individual bags, people & relationship into their own
                categories. It makes for a more organised and structured way of
                living while saving time & energy. But there are times where
                everything would just go in the total opposite direction.
              </p>
              <h2 className="text-2xl tracking-tight leading-tight mb-6">
                Stalking Me? Or Better Yet, Make A Connection With Me
              </h2>
              <p className="mb-4">
                📷 &nbsp;Instagram:{" "}
                <a href="https://www.instagram.com/haithal/" className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors">
                  instagram.com/haithal
                </a>
              </p>
              <p className="mb-4">
                💼 &nbsp;LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/haithal/" className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-colors">
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
