import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/Introductions.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
const Introductions = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  const sliderRef = useRef();
  return (
    <div className={styles.IntroMainContainer}>
      <Row>
        <Col xl={4}>
          <p className={styles.verticaltext}>INTRODUCTION</p>
        </Col>
        <Col xl={8}>
          <h5 className={styles.IntroMainTitle}>
            Mitigate the Risks and Leverage the Power of Crypto Derivatives
          </h5>
          <p className={styles.IntroMainContent}>
            A leverage-based centralized trading environment for institutional
            traders and retail audiences with an appetite for high risks,
            including features such as 100x spot leverage, perpetual swaps,
            inverse futures, American options, and European options.
          </p>
          <div className={styles.SliderActionContainer}>
            <p className={styles.SliderActionTitle}>Explore 8 Features</p>
            <div className={styles.SliderActionButtons}>
              <Image
                src="/assets/images/redbutton.svg"
                className={styles.leftButton}
                onClick={() => sliderRef.current.slickPrev()}
              />
              <Image
                src="/assets/images/redbutton2.svg"
                className={styles.leftButton}
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>
          </div>
          <Slider {...settings} arrows={false} ref={sliderRef}>
            {[
              1, 2, 3, 3, 4, 54, 4, 5, 4, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3,
            ].map((v, i) => (
              <div className={styles.Container}>
                <Image
                  src={"/assets/images/cardp.svg"}
                  alt="Avatar"
                  className={styles.Image}
                />
                <div className={styles.Overlay}>
                  <div className={styles.Text}>
                    A leverage-based centralized trading environment for
                    institutional traders and retail audiences with an appetite
                    for high risks, including features such as 100x spot
                    leverage, perpetual swaps, inverse futures, American
                    options, and European options.
                  </div>
                </div>
                <p className={styles.SliderBottomText}>Swap Trading</p>
              </div>
            ))}
          </Slider>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default Introductions;
