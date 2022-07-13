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
    >
      <div className={`${styles.sectionContent}`}>
        <h3 className={styles.CardHeading}>Use Cases</h3>
        <div className={styles.cardsWrapper}>
          <ul>
            <li className={styles.card01}>
              <div className={styles.rows}>
                <div className="col">
                  <h2 className={styles.Cardtitle}>Title</h2>
                  <p className={styles.Carddescription}>
                    Do you want to own a team but without the hassle of
                    recruitment, infrastructure investment, heavy running costs
                    and daily team management issues? If yes then this business
                    model is for you. It’s suitable for the young entrepreneurs,
                    CTO, Product managers and other technical people to hire
                    their offshore team to build a project.
                  </p>
                  <p className={styles.Carddescription}>
                    Your defined team would be dedicatedly working on your
                    project in Agile methodology, and follow all the guidelines
                    and reporting required from your end. This business model is
                    the best suit for your dream project idea which requires
                    multiple iterations and market research/ feedbacks.
                  </p>
                  <span className={styles.number}>01</span>
                </div>

                <div className="col">
                  <div className={styles.rowtext}>
                    <Row>
                      <Col xl={4} md={6} className={styles.SpecialImage2}>
                        <Image
                          src="/assets/images/Card01.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={5} md={6}>
                        <Image
                          src="/assets/images/Card02.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={4} md={6}>
                        <Image
                          style={{ paddingTop: "0%" }}
                          src="/assets/images/Card03.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={5} md={6}>
                        <Image
                          style={{ paddingTop: "0%" }}
                          src="/assets/images/Card04.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.card02}>
              <div className={styles.rows}>
                <div className="col">
                  <h2 className={styles.Cardtitle}>Title</h2>
                  <p className={styles.Carddescription}>
                    When you have a clear mid-size project requirement with a
                    defined set of features, the project-based price model will
                    best meet your needs. With this model, the Business Analyst
                    team will discuss your project in detail, getting the
                    technical team involved as required to make sure the concept
                    has been understood properly. If you are sure about the
                    project flow and not anticipating run time changes, then
                    this business model is for you.
                  </p>
                  <p className={styles.Carddescription}>
                    The project manager will be the point of the contact, who
                    will give you the periodic updates and get the development
                    done by the team. This Engagement model attracts a waterfall
                    methodology with a clear set of processes. Any run-time
                    changes or feature requests might affect the project plan
                    and terms.
                  </p>
                  <span className={styles.number}>02</span>
                </div>
                <div className="col">
                  <div className={styles.rowtext}>
                    <Row>
                      <Col xl={4} md={6} className={styles.SpecialImage2}>
                        <Image
                          src="/assets/images/Card01.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={5} md={6}>
                        <Image
                          src="/assets/images/Card02.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={4} md={6}>
                        <Image
                          style={{ paddingTop: "0%" }}
                          src="/assets/images/Card03.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                      <Col xl={5} md={6}>
                        <Image
                          style={{ paddingTop: "0%" }}
                          src="/assets/images/Card04.svg"
                          className={styles.imageSpace}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.card03}>
              <div className={styles.rows}>
                <div className="col">
                  <h2 className={styles.Cardtitle}>Title</h2>
                  <p className={styles.Carddescription}>
                    If you are running a team already and missing resources to
                    fill the team, we have this option available for you. With
                    this business model, you will be able to hire one or
                    multiple resources from various technology stacks and as per
                    the expertise to fill in your remote team. This model works
                    best for the people who like to choose their team members
                    directly, and want to take care of their progress and report
                    on a daily basis.
                  </p>
                  {/* <p className={styles.Carddescription}>
                      Your defined team would be dedicatedly working on your
                      project in Agile methodology, and follow all the
                      guidelines and reporting required from your end. This
                      business model is the best suit for your dream project
                      idea which requires multiple iterations and market
                      research/ feedbacks.
                    </p> */}
                  <span className={styles.number}>03</span>
                </div>
                <div className="col">
                  <div className={styles.rowtext}>
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={4} md={6} className={styles.SpecialImage2}>
                          <Image
                            src="/assets/images/Card01.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            src="/assets/images/Card02.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={4} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/images/Card03.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/images/Card04.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={`${styles.card04}  ${styles.lastCard}`}>
              {/* <div className={styles.CardUid} style={{}}>
                  <h1>4</h1>
                </div> */}
              <div className={styles.rows}>
                <div className="col">
                  <h2 className={styles.Cardtitle}>Title</h2>
                  <p className={styles.Carddescription}>
                    As a successful organization, we understand the need of
                    establishing a B2B partnership with an agency. You can not
                    have the required technology experts all the time, and with
                    this business model, you will be getting the resources/ team
                    required on a time-to-time basis. Whether it’s project-based
                    work or a supply of resources in a dedicated manner, you
                    will always be getting the best price as per agreement.
                  </p>
                  <p className={styles.Carddescription}>
                    We take pride in being on time, upfront, and transparent. We
                    respect and value your idea/clients, that is why we sign the
                    legal non-disclosure agreement (NDA) with you to make sure
                    your idea and data are completely protected. Being a
                    technology partner, we will be making sure to win each
                    project from your end by being flexible in helping you win
                    clients.
                  </p>
                  <span className={styles.number}>04</span>
                </div>
                <div className="col">
                  <div className={styles.rowtext}>
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={4} md={6} className={styles.SpecialImage2}>
                          <Image
                            src="/assets/images/Card01.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            src="/assets/images/Card02.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={4} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/images/Card03.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/images/Card04.svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MxFutureProducts;
