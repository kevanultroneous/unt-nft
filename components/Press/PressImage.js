import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/components/Press/PressImage.module.css";
import Aos from "aos";

const PressImageCard = ({
  style,
  srcimg,
  animtype,
  animdelay,
  BigPressTitle,
  PressDate,
  imageTitle,
  disTitle,
  dish1,
  dish2,
  disp1,
  disp2,
}) => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div
      className={`${styles.PressImageCard} ${style}`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className={styles.PressImage}>
        <Image src={srcimg} fluid alt={imageTitle} />
      </div>
      <div className={styles.PressImageCardText}>
        <p className={styles.PressImageCardParagraph}>{PressDate}</p>
        <p className={styles.PressImageCardTitle}>{BigPressTitle}</p>
      </div>
    </div>
  );
};

const colLength = (ind) => (ind % 2 === 0 ? 8 : 4);

function PressImage({ reverse, PressData }) {
  return (
    <div className={styles.PressImageCardContainer}>
      <Row className={reverse ? styles.imagePressRow : null}>
        {PressData.map((Press, ind) => {
          return (
            <Col
              key={ind}
              xl={colLength(ind)}
              lg={colLength(ind)}
              xs={12}
              md={12}
            >
              <div className={styles.PressCard}>
                <PressImageCard
                  imageTitle={Press.BigPressTitle}
                  srcimg={Press.srcimg}
                  PressDate={Press.PressDate}
                  BigPressTitle={Press.BigPressTitle}
                  disTitle={Press.disTitle}
                  dish1={Press.dish1}
                  disp1={Press.disp1}
                  dish2={Press.dish2}
                  disp2={Press.disp2}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PressImage;
