import Layout from "@/components/Common/Layout";
import Footer from "@/components/Home/Footer";
import Menu from "@/components/Home/Menu";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/contactus/index.module.css";
import ActionButton from "@/components/Common/ActionButton";
import SmoothScroll from "@/components/SmoothScroll.component";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useRef, useState } from "react";
import CountryPicker from "@/components/Common/CountryPicker";
import MenuPackage from "@/components/Common/MenuPackage";
import Aos from "aos";
const ContactUs = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [captchas, setCaptchas] = useState("");
  const [country, setCountry] = useState("");
  const [defaultSelected, setDefaultSelected] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameerror, setNameError] = useState(false);
  const namef = useRef(null);
  const [numbererror, setNumberError] = useState(false);
  const numf = useRef(null);
  const [mailerror, setMailError] = useState(false);
  const mailf = useRef(null);

  const [subjecterror, setSubjectError] = useState(false);
  const subjectf = useRef(null);

  const [captchaerror, setCaptchaError] = useState(false);
  const captchaf = useRef(null);

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
  urlencoded.append("Phone", phoneValue);
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
  const nameInputOperation = (e) => {
    setName(e.target.value);
    if (!(name == "" || name.length < 2 || name.includes("https://"))) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const phoneInputOperation = (value, country) => {
    setPhoneValue(value);
    setCountry(country.name);
    if (phoneValue.length < 12 || phoneValue.length < 11) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
    if (!(phoneValue == "")) {
      setNumberError(false);
    }
    else {
      setNumberError(true);
    }
  };
  const mailInputOperation = (e) => {
    setEmail(e.target.value);
    if (!validateEmail3837482000049914001(email)) {
      setMailError(true);
    } else {
      setMailError(false);
    }
  };
  const subjectInputOperation = (e) => {
    setSubject(e.target.value);

    if (subject.length > 0) {
      setSubjectError(false);
    } else {
      setSubjectError(true);
    }
  };
  const captchaInputOperation = (e) => {
    setCaptchas(e.target.value);
    if (captchas.length >= 5) {
      setCaptchaError(false);
    } else {
      setCaptchaError(true);
    }
  };
  function validateEmail3837482000049914001(email) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return false;
    }
    return true;
  }
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
  const apicall = () => {
    if (
      name == "" ||
      name.length < 2 ||
      name.includes("https://") ||
      name.includes("http://")
    ) {
      setNameError(true);
      namef.current.focus();
    } else if (phoneValue == "" || phoneValue.length < 12) {
      setNumberError(true);
    } else if (validateEmail3837482000049914001(email) == false) {
      mailf.current.focus();
      setMailError(true);
    } else if (
      subject == "" ||
      subject.includes("https://") ||
      subject.includes("http://")
    ) {
      subjectf.current.focus();
      setSubjectError(true);
    } else if (captchas == "") {
      captchaf.current.focus();
      setCaptchaError(true);
    } else {
      fetch("https://crm.zoho.com/crm/WebToLeadForm", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setName("");
          setEmail("");
          setPhoneValue("");
          setSubject("");
          setCaptchas("");
          setDefaultSelected(true);
          setNameError(false);
          setNumberError(false);
          setMailError(false);
          setSubjectError(false);
          setCaptchaError(false);
          console.log(result);
          alert("thank you");
        })
        .catch((error) => console.l(error));
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 756 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Layout
      title={"Contact Us for your Crypto Startup | MobifinX"}
      description={
        "Have a question about our Product? Contact us 24 hours and 7 days a week for the best customer service! We are here to help you to get answer to your queries. Get in touch with MobifinX! Use our form and one of our expert will be in touch with you soon."
      }
    >
      <MenuPackage />
      {/* <SmoothScroll> */}
      <div
        className={styles.ContactUsMainContainer}
        data-aos="fade"
        data-aos-duration="2000"
      >
        <Row>
          <div className={styles.ContactUsHeading}>
            <div className={styles.MiniLine} />
            <span className={styles.SmallHeading}>MobifinX Contact</span>
          </div>
        </Row>

        <Row className={styles.SectionsRow}>
          <Col xl={12} md={12}>
            <div className={styles.FirstSection}>
              <p className={styles.FirstSectionSentence1}>Hey, My name is</p>
              <input
                ref={namef}
                style={nameerror ? { borderBottom: "1px solid red" } : null}
                type={"text"}
                value={name}
                onChange={(e) => nameInputOperation(e)}
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
          <Col xl={12} md={12}>
            <div className={styles.SecondSection}>
              {/*Tablet: giving some space so adjust PhoneInput */}
              {!isMobile && (
                <p
                  className={`${styles.FirstSectionSentence1} ${styles.FirstSectionSentenceSpace}`}
                >
                  with me through
                </p>
              )}
              <PhoneInput
                value={phoneValue}
                onChange={(value, country) =>
                  phoneInputOperation(value, country)
                }
                country={"in"}
                placeholder="Phone number"
                enableSearch={true}
                inputStyle={
                  numbererror ? { borderBottom: "1px solid red" } : null
                }
              />

              <p className={styles.FirstSectionSentence1}>And</p>
              {/* its a hide on tablet  */}
              <input
                ref={mailf}
                style={mailerror ? { borderBottom: "1px solid red" } : null}
                type={"text"}
                value={email}
                onChange={(e) => mailInputOperation(e)}
                placeholder="Mail ID"
                className={`${styles.FirstSectionInput} ${styles.SecondSectionInputHide}`}
              />
            </div>
          </Col>
          {/* saw only on tablet */}
          <Col xl={12} md={12} className={styles.TabWantContainer}>
            <input
              ref={mailf}
              style={mailerror ? { borderBottom: "1px solid red" } : null}
              type={"text"}
              value={email}
              onChange={(e) => mailInputOperation(e)}
              placeholder="Mail ID"
              className={`${styles.FirstSectionInput}`}
            />
            <p className={styles.WantSentence}>
              I want to get in touch because,
            </p>
          </Col>
          {/* want container HIDE ON Tab */}
          <Col xl={12} md={12} className={styles.WantContainer}>
            <p className={styles.WantSentence}>
              I want to get in touch because,
            </p>
          </Col>
          <Col xl={12} md={12}>
            <input
              ref={subjectf}
              style={subjecterror ? { borderBottom: "1px solid red" } : null}
              type={"text"}
              value={subject}
              onChange={(e) => subjectInputOperation(e)}
              placeholder="Subject"
              className={styles.SubjectInput}
            />
          </Col>
          <Col xl={12} md={12}>
            <Image
              alt="captcha"
              className={styles.CaptchaIcon}
              id="imgid3837482000049914001"
              src="https://crm.zoho.com/crm/CaptchaServlet?formId=edcc1a64ebc839c248bd5de426f3593a30a1ad9e01cc6c07d1d3fb05527fec90&grpid=8fbc781aa7ba6bcad5844bcf0b2acad2773ca0c450007f1ea3649808c18b175a"
            />
            <br />
            <div className={styles.CaptchaControllerContainer}>
              <input
                ref={captchaf}
                style={captchaerror ? { borderBottom: "1px solid red" } : null}
                className={styles.CaptchaInput}
                type="text"
                maxLength="10"
                name="enterdigest"
                value={captchas}
                placeholder="Enter Captcha code"
                onChange={(e) => captchaInputOperation(e)}
              />
              <label
                className={styles.ReloadText}
                onClick={() => reloadImg3837482000049914001()}
              >
                Reload
              </label>
            </div>
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
