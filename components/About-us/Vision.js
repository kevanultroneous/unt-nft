import { Button, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Vision.module.css";
import { useState } from "react";
import { Parallax } from "react-parallax";

const Vision = () => {
  const [vision, setVision] = useState(true);

  return (
    <div className={styles.VisionContainer}>
      <Parallax bgImage={"/assets/images/ParallaxAbout.png"} strength={600}>
        {/* style={{ height: 800 }} */}
        <div>
          <Row>
            <Col xl={8}>
              <div className={styles.MissionTitle}>
                <h2>Our Mission</h2>
                <p>
                  We keep maintaining a strong communication channel over
                  different virtual tools in real-time. Our aim is to conduct
                  business transparently and ethically and foster collaborative
                  relationships.
                </p>
              </div>
            </Col>
          </Row>
          {/* <div className={styles.Effect}>
            <Row className={styles.Parallaxrow}>
              <Col xl={10}>
                <p className={styles.Pera}>10+ Million Transaction Processed</p>
              </Col>
              <Col xl={10}>
                <h3 className={styles.MainHeading}>SCALABLE.</h3>
              </Col>
            </Row>
            <Row className={styles.Parallaxrow}>
              <Col xl={10}>
                <p className={styles.Pera}>32+ Global Blockchain Customers</p>
              </Col>
              <Col xl={10}>
                <h3 className={styles.MainHeadingSecure}>Secure.</h3>
              </Col>
            </Row>
            <Row className={styles.Parallaxrow}>
              <Col xl={10}>
                <p className={styles.Pera}>
                  7+ Years of Unique Blockchain Experience
                </p>
              </Col>
              <Col xl={10}>
                <h3 className={styles.MainHeadingSuccess}>Successive.</h3>
              </Col>
            </Row>
          </div> */}
        </div>
      </Parallax>
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
