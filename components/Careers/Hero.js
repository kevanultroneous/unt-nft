// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Careers/Hero.module.css";

// components
import SoftwareDevelopment from "../Common/SoftwareDevelopment";
import ActionButton from "../Common/ActionButton";
import ActionButtonV2 from "../Common/ActionButtonV2";
import ActionButtonV3 from "../Common/ActionButtonV3";
import { Col, Image, Row } from "react-bootstrap";

// library
import SlickSlider from "react-slick";

import { useRef } from "react";

const Hero = ({ clickHandler }) => {
  const SliderData = [
    {
      imageUrl: "/assets/images/career-kiara-doe.png",
      name: "Kiara Doe",
      designation: "Product Designer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
    },
    {
      imageUrl: "/assets/images/career-kiara-doe.png",
      name: "Kiara Doe",
      designation: "Product Designer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
    },
  ];

  const careerSlider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <>
      {/* // main container */}
      <div className={styles.HeroContainer}>
        <SoftwareDevelopment text="MobifinX Careers" hidebutton />
        <Row className={styles.heroContainer}>
          <Col xl={6} className={styles.heroHead}>
            <div className={styles.careerHeroLeftText}>
              <h1 className={styles.careerBigHeading}>
                You are in a Good Company
              </h1>
              <ActionButtonV2 text={"See Open Jobs"} />
            </div>
          </Col>
          <Col xl={5} className={styles.heroCard}>
            <SlickSlider
              {...settings}
              className={`careerSlickSLider`}
              ref={careerSlider}
            >
              {SliderData.map((slider) => {
                return (
                  <>
                    <div className={styles.slideMainContainer}>
                      <div
                        className={styles.sliderContainer}
                        key={slider.name.replace(" ", "").toLowerCase()}
                      >
                        <div className={styles.sliderFirstHalf}>
                          <Image src={slider.imageUrl} alt={slider.name} />
                          <h3>{slider.name}</h3>
                          <div className={styles.designationRow}>
                            <div className={styles.designationLines}></div>
                            <h6>{slider.designation}</h6>
                            <div className={styles.designationLines}></div>
                          </div>
                        </div>
                        <div className={styles.sliderSecondHalf}>
                          <div className={styles.descPara}>
                            <p>&quot;{slider.description}&quot;</p>
                          </div>
                          <div className={styles.sliderButton}>
                            <div className={styles.leftArrow}>
                              <Image
                                src="/assets/images/left-sb.svg"
                                alt="Left Arrow"
                                onClick={() => careerSlider.current.slickPrev()}
                              />
                            </div>
                            <div className={styles.rightArrow}>
                              <Image
                                src="/assets/images/right-sb.svg"
                                alt="Right Arrow"
                                onClick={() => careerSlider.current.slickNext()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </SlickSlider>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Hero;
