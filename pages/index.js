import Process from "@/components/Home/Process";
import Inspiredby from "@/components/Home/Inspiredby";
import Speciality from "@/components/Home/Speciality";
import React, { useEffect, useRef, useState } from "react";
import IntroContainer from "@/components/Home/IntroContainer";
import Menu from "@/components/Home/Menu";
import FutureChoice from "@/components/Home/FutureChoice";
import Discover from "@/components/Home/Discover";
import SDE from "@/components/Home/SoftwareDevelopmentExpert";
import Products from "@/components/Home/Products";
import Layout from "@/components/Common/Layout";
import Exchange from "@/components/Home/Exchange";
import WhatWillYouGetWithUs from "@/components/Home/WhatWillYouGetWithUs";
import Footer from "@/components/Home/Footer";
import SmoothScroll from "@/components/SmoothScroll.component";
import MenuBar from "@/components/Common/MenuBar";
import MenuPackage from "@/components/Common/MenuPackage";
import Parallax from "@/components/Home/Parallax";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";

export default function Home() {
  const [on, setOn] = useState("1");
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const [pos1, setPos1] = useState(null);
  const [pos2, setPos2] = useState(null);
  const [menubaropacity, setMenuBarOpacity] = useState("none");
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const [cursor, setCursor] = useState(false);

  // useEffect for  Animated Section
  useEffect(() => {
    setCursor(true);
    const timer1 = setTimeout(() => {
      setPos2(true);
      console.log("called");
    }, 10);
    const timer2 = setTimeout(() => {
      clearTimeout(timer1);
      setPos1(true);
    }, 1000);
    const timer3 = setTimeout(() => {
      clearTimeout(timer2);
      setPos2(false);
    }, 5000);
    return () => clearTimeout(timer3);
  }, []);

  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <Layout
      title={
        " Blockchain and Crypto products - All in one exchange product | Mobifinx"
      }
      description={
        " MobifinX is a Leading Crypto and Enterprise Blockchain Solutions Provider that provides DEFI Products, Fundraising Platform, NFT Marketplace, Dex Trading, Spot Trading, OTC Desk, P2P Trading, Margin and Derivatives Exchange for individuals, startups and entrepreneurs."
      }
    >
      <Head>
        <meta
          property="og:image"
          content="https://mobifinx.com/assets/images/OG-Homepage.jpg"
        />
      </Head>
      {/* {cursor ? (
        <AnimatedCursor
          innerSize={10}
          outerSize={50}
          color="193, 35, 63"
          outerAlpha={0.1}
          innerScale={0.1}
          outerScale={2}
        />
      ) : null} */}
      {/* Intro container */}
      {pos1 ? <MenuPackage /> : null}
      {/* <SmoothScroll> */}
      {pos2 ? (
        <section>
          <IntroContainer />
        </section>
      ) : pos2 !== null ? (
        <>
          <section ref={section1}>
            <SDE handleClick={() => scrollToRef(section2)} />
          </section>
          {/* Discover MOBIFINIX */}
          <section ref={section2}>
            <Discover />
          </section>
          {/* Our Products */}
          <Products />
          {/* Exchange */}
          <Exchange href={"/get-in-touch"} />
          {/* Get with us */}
          <WhatWillYouGetWithUs />
          {/* Inspiredby */}
          <Inspiredby />
          {/* Process */}
          <Process />
          {/* be a part of future choice */}
          <FutureChoice />
          {/* Speciality */}
          {/* <Speciality /> */}
          <Parallax />

          {/* Footer */}
          <Footer />
        </>
      ) : null}
      {/* </SmoothScroll> */}
    </Layout>
  );
}
