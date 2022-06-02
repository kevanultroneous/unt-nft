import styles from "@/styles/components/home/GetInTouch.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const GetInTouch = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.GetInTouchContainer}>
      <h5
        className={styles.GetInTouchHead}
        data-aos={"flip-down"}
        data-aos-duration="3000"
      >
        Get in Touch
      </h5>
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
          <ActionButton text={"Send a Message"} />
        </Col>
      </Row>
    </div>
  );
};
export default GetInTouch;
