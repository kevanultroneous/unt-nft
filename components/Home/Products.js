import { Alert, Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
// import styles from "@/styles/components/home/Products.module.css";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import ActionButtonV3 from "../Common/ActionButtonV3";
import ActionButton from "../Common/ActionButton";
import ProductsList from "utils/products.data";
import LearnMore from "../Common/LearnMore";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
  const CardForProductSection = ({ ProductsList, index }) => {
    return (
      <>
        <div className={styles.HRcontainer}>
          <hr
            className={styles.HrBorder}
            style={{ color: "#fff", width: "30%" }}
          />
          <span>{ProductsList[index].num}</span>
        </div>

        <figure className={styles.CardContainer}>
          <Row className="m-0 p-0">
            <Col xl={6} md={6} className={styles.ProductImages}>
              <div>
                <Image
                  alt={ProductsList[index].img}
                  src={ProductsList[index].img}
                />
              </div>
            </Col>
            <Col xl={6} md={6} className={styles.Carddetail}>
              <div className={styles.ProductDetails}>
                <div className={styles.Productbutton}>
                  <h4 className={styles.Producth4}>
                    {ProductsList[index].name}
                  </h4>
                  <ActionButtonV3
                    href={"/"}
                    text={
                      <>
                        <span className={styles.ExpText}>Explore Product</span>
                        <HiOutlineExternalLink />
                      </>
                    }
                    backc={ProductsList[index].btnc}
                    borderc={ProductsList[index].border}
                  />
                </div>

                <p className={styles.Description}>
                  {ProductsList[index].detail}
                </p>
                {/* <p style={{ color: ProductsList[0].color }}>
                        {ProductsList[0].highlight}
                      </p> */}
                <p className={styles.question}>
                  {ProductsList[index].question}
                  <ul className={styles.List}>
                    {ProductsList[index].sublist.map((v, i) => {
                      return (
                        <li className={styles.Sublist} key={i}>
                          {v}
                        </li>
                      );
                    })}
                  </ul>
                </p>
                <LearnMore
                  href={"/"}
                  t1={<MdOutlineKeyboardArrowRight />}
                  t2={<MdOutlineKeyboardArrowRight />}
                />
                {/* <p className={styles.tags}>{ProductsList[0].tags}</p> */}
              </div>
            </Col>
          </Row>
        </figure>
      </>
    );
  };
  return (
    <div className={styles.SectionCards} data-anim-scroll-group="cards">
      <div className={styles.SectionContent}>
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
              <CardForProductSection ProductsList={ProductsList} index={0} />
            </li>
            <li
              className={styles.card02}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={1} />
            </li>
            <li
              className={styles.card03}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={2} />
            </li>
            <li
              className={styles.card04}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={3} />
            </li>
            <li
              className={styles.card05}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={4} />
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
                      <div className={styles.Productbutton}>
                        <h4 className={styles.Producth4}>
                          {ProductsList[5].name}
                        </h4>
                        <ActionButtonV3
                          href={"/"}
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
                      {/* <h4>{ProductsList[5].name}</h4> */}
                      <p className={styles.Description}>
                        {ProductsList[5].detail}
                      </p>
                      {/* <p style={{ color: ProductsList[5].color }}>
                        {ProductsList[5].highlight}
                      </p> */}
                      <p className={styles.question}>
                        {ProductsList[5].question}
                        <ul className={styles.List}>
                          {ProductsList[5].sublist.map((v, i) => {
                            return (
                              <li className={styles.Sublist} key={i}>
                                {v}
                              </li>
                            );
                          })}
                        </ul>
                      </p>

                      {/* <p className={styles.tags}>{ProductsList[5].tags}</p> */}
                      <LearnMore
                        href={"/"}
                        t1={<MdOutlineKeyboardArrowRight />}
                        t2={<MdOutlineKeyboardArrowRight />}
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
                      <div className={styles.Productbutton}>
                        <h4 className={styles.Producth4}>
                          {ProductsList[6].name}
                        </h4>
                        <ActionButtonV3
                          href={"/"}
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
                      {/* <h4>{ProductsList[6].name}</h4> */}
                      <p className={styles.Description}>
                        {ProductsList[6].detail}
                      </p>
                      {/* <p style={{ color: ProductsList[6].color }}>
                        {ProductsList[6].highlight}
                      </p> */}
                      <p className={styles.question}>
                        {ProductsList[6].question}
                        <ul className={styles.List}>
                          {ProductsList[6].sublist.map((v, i) => {
                            return (
                              <li className={styles.Sublist} key={i}>
                                {v}
                              </li>
                            );
                          })}
                        </ul>
                      </p>
                      {/* <p className={styles.tags}>{ProductsList[6].tags}</p> */}
                      <LearnMore
                        href={"/"}
                        t1={<MdOutlineKeyboardArrowRight />}
                        t2={<MdOutlineKeyboardArrowRight />}
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
                      <div className={styles.Productbutton}>
                        <h4 className={styles.Producth4}>
                          {ProductsList[7].name}
                        </h4>
                        <ActionButtonV3
                          href={"/"}
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
                      {/* <h4>{ProductsList[7].name}</h4> */}
                      <p className={styles.Description}>
                        {ProductsList[7].detail}
                      </p>
                      {/* <p style={{ color: ProductsList[7].color }}>
                        {ProductsList[7].highlight}
                      </p> */}
                      <p className={styles.question}>
                        {ProductsList[7].question}
                        <ul className={styles.List}>
                          {ProductsList[7].sublist.map((v, i) => {
                            return (
                              <li className={styles.Sublist} key={i}>
                                {v}
                              </li>
                            );
                          })}
                        </ul>
                      </p>
                      {/* <p className={styles.tags}>{ProductsList[7].tags}</p> */}
                      <LearnMore
                        href={"/"}
                        t1={<MdOutlineKeyboardArrowRight />}
                        t2={<MdOutlineKeyboardArrowRight />}
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
