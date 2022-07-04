import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/WhatyouGet.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";

const WhatyouGet = () => {
  return (
    <section className={styles.WhatyouWillget}>
      <Row className={styles.sectionrow}>
        <Col xl={3} className={styles.sectioncol}>
          <p className={styles.Whatyougetverticaltext}>UNIQUE SELLING POINTS</p>
        </Col>
        <Col xl={9} className={styles.Headingcol}>
          <h2>Here is what you will get</h2>
          <Row>
            <Col xl={6} className={styles.Heading}>
              <div className={styles.Details}>
                <h4>100x leverage engine</h4>
                <p>
                  The engine fortifies the performance of the exchange while
                  allowing traders to amplify their exposure and potential
                  profit.
                </p>
              </div>
            </Col>
            <Col xl={6} className={styles.Heading}>
              <div className={styles.Details}>
                <h4>Auto Deleveraging (ADL) calculator</h4>
                <p>
                  The Auto Deleveraging (ADL) calculator reduces the potential
                  impact of auto-deleveraging by resolving loss uncertainty.
                </p>
              </div>
            </Col>
            <Col xl={6} className={styles.Heading}>
              <div className={styles.Details}>
                <h4>Value at Risk (VaR) engine</h4>
                <p>
                  Real-time risk analytics helps in quantifying the risk of
                  potential losses, measuring and controlling the level of risk
                  exposure.
                </p>
              </div>
            </Col>
            <Col xl={6} className={styles.Heading}>
              <div className={styles.Details}>
                <h4>Portfolio Margining</h4>
                <p>
                  The Auto Deleveraging (ADL) calculator reduces the potential
                  impact of auto-deleveraging by resolving loss uncertainty.
                </p>
              </div>
            </Col>
            <Col xl={6} className={`${styles.Heading} ${styles.BigHead}`}>
              <div className="d-flex align-items-center">
                <div className={styles.FooterContactusLink}>Explore</div>
                <HiOutlineExternalLink className={styles.ContactusIcon} />
              </div>
            </Col>
            <Col xl={6} className={styles.Heading}>
              <div className={styles.Details}>
                <h4>Portfolio Margining</h4>
                <p>
                  Designed for active traders, market makers, and institutional
                  clients seeking optimized risk management, cross-hedging.
                </p>
              </div>
            </Col>
            <Col xl={6} className={`${styles.Heading} ${styles.BigHead2}`}>
              <div className="d-flex align-items-center">
                <div className={styles.FooterContactusLink}>Explore</div>
                <HiOutlineExternalLink className={styles.ContactusIcon} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default WhatyouGet;
