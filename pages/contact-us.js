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


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append(
    "Cookie",
    "6e4b8efee4=66e037a99a8b94784e93bb5600654f54; JSESSIONID=3A739F7C0CAE92AB54D631A5874B99A7; _zcsr_tmp=ed2c34a3-442e-41b1-b6df-41cc2e937d38; crmcsr=ed2c34a3-442e-41b1-b6df-41cc2e937d38"
  );

  var urlencoded = new URLSearchParams();
  urlencoded.append(
    "xnQsjsdp",
    "8fbc781aa7ba6bcad5844bcf0b2acad2773ca0c450007f1ea3649808c18b175a"
  );
  urlencoded.append("zc_glad", "");
  urlencoded.append(
    "xmIwtLD",
    "edcc1a64ebc839c248bd5de426f3593a30a1ad9e01cc6c07d1d3fb05527fec90"
  );
  urlencoded.append("actionType", "TGVhZHM=");
  urlencoded.append("ldeskuid", "");
  urlencoded.append("LDTuvid", "");
  urlencoded.append("Last Name", "Niravbhai");
  urlencoded.append("Phone", "9878987898");
  urlencoded.append("Email", "niravbhai@gmail.com");
  urlencoded.append("LEADCF34", "India");
  urlencoded.append("Description", "");
  urlencoded.append("Lead Source", "Web Generated");
  urlencoded.append("LEADCF27", "Govt. & Tendering SI");
  urlencoded.append("enterdigest", "6nwfpc");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const apicall = () => {
    fetch("https://crm.zoho.com/crm/WebToLeadForm", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

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

              type={"text"}

              placeholder="Subject"
              className={styles.SubjectInput}
            />
          </Col>
        </Row>
        <div className={styles.ButtonSpace}>

          <ActionButton
            text={"Send a Message"}
            handleAction={() => apicall()}
          />
        </div>
      </div>
      <Footer />
      {/* </SmoothScroll> */}
    </Layout>
  );
};
export default ContactUs;
