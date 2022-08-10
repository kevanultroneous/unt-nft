import styles from "@/styles/components/home/SDE.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { useEffect, useRef } from "react";
import ActionButtonV2 from "../Common/ActionButtonV2";
import Link from "next/link";
import Lottie from "react-lottie";
import animation from "../../utils/New-1-scroll.json";
const SDE = ({ handleClick }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.35,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 5000,
          // swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.35,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 5000,
          // swipeToSlide: true,
        },
      },
    ],
  };
  const sliderList = [
    { name: "MxTrade", img: "/assets/images/pro1.svg", link: "/" },
    {
      name: "MxFuture",
      img: "/assets/images/pro2.svg",
      link: "/",
    },
    { name: "MxDex", img: "/assets/images/pro3.svg", link: "/" },
    { name: "MxFi", img: "/assets/images/pro4.svg", link: "/" },
    { name: "MxLaunch", img: "/assets/images/pro5.svg", link: "/" },
    { name: "MxWallet", img: "/assets/images/pro6.svg", link: "/" },
    { name: "MxBlock", img: "/assets/images/pro7.svg", link: "/" },
    { name: "MxNFT", img: "/assets/images/pro8.svg", link: "/" },
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
            <span className={styles.HomeSmallHeading}>MobifinX Home</span>
          </div>
        </Col>
        <Col
          xl={6}
          md={6}
          xs={6}
          className={styles.SoftwareDevelopmentExpertsBtnCol}
        >
          <ActionButtonV2
            partialstyle={styles.MobButton}
            href={"/get-in-touch"}
            text={
              <>
                <span className={styles.TextBtn}>Explore Product </span>
                <HiOutlineExternalLink />
              </>
            }
          />
        </Col>
      </Row>

      <div className={styles.SoftwareDevelopmentExpertsBigHeadingContainer}>
        <h3
          className={styles.SoftwareDevelopmentExpertsBigHeading}
          data-aos="fade"
          data-aos-duration="2000"
        >
          Redefining Trading Technologies
        </h3>
      </div>
      <Row className="mx-0">
        <Col
          xl={4}
          data-aos="fade"
          data-aos-duration="2000"
          className={styles.ScrolldownCol}
          onClick={() => handleClick()}
        >
          <div className={styles.Scrolldowncontainer}>
            {/* <Image
              alt="downimg"
              src="/assets/images/scrollarrow.svg"
              className={styles.ImageDown}
            />
            <p className={styles.ScrolldownText}>Scroll Down</p> */}
            <div className={styles.whiteMouse}>
              <Lottie options={defaultOptions} height={100} width={50} />
            </div>
          </div>
          {/* https://assets3.lottiefiles.com/packages/lf20_JMhjmh.json */}
        </Col>
        <Col xl={8}>
          <Row>
            <Col xl={3} md={4} xs={5}>
              <div className={styles.SoftwareDevelopmentExpertsBtnImages}>
                <Image
                  alt={"prev"}
                  onClick={() => sliderRef.current.slickPrev()}
                  fluid
                  src={"/assets/images/left-sb.svg"}
                  className={styles.SoftwareDevelopmentExpertSliderBtnLeft}
                />
                <Image
                  alt="next"
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
              xs={7}
              className={styles.SoftwareDevelopmentExpertSliderHeading}
            >
              <div className={styles.HomeMiniLine} />
              <span className={styles.HomeSmallHeading}>
                Products we are providing
              </span>
            </Col>
          </Row>
          <Row className={`${styles.SliderGround} SliderGroundCss`}>
            <Slider {...settings} arrows={false} ref={sliderRef}>
              {sliderList.map((v, i) => (
                <Link href={v.link} key={i}>
                  {/* <div className={styles.SliderCard} key={i}> */}
                  <Image
                    alt="sliderimg"
                    src={v.img}
                    className={styles.SliderImg}
                  />
                  {/* <p>{v.name}</p> */}
                  {/* </div> */}
                </Link>
              ))}
            </Slider>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SDE;
