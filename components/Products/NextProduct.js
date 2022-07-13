import styles from "@/styles/components/Products/NextProduct.module.css";
import { Col, Row } from "react-bootstrap";
import WaterText from "../Common/WaterText";
const NextProduct = ({ listofdata = [] }) => {
  return (
    <Row
      className={`${styles.NextProductContainer} m-0 p-0 justify-content-center`}
    >
      {listofdata.map((value, index) => (
        <Col
          xl={3}
          xs={12}
          key={index}
          className={`${styles.SpaceForMob} ${
            index === 0
              ? "text-xl-end text-xs-start"
              : index === 1
              ? "text-center"
              : null
          }`}
        >
          <WaterText color={value.color} text={value.name} />
          {/* <div className={styles.Outer}>
            <div className={styles.Bg}>
              <div className={styles.Inner}>
                <h1>GRADIENT TEXT ON HOVER</h1>
              </div>
            </div>
          </div> */}
        </Col>
      ))}
    </Row>
  );
};
export default NextProduct;
