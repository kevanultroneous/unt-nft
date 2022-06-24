import styles from "@/styles/ext.module.css";
import { Col, Row } from "react-bootstrap";
const ext = () => {
  return (
    <div className={styles.SectionCards} data-anim-scroll-group="cards">
      <div className={styles.SectionContent}>
        <h2 className={styles.Headline}>Our Product</h2>
        <div className={styles.CardsSwrapper}>
          <ul>
            <li className={styles.card01}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 1</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card02}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 2</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card03}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 3</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card04}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 4</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card05}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 5</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card06}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 6</h3>
                </span>
              </figure>
            </li>
            <li className={styles.card07}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 7</h3>
                </span>
              </figure>
            </li>
            <li className={`${styles.card08} last-card`}>
              <figure className={styles.CardContainer}>
                {/* <!-- <div className="bg"></div> --> */}
                <span className={styles.card}>
                  <h3 tabindex="0">Card 8</h3>
                </span>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ext;
