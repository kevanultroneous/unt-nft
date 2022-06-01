import Head from "next/head";
import styles from "@/styles/homepage.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";

import Footer from "@/components/Home/Footer";
import Achievements from "@/components/Home/Achievments";
import Process from "@/components/Home/Process";
import GetInTouch from "@/components/Home/GetInTouch";
import TalkToExpert from "@/components/Home/TalkToExpert";
import Inspiredby from "@/components/Home/Inspiredby";
import Speciality from "@/components/Home/Speciality";
import TechnologyStack from "@/components/Home/TechnologyStack";

import { useContext, useEffect, useRef, useState } from "react";
import IntroContainer from "@/components/Home/IntroContainer";
import Menu from "@/components/Home/Menu";
import FutureChoice from "@/components/Home/FutureChoice";
import Discover from "@/components/Home/Discover";
import SDE from "@/components/Home/SoftwareDevelopmentExpert";
import Products from "@/components/Home/Products";
import Layout from "@/components/Common/Layout";
import SmoothScroll from "@/components/SmoothScroll.component";
import { motion } from "framer-motion";
export default function Home() {
  //
  const [on, setOn] = useState("0");

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let elem = document.getElementsByClassName("frame1")[0];
  //     let rect = elem.getBoundingClientRect();
  //     if (rect.y < 100) {
  //       setOn("1");
  //     } else {
  //       setOn("0");
  //     }
  //   });
  // });

  return (
    <Layout title={"Mobifinx | Home"}>
      <SmoothScroll>
        {/* Intro container */}
        <IntroContainer />
        {/* Menu Sections */}
        <Menu />
        {/* frame 1 -software development Experts*/}
        <SDE />
        {/* Discover MOBIFINIX */}
        <Discover />
        {/* Our Products */}
        <Products />
        {/* Expert */}
        <TalkToExpert />
        {/* TechnologyStack */}
        <TechnologyStack />
        {/* Speciality */}
        <Speciality />
        {/* Inspiredby */}
        <Inspiredby />
        {/* Process */}
        <Process />
        {/* be a part of future choice */}
        <FutureChoice />
        {/* Achievements */}
        <Achievements />
        {/* GetInTouch */}
        <GetInTouch />
        {/* Footer */}
        <Footer />
      </SmoothScroll>
    </Layout>
  );
}
