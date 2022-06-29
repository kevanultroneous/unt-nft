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
      countend: 32,
      sign: "+",
      text: "Global Blockchain Customers",
    },
    {
      key: 3,
      countstart: 0,
      countend: 7,
      sign: "+",
      text: "Years of Unique Blockchain Experience",
    },
    // {
    //   key: 4,
    //   countstart: 0,
    //   countend: 12,
    //   sign: "+",
    //   text: "Unique Blockchain Experience",
    // },
    // {
    //   key: 5,
    //   countstart: 0,
    //   countend: 30,
    //   sign: "+",
    //   text: "Project Implementation",
    // },
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
                data-aos={"fade-right"}
                data-aos-duration="2000"
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
                data-aos={"fade-left"}
                data-aos-duration="2000"
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
    </Row>
  );
};
export default Speciality;
