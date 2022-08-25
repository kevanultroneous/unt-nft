import React, { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import styles from "@/styles/components/News/NewsCard.module.css";
import Aos from "aos";

function NewsCard({ trendingNews }) {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div className={styles.newsMainContainer}>
      <Row className={styles.newsCardRow}>
        {trendingNews.map((news, index) => {
          return (
            <Col key={index} xl={4} lg={4}>
              <div
                className={styles.newsBox}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Row className={styles.newsImageBox}>
                  <Col xl={2} md={2} xs={2} className={styles.newsLogo}>
                    <Image fluid src={news.newsLogo} alt={news.newsHead} />
                  </Col>
                  <Col xl={10} md={10} xs={10} className={styles.newsCount}>
                    <span>0{news.newsCount}</span>
                  </Col>
                </Row>
                <Row className={styles.newsHeadLine}>
                  <h6>{news.newsHead}</h6>
                </Row>
                <Row className={styles.newsBody}>
                  <p>{news.newsBody}</p>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default NewsCard;
