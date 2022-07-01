import styles from "@/styles/components/ActionButton.module.css";
import Link from "next/link";
const ActionButton = ({ text, handleAction = null, outerstyle, href }) => {
  return (
    <div
      onClick={handleAction ? handleAction : null}
      className={styles.outer}
      style={outerstyle ? { marginTop: "2.5rem" } : null}
    >
      <div className={styles.button}>
        <Link href={`${href ? href : null}`}>
          <div classNane={styles.text}>{text}</div>
        </Link>
      </div>
    </div>
  );
};
export default ActionButton;
