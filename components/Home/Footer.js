import styles from "@/styles/components/home/Footer.module.css";
import { Button, Col, Image, Row } from "react-bootstrap";
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
            <form
              className={styles.SubscriptionForm}
              method="POST"
              id="zcampaignOptinForm"
              action="https://nqtl-zgph.maillist-manage.com/weboptin.zc"
              target="_zcSignup"
            >
              <div
                style={{
                  backgroundColor: "rgb(255, 235, 232)",
                  padding: "10px",
                  color: "rgb(210, 0, 0)",
                  fontSize: "11px",
                  margin: "20px 10px 0px",
                  border: "1px solid rgb(255, 217, 211)",
                  opacity: "1",
                  display: "none",
                }}
                id="errorMsgDiv"
              >
                Please correct the marked field(s) below.
              </div>
              <div className="SIGNUP_FLD">
                <div className={styles.MailInput}>
                  <input
                    required
                    type={"email"}
                    placeholder="Enter your Mail"
                    changeitem="SIGNUP_FORM_FIELD"
                    name="CONTACT_EMAIL"
                    id="EMBED_FORM_EMAIL_LABEL"
                  />
                </div>
              </div>

              <div className={styles.MailBtn}>
                <div className={styles.FooterSendButton}></div>
              </div>

              <input type="hidden" id="fieldBorder" value="" />
              <input
                type="hidden"
                id="submitType"
                name="submitType"
                value="optinCustomView"
              />
              <input
                type="hidden"
                id="emailReportId"
                name="emailReportId"
                value=""
              />
              <input
                type="hidden"
                id="formType"
                name="formType"
                value="QuickForm"
              />
              <input type="hidden" name="zx" id="cmpZuid" value="12dbd3c07" />
              <input type="hidden" name="zcvers" value="3.0" />
              <input
                type="hidden"
                name="oldListIds"
                id="allCheckedListIds"
                value=""
              />
              <input
                type="hidden"
                id="mode"
                name="mode"
                value="OptinCreateView"
              />
              <input
                type="hidden"
                id="zcld"
                name="zcld"
                value="195a18787ca15b11"
              />
              <input type="hidden" id="zctd" name="zctd" value="" />
              <input type="hidden" id="document_domain" value="" />
              <input
                type="hidden"
                id="zc_Url"
                value="nqtl-zgph.maillist-manage.com"
              />
              <input type="hidden" id="new_optin_response_in" value="0" />
              <input type="hidden" id="duplicate_optin_response_in" value="0" />
              <input
                type="hidden"
                name="zc_trackCode"
                id="zc_trackCode"
                value="ZCFORMVIEW"
              />
              <input
                type="hidden"
                id="zc_formIx"
                name="zc_formIx"
                value="3z5ce9c16be8709aa8aa22ac8ddde609847c7c40617ba32586d78cf79bec7cc268"
              />
              <input type="hidden" id="viewFrom" value="URL_ACTION" />
              <span style={{ display: "none" }} id="dt_CONTACT_EMAIL">
                1,true,6,Contact Email,2
              </span>

              <button
                type="submit"
                name="SIGNUP_SUBMIT_BUTTON"
                id="zcWebOptin"
                value="Join Now"
                style={{ background: "none", border: "none" }}
              >
                <Image alt="send" src="/assets/images/sendBtn.svg" />
              </button>
            </form>
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
