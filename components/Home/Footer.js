import styles from "@/styles/components/home/Footer.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Footer = () => {
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
            <div className={styles.FooterContactusLink}>Contact us</div>
            <HiOutlineExternalLink className={styles.ContactusIcon} />
          </div>
          <div>
            <IoLogoLinkedin style={{ fontSize: "30px" }} />
            <IoLogoFacebook
              style={{ fontSize: "30px", borderRadius: "1rem" }}
            />
            <AiFillTwitterSquare
              style={{ fontSize: "30px", borderRadius: "0.8rem" }}
            />
          </div>
        </Col>
        <Col xl={6} md={12} xs={12}>
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
              <p>Product List</p>

              <ul className={styles.SubLinks}>
                <li>Derivatives Trading</li>
                <li>Spot Trading</li>
                <li>NFT</li>
                <li>DeFi</li>
                <li>OTC Desk</li>
                <li>P2P Trading</li>
                <li>Private Blockchain and Tokenization</li>
                <li>
                  Fund Raising Launchpad
                  <br />
                  (IEO/ICO/IDO/IGO)
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
