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
import CountryPicker from "@/components/Common/CountryPicker";
const ContactUs = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [captchas, setCaptchas] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  useEffect(() => {
    window.innerWidth < 756 ? setIsMobile(true) : setIsMobile(false);
  }, []);

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
  urlencoded.append("Last Name", name);
  urlencoded.append("Phone", phone);
  urlencoded.append("Email", email);
  urlencoded.append("LEADCF34", country);
  urlencoded.append("Description", subject);
  urlencoded.append("Lead Source", "Web Generated");
  urlencoded.append("LEADCF27", "Govt. & Tendering SI");
  urlencoded.append("enterdigest", captchas);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const apicall = () => {
    fetch("https://crm.zoho.com/crm/WebToLeadForm", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert(error));
  };

  const [isMobile, setIsMobile] = useState(false);
  function reloadImg3837482000049914001() {
    var captcha = document.getElementById("imgid3837482000049914001");
    if (captcha.src.indexOf("&d") !== -1) {
      captcha.src =
        captcha.src.substring(0, captcha.src.indexOf("&d")) +
        "&d" +
        new Date().getTime();
    } else {
      captcha.src = captcha.src + "&d" + new Date().getTime();
    }
  }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(value, country) => {
                  setCountry(country);
                  setPhone(value);
                }}
                country={"in"}
                placeholder="Phone number"
                enableSearch={true}
              />
              {/* <CountryPicker selection={(e) => setCountry(e.target.value)} /> */}
              <p className={styles.FirstSectionSentence1}>or</p>
              <input
                type={"text"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className={styles.SubjectInput}
            />
            <input
              type="text"
              maxlength="10"
              name="enterdigest"
              value={captchas}
              placeholder="Enter Captcha code"
              onChange={(e) => setCaptchas(e.target.value)}
            />
            <img
              id="imgid3837482000049914001"
              src="https://crm.zoho.com/crm/CaptchaServlet?formId=edcc1a64ebc839c248bd5de426f3593a30a1ad9e01cc6c07d1d3fb05527fec90&grpid=8fbc781aa7ba6bcad5844bcf0b2acad2773ca0c450007f1ea3649808c18b175a"
            />
            <button onClick={() => reloadImg3837482000049914001()}>
              reload captcha
            </button>
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
