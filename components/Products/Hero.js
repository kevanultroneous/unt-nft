import styles from "@/styles/components/Hero.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButton from "../Common/ActionButton";
const Hero = () => {
  return (
    <section className={styles.Herosection}>
      <Row className={styles.ExpertsRow}>
        <Row className={styles.SoftwareDevelopmentExpertsRow}>
          <Col xl={6} xs={6} md={6} className="p-0">
            <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
              <div className={styles.HomeMiniLine} />
              <span className={styles.HomeSmallHeading}>MobifinX Home</span>
            </div>
          </Col>
          <Col
            xl={6}
            md={6}
            xs={6}
            className={styles.SoftwareDevelopmentExpertsBtnCol}
          >
            <ActionButton
              text={
                <>
                  Try Free Demo <HiOutlineExternalLink />
                </>
              }
            />
          </Col>
        </Row>
      </Row>
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
