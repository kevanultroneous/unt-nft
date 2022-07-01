import styles from "@/styles/components/ActionButtonV2.module.css";
const ActionButtonV2 = ({ text, mobile }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.button}>
        <div
          className={styles.text}
          style={mobile ? { borderRadius: "100%" } : null}
        >
          {mobile ? mobile : text}
        </div>
      </div>
    </div>
  );
};
export default ActionButtonV2;
