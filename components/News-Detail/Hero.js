import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/CaseStudy-Detail/Hero.module.css";
export default function Hero() {
  return (
    <Row className={styles.HeroDetailContainer}>
      <Col xl={2} lg={2} className={styles.HiddenInMobile}></Col>
      <Col xl={10} lg={10} xs={12} md={12}>
        <div className={styles.HeroDetailsWrraper}>
          <h4 className={styles.HeroHeading}>
            A network-driven platform integrating e-commerce and trading
            features
          </h4>
          <div className={styles.ImageWrraper}>
            <Image
              src="/assets/images/big-news-image.png"
              alt="News Detail Hero"
              className={styles.HeroImage}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}
