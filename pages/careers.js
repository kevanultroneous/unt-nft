import ExploreWorkplace from "@/components/Careers/ExploreWorkplace";
import Hero from "@/components/Careers/Hero.js";
import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import LifeatMobifinx from "@/components/Careers/LifeatMobifinx";
import WhyMobifinx from "@/components/Careers/WhyMobifinx";
import CareerAccordion from "@/components/Careers/CareerAccordion";

const careers = () => {
  return (
    <Layout title={"careers"}>
      <MenuPackage />
      {/* <Hero clickHandler={() => scrollToRef(scrollRef)} />
    <section ref={scrollRef}>
      <Detail />
    </section> */}
      <Hero />
      <section>
        <LifeatMobifinx />
      </section>
      <section>
        <WhyMobifinx />
      </section>
      <section>
        <CareerAccordion />
      </section>
      <section>
        <ExploreWorkplace />
      </section>
      <Footer />
    </Layout>
  );
};

export default careers;
