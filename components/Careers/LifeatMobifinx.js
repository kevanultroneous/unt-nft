import styles from "@/styles/components/Careers/LifeatMobifinx.module.css";
import { Row, Col, Image } from "react-bootstrap";

import React from "react";

function LifeatMobifinx() {
  return (
    <div className={styles.lifeMobifinxMainContainer}>
      <Row>
        <Col xl={2} className={styles.sideHeading}>
          <p>EXPLORE OUR WORKPLACE</p>
        </Col>
        <Col xl={10} className={styles.rightSection}>
          <div className={styles.rightText}>
            <h3>We Believe in adding X-Factor to everywhere</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &apos;lorem
              ipsum&apos; will uncover many web sites still in their infancy.
            </p>
          </div>
          <div className={styles.rightImage}>
            <Image
              src="/assets/images/Career-Life-Mobifinx.png"
              alt="Life At MobifinX"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LifeatMobifinx;
