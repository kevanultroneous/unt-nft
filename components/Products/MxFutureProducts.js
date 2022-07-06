import { Alert, Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
// import styles from "@/styles/components/home/Products.module.css";
import styles from "@/styles/components/Products/UseCases.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import ProductsList from "utils/products.data";
import ActionButtonV3 from "../Common/ActionButtonV3";
const MxFutureProducts = ({ text }) => {
  const [opacity, setOpacity] = useState(0);
  const [xcord, setXcord] = useState(0);
  const [ycord, setYcord] = useState(0);
  const [opacitycord, setOpacitycord] = useState("0");
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  return (
    <div className={styles.SectionCards} data-anim-scroll-group="cards">
      <div
        className={styles.SectionContent}
        onMouseMove={(e) => {
          setXcord(e.pageX);
          setYcord(e.pageY);
          setOpacitycord("0.7");
        }}
        onMouseOut={() => setOpacitycord("0")}
        onMouseLeave={() => setOpacitycord("0")}
      >
        <h3 className={styles.OurProductsHeading}>
          {text ? text : "Our Products"}
        </h3>
        <div
          className={styles.CardsSwrapper}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease"
        >
          {/* <div
            className={styles.FollowerLight}
            style={{ left: xcord, top: ycord, opacity: opacitycord }}
          /> */}
          <ul>
            <li
              className={styles.card01}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[0].num}</span>
              </div>

              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[0].img}
                      src={ProductsList[0].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[0].name}</h4>
                      <p>{ProductsList[0].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card02}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[1].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[1].img}
                      src={ProductsList[1].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[1].name}</h4>
                      <p>{ProductsList[1].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card03}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[2].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[2].img}
                      src={ProductsList[2].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[2].name}</h4>
                      <p>{ProductsList[2].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card04}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[3].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[3].img}
                      src={ProductsList[3].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[3].name}</h4>
                      <p>{ProductsList[3].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card05}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[4].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[4].img}
                      src={ProductsList[4].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[4].name}</h4>
                      <p>{ProductsList[4].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card06}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[5].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[5].img}
                      src={ProductsList[5].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[5].name}</h4>
                      <p>{ProductsList[5].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card07}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[6].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[6].img}
                      src={ProductsList[6].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[6].name}</h4>
                      <p>{ProductsList[6].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={`${styles.card08} last-card`}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[7].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} md={6} className={styles.ProductImages}>
                    <Image
                      alt={ProductsList[7].img}
                      src={ProductsList[7].img}
                    />
                  </Col>
                  <Col xl={6} md={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[7].name}</h4>
                      <p>{ProductsList[7].detail}</p>
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MxFutureProducts;
