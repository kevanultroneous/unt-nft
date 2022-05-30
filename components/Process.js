import styles from "@/styles/components/Process.module.css";
import { Image } from "react-bootstrap";
const Process = () => {
  return (
    <div className={styles.ProcessContainer}>
      <p className={styles.ProcessHead}>PROCESS</p>
      <h4 className={styles.ProcessTitle}>
        It’ll make everything easy for you
      </h4>
      <div className={styles.ProcessImage}>
        <Image fluid src={"/assets/images/process.svg"} />
      </div>
    </div>
  );
};
export default Process;
