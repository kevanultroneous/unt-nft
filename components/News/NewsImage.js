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
  imageTitle,
  disTitle,
  dish1,
  dish2,
  disp1,
  disp2,
}) => {
  return (
    <div className={`${styles.NewsImageCard} ${style}`}>
      <div className={styles.newsImage}>
        <Image src={srcimg} fluid alt={imageTitle} />
      </div>
      <div className={styles.NewsImageCardText}>
        <p className={styles.NewsImageCardParagraph}>{NewsDate}</p>
        <p className={styles.NewsImageCardTitle}>{BigNewsTitle}</p>
      </div>
      <div className={styles.NewsCardOverlay}>
        <div className={styles.NewsCardOverlayText}>
          <p
            className={styles.NewsImageCardTitle}
            style={{ paddingBottom: "1rem" }}
          >
            {disTitle}
          </p>
          <p className={styles.NewsDishead1}>{dish1}</p>
          <div className={styles.NewsInspire}></div>
          <p className={styles.NewsImageCardParagraph}>{disp1}</p>
          <p className={styles.NewsDishead1}>{dish2}</p>
          <div className={styles.NewsInspire}></div>

          <p className={styles.NewsImageCardParagraph}>{disp2}</p>
        </div>
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
            <Col
              key={ind}
              xl={colLength(ind)}
              lg={colLength(ind)}
              xs={12}
              md={12}
            >
              <div className={styles.NewsCard}>
                <NewsImageCard
                  imageTitle={news.BigNewsTitle}
                  srcimg={news.srcimg}
                  NewsDate={news.NewsDate}
                  BigNewsTitle={news.BigNewsTitle}
                  disTitle={news.disTitle}
                  dish1={news.dish1}
                  disp1={news.disp1}
                  dish2={news.dish2}
                  disp2={news.disp2}
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
