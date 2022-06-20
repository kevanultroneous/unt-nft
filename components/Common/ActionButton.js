import styles from "@/styles/components/ActionButton.module.css";
const ActionButton = ({ text, handleAction = null }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.button}>
        <div classNane={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default ActionButton;
