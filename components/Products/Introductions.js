import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/Introductions.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import Aos from "aos";
const Introductions = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 1920,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     initialSlide: 1,
      //     centerMode: false,
      //     autoplay: true,
      //     cssEase: "linear",
      //   },
      // },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  const sliderRef = useRef();
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div className={styles.IntroMainContainer}>
      <Row>
        <Col xl={2}>
          <p className={styles.verticaltext}>INTRODUCTION</p>
        </Col>
        <Col xl={10}>
          <div className={styles.SpecialSpace}>
            <h5 className={styles.IntroMainTitle}>
              Mitigate the Risks and Leverage the Power of Crypto Derivatives
            </h5>
            <p className={styles.IntroMainContent}>
              A leverage-based centralized trading environment for institutional
              traders and retail audiences with an appetite for high risks,
              including features such as 100x spot leverage, perpetual swaps,
              inverse futures, American options, and European options.
            </p>
          </div>
          <div className={styles.SliderActionContainer}>
            <p className={styles.SliderActionTitle}>Explore 8 Features</p>
            <div className={styles.SliderActionButtons}>
              <Image
                alt="redbutton"
                src="/assets/images/redbutton.svg"
                className={styles.leftButton}
                onClick={() => sliderRef.current.slickPrev()}
              />
              <Image
                alt="redbutton"
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
              <>
                <div className={styles.Container} key={i}>
                  <Image
                    src={"/assets/images/cardp.svg"}
                    alt="Avatar"
                    className={styles.Image}
                  />
                  <div className={styles.Overlay}>
                    <div className={styles.Text}>
                      A leverage-based centralized trading environment for
                      institutional traders and retail audiences with an
                      appetite for high risks, including features such as 100x
                      spot leverage, perpetual swaps, inverse futures, American
                      options, and European options.
                    </div>
                  </div>
                </div>
                <p className={styles.SliderBottomText}>Swap Trading</p>
              </>
            ))}
          </Slider>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default Introductions;
