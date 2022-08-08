import React from "react";
import SoftwareDevelopment from "../Common/SoftwareDevelopment";
import { Row } from "react-bootstrap";
import styles from "@/styles/components/LightHead.module.css";

function LightHead({ text, heading }) {
  return (
    <div className={styles.LightHeadContainer}>
      <Row>
        <SoftwareDevelopment
          text={text}
          miniLineStyle={styles.miniLineStyling}
          textStyle={styles.headingStyle}
          hidebutton
        />
        <div className={styles.LightHeroHeading}>
          <h3>{heading}</h3>
        </div>
      </Row>
    </div>
  );
}

export default LightHead;
