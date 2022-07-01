import styles from "@/styles/components/ActionButtonV2.module.css";
import Link from "next/link";
const ActionButtonV2 = ({ text, handleAction = null, outerstyle, href }) => {
  return (
    <div className={styles.outer} onClick={handleAction ? handleAction : null}>
      <div className={styles.button}>
        <Link href={`${href ? href : null}`}>
          <div>{text}</div>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtonV2;
