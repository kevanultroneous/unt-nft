import styles from "@/styles/components/home/IntroContainer.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
const IntroContainer = ({ handleclick }) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.IntroContainer}>
      <Image
        data-aos="zoom-in"
        data-aos-duration="2000"
        src="/assets/images/mainicon.svg"
        fluid
        draggable={false}
        onClick={() => handleclick()}
      />
    </div>
  );
};
export default IntroContainer;
