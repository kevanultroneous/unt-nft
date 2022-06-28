import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import FAQ from "@/components/Products/FaqSection";
import Hero from "@/components/Products/HeroSection";
import Solution from "@/components/Products/SolutionHelp";
import WhatyouGet from "@/components/Products/WhatYouWillGet";

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
