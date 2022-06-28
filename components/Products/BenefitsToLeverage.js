import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/BenefitsToLeverage.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { BenefitsMxFuture } from "utils/MxFuture.data";
import { useEffect, useState } from "react";
import AOS from "aos";
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
        <Col xl={1}>
          <p className={styles.MiniIntroduce}>BENEFITS</p>
        </Col>
        <Col xl={11}>
          <Row>
            <Col xl={12}>
              <h5 className={styles.BenefitHeading}>Benefits to Leverage</h5>
            </Col>
            <Col xl={5} className={styles.Controller}>
              <MdArrowBackIosNew
                className={styles.ArrowTop}
                onClick={() => nextItemHandle()}
              />
              <h4 className={styles.Current}>
                {BenefitsMxFuture[currentIndex].num}
              </h4>
              <MdArrowBackIosNew
                className={styles.ArrowBottom}
                onClick={() => prevItemHandle()}
              />
            </Col>
            <Col xl={7}>
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
