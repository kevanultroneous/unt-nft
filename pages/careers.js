import Hero from "@/components/Careers/Hero.js";
import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";

const careers = () => {
  return (
    <Layout title={"careers"}>
      <MenuPackage />
      {/* <Hero clickHandler={() => scrollToRef(scrollRef)} />
    <section ref={scrollRef}>
      <Detail />
    </section> */}
      <Hero />
      <Footer />
    </Layout>
  );
};

export default careers;
