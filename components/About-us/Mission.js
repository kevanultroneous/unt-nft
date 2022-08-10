import { Parallax } from "react-parallax";
import styles from "@/styles/components/aboutus/Mission.module.css";
import { Col, Row } from "react-bootstrap";

const Mission = () => {
  return (
    <div className={styles.MissionContainer}>
      <Parallax bgImage={"/assets/images/ParallaxAbout.png"} strength={300}>
        {/* style={{ height: 800 }} */}
        <div style={{ height: 700 }}>
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
    </div>
  );
};

export default Mission;
