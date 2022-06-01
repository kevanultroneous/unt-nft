import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/FutureChoice.module.css";
const FutureChoice = () => {
  return (
    <div className={styles.FutureChoiceContainer}>
      <p className={styles.ReadBlog}>READ BLOGS</p>
      <h6 className={styles.BeApartOf}>BE A PART OF</h6>
      <h5 className={styles.FutureChoice}>FUTURE'S CHOICE!</h5>
      <div>
        <div className={styles.WannaReadBtn}>
          I wanna Read <HiOutlineExternalLink style={{ marginLeft: "1rem" }} />
        </div>
      </div>
    </div>
  );
};
export default FutureChoice;
