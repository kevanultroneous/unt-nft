import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Detail.module.css";
import { AboutDetail } from "utils/AboutusDetail";
import { useEffect } from "react";
import Aos from "aos";

const Detail = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div className={styles.AboutdetailsContainer}>
      <Row>
        <Col xl={2} className={styles.Subtitle}>
          <p>ABOUT US</p>
        </Col>
        <Col xl={10}>
          <p className={styles.Detail}>
            {" "}
            MobifinX is an advanced, secured, scalable, robust, and flexible
            Digital Asset Trading Suite. It enables Banks, Institutional
            Investors, Hedge Funds, Cryptocurrency owners, Stock Exchanges &
            Broker-Dealers to efficiently roll out and scale the Trading
            Ecosystem with a multitude of Manual and Automated Trading use cases
            for consumers through multiple Products and creating a digital
            ecosystem.{" "}
          </p>
        </Col>
      </Row>
      <Row className={styles.Advantages}>
        <Col xl={2}></Col>
        <Col
          xl={10}
          className={styles.Detailcol}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {AboutDetail.map((v, i) => (
            <Col xl={4} xs={4} md={12} className={styles.Advantagecol} key={i}>
              <Image src={v.image} className={styles.Icon} alt="About icon" />
              <h4 className={styles.Heading}>{v.title}</h4>
              <p className={styles.Description}>{v.text}</p>
            </Col>
          ))}
        </Col>
      </Row>
      <Row
        className={styles.Aboutcandle}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Col xl={2}></Col>
        <Col xl={10}>
          <Image
            alt="about-candle"
            src={"/assets/images/Timeline.jpg"}
            className={styles.Aboutcandleimg}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
