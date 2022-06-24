import styles from "@/styles/components/home/Footer.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useEffect } from "react";
import { ImMail } from "react-icons/im";
import AOS from "aos";
const Footer = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.FooterContainer}>
      <Row className="mx-0">
        <Col xl={6}>
          <h4 className={styles.SubscribeHeading}>
            Subscribe to our Newsletter
          </h4>
        </Col>
        <Col xl={6}>
          <div className={styles.MailContainer}>
            <div className={styles.MailInput}>
              <input type={"email"} placeholder="Enter your Mail" />
            </div>
            <div className={styles.MailBtn}>
              <div className={styles.FooterSendButton}>
                <Image src="/assets/images/sendBtn.svg" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.FooterLinksContainer}>
        <Col xl={6}>
          <div className="d-flex align-items-center">
            <div className={styles.FooterContactusLink}>Explore</div>
            <HiOutlineExternalLink className={styles.ContactusIcon} />
          </div>
        </Col>
        <Col xl={6} className={styles.FooterIconCol}>
          <div
            className={`${styles.FooterIconContainer} ${styles.FooterIconHelper}`}
          >
            <div className="d-flex">
              <span className={styles.MailText}>
                <ImMail className={styles.MailIconHover} />
                Sales@mobifinx.com
              </span>
            </div>
            <div>
              <IoLogoLinkedin
                style={{ fontSize: "35px" }}
                className={styles.IconHover}
              />
              <IoLogoFacebook
                style={{ fontSize: "35px", borderRadius: "1rem" }}
                className={styles.IconHover}
              />
              <AiFillTwitterSquare
                style={{ fontSize: "35px", borderRadius: "0.8rem" }}
                className={styles.IconHover}
              />
            </div>
          </div>
        </Col>
        {/* <Col xl={6} md={12} xs={12}>
          <Row className="mx-0">
            <Col xl={3} md={3} xs={6} className="p-0">
              <ul className={styles.MainLinks}>
                <li>Home</li>
                <li>About us</li>
                <li>Insights</li>
                <li>Resources</li>
                <li>Contact us</li>
              </ul>
            </Col>
            <Col
              xl={4}
              md={5}
              xs={6}
              className="p-0 pt-md-5 p-xl-0 p-lg-0 pt-4"
            >
              <p>Product</p>
              <Row>
                <Col>
                  <ul className={styles.SubLinks}>
                    <li>MxTrade</li>
                    <li>MxFuture</li>
                    <li>MxDex</li>
                    <li>MxFi</li>
                  </ul>
                </Col>
                <Col>
                  <ul className={`${styles.SubLinks}`}>
                    <li>MxFund</li>
                    <li>MxWallet</li>
                    <li>MxBlock</li>
                    <li>MxNFT</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </div>
  );
};
export default Footer;
