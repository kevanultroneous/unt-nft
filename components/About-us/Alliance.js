import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/aboutus/Alliance.module.css";
import { AllianceData } from "utils/AboutusDetail";
const Alliance = () => {
  return (
    <section className={styles.Alliance}>
      <div className={styles.Alliancecontainer}>
        <Row className={styles.Alliancerow}>
          <Col xl={2}>
            <p className={styles.Rotatetext}>CERTIFICATES</p>
          </Col>
          <Col xl={4} className={styles.ProudtoWork}>
            <h4>Look at our Achievements</h4>
          </Col>
          <Col xl={6}>
            <Row className={styles.Partnerrow}>
              {AllianceData.map((v, i) => {
                return (
                  <Col xl={4} xs={4} key={i}>
                    <Image
                      src={v.image}
                      className={styles.AllianceImg}
                      alt={v.image}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Alliance;
