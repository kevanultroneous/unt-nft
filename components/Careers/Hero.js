import styles from "@/styles/components/Careers/Hero.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButton from "../Common/ActionButton";

const Hero = ({ clickHandler }) => {
  return (
    <>
      {/* // main container */}
      <div className={styles.HeroContainer}>
        <Row className={styles.ExpertsRow}>
          <Row className={styles.SoftwareDevelopmentExpertsRow}>
            <Col xl={6} xs={8} md={6} className="p-0">
              <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
                <div className={styles.HomeMiniLine} />
                <span className={styles.HomeSmallHeading}>
                  MobifinX Careers
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
      </div>
    </>
  );
};
export default Hero;
