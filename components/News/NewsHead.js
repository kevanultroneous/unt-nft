import React from "react";
import SoftwareDevelopment from "../Common/SoftwareDevelopment";
import { Row } from "react-bootstrap";
import styles from "@/styles/components/News/NewsHead.module.css";

function NewsHead() {
  return (
    <div className={styles.newsHeadContainer}>
      <Row>
        <SoftwareDevelopment
          text={"MobifinX News"}
          miniLineStyle={styles.miniLineStyling}
          textStyle={styles.headingStyle}
          hidebutton
        />
        <div className={styles.NewsHeroHeading}>
          <h3>Know everything at one place</h3>
        </div>
      </Row>
    </div>
  );
}

export default NewsHead;
