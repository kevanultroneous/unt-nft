import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/home/WhatWillYouGetWithUs.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
function WhatWillYouGetWithUs() {
  const [value, setValue] = useState(0);
  const arrText = [
    "200k TPS match engine",
    "Modular System Architecture",
    "100+ Exchange Liquidity",
    "350+ feature rich backoffice",
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
            className={
              ind === value
                ? styles.WhatWillYouGetTextActive
                : styles.WhatWillYouGetText
            }
            onClick={() => setValue(ind)}
          >
            {el}
          </p>
        ))}
        <div className={styles.SmallImage}>
          <img src={arrImage[value]} alt="Map Image" />
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} className={styles.WhatWillYouGetWithUsRight}>
        <div className={styles.BigImage}>
          <img src={"/assets/images/200kBig.png"} alt="Graph Image" />
        </div>
      </Col>
    </Row>
  );
}

export default WhatWillYouGetWithUs;
