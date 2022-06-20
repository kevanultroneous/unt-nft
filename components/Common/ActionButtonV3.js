import styles from "@/styles/components/home/Products.module.css";

const ActionButtonV3 = ({ text, stylebtn }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.button} style={stylebtn}>
        <div classNane={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default ActionButtonV3;
