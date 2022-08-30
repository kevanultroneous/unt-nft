import styles from "@/styles/components/aboutus/Feedback.module.css";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import Aos from "aos";
const FeedbackSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef();
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <section
      className={styles.Feedback}
      data-aos="fade"
      data-aos-duration="500"
    >
      <div className={styles.FeedbackContainer}>
        <Row>
          <Col xl={12}>
            <h4>We are Making Difference</h4>
          </Col>
        </Row>
        <Row className={styles.SliderRow}>
          <Col xl={10} md={10}>
            <Slider {...settings} arrows={false} ref={sliderRef}>
              <div>
                <Row className={styles.SliderMain}>
                  <Col xl={4} md={4} className={styles.SliderimgCol}>
                    <Image
                      src={"/assets/images/Sliderimg.svg"}
                      alt="slider-img"
                    />
                  </Col>
                  <Col xl={8} md={8}>
                    <h5 className={styles.ClientName}>CLIENT’S NAME</h5>
                    <span className={styles.CompanyName}>
                      Designation/Company Name
                    </span>
                    <p className={styles.Description}>
                      We are a leading crypto exchange software development
                      company based in the USA established in 2011. Mobifinx is
                      a tech partner that enables Banks, Institutional
                      Investors, Hedge Funds, Cryptocurrency Owners, Stock
                      exchanges and Broker-Dealers to efficiently roll out and
                      scale Trading Ecosystem and{" "}
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className={styles.SliderMain}>
                  <Col xl={4} md={4} className={styles.SliderimgCol}>
                    <Image
                      src={"/assets/images/Sliderimg.svg"}
                      alt="slider-img"
                    />
                  </Col>
                  <Col xl={8} md={8}>
                    <h5 className={styles.ClientName}>CLIENT’S NAME</h5>
                    <span className={styles.CompanyName}>
                      Designation/Company Name
                    </span>
                    <p className={styles.Description}>
                      We are a leading crypto exchange software development
                      company based in the USA established in 2011. Mobifinx is
                      a tech partner that enables Banks, Institutional
                      Investors, Hedge Funds, Cryptocurrency Owners, Stock
                      exchanges and Broker-Dealers to efficiently roll out and
                      scale Trading Ecosystem and{" "}
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className={styles.SliderMain}>
                  <Col xl={4} md={4} className={styles.SliderimgCol}>
                    <Image
                      src={"/assets/images/Sliderimg.svg"}
                      alt="slider-img"
                    />
                  </Col>
                  <Col xl={8} md={8}>
                    <h5 className={styles.ClientName}>CLIENT’S NAME</h5>
                    <span className={styles.CompanyName}>
                      Designation/Company Name
                    </span>
                    <p className={styles.Description}>
                      We are a leading crypto exchange software development
                      company based in the USA established in 2011. Mobifinx is
                      a tech partner that enables Banks, Institutional
                      Investors, Hedge Funds, Cryptocurrency Owners, Stock
                      exchanges and Broker-Dealers to efficiently roll out and
                      scale Trading Ecosystem and{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
          <Col xl={2} md={2} className={styles.Arrowcol}>
            <div className={styles.SoftwareDevelopmentExpertsBtnImages}>
              <Image
                alt="next"
                onClick={() => sliderRef.current.slickNext()}
                fluid
                src={"/assets/images/right-sb.svg"}
                className={styles.FeedbackNextarrow}
              />
              <Image
                alt={"prev"}
                onClick={() => sliderRef.current.slickPrev()}
                fluid
                src={"/assets/images/left-sb.svg"}
                className={styles.FeedbackPrevarrow}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeedbackSlider;
