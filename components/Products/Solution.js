import styles from "@/styles/components/Products/Solution.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButtonV2 from "../Common/ActionButtonV2";

const Solution = () => {
  return (
    <section className={styles.SolutionHelps}>
      <h3>This Solution Helps</h3>
      <Row className={styles.Solutionrow}>
        <Col xl={3} xs={12} md={4} className={styles.SolutionDetail}>
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5>
            Strong Technical Competence{" "}
            <span className={styles.divider}>|</span>
          </h5>
        </Col>

        <Col xl={3} xs={12} md={4} className={styles.SolutionDetail}>
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5>
            Strong Technical Competence{" "}
            <span className={styles.divider}>|</span>
          </h5>
        </Col>

        <Col xl={3} xs={12} md={4} className={styles.SolutionDetail}>
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5>Strong Technical Competence</h5>
        </Col>
      </Row>
      <div className={styles.Button}>
        <ActionButtonV2
          text={
            <>
              Try Free Demo <HiOutlineExternalLink />
            </>
          }
        />
      </div>
    </section>
  );
};

export default Solution;
