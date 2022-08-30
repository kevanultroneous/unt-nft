import { Parallax } from "react-parallax";
import styles from "@/styles/components/aboutus/Mission.module.css";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";

const Mission = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div
      className={styles.MissionContainer}
      data-aos="fade"
      data-aos-duration="500"
    >
      <Parallax bgImage={"/assets/images/ParallaxAbout.png"} strength={300}>
        {/* style={{ height: 800 }} */}
        <div>
          <Row>
            <Col xl={2}></Col>
            <Col xl={10}>
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
        </div>
      </Parallax>
    </div>
  );
};

export default Mission;
