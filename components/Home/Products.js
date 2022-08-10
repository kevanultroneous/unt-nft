import { Alert, Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
// import styles from "@/styles/components/home/Products.module.css";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import ActionButtonV3 from "../Common/ActionButtonV3";
import ProductsList from "utils/products.data";
import LearnMore from "../Common/LearnMore";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Products = ({ text }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  const CardForProductSection = ({ ProductsList, index, cardStyle }) => {
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
                    href={"/get-in-touch"}
                    text={
                      <div className={styles.Explortxt}>
                        <span className={styles.ExpText}>Explore Product</span>
                        <HiOutlineExternalLink />
                      </div>
                    }
                    backc={ProductsList[index].color}
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
                        <li
                          style={{ color: ProductsList[index].color }}
                          className={`${styles.Sublist} `}
                          key={i}
                        >
                          <span style={{ color: "#fff" }}>{v}</span>
                        </li>
                      );
                    })}
                  </ul>
                </p>
                <LearnMore
                  bgcolor={ProductsList[index].color}
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
    <div
      className={styles.SectionCards}
      data-anim-scroll-group="cards"
      data-aos="fade"
      data-aos-duration="500"
    >
      <div
        className={styles.SectionContent}
        data-aos="fade"
        data-aos-duration="500"
      >
        <h3 className={styles.OurProductsHeading}>
          {text ? text : "Our Products"}
        </h3>
        <div className={styles.CardsSwrapper}>
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
              <CardForProductSection ProductsList={ProductsList} index={5} />
            </li>
            <li
              className={styles.card07}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={6} />
            </li>
            <li
              className={`${styles.card08} last-card`}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <CardForProductSection ProductsList={ProductsList} index={7} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Products;
