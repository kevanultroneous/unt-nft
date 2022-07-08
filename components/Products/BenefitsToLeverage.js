import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/BenefitsToLeverage.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { BenefitsMxFuture } from "utils/MxFuture.data";
import { useEffect, useState } from "react";
import AOS from "aos";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const BenefitsToLeverage = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animopacity, setAnimOpacity] = useState(1);
  const nextItemHandle = () => {
    if (
      !(
        BenefitsMxFuture.indexOf(
          BenefitsMxFuture[BenefitsMxFuture.length - 1]
        ) == currentIndex
      )
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevItemHandle = () => {
    if (!(currentIndex <= 0)) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className={styles.BenefitsContainer}>
      <Row>
        <Col xl={2} xs={12} md={12}>
          <p className={styles.MiniIntroduce}>BENEFITS</p>
        </Col>
        <Col xl={10} md={12}>
          <Row>
            <Col xl={12} md={12}>
              <h5 className={styles.BenefitHeading}>Benefits to Leverage</h5>
            </Col>
          </Row>
          <Row className={styles.ControllerRev}>
            <Col xl={3} md={5} className={styles.Controller}>
              <IoIosArrowUp
                className={styles.ArrowTop}
                onClick={() => nextItemHandle()}
              />
              <IoIosArrowDown
                className={styles.ArrowTopMob}
                onClick={() => prevItemHandle()}
              />
              <h4 className={styles.Current}>
                {BenefitsMxFuture[currentIndex].num}
              </h4>
              <IoIosArrowUp
                className={styles.ArrowBottomMob}
                onClick={() => nextItemHandle()}
              />
              <IoIosArrowDown
                className={styles.ArrowBottom}
                onClick={() => prevItemHandle()}
              />
            </Col>
            <Col
              xl={7}
              md={7}
              data-aos="zoom-in "
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div
                className={`${styles.ItemCard}`}
                style={{ opacity: animopacity }}
              >
                <Image
                  src={BenefitsMxFuture[currentIndex].img}
                  alt={BenefitsMxFuture[currentIndex].img}
                />
                <h5 className={styles.ItemTitle}>
                  {BenefitsMxFuture[currentIndex].title}
                </h5>
                <p className={styles.ItemDescreption}>
                  {BenefitsMxFuture[currentIndex].descreption}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default BenefitsToLeverage;
