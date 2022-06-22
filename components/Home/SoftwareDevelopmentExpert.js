import styles from "@/styles/components/home/SDE.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { useEffect, useRef } from "react";
import ActionButtonV2 from "../Common/ActionButtonV2";
const SDE = ({ handleClick }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 4,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 4,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2000,
          // centerPadding: "45px",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  const sliderList = [
    { name: "MxTrade", img: "/assets/images/MXX1.svg" },
    { name: "MxFuture", img: "/assets/images/mxx2.svg" },
    { name: "MxDex", img: "/assets/images/mxx3.svg" },
    { name: "MxFi", img: "/assets/images/mxx4.svg" },
    { name: "MxLaunch", img: "/assets/images/mxx5.svg" },
    { name: "MxWallet", img: "/assets/images/mxx6.svg" },
    { name: "MxBlock", img: "/assets/images/mxx7.svg" },
    { name: "MxNFT", img: "/assets/images/mxx8.svg" },
  ];
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const sliderRef = useRef();
  return (
    <div className={`${styles.SoftwareDevelopmentExpertsContainer} frame1`}>
      <Row className={styles.SoftwareDevelopmentExpertsRow}>
        <Col xl={6} xs={6} md={6} className="p-0">
          <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
            <div className={styles.HomeMiniLine} />
            <span
              className={styles.HomeSmallHeading}
              // data-aos="zoom-in"
              // data-aos-duration="2000"
            >
              MobifinX Home
            </span>
          </div>
        </Col>
        <Col
          xl={6}
          md={6}
          xs={6}
          className={styles.SoftwareDevelopmentExpertsBtnCol}
        >
          <ActionButtonV2
            text={
              <>
                Explore Product <HiOutlineExternalLink />
              </>
            }
          />
        </Col>
      </Row>

      <div
        className={styles.SoftwareDevelopmentExpertsBigHeadingContainer}
        // data-aos="zoom-in"
        // data-aos-duration="2000"
      >
        <h3
          className={styles.SoftwareDevelopmentExpertsBigHeading}
          data-aos="fade"
          data-aos-duration="2000"
        >
          We’re Crypto Coin Trading
          <br />
          Software Development Experts.
        </h3>
      </div>
      <Row className="mx-0">
        <Col
          xl={4}
          className={styles.ScrolldownCol}
          onClick={() => handleClick()}
        >
          <div className={styles.Scrolldowncontainer}>
            <Image
              src="/assets/images/scrollarrow.svg"
              className={styles.ImageDown}
            />
            <p className={styles.ScrolldownText}>Scroll Down</p>
            {/*  */}
          </div>
        </Col>
        <Col xl={8}>
          <Row>
            <Col xl={3} md={4} xs={6}>
              <div className={styles.SoftwareDevelopmentExpertsBtnImages}>
                <Image
                  onClick={() => sliderRef.current.slickPrev()}
                  fluid
                  src={"/assets/images/left-sb.svg"}
                  className={styles.SoftwareDevelopmentExpertSliderBtnLeft}
                />
                <Image
                  onClick={() => sliderRef.current.slickNext()}
                  fluid
                  src={"/assets/images/right-sb.svg"}
                  className={styles.SoftwareDevelopmentExpertSliderBtnRight}
                />
              </div>
            </Col>
            <Col
              xl={8}
              md={8}
              xs={6}
              className={styles.SoftwareDevelopmentExpertSliderHeading}
            >
              <div
                className={styles.HomeMiniLine}
                // data-aos="fade-right"
                // data-aos-duration="2000"
              />
              <span
                className={styles.HomeSmallHeading}
                // data-aos="fade-left"
                // data-aos-duration="2000"
              >
                Products we are providing
              </span>
            </Col>
          </Row>
          <Row className={`${styles.SliderGround} SliderGroundCss`}>
            <Slider {...settings} arrows={false} ref={sliderRef}>
              {sliderList.map((v, i) => (
                <div
                  className={styles.SliderCard}
                  // data-aos="slide-up"
                  // data-aos-duration="2000"
                >
                  <Image src={v.img} className={styles.SliderImg} />
                  <p>{v.name}</p>
                </div>
              ))}
            </Slider>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SDE;
