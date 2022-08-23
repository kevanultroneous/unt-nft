import Alliance from "@/components/About-us/Alliance";
import Detail from "@/components/About-us/Detail";
import FeedbackSlider from "@/components/About-us/FeedbackSlider";
import Hero from "@/components/About-us/Hero";
import Located from "@/components/About-us/Located";
import ManagementTeam from "@/components/About-us/ManagementTeam";
import Mission from "@/components/About-us/Mission";
import OurStory from "@/components/About-us/OurStory";
import Partners from "@/components/About-us/Partners";
import Vision from "@/components/About-us/Vision";
import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Achievements from "@/components/Home/Achievments";
import Footer from "@/components/Home/Footer";
import Head from "next/head";
import { useRef } from "react";

const AboutUs = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const scrollRef = useRef(null);
  return (
    <Layout
      title={
        "About - Enterprise Blockchain with Trading Solutions Company | MobifinX"
      }
      description={
        " Mobifinx is a global blockchain company focused on building enterprise software products. We are a squad of thoughtful, pragmatic and innovative professionals to deliver customized and holistic solutions. Get in touch to get more details."
      }
    >
      <Head>
        <meta
          property="og:image"
          content="https://test-mobifinx.vercel.app/assets/images/OG-Aboutus.jpg"
        />
      </Head>
      <MenuPackage />
      <Hero clickHandler={() => scrollToRef(scrollRef)} />
      <section ref={scrollRef}>
        <Detail />
      </section>
      <Mission />
      <Vision />
      <OurStory />
      <Alliance />
      <Achievements />
      <Partners />
      {/* <ManagementTeam /> */}
      <FeedbackSlider />

      <Located />

      <Footer />
    </Layout>
  );
};
export default AboutUs;
