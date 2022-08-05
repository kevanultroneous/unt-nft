import styles from "@/styles/components/sideHeading.module.css";
import { Col } from "react-bootstrap";

function SideHeading({ customstyle, heading, customClass }) {
  return (
    <div xl={2} className={`${styles.sideHeadingBox} ${customClass}`}>
      <p style={customstyle} className={styles.sideHeading}>
        {heading}
      </p>
    </div>
  );
}

export default SideHeading;
