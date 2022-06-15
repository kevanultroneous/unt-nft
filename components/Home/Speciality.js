import styles from "@/styles/components/home/Speciality.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
const Speciality = () => {
  const datalist = [
    {
      key: 1,
      countstart: 0,
      countend: 10,
      sign: "+",
      text: "Million Transaction Processed",
    },
    {
      key: 2,
      countstart: 0,
      countend: 20,
      sign: "+",
      text: "Global Cryptocurrency Exchanges",
    },
    {
      key: 3,
      countstart: 0,
      countend: 30,
      sign: "+",
      text: "Global Blockchain Customers",
    },
    {
      key: 4,
      countstart: 0,
      countend: 12,
      sign: "+",
      text: "Unique Blockchain Experience",
    },
    {
      key: 5,
      countstart: 0,
      countend: 30,
      sign: "+",
      text: "Project Implementation",
    },
  ];
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <Row className={styles.SpecialityContainer}>
      <div className={styles.SpecialityBoard1}>
        {datalist.map((value, index) => (
          <div className={styles.Speciality}>
            {value.key % 2 === 0 ? (
              <Row
                className={`d-flex justify-content-end`}
                // data-aos={"fade-right"}
                // data-aos-duration="2000"
              >
                <div className={styles.SpecialityBox}>
                  <h6 className={styles.Count}>
                    {value.countend + value.sign}
                  </h6>
                  <p className={styles.Text}>{value.text}</p>
                </div>
              </Row>
            ) : (
              <Row
                className={`d-flex`}
                // data-aos={"fade-left"}
                // data-aos-duration="2000"
              >
                <div className={styles.SpecialityBox}>
                  <h6 className={styles.Count}>
                    {value.countend + value.sign}
                  </h6>
                  <p className={styles.Text}>{value.text}</p>
                </div>
              </Row>
            )}
          </div>
        ))}
      </div>
      <div className={styles.SpecialityBoard2}>
        <p
          className={styles.SpecialityParagraph}
          // data-aos={"zoom-in"}
          // data-aos-duration="2000"
        >
          "In 2017, MobifinX, with his experience with technologies, helped in a
          project aimed at streamlining production operations. That's how
          Flowbox came about. ”
        </p>
      </div>
    </Row>
  );
};
export default Speciality;
