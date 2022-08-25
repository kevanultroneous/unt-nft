import React, { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import styles from "@/styles/components/Press/PressCard.module.css";
import Aos from "aos";

function PressCard({ trendingpress }) {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div className={styles.pressMainContainer}>
      <Row className={styles.PressCardRow}>
        {trendingpress.map((press, index) => {
          return (
            <Col key={index} xl={4} lg={4}>
              <div
                className={styles.pressBox}
                data-aos="fade-left"
                data-aos-duration="2000"
                // data-aos-delay={`${50 + parseInt(index + "000")}`}
                // data-aos-duration={`${1000 + parseInt(index + "000")}`}
              >
                <Row className={styles.pressImageBox}>
                  <Col xl={2} md={2} xs={2} className={styles.pressLogo}>
                    <Image fluid src={press.pressLogo} alt={press.pressHead} />
                  </Col>
                  <Col xl={10} md={10} xs={10} className={styles.pressCount}>
                    <span>0{press.pressCount}</span>
                  </Col>
                </Row>
                <Row className={styles.pressHeadLine}>
                  <h6>{press.pressHead}</h6>
                </Row>
                <Row className={styles.pressBody}>
                  <p>{press.pressBody}</p>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PressCard;
