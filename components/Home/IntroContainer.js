import styles from "@/styles/components/home/IntroContainer.module.css";
import { Image } from "react-bootstrap";
const IntroContainer = () => {
  return (
    <div className={styles.IntroContainer}>
      <Image src="/assets/images/mainicon.svg" fluid draggable={false} />
    </div>
  );
};
export default IntroContainer;
