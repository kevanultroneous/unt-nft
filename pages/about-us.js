import Hero from "@/components/About-us/Hero";
import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";

const AboutUs = () => {
  return (
    <Layout title={"about-us"}>
      <MenuPackage />
      <Hero />
      <Footer />
    </Layout>
  );
};
export default AboutUs;
