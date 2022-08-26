import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SideHeading from "../Common/SideHeading";
import styles from "@/styles/components/Careers/ExploreWorkplace.module.css";
import Link from "next/link";

function ExploreWorkplace() {
  const styling = {
    marginLeft: "-7.1rem",
    marginTop: "6.8rem",
  };
  return (
    <div className={styles.exploreWorkMainContainer}>
      <Row className={styles.exploreWorkDiv}>
        <Col xl={2} className={styles.ExploreMobifinxSideHeading}>
          <SideHeading
            customstyle={styling}
            heading={"EXPLORE OUR WORKPLACE"}
          />
        </Col>
        <Col xl={10} sm={12} md={12} lg={10} className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <Row
              xs={12}
              xl={6}
              md={6}
              lg={6}
              sm={6}
              className={styles.imageContRow}
            >
              <div className={styles.groupSmImage}>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="200"
                >
                  <Image
                    fluid
                    src="/assets/images/Workplace-Chair.png"
                    alt="WorkPlace-Chair"
                    className={styles.Imageanimation}
                  />
                </div>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="250"
                >
                  <Image
                    fluid
                    src="/assets/images/Workplace-Meeting.png"
                    alt="WorkPlace-Meeting"
                    className={styles.Imageanimation}
                  />
                </div>
              </div>
              <div
                className={(styles.workPlaceImages, styles.workPlacesBgImage)}
                data-aos="fade-up"
                data-aos-duration="1000"
                // data-aos-delay="300"
              >
                <Image
                  fluid
                  src="/assets/images/Rectangle 109.png"
                  alt="WorkPlace-Desk"
                  className={styles.Imageanimation}
                />
              </div>
            </Row>
            <Row
              xs={12}
              xl={6}
              sm={6}
              lg={6}
              className={(styles.imageContRow, styles.imageSecondRow)}
            >
              <div
                className={
                  (styles.workPlaceImages,
                  styles.workPlacesBgImage,
                  styles.workPlacesSecBgImage)
                }
                data-aos="fade-up"
                data-aos-duration="1000"
                // data-aos-delay="350"
              >
                <Image
                  fluid
                  src="/assets/images/Rectangle 112.png"
                  alt="WorkPlace-On-Desk"
                  className={styles.Imageanimation}
                />
              </div>
              <div className={styles.groupSmImage}>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="400"
                >
                  <Image
                    fluid
                    src="/assets/images/Workplace-activity.png"
                    alt="WorkPlace-Activity"
                    className={styles.Imageanimation}
                  />
                </div>
                <div
                  className={(styles.workPlaceImages, styles.workPlacesSmImage)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="450"
                >
                  <Image
                    fluid
                    src="/assets/images/Workplace-girl.png"
                    alt="WorkPlace-Girl"
                    className={styles.Imageanimation}
                  />
                </div>
              </div>
            </Row>
            <div className={styles.ctaBox}>
              <Row className={styles.ctaRow}>
                <div className={styles.ctaText}>
                  <h3>Got skills we should know about?</h3>
                </div>
                <Link href={"/get-in-touch"}>
                  <div className={styles.ctaButton}>
                    <p>Contact us</p>
                    <Image src="/assets/images/grad.svg" alt="Career Cta Btn" />
                  </div>
                </Link>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExploreWorkplace;
