import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/FutureChoice.module.css";
import { useEffect } from "react";
import AOS from "aos";
const FutureChoice = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.FutureChoiceContainer}>
      <p
        className={styles.ReadBlog}
        data-aos={"fade-left"}
        data-aos-duration="2000"
      >
        READ BLOGS
      </p>
      <h6
        className={styles.BeApartOf}
        data-aos={"fade-right"}
        data-aos-duration="2000"
      >
        BE A PART OF
      </h6>
      <h5
        className={styles.FutureChoice}
        data-aos={"fade-left"}
        data-aos-duration="2000"
      >
        FUTURE'S CHOICE!
      </h5>
      <div>
        <div
          className={styles.WannaReadBtn}
          data-aos={"fade-right"}
          data-aos-duration="2000"
        >
          I wanna Read <HiOutlineExternalLink style={{ marginLeft: "1rem" }} />
        </div>
      </div>
    </div>
  );
};
export default FutureChoice;
