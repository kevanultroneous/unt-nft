import styles from "@/styles/components/home/Footer.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
const Footer = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.FooterContainer}>
      <Row className="mx-0">
        <Col xl={6} md={6}>
          <h4 className={styles.SubscribeHeading}>
            Subscribe to our Newsletter
          </h4>
        </Col>
        <Col xl={6} md={12} className={styles.MailContainerSpace}>
          <div className={styles.MailContainer}>
            <div className={styles.MailInput}>
              <input type={"email"} placeholder="Enter your Mail" />
            </div>
            <div className={styles.MailBtn}>
              <div className={styles.FooterSendButton}>
                <Image alt="send" src="/assets/images/sendBtn.svg" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.FooterLinksContainer}>
        <Col xl={6} md={6}>
          <div className="d-flex align-items-center">
            <Link href="/get-in-touch">
              <div className={styles.FooterContactusLink}>
                Explore{" "}
                <div className={styles.Pulse}>
                  <HiOutlineExternalLink
                    className={styles.ContactusIcon}
                    style={{ color: "#ccc" }}
                    size={50}
                  />
                </div>
              </div>
            </Link>
          </div>
        </Col>
        <Col xl={6} md={6} className={styles.FooterIconCol}>
          <div
            className={`${styles.FooterIconContainer} ${styles.FooterIconHelper}`}
          >
            <div className="d-flex">
              <a href="mailto:sales@mobifinx.com">
                <span className={styles.MailText}>
                  <HiMail className={styles.MailIconHover} />
                  sales@mobifinx.com
                </span>
              </a>
              {/* </a> */}
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/mobifinx/">
                <a href="https://www.linkedin.com/company/mobifinx/">
                  <IoLogoLinkedin
                    style={{ fontSize: "35px" }}
                    className={styles.IconHover}
                  />
                </a>
              </Link>
              <Link href="https://www.facebook.com/Mobifinx/">
                <a href="https://www.facebook.com/Mobifinx/">
                  <IoLogoFacebook
                    style={{ fontSize: "35px", borderRadius: "1rem" }}
                    className={styles.IconHover}
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/MobifinX">
                <a href="https://twitter.com/MobifinX">
                  <AiFillTwitterSquare
                    style={{ fontSize: "35px", borderRadius: "0.8rem" }}
                    className={styles.IconHover}
                  />
                </a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
