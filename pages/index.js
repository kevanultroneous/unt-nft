import Footer from "@/components/Home/Footer";
import Process from "@/components/Home/Process";
import TalkToExpert from "@/components/Home/TalkToExpert";
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
import SmoothScroll from "@/components/SmoothScroll.component";
import Exchange from "@/components/Home/Exchange";
export default function Home() {
  //
  const [on, setOn] = useState("1");
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const [pos1, setPos1] = useState(null);
  const [pos2, setPos2] = useState(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  // useEffect(() => {
  //   const timer1 = setTimeout(() => {
  //     setPos2(true);
  //     console.log("called");
  //   }, 10);
  //   const timer2 = setTimeout(() => {
  //     clearTimeout(timer1);
  //     setPos1(true);
  //   }, 1000);
  //   const timer3 = setTimeout(() => {
  //     clearTimeout(timer2);
  //     setPos2(false);
  //   }, 5000);
  //   return () => clearTimeout(timer3);
  // }, []);
  return (
    <Layout title={"Mobifinx | Home"}>
      {/* Intro container */}
      {/* {pos1 ? <Menu opacity={on} /> : null} */}
      <Menu opacity={on} />
      {/* <SmoothScroll> */}
      {/* {pos2 ? (
        <section>
          <IntroContainer />
        </section>
      ) : pos2 !== null ? (
        <> */}
      <section ref={section1}>
        <SDE handleClick={() => scrollToRef(section2)} />
      </section>

      {/* handleclick={() => {
     scrollToRef(section1);
   }} */}
      {/* Menu Sections */}
      {/* frame 1 -software development Experts*/}
      {/* Discover MOBIFINIX */}
      <section ref={section2}>
        <Discover />
      </section>
      {/* Our Products */}
      <Products />
      {/* Exchange */}
      <Exchange />
      {/* Expert */}
      {/* <TalkToExpert /> */}
      {/* TechnologyStack */}
      {/* <TechnologyStack /> */}

      {/* Inspiredby */}
      <Inspiredby />
      {/* Process */}
      <Process />
      {/* be a part of future choice */}
      <FutureChoice />
      {/* Achievements */}
      {/* <Achievements /> */}
      {/* Speciality */}
      <Speciality />
      {/* GetInTouch */}
      {/* <GetInTouch /> */}
      {/* Footer */}
      <Footer />
      {/* </>
      ) : null} */}
      {/* </SmoothScroll> */}
    </Layout>
  );
}
