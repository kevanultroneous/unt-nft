import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/WhatyouGet.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import AOS from "aos";
import { useEffect } from "react";
const WhatyouGet = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <section
      className={styles.WhatyouWillget}
      data-aos="fade"
      data-aos-duration="500"
    >
      <Row className={styles.sectionrow}>
        <Col xl={2} md={12} className={styles.sectioncol}>
          <p className={styles.Whatyougetverticaltext}>UNIQUE SELLING POINTS</p>
        </Col>
        <Col xl={10} md={12} className={styles.Headingcol}>
          <h2>Here is what you will get</h2>
          <Row>
            <Col
              xl={6}
              md={6}
              className={styles.Heading}
              data-aos="fade-left"
              data-aos-duration="3000"
              // data-aos-delay="500"
              data-aos-easing="ease"
            >
              <div className={styles.Details}>
                <h4>100x leverage engine</h4>
                <p>
                  The engine fortifies the performance of the exchange while
                  allowing traders to amplify their exposure and potential
                  profit.
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              md={6}
              className={styles.Heading}
              data-aos="fade-left"
              data-aos-duration="3000"
              // data-aos-delay="500"
              data-aos-easing="ease"
            >
              <div className={styles.Details}>
                <h4>Auto Deleveraging (ADL) calculator</h4>
                <p>
                  The Auto Deleveraging (ADL) calculator reduces the potential
                  impact of auto-deleveraging by resolving loss uncertainty.
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              md={6}
              className={styles.Heading}
              data-aos="fade-left"
              data-aos-duration="3000"
              // data-aos-delay="500"
              data-aos-easing="ease"
            >
              <div className={styles.Details}>
                <h4>Value at Risk (VaR) engine</h4>
                <p>
                  Real-time risk analytics helps in quantifying the risk of
                  potential losses, measuring and controlling the level of risk
                  exposure.
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              md={6}
              className={styles.Heading}
              data-aos="fade-left"
              data-aos-duration="3000"
              // data-aos-delay="500"
              data-aos-easing="ease"
            >
              <div className={styles.Details}>
                <h4>Portfolio Margining</h4>
                <p>
                  The Auto Deleveraging (ADL) calculator reduces the potential
                  impact of auto-deleveraging by resolving loss uncertainty.
                </p>
              </div>
            </Col>
            <div className={styles.ExplorDesign}>
              <Col
                xl={6}
                md={6}
                className={`${styles.Heading} `}
                data-aos="fade-left"
                data-aos-duration="3000"
                // data-aos-delay="500"
                data-aos-easing="ease"
              >
                <div className="d-flex align-items-center">
                  <div className={styles.FooterContactusLink}>Explore</div>
                  <HiOutlineExternalLink className={styles.ContactusIcon} />
                </div>
              </Col>

              <Col
                xl={6}
                md={6}
                className={styles.Heading}
                data-aos="fade-left"
                data-aos-duration="3000"
                // data-aos-delay="500"
                data-aos-easing="ease"
              >
                <div className={styles.Details}>
                  <h4>Portfolio Margining</h4>
                  <p>
                    Designed for active traders, market makers, and
                    institutional clients seeking optimized risk management,
                    cross-hedging.
                  </p>
                </div>
              </Col>
            </div>
            {/* <Col
              xl={6}
              md={6}
              className={`${styles.Heading} ${styles.BigHead2}`}
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="500"
              data-aos-easing="ease"
            >
              <div className="d-flex align-items-center">
                <div className={styles.FooterContactusLink}>Explore</div>
                <div className={`${styles.Pulse} Pulse`}>
                  <HiOutlineExternalLink className={styles.ContactusIcon} />
                </div>
              </div>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default WhatyouGet;
