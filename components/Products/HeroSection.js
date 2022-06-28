import styles from "@/styles/components/HeroSection.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
const Hero = () => {
  return (
    <section className={styles.Herosection}>
      <Row>
        <Col xl={4}></Col>
        <Col xl={8}>
          <div className={styles.Herotitle}>
            <Image src={"/assets/images/mxfuture.svg"} alt="mxfuture" />
            <h1>
              MxFuture
              <br />
              <span>Margin and Derivatives</span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={4}></Col>
        <Col xl={8}>
          <Image
            src={"/assets/images/productimage.png"}
            alt="productimg"
            className={styles.productimg}
          />
        </Col>
      </Row>
    </section>
  );
};
export default Hero;
