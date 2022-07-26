import styles from "@/styles/components/Products/Solution.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButtonV2 from "../Common/ActionButtonV2";
import AOS from "aos";
import { useEffect } from "react";
const Solution = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <section className={styles.SolutionHelps}>
      <h3>This Solution Helps</h3>
      <Row className={styles.Solutionrow}>
        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade"
          // data-aos-duration="3000"
          // data-aos-delay="500"
          // data-aos-easing="ease"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5 className={styles.Divider}>
            Strong Technical Competence{" "}
            {/* <span className={styles.divider}>|</span> */}
          </h5>
        </Col>

        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade"
          // data-aos-duration="3000"
          // data-aos-delay="500"
          // data-aos-easing="ease"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5 className={styles.Divider}>
            Strong Technical Competence{" "}
            {/* <span className={styles.divider}>|</span> */}
          </h5>
        </Col>

        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade"
          // data-aos-duration="3000"
          // data-aos-delay="500"
          // data-aos-easing="ease"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5>Strong Technical Competence</h5>
        </Col>
      </Row>
      <div
        className={styles.Button}
        // data-aos="fade"
        // data-aos-duration="3000"
        // data-aos-delay="500"
        // data-aos-easing="ease"
      >
        <ActionButtonV2
          text={
            <>
              <span className={styles.Btntext}>Try Free Demo </span>
              <span className={styles.Icon}>
                {" "}
                <HiOutlineExternalLink />
              </span>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Solution;
