import styles from "@/styles/components/Products/Hero.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButton from "../Common/ActionButton";
import AOS from "aos";
import { useEffect } from "react";
import Lottie from "react-lottie";
import animation from "../../utils/New-2-scroll.json";
import { Parallax } from "react-parallax";

const Hero = ({ clickHandler }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

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
              partialButton={styles.MobButton}
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
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="500"
              data-aos-easing="ease"
              src={"/assets/images/MxFuture.png"}
              alt="mxfuture"
              className={styles.HeroImg}
            />
            <h1
              data-aos="fade"
              data-aos-duration="3000"
              data-aos-delay="500"
              data-aos-easing="ease"
            >
              MxFuture
              <br />
              <span
                data-aos="fade"
                data-aos-duration="3000"
                data-aos-delay="500"
                data-aos-easing="ease"
              >
                Margin and Derivatives
              </span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={2} className={styles.ScrolldownMainCol}>
          <div className={styles.Scrolldowncontainer} onClick={clickHandler}>
            <div>
              <Lottie options={defaultOptions} height={100} width={50} />
            </div>
            {/* <Image
              alt="downimg"
              src="/assets/images/arrows.svg"
              className={styles.ImageDown}
            />
            <p className={styles.ScrolldownText}>Scroll Down</p> */}
          </div>
        </Col>
        <Col xl={10}>
          {/* <Parallax bgImage={"/assets/images/productimage.png"} strength={300}> */}
          <Image
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="500"
            data-aos-easing="ease"
            src={"/assets/images/productimage.png"}
            alt="productimg"
            className={styles.productimg}
          />
          {/* </Parallax> */}
        </Col>
      </Row>
    </section>
  );
};
export default Hero;
