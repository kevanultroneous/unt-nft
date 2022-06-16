import styles from "@/styles/components/home/Inspiredby.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ActionButton from "../Common/ActionButton";
const CardInspired = ({ style, srcimg, animtype, animdelay }) => {
  return (
    <div
      className={`${styles.InspiredCardcontainer} ${style}`}
      data-aos={animtype}
      data-aos-duration="3000"
      data-aos-delay={animdelay}
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      // data-aos-offset={animOf}
    >
      <Image src={srcimg} alt="Avatar" className={styles.InspiredCardImage} />
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
      <Row className={styles.InspiredCardRow}>
        {/* left */}
        <Col xl={5} xs={12} md={6} className={styles.InspiredCardCol}>
          <h3 className={styles.InspiredCardDesMob}>
            Get Inspired by Case Studies
          </h3>
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration1.png"}
            style={styles.InspiredCardSpace}
            animdelay={"400"}
          />
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration3.png"}
            animdelay={"1200"}
          />
          <div className={styles.InspiredCardView}>
            <p className={styles.Viewall}>View All</p>
            <Image
              src="/assets/images/grad.svg"
              className={styles.InspiredCardImg}
            />
          </div>
        </Col>
        {/* right */}
        <Col xl={5} xs={12} md={6}>
          <h3 className={styles.InspiredCardDes}>
            Get Inspired by Case Studies
          </h3>
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration2.png"}
            style={styles.InspiredCardSpace}
            animdelay={"800"}
          />
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/insp4.png"}
            animdelay={"1600"}
          />
          <div className={styles.InspiredCardView2}>
            <p className={styles.Viewall2}>View All</p>
            <Image
              src="/assets/images/grad.svg"
              className={styles.InspiredCardImg2}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Inspiredby;
