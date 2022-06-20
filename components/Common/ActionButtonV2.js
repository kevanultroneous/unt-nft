import styles from "@/styles/components/ActionButtonV2.module.css";
const ActionButtonV2 = ({ text }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.button}>
        <div classNane={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default ActionButtonV2;
