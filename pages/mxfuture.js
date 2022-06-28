import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import FAQ from "@/components/Products/FAQ";
import Hero from "@/components/Products/Hero";
import Solution from "@/components/Products/Solution";
import WhatyouGet from "@/components/Products/WhatyouGet";

const MxFuture = () => {
  return (
    <Layout title={"MxFuture"}>
      <MenuPackage />
      <Hero />
      <WhatyouGet />
      <Solution />
      <FAQ />
      <Footer />
    </Layout>
  );
};
export default MxFuture;
