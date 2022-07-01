import styles from "@/styles/components/home/Products.module.css";
import Link from "next/link";

const ActionButtonV3 = ({
  text,
  backc,
  borderc,
  opacity,
  handleAction = null,
  href,
}) => {
  return (
    <div className={styles.outer} onClick={handleAction ? handleAction : null}>
      <div
        className={styles.button}
        style={{
          opacity: opacity,
          backgroundSize: "200% 100%",
          background: backc,
          border: borderc,
        }}
      >
        <Link href={`${href ? href : null}`}>
          <div classNane={styles.text}>{text}</div>
        </Link>
      </div>
    </div>
  );
};
export default ActionButtonV3;
