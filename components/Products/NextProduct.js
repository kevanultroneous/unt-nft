import styles from "@/styles/components/Products/NextProduct.module.css";
import { Col, Row } from "react-bootstrap";
import WaterText from "../Common/WaterText";
const NextProduct = ({ listofdata = [] }) => {
  return (
    <Row
      className={`${styles.NextProductContainer} m-0 p-0 justify-content-center`}
    >
      {listofdata.map((value, index) => (
        <Col xl={3} xs={12} key={index} className={styles.SpaceForMob}>
          <WaterText color={value.color} text={value.name} />
        </Col>
      ))}
    </Row>
  );
};
export default NextProduct;
