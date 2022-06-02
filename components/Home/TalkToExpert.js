import styles from "@/styles/components/home/TalkToExpert.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const TalkToExpert = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.TalkToExpertContainer}>
      <h5
        className={styles.TalkToExpertHead}
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        Wanna talk to our Expert?
      </h5>
      <Row className={styles.TalkToExpertInputs}>
        <Col xl={6} className={styles.TalkToExpertCol}>
          <input type={"text"} placeholder="Name and Surname" />
        </Col>
        <Col xl={6} className={styles.TalkToExpertCol}>
          <input type={"email"} placeholder="Work Email" />
        </Col>
        <Col xl={6} className={styles.TalkToExpertCol}>
          <input type={"text"} placeholder="What made you write to us?" />
        </Col>
        <Col xl={6} className={styles.TalkToExpertCol}>
          <input type={"number"} placeholder="Phone number (opt)" />
        </Col>
        <Col xl={12} className={styles.TalkToExpertCol}>
          <textarea rows={3} placeholder="What you want to consult?"></textarea>
        </Col>
        <Col xl={12} className={styles.TalkToExpertCol}>
          <ActionButton text={"Send a Message"} handleAction={() => null} />
        </Col>
      </Row>
    </div>
  );
};
export default TalkToExpert;
