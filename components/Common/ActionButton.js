import styles from "@/styles/components/ActionButton.module.css";
const ActionButton = ({ text, handleAction = null, outerstyle }) => {
  return (
    <div
      className={styles.outer}
      style={outerstyle ? { marginTop: "2.5rem" } : null}
    >
      <div className={styles.button}>
        <div classNane={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default ActionButton;
