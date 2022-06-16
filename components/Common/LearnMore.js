import styles from "@/styles/components/Lm.module.css";
const LearnMore = ({ t1, t2 }) => {
  return (
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
      <li className={styles.menu} data-animation="to-right">
        <a href="#0">
          <span>{t1}</span>
          <span>{t2}</span>
        </a>
      </li>
    </ul>
  );
};
export default LearnMore;
