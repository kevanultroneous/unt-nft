import styles from "@/styles/components/Products/NextProduct.module.css";
import Aos from "aos";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import WaterText from "../Common/WaterText";
const NextProduct = ({ listofdata = [] }) => {
  const vals = ["MxDex", "MxFi", "MxLaunch"];
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    // <Row
    //   className={`${styles.NextProductContainer} m-0 p-0 justify-content-center`}
    // >
    //   {listofdata.map((value, index) => (
    //     <Col
    //       xl={4}
    //       xs={12}
    //       key={index}
    //       className={`${styles.SpaceForMob} ${
    //         index === 0
    //           ? "text-xl-end text-xs-start"
    //           : index === 1
    //           ? "text-center"
    //           : null
    //       }`}
    //     >
    //       <WaterText color={value.color} text={value.name} />
    //       {/* <div className={styles.Outer}>
    //         <div className={styles.Bg}>
    //           <div className={styles.Inner}>
    //             <h1>GRADIENT TEXT ON HOVER</h1>
    //           </div>
    //         </div>
    //       </div> */}
    //     </Col>
    //   ))}
    // </Row>
    <Row className={styles.NextRow}>
      {vals.map((el, ind) => (
        <Col
          key={ind}
          xs={12}
          md={4}
          className={
            ind === 0
              ? styles.ColZero
              : ind === 1
              ? styles.ColOne
              : styles.ColTwo
          }
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className={styles.outer}>
            <div className={styles.bg}>
              <div className={styles.inner}>
                <h1 className={styles.h1}> {el} </h1>
              </div>
            </div>
          </div>
        </Col>
      ))}
      {/* <Col xs={12} md={4} className={styles.Col}>
        <div class={styles.outer}>
          <div class={styles.bg}>
            <div class={styles.inner}>
              <h1 className={styles.h1}>  </h1>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4} className={styles.Col}>
        <div class={styles.outer}>
          <div class={styles.bg}>
            <div class={styles.inner}>
              <h1 className={styles.h1}>  </h1>
            </div>
          </div>
        </div>
      </Col> */}
    </Row>
  );
};
export default NextProduct;
