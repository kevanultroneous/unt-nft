import styles from "@/styles/components/Lm.module.css";
import Link from "next/link";
const LearnMore = ({ t1, t2, href, bgcolor }) => {
  return (
    <Link href={href}>
      <ul
        className={styles.ulc}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0%",
        }}
      >
        <p className={styles.para} data-animation="to-right">
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
