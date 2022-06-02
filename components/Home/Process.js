import styles from "@/styles/components/home/Process.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
const Process = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.ProcessContainer}>
      <p
        className={styles.ProcessHead}
        data-aos={"zoom-in"}
        data-aos-duration="3000"
      >
        PROCESS
      </p>
      <h4
        className={styles.ProcessTitle}
        data-aos={"zoom-in"}
        data-aos-duration="3000"
      >
        It’ll make everything easy for you
      </h4>
      <div className={styles.ProcessImage}>
        <Image
          fluid
          src={"/assets/images/process.svg"}
          data-aos={"slide-up"}
          data-aos-duration="3000"
        />
      </div>
    </div>
  );
};
export default Process;
