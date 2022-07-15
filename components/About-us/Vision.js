import { Button, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Vision.module.css";
import { useState } from "react";

const Vision = () => {
  const [vision, setVision] = useState(true);

  return (
    <div className={styles.VisionContainer}>
      <div className={styles.Important}>
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
      </div>
    </div>
  );
};

export default Vision;
