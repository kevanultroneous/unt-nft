import styles from "@/styles/components/Careers/LifeatMobifinx.module.css";
import SideHeading from "../Common/SideHeading";
import { Row, Col, Image } from "react-bootstrap";

import React from "react";

function LifeatMobifinx() {
  return (
    <div className={styles.lifeMobifinxMainContainer}>
      <Row>
        <Col xl={2} className={styles.lifeAtMobifinxSideHeading}>
          <SideHeading heading={"LIFE AT MOBIFINX"} />
        </Col>
        <Col xl={10} md={12} className={styles.rightSection}>
          <Col xl={12} md={12} lg={12} sm={12} className={styles.rightText}>
            <h3>
              We Believe in adding <br /> X-Factor to everywhere
            </h3>
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
          </Col>
          <Col xl={12} md={12} lg={12} sm={12} className={styles.rightImage}>
            <div className={styles.CareerImgdiv}>
              <Image
                fluid
                src="/assets/images/Career-Life-Mobifinx.png"
                alt="Life At MobifinX"
                data-aos="fade-left"
                data-aos-duration="2000"
                className={styles.CareeraImaganim}
              />
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default LifeatMobifinx;
