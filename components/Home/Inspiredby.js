import styles from "@/styles/components/home/Inspiredby.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
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
        <Col xl={4} xs={12}>
          <h6
            className={styles.MainTitle}
            data-aos={"fade-right"}
            data-aos-duration="2000"
          >
            Get Inspired by Case Studies
          </h6>
          <div>
            <ActionButton text={"View All"} handleAction={() => null} />
            {/* <div className={styles.Viewallbtn}>View All</div> */}
          </div>
        </Col>
        <Col xl={8} xs={12}>
          <Row>
            {listOfInspired.map((v, i) => (
              <Col xl={4}>
                <div
                  className={styles.InspiredCard}
                  data-aos={"zoom-in"}
                  data-aos-duration="2000"
                >
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
