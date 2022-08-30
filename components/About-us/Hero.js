import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Hero.module.css";
import ActionButton from "../Common/ActionButton";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useEffect } from "react";
import Aos from "aos";
import Lottie from "react-lottie";
import animation from "../../utils/New-2-scroll.json";

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
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <>
      {/* // main container */}
      <div className={styles.HeroMainContainer}>
        <Row className={styles.ExpertsRow}>
          <Row className={styles.SoftwareDevelopmentExpertsRow}>
            <Col xl={6} xs={8} md={6} className="p-0">
              <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
                <div className={styles.HomeMiniLine} />
                <span className={styles.HomeSmallHeading}>
                  MobifinX About us
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
        {/* Row for Main Heading */}
        <Row className={styles.Herorow}>
          {/* Col 0 : Simply  space */}
          <Col xl={2}></Col>
          {/* Col 1 : Main Heading */}
          <Col xl={10} xs={12} className={styles.Herocol}>
            <h4 data-aos="fade" data-aos-duration="3000">
              Your Companion to Decode the{" "}
              <span className={styles.Crypto}>Crypto 101</span>
            </h4>
          </Col>
        </Row>
        {/* Row for Image and scroll down section */}
        <Row className={styles.RotateRow}>
          {/* Col for scroll down */}
          <Col xl={2} data-aos="fade" data-aos-duration="2000">
            <div className={styles.Scrolldowncontainer} onClick={clickHandler}>
              <div>
                <Lottie options={defaultOptions} height={100} width={50} />
              </div>
            </div>
          </Col>
          {/* Col for Big Image */}
          <Col xl={10} className={styles.Aboutcol}>
            <div className={styles.Heroimg}>
              <Image
                src={"/assets/images/About-hero.png"}
                alt="aboutheroimg"
                className={styles.Img}
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Hero;
