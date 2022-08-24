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
    <div
      className={`${styles.section}  ${styles.sectionCards}`}
      data-anim-scroll-group="cards"
      data-aos="fade"
      data-aos-duration="500"
    >
      <div className={`${styles.sectionContent}`}>
        <h3 className={styles.CardHeading}>Use Cases</h3>
        <div className={styles.cardsWrapper}>
          <ul>
            <li className={styles.card01}>
              <div className={styles.rows}>
                <Row className={styles.MainRowCard}>
                  <Col xl={4} md={6}>
                    <div className={styles.Colusecase}>
                      <h2 className={styles.Cardtitle}>Title</h2>
                      <Image
                        src={"/assets/images/Cardsample.svg"}
                        alt="card-img"
                        className={styles.MainImage}
                      />
                      <span className={styles.number}>01</span>
                    </div>
                  </Col>
                  <Col xl={4} md={6}>
                    <div className="col">
                      <p className={styles.Carddescription}>
                        Do you want to own a team but without the hassle of
                        recruitment, infrastructure investment, heavy running
                        costs and daily team management issues? If yes then this
                        business model is for you. It’s suitable for the young
                        entrepreneurs, CTO, Product managers and other technical
                        people to hire their offshore team to build a project.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} md={12}>
                    <div className={styles.rowtext}>
                      <Row
                        className={styles.ImageRow}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-1.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <div>
                              <h1 className={styles.CardHead}>
                                Review Profile
                              </h1>
                            </div>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-2.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Meet the Candidate
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-3.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Pricing & Contract
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
            <li className={styles.card02}>
              <div className={styles.rows}>
                <Row className={styles.MainRowCard}>
                  <Col xl={4} md={6}>
                    <div className={styles.Colusecase}>
                      <h2 className={styles.Cardtitle}>Title</h2>
                      <Image
                        src={"/assets/images/Cardsample.svg"}
                        alt="card-img"
                        className={styles.MainImage}
                      />
                      <span className={styles.number}>02</span>
                    </div>
                  </Col>
                  <Col xl={4} md={6}>
                    <div className="col">
                      <p className={styles.Carddescription}>
                        Do you want to own a team but without the hassle of
                        recruitment, infrastructure investment, heavy running
                        costs and daily team management issues? If yes then this
                        business model is for you. It’s suitable for the young
                        entrepreneurs, CTO, Product managers and other technical
                        people to hire their offshore team to build a project.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} md={12}>
                    <div className={styles.rowtext}>
                      <Row
                        className={styles.ImageRow}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-1.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <div>
                              <h1 className={styles.CardHead}>
                                Review Profile
                              </h1>
                            </div>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-2.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Meet the Candidate
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-3.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Pricing & Contract
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
            <li className={styles.card03}>
              <div className={styles.rows}>
                <Row className={styles.MainRowCard}>
                  <Col xl={4} md={6}>
                    <div className={styles.Colusecase}>
                      <h2 className={styles.Cardtitle}>Title</h2>
                      <Image
                        src={"/assets/images/Cardsample.svg"}
                        alt="card-img"
                        className={styles.MainImage}
                      />
                      <span className={styles.number}>03</span>
                    </div>
                  </Col>
                  <Col xl={4} md={6}>
                    <div className="col">
                      <p className={styles.Carddescription}>
                        Do you want to own a team but without the hassle of
                        recruitment, infrastructure investment, heavy running
                        costs and daily team management issues? If yes then this
                        business model is for you. It’s suitable for the young
                        entrepreneurs, CTO, Product managers and other technical
                        people to hire their offshore team to build a project.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} md={12}>
                    <div className={styles.rowtext}>
                      <Row
                        className={styles.ImageRow}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-1.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <div>
                              <h1 className={styles.CardHead}>
                                Review Profile
                              </h1>
                            </div>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-2.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Meet the Candidate
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-3.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Pricing & Contract
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
            <li className={styles.card04}>
              <div className={styles.rows}>
                <Row className={styles.MainRowCard}>
                  <Col xl={4} md={6}>
                    <div className={styles.Colusecase}>
                      <h2 className={styles.Cardtitle}>Title</h2>
                      <Image
                        src={"/assets/images/Cardsample.svg"}
                        alt="card-img"
                        className={styles.MainImage}
                      />
                      <span className={styles.number}>04</span>
                    </div>
                  </Col>
                  <Col xl={4} md={6}>
                    <div className="col">
                      <p className={styles.Carddescription}>
                        Do you want to own a team but without the hassle of
                        recruitment, infrastructure investment, heavy running
                        costs and daily team management issues? If yes then this
                        business model is for you. It’s suitable for the young
                        entrepreneurs, CTO, Product managers and other technical
                        people to hire their offshore team to build a project.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} md={12}>
                    <div className={styles.rowtext}>
                      <Row
                        className={styles.ImageRow}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-1.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <div>
                              <h1 className={styles.CardHead}>
                                Review Profile
                              </h1>
                            </div>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-2.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Meet the Candidate
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                        <Col md={4} xl={12} className={styles.Contentdiv}>
                          <Col xl={4} md={4} xs={4}>
                            <div className={styles.Detaildiv}>
                              <Image
                                src={"/assets/images/Detail-3.svg"}
                                alt="Image"
                                fluid
                              />
                            </div>
                          </Col>
                          <Col
                            xl={8}
                            md={8}
                            xs={8}
                            className={styles.CardcolDetail}
                          >
                            <di>
                              <h1 className={styles.CardHead}>
                                Pricing & Contract
                              </h1>
                            </di>
                            <div>
                              <p className={styles.CardPera}>
                                Do you want to own a team but without the hassle
                                of recruitment.
                              </p>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MxFutureProducts;
