import styles from "@/styles/components/home/TechnologyStack.module.css";
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
  return (
    <div className={styles.TechnologyStackContainer}>
      <h4 className={styles.TechnologyStackHeading}>Technology Stack</h4>
      <div className={styles.TechnologyStack}>
        {listOfStack.map((value, index) => (
          <div className={styles.Stack}>
            {/* <div className={styles.Back1}>
              <div className={styles.Back2}>
                <div className={styles.Back3}> */}
            <Image src={value} />
          </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};
export default TechnologyStack;
