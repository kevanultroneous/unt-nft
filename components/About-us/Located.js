import styles from "@/styles/components/aboutus/Located.module.css";
import Aos from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
const Located = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <section className={styles.Location}>
      <div className={styles.Locationcontainer}>
        <Row>
          <Col xl={2}></Col>
          <Col xl={10} className={styles.Locatecol}>
            <h4>We are currently located in</h4>
            <div className={styles.LocatedDetail}>
              <Col xl={6} md={6} className={styles.LocatedDetailCol}>
                <Row className={styles.Detailrow}>
                  <Col xl={2} xs={2} md={2}>
                    <Image
                      src={"/assets/images/Location.svg"}
                      alt="located-img"
                    />
                  </Col>
                  <Col xl={10} xs={10} md={10}>
                    <h5>Address </h5>
                    <p>
                      00 Quentin Roosevelt Blvd, Suite 503, Garden City, New
                      York - 11530{" "}
                    </p>
                  </Col>
                </Row>
                <Row className={styles.Detailrow}>
                  <Col xl={2} xs={2} md={2}>
                    <Image src={"/assets/images/Email.svg"} alt="located-img" />
                  </Col>
                  <Col xl={10} xs={10} md={10}>
                    <h5>Email Id</h5>
                    <p>sales@mobifinx.com </p>
                  </Col>
                </Row>
                <Row className={styles.Detailrow}>
                  <Col xs={2} xl={2} md={2}>
                    <Image
                      src={"/assets/images/Mobileicona.svg"}
                      alt="located-img"
                    />
                  </Col>
                  <Col xs={10} xl={10} md={10}>
                    <h5>Mo No.</h5>
                    <p>+61488843353 </p>
                  </Col>
                </Row>
              </Col>
              <Col
                xl={6}
                md={6}
                className={styles.LocatedImg}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Image
                  alt="located-img"
                  src={"/assets/images/Newyork.svg"}
                  className={styles.Contactimg}
                />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Located;
