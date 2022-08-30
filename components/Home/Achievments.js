import styles from "@/styles/components/home/Achievements.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { AchivmentData } from "utils/AchivmentsData";
const Achievements = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.AchievementsContainer}>
      <p className={styles.AchievementsHead}>ALLIANCES & PARTNERSHIP</p>
      <h4 className={styles.AchievementsTitle}>We are proud to Work with</h4>
      <Row
        className={styles.AchievementBoxContainer}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {AchivmentData.map((v, i) => (
          <Col xl={3} xs={12} key={i} className={styles.AchivementCol}>
            <div className={styles.AchievementBox}>
              <Image
                alt={v.image}
                src={v.image}
                className={styles.AchivmentImg}
              />
              <div className={styles.Border}></div>
              <p className={styles.AchievementsDetails}>{v.Detail}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Achievements;
