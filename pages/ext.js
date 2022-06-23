import Slider from "react-slick";
import styles from "@/styles/ext.module.css";
import { Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
const Ext = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 3,
          initialSlide: 2,
          centerMode: false,
          autoplay: true,
          cssEase: "linear",
        },
      },
    ],
  };
  useEffect(() => {
    window.addEventListener("wheel", () => {
      sliderRef.current.slickNext();
    });
  });
  const sliderRef = useRef();
  return (
    <Slider {...settings} ref={sliderRef}>
      {["k1", "k2", "k3", "k4", "k5", "k6"].map((v, i) => (
        <div className={styles.Main}>
          <div className={styles.Box}>
            <p>{v}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default Ext;
