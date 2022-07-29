import styles from "@/styles/components/Lm.module.css";
import Link from "next/link";
import { useState } from "react";
const LearnMore = ({ t1, t2, href, bgcolor }) => {
  const [hoverText, setHoverText] = useState(false);
  return (
    <Link href={href}>
      <ul
        onMouseOver={() => setHoverText(true)}
        onMouseLeave={() => setHoverText(false)}
        className={styles.ulc}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0%",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        <p
          className={styles.para}
          data-animation="to-right"
          style={hoverText ? { color: bgcolor } : null}
        >
          Learn More
        </p>
        <li
          style={{ background: bgcolor }}
          className={styles.menu}
          data-animation="to-right"
        >
          <p>
            <span>{t1}</span>
            <span>{t2}</span>
          </p>
        </li>
      </ul>
    </Link>
  );
};
export default LearnMore;
