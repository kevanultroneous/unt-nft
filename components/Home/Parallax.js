import styles from "@/styles/components/home/Parallax.module.css";
import { Col, Row } from "react-bootstrap";
const Parallax = () => {
  return (
    <div>
      <section className={styles.Mainsection}>
        <div className={styles.Parallax}>
          <Row className={styles.Parallaxrow}>
            <Col xl={12}>
              <p className={styles.Pera}>10+ Million Transaction Processed</p>
            </Col>
            <Col xl={12}>
              <h3 className={styles.MainHeading}>SCALABLE.</h3>
            </Col>
          </Row>
          <Row className={styles.Parallaxrow}>
            <Col xl={12}>
              <p className={styles.Pera}>32+ Global Blockchain Customers</p>
            </Col>
            <Col xl={12}>
              <h3 className={styles.MainHeading}>Secure.</h3>
            </Col>
          </Row>
          <Row className={styles.Parallaxrow}>
            <Col xl={12}>
              <p className={styles.Pera}>
                7+ Years of Unique Blockchain Experience
              </p>
            </Col>
            <Col xl={12}>
              <h3 className={styles.MainHeading}>Successive.</h3>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
