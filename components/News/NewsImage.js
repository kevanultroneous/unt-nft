import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/components/News/NewsImage.module.css";

const NewsImageCard = ({
  style,
  srcimg,
  animtype,
  animdelay,
  BigNewsTitle,
  NewsDate,
  disTitle,
  dish1,
  dish2,
  disp1,
  disp2,
}) => {
  return (
    <div
      className={`${styles.NewsImageCard} ${style}`}
      // data-aos={animtype}
      // data-aos-duration="1000"
      // data-aos-delay={animdelay}
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
    >
      <div className={styles.newsImage}>
        <Image src={srcimg} fluid alt="Avatar" />
      </div>
      <div className={styles.NewsImageCardText}>
        <p className={styles.NewsImageCardParagraph}>{NewsDate}</p>
        <p className={styles.NewsImageCardTitle}>{BigNewsTitle}</p>
      </div>
    </div>
  );
};

const colLength = (ind) => (ind % 2 === 0 ? 8 : 4);

function NewsImage({ reverse, newsData }) {
  return (
    <div className={styles.NewsImageCardContainer}>
      <Row className={reverse ? styles.imageNewsRow : null}>
        {newsData.map((news, ind) => {
          return (
            <Col key={ind} xl={colLength(ind)} xs={12} md={12}>
              <div className={styles.NewsCard}>
                <NewsImageCard
                  srcimg={news.srcimg}
                  NewsDate={news.NewsDate}
                  BigNewsTitle={news.BigNewsTitle}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default NewsImage;
