import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Exchange from "@/components/Home/Exchange";
import Footer from "@/components/Home/Footer";
import Products from "@/components/Home/Products";
import BenefitsToLeverage from "@/components/Products/BenefitsToLeverage";
import FAQ from "@/components/Products/FAQ";
import Hero from "@/components/Products/Hero";
import Introductions from "@/components/Products/Introductions";
import MxFutureProducts from "@/components/Products/MxFutureProducts";
import NextProduct from "@/components/Products/NextProduct";
import Solution from "@/components/Products/Solution";
import WhatyouGet from "@/components/Products/WhatyouGet";
import { useState } from "react";
import { MxFutureNextLink } from "utils/MxFuture.data";
const MxFuture = () => {
  const [globalColor, setGlobalColor] = useState("#83745B");
  return (
    <Layout title={"MxFuture"}>
      <MenuPackage />
      <Hero />
      <Introductions />
      <MxFutureProducts text={"Use Cases"} />
      <Exchange color={globalColor} href="/" />
      <WhatyouGet />
      <BenefitsToLeverage />
      <Solution />
      <NextProduct listofdata={MxFutureNextLink} />
      <FAQ />
      <Footer />
    </Layout>
  );
};
export default MxFuture;
