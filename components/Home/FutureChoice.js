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
            className={`${styles.CardBg} ${c1 ? styles.CardBg2 : null}`}
            onMouseLeave={() => setC1(false)}
            onMouseOver={() => setC1(true)}
          >
            <Row>
              <Col xl={12}>
                <h5
                  className={`${styles.CardTitle}  ${
                    c1 ? styles.CardTitle2 : null
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
                      src="/assets/images/model.png"
                      className={styles.ModelF}
                    />
                  </div>
                  <div className={styles.CardProfileDetailContainer}>
                    <p
                      className={`${styles.CardProfileName} ${
                        c1 ? styles.CardTitle2 : null
                      }`}
                    >
                      Hayen Phan
                    </p>
                    <p
                      className={`${styles.CardProfileDOB} ${
                        c1 ? styles.CardTitle2 : null
                      }`}
                    >
                      10th June 2022
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={2} md={2} xs={4}>
                <Image
                  src={
                    c1
                      ? "/assets/images/darkb.svg"
                      : "/assets/images/right-sb.svg"
                  }
                  className={styles.rightSb}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} md={12}>
          <div className={styles.MainHungry}>
            <div
              className={`${styles.HungryCard} ${
                c1 ? styles.HungryCard2 : null
              }`}
              onMouseOver={() => setC1(true)}
              onMouseLeave={() => setC1(false)}
            >
              <h5
                className={`${styles.HungryHeading} ${
                  c1 ? styles.HungryHeading2 : null
                }`}
              >
                Hungry for more?
              </h5>
              <p
                className={`${styles.HungryParagraph} ${
                  c1 ? styles.HungryParagraph2 : null
                }`}
              >
                Read more articles on our blog.
              </p>
              {c1 ? (
                <div className={styles.outer}>
                  <div className={styles.button}>
                    <div classNane={styles.text}>Visit Blog Page</div>
                  </div>
                </div>
              ) : (
                <ActionButton text={"Visit Blog Page"} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FutureChoice;
