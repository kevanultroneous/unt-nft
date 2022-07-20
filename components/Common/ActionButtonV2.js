import styles from "@/styles/components/ActionButtonV2.module.css";
import Link from "next/link";
const ActionButtonV2 = ({
  text,
  handleAction = null,
  outerstyle,
  href,
  partialstyle,
}) => {
  return (
    <div
      className={`${styles.outer}`}
      onClick={handleAction ? handleAction : null}
    >
      <div className={`${styles.button}  ${partialstyle}`}>
        <Link href={`${href ? href : null}`}>
          <div className={styles.Textdiv}>{text}</div>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtonV2;
