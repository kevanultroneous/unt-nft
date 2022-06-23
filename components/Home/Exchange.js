import styles from "@/styles/components/home/Exchange.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";
const Exchange = () => {
  return (
    <div className={styles.ExchnageContainer}>
      <h4 className={styles.ExchnageHead}>
        TryFreeDemo <HiOutlineExternalLink className={styles.ContactusIcon} />
      </h4>
      <p className={styles.ExchnageParagraph}>
        Get a free demo to dive in the crypto world with a smart exchange
        platform.
      </p>
    </div>
  );
};
export default Exchange;
