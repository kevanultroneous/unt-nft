import styles from "@/styles/components/home/IntroContainer.module.css";
import Aos from "aos";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
const IntroContainer = ({ handleclick, hidden }) => {
  const [ts1, setTs1] = useState(true);
  useEffect(() => {
    Aos.refresh();
    Aos.init();
    const t1 = setTimeout(() => {
      setTs1(false);
    }, 4000);
    return () => clearInterval(t1);
  }, []);
  return (
    <div className={styles.IntroContainer}>
      <div className="p-5 p-xl-0 p-md-0 p-lg-0 p-xxl-0 p-xs-0 ">
        <Image
          alt="logo"
          className={`${ts1 == false ? "fadeoutcss" : ""}`}
          src="/assets/images/mainicon.svg"
          fluid
          draggable={false}
        />
      </div>
    </div>
  );
};
export default IntroContainer;
