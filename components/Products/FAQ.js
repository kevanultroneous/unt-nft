import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import styles from "@/styles/components/Products/FAQ.module.css";

const FAQ = () => {
  return (
    <section className={styles.Askedquestion}>
      <Row>
        <Col xl={3}>
          <p className={styles.verticaltext}>FAQ’s</p>
        </Col>
        <Col xl={9}>
          <h3>Frequently Asked Questions</h3>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default FAQ;
