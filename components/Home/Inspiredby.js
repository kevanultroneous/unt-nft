import styles from "@/styles/components/home/Inspiredby.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const CardInspired = () => {
  return (
    <div className={styles.InspiredCardcontainer}>
      <Image
        src="/assets/images/inspiration1.png"
        alt="Avatar"
        className={styles.InspiredCardImage}
      />
      <div className={styles.InspiredDis}>
        <p className={styles.InspiredDisTitle}>
          Private Blockchain & Tokenization
        </p>
        <p className={styles.InspiredDisParagraph}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown.
        </p>
      </div>
      <div className={styles.InspiredCardOverlay}>
        <div className={styles.InspiredCardText}>
          <p
            className={styles.InspiredDisTitle}
            style={{ paddingBottom: "1rem" }}
          >
            Private Blockchain & Tokenization
          </p>
          <p className={styles.InspiredDisParagraph}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </div>
  );
};
const Inspiredby = () => {
  const listOfInspired = [
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration1.png",
      link: "",
    },
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration2.png",
      link: "",
    },
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration3.png",
      link: "",
    },
  ];
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.InspiredContainer}>
      <Row>
        <Col xl={8} xs={12}>
          <CardInspired />
        </Col>
      </Row>
    </div>
  );
};
export default Inspiredby;
