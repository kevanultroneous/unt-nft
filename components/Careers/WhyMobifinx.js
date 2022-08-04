import styles from "@/styles/components/Careers/WhyMobifinx.module.css";
import { Row, Col, Image } from "react-bootstrap";

function WhyMobifinx() {
  const benefitsOfMobifinxCard = [
    {
      name: "Real-Time Communication",
      iconUrl: "/assets/images/idt1.svg",
      desc: "We keep maintaining a strong communication channel over different virtual tools in real-time.",
    },
    {
      name: "Scalability & Support",
      iconUrl: "/assets/images/idt2.svg",
      desc: "In this world of constant information exchange, we tend to thrive by building synergy.",
    },
    {
      name: "Industry-Specific Experience",
      iconUrl: "/assets/images/disc3.svg",
      desc: "We help organizations of all sizes to overcome complexities with proven domain expertise.",
    },
    {
      name: "Real-Time Communication",
      iconUrl: "/assets/images/idt1.svg",
      desc: "We keep maintaining a strong communication channel over different virtual tools in real-time.",
    },
    {
      name: "Scalability & Support",
      iconUrl: "/assets/images/idt2.svg",
      desc: "In this world of constant information exchange, we tend to thrive by building synergy.",
    },
  ];
  return (
    <div className={styles.WhyMobifinxMainContainer}>
      <Row>
        <Col xl={2} className={styles.sideHeading}>
          <p>WHY MOBIFINX</p>
        </Col>
        <Col xl={10} className={styles.rightSection}>
          <h3>Benefits of Working with us</h3>
          <Row className={styles.mobifinxBenefits}>
            {benefitsOfMobifinxCard.map((benefits) => {
              return (
                <>
                  <Col
                    xl={4}
                    md={6}
                    lg={4}
                    xs={12}
                    sm={4}
                    className={styles.benefitsBox}
                  >
                    <div className={styles.benefitsIcon}>
                      <Image src={benefits.iconUrl} alt={benefits.name} />
                    </div>
                    <h4>{benefits.name}</h4>
                    <p>{benefits.desc}</p>
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default WhyMobifinx;
