import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-gray-700 bg-white">
      <Head>
        <title>Practicing TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Feature />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
