import Head from "next/head";
import styles from "@/styles/homepage.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

import Footer from "@/components/Footer";
import Achievements from "@/components/Achievments";
import Process from "@/components/Process";
import GetInTouch from "@/components/GetInTouch";
import TalkToExpert from "@/components/TalkToExpert";
export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT</title>
      </Head>
      <main>
        {/* Intro container */}
        <div className={styles.IntroContainer}>
          <Image src="/assets/images/mainicon.svg" fluid draggable={false} />
        </div>
        {/* Menu Sections */}
        <div className={styles.NftMenu}>
          <div>
            <Image src="/assets/images/xicon.svg" fluid />
          </div>
          <div>
            <Image src="/assets/images/menuicon.svg" fluid />
          </div>
          <div>
            <p className={styles.BlockchainTechnologyText}>
              BLOCKCHAIN TECHNOLOGY
            </p>
          </div>
        </div>
        {/* frame 1 -software development Experts*/}
        <div className={styles.SoftwareDevelopmentExpertsContainer}>
          <Row className={styles.SoftwareDevelopmentExpertsRow}>
            <Col xl={6}>
              <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
                <div className={styles.HomeMiniLine} />
                <span className={styles.HomeSmallHeading}>MobifinX Home</span>
              </div>
            </Col>
            <Col xl={6} className={styles.SoftwareDevelopmentExpertsBtnCol}>
              <div className={styles.RequestDemoButton}>
                Request a Demo <HiOutlineExternalLink />
              </div>
            </Col>
          </Row>

          <div className={styles.SoftwareDevelopmentExpertsBigHeadingContainer}>
            <h3 className={styles.SoftwareDevelopmentExpertsBigHeading}>
              We’re Crypto Coin Trading
              <br />
              Software Development Experts.
            </h3>
          </div>
          <Row className="mx-0">
            <Col xl={4}>
              <p>
                <MdKeyboardArrowRight />
                <MdKeyboardArrowRight />
                <MdKeyboardArrowRight /> Scroll Down
              </p>
            </Col>
            <Col xl={8}>
              <div className={styles.SoftwareDevelopmentExpertsSliderContainer}>
                <div className={styles.SoftwareDevelopmentExpertsBtnImages}>
                  <Image
                    fluid
                    src={"/assets/images/left-sb.svg"}
                    className={styles.SoftwareDevelopmentExpertSliderBtnLeft}
                  />
                  <Image
                    fluid
                    src={"/assets/images/right-sb.svg"}
                    className={styles.SoftwareDevelopmentExpertSliderBtnRight}
                  />
                </div>
                <div className={styles.SoftwareDevelopmentExpertSliderHeading}>
                  <div className={styles.HomeMiniLine} />
                  <span className={styles.HomeSmallHeading}>
                    Explore Products
                  </span>
                </div>
                <div>
                  {/* <div className={styles.SliderCard}>
                    <p>SliderCard</p>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Discover MOBIFINIX */}
        <div className={styles.DiscoverMobifinixContainer}>
          <Row className={styles.DiscoverMobifinixSubContainer}>
            <div className={styles.DiscoverMobifinixPara1Container}>
              <p className={styles.DiscoverMobifinixPara1}>
                MobifinX have expertise in serving on-demand business solutions
                with a special focus on safety, scale as well as performance.
              </p>
            </div>
            <div className={styles.DiscoverMobifinixPara2Container}>
              <p className={styles.DiscoverMobifinixPara2}>
                We are a leading Crypto Exchange Software Development company
                based in USA. We are fintech expert established in 2011 to
                deliver next-generation trading platforms to the businesses who
                want to take a deep dive into the crypto exchange field. We have
                a team of more than 100 highly experienced and skilled
                developers who are always ready to serve you at your conditions.
              </p>
            </div>
            <div className={styles.DiscoverMobifinxBtnContainer}>
              <div className={styles.DiscoverMobifinxBtn}>
                Discover MobifinX
                <span>
                  <HiOutlineExternalLink />
                </span>
              </div>
            </div>
          </Row>
          <div className={styles.DiscoverItemsContainer}>
            <Row className={styles.DiscoverItemsRow}>
              <Col xl={6}>
                <div className={styles.DiscoverBox}>
                  <div className={styles.DiscoverItemBox}>
                    <Image src="/assets/images/24hrfull.svg" />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    Partnership based on Common Goals and Trust
                  </p>
                </div>
              </Col>
              <Col xl={6}>
                <div className={styles.DiscoverBox}>
                  <div className={styles.DiscoverItemBox}>
                    <Image src="/assets/images/24hrfull.svg" />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    Localization Expertise with Global Footprint
                  </p>
                </div>
              </Col>
              <Col xl={6}>
                <div className={styles.DiscoverBox}>
                  <div className={styles.DiscoverItemBox}>
                    <Image src="/assets/images/24hrfull.svg" />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    IT Security Certified to protect customer data
                  </p>
                </div>
              </Col>
              <Col xl={6}>
                <div className={styles.DiscoverBox}>
                  <div className={styles.DiscoverItemBox}>
                    <Image src="/assets/images/24hrfull.svg" />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    Reduced Capex & Opex using Agile tools
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* Our Products */}
        <div className={styles.OurProductsContainer}>
          <h3 className={styles.OurProductsHeading}>Our Products</h3>
          <div className={styles.OurProductsCardsContainer}>
            {/* card */}

            {/*  */}
          </div>
        </div>
        <TalkToExpert />
        <Process />
        {/* be a part of future choice */}
        <div className={styles.FutureChoiceContainer}>
          <p className={styles.ReadBlog}>READ BLOGS</p>
          <h6 className={styles.BeApartOf}>BE A PART OF</h6>
          <h5 className={styles.FutureChoice}>FUTURE'S CHOICE!</h5>
          <div>
            <div className={styles.WannaReadBtn}>
              I wanna Read{" "}
              <HiOutlineExternalLink style={{ marginLeft: "1rem" }} />
            </div>
          </div>
        </div>
        {/* Achievements */}
        <Achievements />
        <GetInTouch />
        {/* Footer */}
        <Footer />
        {/* */}
      </main>
    </div>
  );
}
