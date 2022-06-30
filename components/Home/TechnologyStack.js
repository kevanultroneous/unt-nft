import styles from "@/styles/components/home/TechnologyStack.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
const TechnologyStack = () => {
  const listOfStack = [
    "/assets/images/stk1.png",
    "/assets/images/stack2.png",
    "/assets/images/stack3.png",
    "/assets/images/stack4.png",
    "/assets/images/stack5.png",
    "/assets/images/stack6.png",
  ];
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.TechnologyStackContainer}>
      <h4 className={styles.TechnologyStackHeading}>Technology Stack</h4>
      <div className={styles.TechnologyStack}>
        {listOfStack.map((value, index) => (
          <div
            key={index}
            className={styles.Stack}
            data-aos={"zoom-in"}
            data-aos-duration="2000"
          >
            <Image alt="technostack" src={value} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechnologyStack;
