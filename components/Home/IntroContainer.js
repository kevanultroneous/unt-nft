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
      <div className="p-5 p-xl-0 p-md-0 p-lg-0 p-xxl-0">
        <Image
          // data-aos="zoom-in"
          // data-aos-duration="2000"
          src="/assets/images/mainicon.svg"
          fluid
          draggable={false}
          onClick={() => handleclick()}
        />
      </div>
    </div>
  );
};
export default IntroContainer;
