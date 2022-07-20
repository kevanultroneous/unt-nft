import styles from "@/styles/components/ActionButton.module.css";
import Link from "next/link";
const ActionButton = ({
  text,
  handleAction = null,
  outerstyle,
  href,
  otherclass,
  partialButton,
}) => {
  return (
    <div
      onClick={handleAction ? handleAction : null}
      className={`${styles.outer} ${otherclass ? otherclass : null}`}
      style={outerstyle ? { marginTop: "2.5rem" } : null}
    >
      <div className={`${styles.button} ${partialButton}`}>
        {href ? (
          <Link href={`${href ? href : null}`}>
            <div classNane={styles.text}>{text}</div>
          </Link>
        ) : (
          <div classNane={styles.text}>{text}</div>
        )}
      </div>
    </div>
  );
};
export default ActionButton;
