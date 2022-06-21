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
  return (
    <div className={styles.FutureChoiceContainer}>
      <Row>
        <Col xl={8} md={12}>
          <div
            className={styles.CardBg}

            // data-aos="flip-left"
            // data-aos-duration="2000"
          >
            <Row>
              <Col xl={12}>
                <h5 className={styles.CardTitle}>
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
                    <p className={styles.CardProfileName}>Hayen Phan</p>
                    <p className={styles.CardProfileDOB}>10th June 2022</p>
                  </div>
                </div>
              </Col>
              <Col xl={2} md={2} xs={4}>
                <Image
                  src="/assets/images/right-sb.svg"
                  className={styles.rightSb}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} md={12}>
          <div className={styles.MainHungry}>
            <div
              className={styles.HungryCard}
              // data-aos="zoom-in"
              // data-aos-duration="2000"
            >
              <h5 className={styles.HungryHeading}>Hungry for more?</h5>
              <p className={styles.HungryParagraph}>
                Read more articles on our blog.
              </p>
              <ActionButton text={"Visit Blog Page"} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FutureChoice;
