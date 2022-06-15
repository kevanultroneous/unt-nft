import ActionButton from "../Common/ActionButton";
import styles from "@/styles/components/home/Exchange.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";
const Exchange = () => {
  return (
    <div className={styles.ExchnageContainer}>
      <h4 className={styles.ExchnageHead}>Ready to start Your Exchange?</h4>
      <p className={styles.ExchnageParagraph}>
        Get a free demo to see how it works.
      </p>
      <ActionButton
        text={
          <>
            Try free Demo <HiOutlineExternalLink />
          </>
        }
      />
    </div>
  );
};
export default Exchange;
