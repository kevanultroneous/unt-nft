import styles from "@/styles/components/aboutus/OurStory.module.css";
import Aos from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { AboutDetail, OurStoryData } from "utils/AboutusDetail";
const OurStory = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <section
      className={styles.OurStory}
      data-aos="fade"
      data-aos-duration="500"
    >
      <div className={styles.OurStoryContainer}>
        <Row className={styles.HeadingRow}>
          <Col xl={2}></Col>
          <Col xl={10}>
            <h4>How we came this long...</h4>
          </Col>
        </Row>

        <Row className={styles.Ourstoryrow}>
          <Col xl={2}>
            <p className={styles.Rotatetext}>OUR STORY</p>
          </Col>
          {/* <Row className={styles.HeadingRow}>
            <h4>How we came this long...</h4>
          </Row> */}
          <div className={styles.Mobdiv}>
            <Col xl={8} md={12} xs={12} className={styles.HowWeCame}>
              <p>
                MobifinX began as Espay Exchange in early 2017 and developed a
                complete Digital Asset Trading suite in-house with 24 technical
                experts and a 100% custom-built product. During the first half
                of 2018, we offered our services to B2B clients and helped them
                launch their trading platforms. We have deployed more than 20
                platforms, including some famous names, like CoinMarketCap.
              </p>
              <p>
                We are a leading crypto exchange software development company
                based in the USA established in 2011. Mobifinx is a tech partner
                that enables Banks, Institutional Investors, Hedge Funds,
                Cryptocurrency Owners, Stock exchanges and Broker-Dealers to
                efficiently roll out and scale Trading Ecosystem and take the
                leap without
              </p>
            </Col>
            <Col xl={4} md={12} xs={4} className={styles.Strengthcol}>
              {OurStoryData.map((v, i) => {
                return (
                  <div className={styles.Strength} key={i}>
                    <Col xl={4} xs={4} md={4} className={styles.Employeeimg}>
                      <Image
                        src={v.image}
                        alt={v.image}
                        className={styles.StrengthImg}
                      />
                    </Col>
                    <Col xl={4} xs={4} md={4}>
                      <h5>{v.title}</h5>
                      <span>{v.name}</span>
                    </Col>
                  </div>
                );
              })}
            </Col>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default OurStory;
