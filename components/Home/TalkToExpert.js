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
      <Row>
        <Col xl={6}>
          <h5
            className={styles.TalkToExpertHead}
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Wanna talk to our Expert?
          </h5>
        </Col>
        <Col xl={6} className={styles.TalkToExpertBtnContainer}>
          <ActionButton text={"Send a Message"} handleAction={() => null} />
        </Col>
      </Row>
      <Row className={styles.TalkToExpertInputs}>
        <Col xl={4} className={styles.TalkToExpertCol}>
          <input type={"text"} placeholder="Name and Surname" />
        </Col>
        <Col xl={4} className={styles.TalkToExpertCol}>
          <input type={"email"} placeholder="Work Email" />
        </Col>

        <Col xl={4} className={styles.TalkToExpertCol}>
          <input type={"number"} placeholder="Phone number (opt)" />
        </Col>
      </Row>
    </div>
  );
};
export default TalkToExpert;
