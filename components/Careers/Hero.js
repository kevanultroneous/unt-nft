import styles from "@/styles/components/Careers/Hero.module.css";
import { Col, Row } from "react-bootstrap";
import SoftwareDevelopment from "../Common/SoftwareDevelopment";

const Hero = ({ clickHandler }) => {
  return (
    <>
      {/* // main container */}
      <div className={styles.HeroContainer}>
        <SoftwareDevelopment text="MobifinX Careers" />
        <Row>
          <Col xl={6}></Col>
          <Col xl={6}></Col>
        </Row>
      </div>
    </>
  );
};
export default Hero;
