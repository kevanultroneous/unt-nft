import styles from "@/styles/components/Inspiredby.module.css";
import { Col, Image, Row } from "react-bootstrap";
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
  return (
    <div className={styles.InspiredContainer}>
      <Row>
        <Col xl={4}>
          <h6 className={styles.MainTitle}>Get Inspired by Case Studies</h6>
          <div>
            <div className={styles.Viewallbtn}>View All</div>
          </div>
        </Col>
        <Col xl={8}>
          <Row>
            {listOfInspired.map((v, i) => (
              <Col xl={4}>
                <div className={styles.InspiredCard}>
                  <Image src={v.img} className={styles.ImageInspired} />
                  <p className={styles.InspiredCardAbout}>{v.iname}</p>

                  <div className={styles.InspiredCardText}>
                    Learn More
                    <span>
                      <Image src="/assets/images/sendBtn.svg" height={15} />
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Inspiredby;
