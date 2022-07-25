import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/home/WhatWillYouGetWithUs.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
function WhatWillYouGetWithUs() {
  const [value, setValue] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [cctv, setCctv] = useState(false);
  const arrText = [
    "HFT Match Engine",
    "Scalable Technology",
    "Powerfull Settlements",
    "Enhanced Administration",
  ];

  const arrImage = [
    "/assets/images/mapimg.svg",
    "/assets/images/modular.svg",
    "/assets/images/exchange.svg",
    "/assets/images/feature.svg",
  ];

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <Row className={styles.WhatWillYouGetWithUs}>
      <Col xs={12} sm={12} md={6} className={styles.WhatWillYouGetWithUsLeft}>
        <h2>
          What will you get <br /> with us?
        </h2>
        {arrText.map((el, ind) => (
          <p
            key={ind}
            className={
              ind === value
                ? styles.WhatWillYouGetTextActive
                : styles.WhatWillYouGetText
            }
            onClick={() => {
              setCctv(true);
              setValue(ind);
              setVisibility(true);
              setTimeout(() => {
                setVisibility(false);
                setCctv(false);
              }, 1000);
            }}
          >
            {el}
          </p>
        ))}
        <div
          className={`${styles.SmallImage} ${
            visibility ? styles.SmallImageAnim : ""
          }`}
        >
          <Image
            src={arrImage[value]}
            alt="Map Image"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease"
          />
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} className={styles.WhatWillYouGetWithUsRight}>
        <div className={`${styles.BigImage}`}>
          <Image src={"/assets/images/main.gif"} alt="Graph Image" />
        </div>
      </Col>
    </Row>
  );
}

export default WhatWillYouGetWithUs;
