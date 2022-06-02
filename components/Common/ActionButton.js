import styles from "@/styles/components/ActionButton.module.css";
const ActionButton = ({ text, handleAction = null }) => {
  return (
    <div
      className={styles.ActionButton}
      onClick={() => (handleAction ? handleAction() : null)}
    >
      {text}
    </div>
  );
};
export default ActionButton;
