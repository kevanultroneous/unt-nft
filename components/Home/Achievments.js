import styles from "@/styles/components/home/Achievements.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
const Achievements = () => {
  const listAch = [
    "/assets/images/CMMi.svg",
    "/assets/images/GoogleCloud.svg",
    "/assets/images/ISO.svg",
    "/assets/images/ISO1.svg",
    "/assets/images/Azure.svg",
    "/assets/images/CMMi.svg",
  ];
  // useEffect(() => {
  //   AOS.refresh();
  //   AOS.init();
  // }, []);
  return (
    <div className={styles.AchievementsContainer}>
      <p
        className={styles.AchievementsHead}
        // data-aos={"zoom-in"}
        // data-aos-duration="3000"
      >
        CERTIFICATES
      </p>
      <h4
        className={styles.AchievementsTitle}
        // data-aos={"zoom-in"}
        // data-aos-duration="3000"
      >
        Look at our Achievements
      </h4>
      <Row className={styles.AchievementBoxContainer}>
        {listAch.map((v, i) => (
          <Col xl={2} xs={4} key={i}>
            <div
              className={styles.AchievementBox}
              // data-aos={"zoom-in"}
              // data-aos-duration="3000"
            >
              <Image alt={v} src={v} className={styles.AchivmentImg} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Achievements;
