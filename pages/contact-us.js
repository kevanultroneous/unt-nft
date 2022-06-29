import Layout from "@/components/Common/Layout";
import Footer from "@/components/Home/Footer";
import Menu from "@/components/Home/Menu";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/contactus/index.module.css";
import ActionButton from "@/components/Common/ActionButton";
import SmoothScroll from "@/components/SmoothScroll.component";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
const ContactUs = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 756 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <Layout title={"Mobifinx | Contact Us"}>
      <Menu />
      {/* <SmoothScroll> */}
      <div className={styles.ContactUsMainContainer}>
        <Row>
          <div className={styles.ContactUsHeading}>
            <div className={styles.MiniLine} />
            <span className={styles.SmallHeading}>MobifinX Contact</span>
          </div>
        </Row>

        <Row className={styles.SectionsRow}>
          <Col xl={12}>
            <div className={styles.FirstSection}>
              <p className={styles.FirstSectionSentence1}>Hey, My name is</p>
              <input
                type={"text"}
                placeholder="Name and Surname"
                className={styles.FirstSectionInput}
              />
              {!isMobile && (
                <p className={styles.FirstSectionSentence2}>kindly connect</p>
              )}
            </div>
          </Col>

          {isMobile && (
            <p className={styles.FirstSectionSentence1}>
              kindly connect with me through
            </p>
          )}
          <Col xl={12}>
            <div className={styles.SecondSection}>
              {!isMobile && (
                <p className={styles.FirstSectionSentence1}>with me through</p>
              )}
              <PhoneInput
                value={phoneValue}
                onChange={(phoneValue) => setPhoneValue(phoneValue)}
                country={"in"}
                placeholder="Phone number"
                enableSearch={true}
              />
              <p className={styles.FirstSectionSentence1}>or</p>
              <input
                type={"text"}
                placeholder="Mail ID"
                className={styles.FirstSectionInput}
              />
            </div>
          </Col>
          <Col xl={12}>
            <p className={styles.WantSentence}>
              I want to get in touch because,
            </p>
          </Col>
          <Col xl={12}>
            <input
              type={""}
              placeholder="Subject"
              className={styles.SubjectInput}
            />
          </Col>
        </Row>
        <div className={styles.ButtonSpace}>
          <ActionButton text={"Send a Message"} />
        </div>
      </div>
      <Footer />
      {/* </SmoothScroll> */}
    </Layout>
  );
};
export default ContactUs;
