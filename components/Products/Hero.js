import styles from "@/styles/components/Products/Hero.module.css";
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
          <Col xl={6} xs={8} md={6} className="p-0">
            <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
              <div className={styles.HomeMiniLine} />
              <span className={styles.HomeSmallHeading}>
                MobifinX Product / MxFuture
              </span>
            </div>
          </Col>
          <Col
            xl={6}
            md={6}
            xs={4}
            className={styles.SoftwareDevelopmentExpertsBtnCol}
          >
            <ActionButton
              otherclass={styles.SpaceRemover}
              text={
                <>
                  <span className={styles.TextButton}>Try Free Demo </span>
                  <HiOutlineExternalLink />
                </>
              }
            />
          </Col>
        </Row>
      </Row>
      <Row>
        <Col xl={2}></Col>
        <Col xl={10} xs={12}>
          <div className={styles.Herotitle}>
            <Image
              src={"/assets/images/MxFuture.png"}
              alt="mxfuture"
              className={styles.HeroImg}
            />
            <h1>
              MxFuture
              <br />
              <span>Margin and Derivatives</span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={2} className={styles.ScrolldownMainCol}>
          <div className={styles.Scrolldowncontainer}>
            <Image
              alt="downimg"
              src="/assets/images/arrows.svg"
              className={styles.ImageDown}
            />
            <p className={styles.ScrolldownText}>Scroll Down</p>
          </div>
        </Col>
        <Col xl={10}>
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
