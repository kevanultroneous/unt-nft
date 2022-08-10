import Alliance from "@/components/About-us/Alliance";
import ActionButton from "@/components/Common/ActionButton";
import ActionButtonV2 from "@/components/Common/ActionButtonV2";
import AllianceForCommon from "@/components/Common/AllianceForCommon";
import Layout from "@/components/Common/Layout";
import MainTitle from "@/components/Common/MainTitle";
import MenuPackage from "@/components/Common/MenuPackage";
import SoftwareDevelopment from "@/components/Common/SoftwareDevelopment";
import Footer from "@/components/Home/Footer";
import { CardInspired } from "@/components/Home/Inspiredby";
import styles from "@/styles/components/CaseStudy/index.module.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import Lottie from "react-lottie";
import animation from "../utils/New-2-scroll.json";

const CaseStudy = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const carddatas = [
    {
      animtype: "fade-up",
      srcimg: "/assets/images/CS1.png",
      title: "EtherGo blockchain-based fundraising platform",
      paragraph: "In this case, the client wanted a blockchai",
      distitle: "EtherGo blockchain-based fundraising platform",
      dish1: "Problem",
      disp1:
        "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising.",
      dish2: "Solution",
      disp2:
        "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors.",
    },
    {
      animtype: "fade-up",
      srcimg: "/assets/images/CS2.png",
      title: "EtherGo blockchain-based fundraising platform",
      paragraph: "In this case, the client wanted a blockchai",
      distitle: "EtherGo blockchain-based fundraising platform",
      dish1: "Problem",
      disp1:
        "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising.",
      dish2: "Solution",
      disp2:
        "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors.",
    },
    {
      animtype: "fade-up",
      srcimg: "/assets/images/CS3.png",
      title: "EtherGo blockchain-based fundraising platform",
      paragraph: "In this case, the client wanted a blockchai",
      distitle: "EtherGo blockchain-based fundraising platform",
      dish1: "Problem",
      disp1:
        "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising.",
      dish2: "Solution",
      disp2:
        "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors.",
    },
  ];
  const categories = [
    "All",
    "MxTrade",
    "MxFuture",
    "MxDex",
    "MxFi",
    "MxLaunch",
    "MxWallet",
    "MxBlock",
    "MxNFT",
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Layout title={"case-study"}>
      {/* menu package */}
      <MenuPackage />
      {/*  main container  for main title container */}
      <div className={styles.MainTitleContain}>
        <MainTitle
          title={"MobifinX Case Studies"}
          btntext={"Try Free Demo"}
          href=""
        />
      </div>
      <div className={styles.CaseStudyContainer}>
        {/* heading row */}
        {/* made this component duplicate */}
        <Row className={styles.TitleForTab}>
          <h4 className={styles.HeadingText}>Get inspired by Case Studies</h4>
        </Row>
        {/* cards and side mini actions bar */}
        <Row className={styles.CenterModeTab}>
          <Col xl={2} lg={2}>
            <div className={styles.ScrollDownContainer}>
              <div>
                <Lottie options={defaultOptions} height={100} width={50} />
              </div>
            </div>
            <div className={styles.TabSection}>
              <p className={styles.CategoriesTitle}>Categories</p>
              {categories.map((value, index) => (
                <p
                  key={index}
                  className={`${styles.CategoriesList} ${
                    index === currentTab &&
                    `${styles.CategoriesListSelected} ${styles.BorderSelected}`
                  }`}
                  onClick={() => setCurrentTab(index)}
                >
                  {value}
                </p>
              ))}
            </div>
          </Col>
          <Col xl={5} lg={5} md={5} className={styles.LeftCol}>
            {carddatas.map((v, i) => (
              <div className={styles.CardWrraper} key={i}>
                <CardInspired
                  animtype={v.animtype}
                  srcimg={v.srcimg}
                  style={styles.InspiredCardSpace}
                  inspireTitle={v.title}
                  inspireParagraph={v.paragraph}
                  disTitle={v.distitle}
                  dish1={v.dish1}
                  disp1={v.disp1}
                  dish2={v.dish2}
                  disp2={v.disp2}
                />
              </div>
            ))}
          </Col>
          <Col md={5} xl={5} lg={5} className={styles.RightCol}>
            {carddatas.map((v, i) => (
              <div className={styles.CardWrraper} key={i}>
                <CardInspired
                  animtype={v.animtype}
                  srcimg={v.srcimg}
                  style={styles.InspiredCardSpace}
                  inspireTitle={v.title}
                  inspireParagraph={v.paragraph}
                  disTitle={v.distitle}
                  dish1={v.dish1}
                  disp1={v.disp1}
                  dish2={v.dish2}
                  disp2={v.disp2}
                />
              </div>
            ))}
            <div className={styles.VisibilityTabOff}>
              <h4 className={styles.CardRightSectionBottomTitle}>
                Want to Experience Our platforms?
              </h4>
              <div className={styles.ButtonWrraper}>
                <ActionButton
                  text={
                    <div className={styles.ButtonText}>
                      <span>Yes, Please</span> <HiOutlineExternalLink />
                    </div>
                  }
                />
              </div>
            </div>
          </Col>
          {/* for only tablet */}
          <Col md={12} className={styles.VisibilityTabOn}>
            <div>
              <h4 className={styles.CardRightSectionBottomTitle}>
                Want to Experience Our platforms?
              </h4>
              <div className={styles.ButtonWrraper}>
                <ActionButton
                  text={
                    <div className={styles.ButtonText}>
                      <span>Yes, Please</span> <HiOutlineExternalLink />
                    </div>
                  }
                />
              </div>
            </div>
          </Col>
          {/* for only tablet section over */}
          {/* </Col> */}
        </Row>
      </div>
      {/* Alliance section */}
      <AllianceForCommon />
      {/* Footer section */}
      <Footer />
    </Layout>
  );
};
export default CaseStudy;
