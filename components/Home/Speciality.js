import styles from "@/styles/components/home/Speciality.module.css";
import Aos from "aos";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
const Speciality = () => {
  const datalist = [
    {
      key: 1,
      countstart: 0,
      countend: 10,
      sign: `+`,
      text: "Million Transaction Processed",
    },
    {
      key: 2,
      countstart: 0,
      countend: 20,
      sign: `+`,
      text: "Global Cryptocurrency Exchanges",
    },
    {
      key: 3,
      countstart: 0,
      countend: 30,
      sign: `+`,
      text: "Global Blockchain Customers",
    },
  ];
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Row className={styles.SpecialityContainer}>
      <div className={styles.SpecialityBoard1}>
        {datalist.map((value, index) => (
          <div className={styles.Speciality} key={index}>
            {value.key % 2 === 0 ? (
              <Row
                className={"d-flex justify-content-end"}
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
                className={"d-flex"}
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
          {`
             "Our key USP is an excellent model of project management, which helps
          in providing the most advanced crypto exchange software development.”
            `}
        </p>
      </div>
    </Row>
  );
};
export default Speciality;
