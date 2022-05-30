import styles from "@/styles/components/Achievements.module.css";
import { Col, Image, Row } from "react-bootstrap";
const Achievements = () => {
  const listAch = [
    "/assets/images/ach-1.svg",
    "/assets/images/ach-2.svg",
    "/assets/images/ach-3.svg",
    "/assets/images/ach-4.svg",
    "/assets/images/ach-5.svg",
    "/assets/images/ach-6.svg",
  ];
  return (
    <div className={styles.AchievementsContainer}>
      <p className={styles.AchievementsHead}>CERTIFICATES</p>
      <h4 className={styles.AchievementsTitle}>Look at our Achievements</h4>
      <Row className={styles.AchievementBoxContainer}>
        {listAch.map((v, i) => (
          <Col xl={2}>
            <div className={styles.AchievementBox}>
              <Image src={v} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Achievements;
