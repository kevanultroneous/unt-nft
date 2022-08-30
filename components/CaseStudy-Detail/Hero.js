import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/CaseStudy-Detail/Hero.module.css";
import { useEffect } from "react";
import Aos from "aos";
export default function Hero() {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Row className={styles.HeroDetailContainer}>
      <Col xl={2} lg={2} className={styles.HiddenInMobile}></Col>
      <Col xl={10} lg={10} xs={12} md={12}>
        <div className={styles.HeroDetailsWrraper}>
          <h4 className={styles.HeroHeading}>
            A Technical Analysis Toolset for a US-Based Investing Education
            Platform
          </h4>
          <div className={styles.ImageWrraper}>
            <div className={styles.ImageanimDiv}>
              <Image
                src="/assets/images/etherium.png"
                alt="etherium"
                className={styles.HeroImage}
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
