import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import styles from "@/styles/components/Products/FAQ.module.css";

const FAQ = () => {
  return (
    <section className={styles.Askedquestion}>
      <Row>
        <Col xl={2}>
          <p className={styles.verticaltext}>FAQ’s</p>
        </Col>
        <Col xl={10}>
          <h3>Frequently Asked Questions</h3>
          <Accordion defaultActiveKey="0" flush>
            {[0, 1, 2, 3, 4, 5].map((value, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </Accordion.Header>
                <Accordion.Body>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default FAQ;
