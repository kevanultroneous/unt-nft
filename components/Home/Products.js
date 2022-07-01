import { Alert, Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
// import styles from "@/styles/components/home/Products.module.css";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import ActionButtonV3 from "../Common/ActionButtonV3";
import ActionButton from "../Common/ActionButton";
import ProductsList from "utils/products.data";
const Products = ({ text }) => {
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
        <div className={styles.CardsSwrapper}>
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
                      <p style={{ color: ProductsList[0].color }}>
                        {ProductsList[0].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[0].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[0].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[0].btnc}
                        borderc={ProductsList[0].border}
                      />
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
                      <p style={{ color: ProductsList[1].color }}>
                        {ProductsList[1].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[1].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[1].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[1].btnc}
                        borderc={ProductsList[1].border}
                      />
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
                      <p style={{ color: ProductsList[2].color }}>
                        {ProductsList[2].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[2].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[2].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[2].btnc}
                        borderc={ProductsList[2].border}
                      />
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
                      <p style={{ color: ProductsList[3].color }}>
                        {ProductsList[3].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[3].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[3].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[3].btnc}
                        borderc={ProductsList[3].border}
                      />
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
                      <p style={{ color: ProductsList[4].color }}>
                        {ProductsList[4].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[4].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[4].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[4].btnc}
                        borderc={ProductsList[4].border}
                      />
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
                      <p style={{ color: ProductsList[5].color }}>
                        {ProductsList[5].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[5].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[5].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[5].btnc}
                        borderc={ProductsList[5].border}
                      />
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
                      <p style={{ color: ProductsList[6].color }}>
                        {ProductsList[6].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[6].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[6].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[6].btnc}
                        borderc={ProductsList[6].border}
                      />
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
                      <p style={{ color: ProductsList[7].color }}>
                        {ProductsList[7].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[7].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[7].tags}</p>
                      <ActionButtonV3
                        href={"/"}
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[7].btnc}
                        borderc={ProductsList[7].border}
                      />
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
export default Products;
