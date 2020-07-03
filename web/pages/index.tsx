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
                I'm Haithal and welcome to my official website. Alternatively I
                do go by <strong>Haithal Asrar</strong> or <em>@Miso</em> in
                certain parts of the interweb.
              </p>
            </section>

            <section className="mb-14 col-span-3 md:col-span-2 md:mb-16">
              <h2 className="text-2xl font-extrabold leading-tight mt-8 md:text-4xl">
                The Gist Of Haithal?
              </h2>

              <p className="mt-4">
                A native Kuala Lumpur millennial who is currently unattached to
                any company at the moment but is open to any opportunities while
                juggles to complete his part-time{" "}
                <em>Degree in Interpersonal Communications</em>.
              </p>

              <p className="mt-4">
                Main work experience include 5 years of project management /
                client servicing for a advertising agency (ATL, BTL & Digital)
                where I managed various types of portfolio from different
                industries. During my early career years I dabbled in
                Broadcasting for a kids channel and, most recently, divulged in
                the Marketing team for a local beauty brand.
              </p>

              <p className="mt-4">
                Yes if the item I’m interested in is in any shade of red then
                I’ll take it! Though I’m not a fan nor will I ever be a football
                fan or any kind of sports actually. But if you were to talk
                about video games, specifically JRPG genre or anything
                Japanese-related then I’m all ears! Unfortunately I can’t speak
                the language though would love to learn one fine day. Other then
                that, I’m also a car enthusiast but not a petrol head and also
                been told that I carry Doraemon’s pocket as a bag since I don’t
                travel light. Ever.
              </p>
            </section>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
