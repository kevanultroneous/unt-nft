import styles from "@/styles/components/home/Parallax.module.css";
import { Col, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

const ParallaxComponent = () => {
  return (
    <div>
      {/* <section className={styles.Mainsection}>
        <div className={styles.Parallax}>
          <div className={styles.Effect}>
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
          </div>
        </div>
      </section> */}
      {/* <div className={styles.wrap}>
                <Col xl={10}>
                  <h3 className={styles.MainHeading}>SCALABLE.</h3>
                </Col>
              </div> */}

      <Parallax bgImage={"/assets/images/Parallaxnew1.png"} strength={600}>
        <div style={{ height: 800 }}>
          <div className={styles.Effect}>
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
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
