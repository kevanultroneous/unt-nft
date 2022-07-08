import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Hero.module.css";
const Hero = () => {
  return (
    //  main container
    <div className={styles.HeroMainContainer}>
      {/* Row for Main Heading */}
      <Row>
        {/* Col 0 : Simply  space */}
        <Col xl={2}></Col>
        {/* Col 1 : Main Heading */}
        <Col xl={10} xs={12}>
          <h4>
            Your Companion to Decode the <span>Crypto 101</span>
          </h4>
        </Col>
      </Row>
      {/* Row for Image and scroll down section */}
      <Row>
        {/* Col for scroll down */}
        <Col xl={2}></Col>
        {/* Col for Big Image */}
        <Col xl={12}>
          <Image src={"/assets/images/aboutheroimg.svg"} alt="aboutheroimg" />
        </Col>
      </Row>
    </div>
  );
};
export default Hero;
