const { Row, Image, Col } = require("react-bootstrap");
const { HiOutlineExternalLink } = require("react-icons/hi");
import styles from "@/styles/components/home/Discover.module.css";
import AOS from "aos";
import { useEffect } from "react";
import ActionButton from "../Common/ActionButton";
const Discover = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const arrayBox = [
    {
      image: "/assets/images/24hrfull.svg",
      text: "Partnership based on Common Goals and Trust",
    },
    {
      image: "/assets/images/24hrfull.svg",
      text: "Localization Expertise with Global Footprint",
    },
    {
      image: "/assets/images/24hrfull.svg",
      text: "IT Security Certified to protect customer data",
    },
    {
      image: "/assets/images/24hrfull.svg",
      text: "Reduced Capex & Opex using Agile tools",
    },
  ];
  return (
    <div className={styles.DiscoverMobifinixContainer}>
      <Row className={styles.DiscoverMobifinixSubContainer}>
        <div className={styles.DiscoverMobifinixPara1Container}>
          <p
            className={styles.DiscoverMobifinixPara1}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Redefining Trading Technologies
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
              text={
                <>
                  Discover MobifinX&nbsp;&nbsp;
                  <span>
                    <HiOutlineExternalLink />
                  </span>
                </>
              }
            />
          </div>
        </div>
      </Row>

      <div className={styles.DiscoverItemsContainer}>
        <Row className={styles.DiscoverItemsRow}>
          {arrayBox.map((value, index) => (
            <Col xl={5} xs={6} md={6} key={index}>
              <div
                className={styles.DiscoverBox}
                // data-aos="zoom-in"
                // data-aos-duration="2000"
              >
                <div className={styles.DiscoverItemBox}>
                  <Image src={value.image} />
                </div>
                <p className={styles.DiscoverItemParagraph}>{value.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Discover;
