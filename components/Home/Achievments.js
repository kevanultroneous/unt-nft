import styles from "@/styles/components/home/Achievements.module.css";
import AOS from "aos";
import { useEffect } from "react";
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
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.AchievementsContainer}>
      <p
        className={styles.AchievementsHead}
        data-aos={"zoom-in"}
        data-aos-duration="3000"
      >
        CERTIFICATES
      </p>
      <h4
        className={styles.AchievementsTitle}
        data-aos={"zoom-in"}
        data-aos-duration="3000"
      >
        Look at our Achievements
      </h4>
      <Row className={styles.AchievementBoxContainer}>
        {listAch.map((v, i) => (
          <Col xl={2} key={i}>
            <div
              className={styles.AchievementBox}
              data-aos={"zoom-in"}
              data-aos-duration="3000"
            >
              <Image alt={v} src={v} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Achievements;
