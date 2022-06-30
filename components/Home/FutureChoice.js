import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/FutureChoice.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Col, Image, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const FutureChoice = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);

  return (
    <div className={styles.FutureChoiceContainer}>
      <Row>
        <Col xl={8} md={12}>
          <div
            className={`${styles.CardBg} ${c2 ? styles.CardBg2 : null}`}
            // onMouseLeave={() => setC1(false)}
            // onMouseOver={() => setC1(true)}
          >
            <Row>
              <Col xl={12}>
                <h5
                  className={`${styles.CardTitle}  ${
                    c2 ? styles.CardTitle2 : null
                  }`}
                >
                  <span style={{ color: "#7E7F91" }}>
                    Be a part of Future’s
                  </span>
                  <br />
                  Choice & Live it with us!
                </h5>
              </Col>
            </Row>
            <Row className={styles.ProfileContainer}>
              <Col xl={10} md={10} xs={8}>
                <div className={styles.CardProfile}>
                  <div>
                    <Image
                      alt="model"
                      src="/assets/images/model.png"
                      className={styles.ModelF}
                    />
                  </div>
                  <div className={styles.CardProfileDetailContainer}>
                    <p
                      className={`${styles.CardProfileName} ${
                        c2 ? styles.CardTitle2 : null
                      }`}
                    >
                      Hayen Phan
                    </p>
                    <p
                      className={`${styles.CardProfileDOB} ${
                        c2 ? styles.CardTitle2 : null
                      }`}
                    >
                      10th June 2022
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={2} md={2} xs={4} className={styles.Rightarrow}>
                <Image
                  alt="rightb"
                  src={
                    c2
                      ? "/assets/images/darkb.svg"
                      : "/assets/images/right-sb.svg"
                  }
                  className={styles.RightSb}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} md={12}>
          <div className={styles.MainHungry}>
            <div
              className={`${styles.HungryCard} ${
                c2 ? styles.HungryCard2 : null
              }`}
              onMouseOver={() => setC2(true)}
              onMouseLeave={() => setC2(false)}
            >
              <h5
                className={`${styles.HungryHeading} ${
                  c2 ? styles.HungryHeading2 : null
                }`}
              >
                Hungry for more?
              </h5>
              <p
                className={`${styles.HungryParagraph} ${
                  c2 ? styles.HungryParagraph2 : null
                }`}
              >
                Read more articles on our blog.
              </p>
              {c2 ? (
                <div className={styles.Outer}>
                  <div className={styles.Button}>
                    <div classNane={styles.Text}>Visit Blog Page</div>
                  </div>
                </div>
              ) : (
                <ActionButton
                  text={"Visit Blog Page"}
                  outerstyle={{ marginTop: "2.5rem" }}
                />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FutureChoice;
