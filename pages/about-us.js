import Alliance from "@/components/About-us/Alliance";
import Detail from "@/components/About-us/Detail";
import FeedbackSlider from "@/components/About-us/FeedbackSlider";
import Hero from "@/components/About-us/Hero";
import Located from "@/components/About-us/Located";
import ManagementTeam from "@/components/About-us/ManagementTeam";
import OurStory from "@/components/About-us/OurStory";
import Partners from "@/components/About-us/Partners";
import Vision from "@/components/About-us/Vision";
import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Achievements from "@/components/Home/Achievments";
import Footer from "@/components/Home/Footer";
import { useRef } from "react";

const AboutUs = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const scrollRef = useRef(null);
  return (
    <Layout title={"about-us"}>
      <MenuPackage />
      <Hero clickHandler={() => scrollToRef(scrollRef)} />
      <section ref={scrollRef}>
        <Detail />
      </section>
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
