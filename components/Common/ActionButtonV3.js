import styles from "@/styles/components/home/Products.module.css";
import Link from "next/link";
import { useState } from "react";
const ActionButtonV3 = ({
  text,
  backc,
  borderc,
  opacity,
  handleAction = null,
  href,
}) => {
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <div
      className={styles.outer}
      onClick={handleAction ? handleAction : null}
      onMouseOver={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
    >
      <div
        className={styles.button}
        style={{
          opacity: opacity,
          backgroundSize: "200% 100%",
          background: hoverButton ? backc : null,
          border: borderc,
          transition: "all 0.3s ease",
        }}
      >
        <Link href={`${href ? href : null}`}>
          <div classNane={styles.text}>{text}</div>
        </Link>
      </div>
    </div>
  );
};
export default ActionButtonV3;
