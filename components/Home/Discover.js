const { Row, Image, Col } = require("react-bootstrap");
const { HiOutlineExternalLink } = require("react-icons/hi");
import styles from "@/styles/components/home/Discover.module.css";
import AOS from "aos";
import { useEffect } from "react";
import Lottie from "react-lottie";
import ActionButton from "../Common/ActionButton";
import animdata from "../../utils/anim.json";
const Discover = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const arrayBox = [
    {
      image: "/assets/images/trading4.svg",
      text: "15+ years of experience in blockchain and fintech services",
    },
    {
      image: "/assets/images/trading3.svg",
      text: "Partnership based on Common Goals and Trust",
    },
    {
      image: "/assets/images/disc3.svg",
      text: "Technology experts in modular system architecture",
    },
    {
      image: "/assets/images/trading1.svg",
      text: "OWASP and SoC2 compliance expert",
    },
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animdata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.DiscoverMobifinixContainer}>
      <Row className={styles.DiscoverMobifinixSubContainer}>
        <div className={styles.DiscoverMobifinixPara1Container}>
          <p className={styles.DiscoverMobifinixPara1}>
            Your Companion for Digital Asset Trading Suite
          </p>
        </div>
        <div className={styles.DiscoverMobifinixPara2Container}>
          <p className={styles.DiscoverMobifinixPara2}>
            We are a leading crypto exchange software development company based
            in the USA established in 2016. Mobifinx is a tech partner that
            enables Banks, Institutional Investors, Hedge Funds, Cryptocurrency
            Owners, Stock exchanges and Broker-Dealers to efficiently roll out
            and scale the Trading Ecosystem to take the leap without hassles by
            offering multiple well-tested blockchain products for consumers.
          </p>
        </div>
        <div className={styles.DiscoverMobifinxBtnContainer}>
          <div>
            <ActionButton
              href={"/contact-us"}
              text={
                <>
                  Discover MobifinX
                  <span className={styles.BtnSpan}>
                    <HiOutlineExternalLink />
                  </span>
                </>
              }
            />
          </div>
        </div>
      </Row>
      <Row className={styles.DiscoverMobifinixRowsUniq}>
        <Col className={styles.Animcol} xs={12} xl={6} md={6}>
          <Row>
            {/* <Image
              src="/assets/images/anim2.gif"
              alt={"anim"}
              className={styles.AnimImage}
            /> */}
            <Image
              src="/assets/images/Arrowanim.gif"
              alt={"anim"}
              className={styles.AnimImage}
            />
            {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
          </Row>
        </Col>
        <Col className={styles.Discovercol} xs={12} xl={6} md={6}>
          <div
            className={styles.DiscoverItemsContainer}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Row className={styles.DiscoverItemsRow}>
              <Col xl={6} xs={4} md={6}>
                <div
                  className={styles.DiscoverBox}
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-delay="300"
                  // data-aos-easing="ease"
                  // data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image
                      alt={arrayBox[0].image}
                      src={arrayBox[0].image}
                      className={styles.Discoverimg}
                    />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[0].text}
                  </p>
                </div>
              </Col>
              <Col xl={6} xs={4} md={6}>
                <div
                  className={styles.DiscoverBox}
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-delay="300"
                  // data-aos-easing="ease"
                  // data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image
                      alt={arrayBox[1].image}
                      src={arrayBox[1].image}
                      className={styles.Discoverimg}
                    />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[1].text}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.DiscoverItemsRow}>
              <Col xl={6} xs={4} md={6}>
                <div
                  className={styles.DiscoverBox}
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-delay="300"
                  // data-aos-easing="ease"
                  // data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image
                      alt={arrayBox[2].image}
                      src={arrayBox[2].image}
                      className={styles.Discoverimg}
                    />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[2].text}
                  </p>
                </div>
              </Col>
              <Col xl={6} xs={4} md={6}>
                <div
                  className={styles.DiscoverBox}
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-delay="300"
                  // data-aos-easing="ease"
                  // data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image
                      alt={arrayBox[3].image}
                      src={arrayBox[3].image}
                      className={styles.Discoverimg}
                    />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[3].text}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Discover;
