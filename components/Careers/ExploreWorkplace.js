import React from "react";
import styles from "@/styles/components/Careers/ExploreWorkplace.module.css";
import { Row, Col, Image } from "react-bootstrap";

function ExploreWorkplace() {
  return (
    <div className={styles.exploreWorkMainContainer}>
      <Row className={styles.exploreWorkDiv}>
        <Col xl={2} className={styles.sideHeading}>
          <p>EXPLORE OUR WORKPLACE</p>
        </Col>
        <Col xl={10} className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <Row className={styles.imageContRow}>
              <div className={styles.groupSmImage}>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                >
                  <Image
                    src="/assets/images/Workplace-Chair.png"
                    alt="WorkPlace-Chair"
                  />
                </div>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                >
                  <Image
                    src="/assets/images/Workplace-Meeting.png"
                    alt="WorkPlace-Meeting"
                  />
                </div>
              </div>
              <div
                className={(styles.workPlaceImages, styles.workPlacesBgImage)}
              >
                <Image
                  src="/assets/images/Workplace-Desk-Setup.png"
                  alt="WorkPlace-Desk"
                />
              </div>
            </Row>
            <Row className={(styles.imageContRow, styles.imageSecondRow)}>
              <div
                className={
                  (styles.workPlaceImages,
                  styles.workPlacesBgImage,
                  styles.workPlacesSecBgImage)
                }
              >
                <Image
                  src="/assets/images/Workplace-On-Desk.png"
                  alt="WorkPlace-On-Desk"
                />
              </div>
              <div className={styles.groupSmImage}>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                >
                  <Image
                    src="/assets/images/Workplace-activity.png"
                    alt="WorkPlace-Activity"
                  />
                </div>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                >
                  <Image
                    src="/assets/images/Workplace-girl.png"
                    alt="WorkPlace-Girl"
                  />
                </div>
              </div>
            </Row>
          </div>
          <div className={styles.ctaBox}>
            <Row className={styles.ctaRow}>
              <div className={styles.ctaText}>
                <h3>Got Skills we should know about?</h3>
              </div>
              <div className={styles.ctaButton}>
                <p>Contact us</p>
                <Image src="/assets/images/grad.svg" alt="Career Cta Btn" />
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExploreWorkplace;
