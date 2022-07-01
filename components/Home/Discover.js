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
          <p
            className={styles.DiscoverMobifinixPara1}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Your Companion for Digital Asset Trading Suite
          </p>
        </div>
        <div className={styles.DiscoverMobifinixPara2Container}>
          <p
            className={styles.DiscoverMobifinixPara2}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            We are a leading Crypto Exchange Software Development company based
            in USA. We are fintech expert established in 2011 to deliver
            next-generation trading platforms to the businesses who want to take
            a deep dive into the crypto exchange field. We have a team of more
            than 100 highly experienced and skilled developers who are always
            ready to serve you at your conditions.
          </p>
        </div>
        <div className={styles.DiscoverMobifinxBtnContainer}>
          <div
          // data-aos="zoom-in" data-aos-duration="2000"
          >
            <ActionButton
              href={"/"}
              text={
                <>
                  Discover MobifinX&nbsp;
                  <span>
                    <HiOutlineExternalLink />
                  </span>
                </>
              }
            />
          </div>
        </div>
      </Row>
      <Row className={styles.DiscoverMobifinixRowsUniq}>
        {/* <Col>
          <Row> */}
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        {/* </Row>
        </Col> */}
        <Col>
          <div className={styles.DiscoverItemsContainer}>
            <Row className={styles.DiscoverItemsRow}>
              <Col xl={6} xs={6} md={6}>
                <div
                  className={styles.DiscoverBox}
                  data-aos="fade"
                  data-aos-duration="3000"
                  data-aos-delay="500"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image alt={arrayBox[0].image} src={arrayBox[0].image} />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[0].text}
                  </p>
                </div>
              </Col>
              <Col xl={6} xs={6} md={6}>
                <div
                  className={styles.DiscoverBox}
                  data-aos="fade"
                  data-aos-duration="3000"
                  data-aos-delay="500"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image alt={arrayBox[1].image} src={arrayBox[1].image} />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[1].text}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={styles.DiscoverItemsRow}>
              <Col xl={6} xs={6} md={6}>
                <div
                  className={styles.DiscoverBox}
                  data-aos="fade"
                  data-aos-duration="3000"
                  data-aos-delay="800"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image alt={arrayBox[2].image} src={arrayBox[2].image} />
                  </div>
                  <p className={styles.DiscoverItemParagraph}>
                    {arrayBox[2].text}
                  </p>
                </div>
              </Col>
              <Col xl={6} xs={6} md={6}>
                <div
                  className={styles.DiscoverBox}
                  data-aos="fade"
                  data-aos-duration="3000"
                  data-aos-delay="800"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                >
                  <div className={styles.DiscoverItemBox}>
                    <Image alt={arrayBox[3].image} src={arrayBox[3].image} />
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
