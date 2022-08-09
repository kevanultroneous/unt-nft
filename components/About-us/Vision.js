import { Button, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Vision.module.css";
import { useState } from "react";
import { Parallax } from "react-parallax";

const Vision = () => {
  const [vision, setVision] = useState(true);

  return (
    <div className={styles.VisionContainer}>
      <Row className={styles.VisionRow}>
        <Col xl={2}></Col>
        <Col xl={10}>
          <div className={styles.VisionTitle}>
            <h2>Our Vision</h2>
            <p>
              We have a vision to consistently provide innovative real-world
              solutions to a global clientele that enhance customer experiences
              and describe the future today. Our group of creative and
              collaborative people solves current problems faced by customers in
              a way that simplifies their business. It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English.
            </p>
          </div>
        </Col>
      </Row>

      {/* <div className={styles.Important}>
        <Row className={styles.Visionrow}>
          <Col xl={2}>
            <p className={styles.Rotatetext}>IMPORTANT</p>
          </Col>
          <Col xl={10}>
            <div className={styles.Heading}>
              <h3
                onClick={() => setVision(!vision)}
                className={
                  vision
                    ? `${styles.Vision}  ${styles.Active} `
                    : `${styles.Vision} ${styles.VisionHover}`
                }
              >
                Vision
              </h3>
              <span className={styles.span}>&</span>
              <h3
                onClick={() => setVision(!vision)}
                className={
                  !vision
                    ? `${styles.Mission} ${styles.Active} `
                    : `${styles.Mission} ${styles.VisionHover}`
                }
              >
                Mission
              </h3>
            </div>
          </Col>
        </Row>
        <Row className={styles.Detailrow}>
          <Col xl={2}></Col>
          <Col xl={10} className={styles.Detailcol}>
            <div className={styles.Detail}>
              {vision ? (
                <p className={styles.Description}>
                  We have a vision to consistently provide innovative real-world
                  solutions to a global clientele that enhance customer
                  experiences and describe the future today. Our group of
                  creative and collaborative people solves current problems
                  faced by customers in a way that simplifies their business.
                </p>
              ) : (
                <p>
                  <p className={styles.Description}> This is changed content</p>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default Vision;
