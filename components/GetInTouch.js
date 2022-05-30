import styles from "@/styles/components/GetInTouch.module.css";
import { Col, Row } from "react-bootstrap";
const GetInTouch = () => {
  return (
    <div className={styles.GetInTouchContainer}>
      <h5 className={styles.GetInTouchHead}>Get in Touch</h5>
      <Row className={styles.GetInTouchInputs}>
        <Col xl={6} className={styles.GetInTouchCol}>
          <input type={"text"} placeholder="Name and Surname" />
        </Col>
        <Col xl={6} className={styles.GetInTouchCol}>
          <input type={"email"} placeholder="Work Email" />
        </Col>
        <Col xl={6} className={styles.GetInTouchCol}>
          <input type={"text"} placeholder="What made you write to us?" />
        </Col>
        <Col xl={6} className={styles.GetInTouchCol}>
          <input type={"number"} placeholder="Phone number " />
        </Col>
        <Col xl={12} className={styles.GetInTouchCol}>
          <textarea rows={3} placeholder="Add any Message"></textarea>
        </Col>
        <Col xl={12} className={styles.GetInTouchCol}>
          <div className={styles.GetInTouchBtn}>Send a Message</div>
        </Col>
      </Row>
    </div>
  );
};
export default GetInTouch;
