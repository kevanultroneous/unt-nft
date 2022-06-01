const { Row, Image, Col } = require("react-bootstrap");
const { HiOutlineExternalLink } = require("react-icons/hi");
import styles from "@/styles/components/home/Discover.module.css";
const Discover = () => {
  return (
    <div className={styles.DiscoverMobifinixContainer}>
      <Row className={styles.DiscoverMobifinixSubContainer}>
        <div className={styles.DiscoverMobifinixPara1Container}>
          <p className={styles.DiscoverMobifinixPara1}>
            MobifinX have expertise in serving on-demand business solutions with
            a special focus on safety, scale as well as performance.
          </p>
        </div>
        <div className={styles.DiscoverMobifinixPara2Container}>
          <p className={styles.DiscoverMobifinixPara2}>
            We are a leading Crypto Exchange Software Development company based
            in USA. We are fintech expert established in 2011 to deliver
            next-generation trading platforms to the businesses who want to take
            a deep dive into the crypto exchange field. We have a team of more
            than 100 highly experienced and skilled developers who are always
            ready to serve you at your conditions.
          </p>
        </div>
        <div className={styles.DiscoverMobifinxBtnContainer}>
          <div className={styles.DiscoverMobifinxBtn}>
            Discover MobifinX
            <span>
              <HiOutlineExternalLink />
            </span>
          </div>
        </div>
      </Row>
      <div className={styles.DiscoverItemsContainer}>
        <Row className={styles.DiscoverItemsRow}>
          <Col xl={6}>
            <div className={styles.DiscoverBox}>
              <div className={styles.DiscoverItemBox}>
                <Image src="/assets/images/24hrfull.svg" />
              </div>
              <p className={styles.DiscoverItemParagraph}>
                Partnership based on Common Goals and Trust
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <div className={styles.DiscoverBox}>
              <div className={styles.DiscoverItemBox}>
                <Image src="/assets/images/24hrfull.svg" />
              </div>
              <p className={styles.DiscoverItemParagraph}>
                Localization Expertise with Global Footprint
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <div className={styles.DiscoverBox}>
              <div className={styles.DiscoverItemBox}>
                <Image src="/assets/images/24hrfull.svg" />
              </div>
              <p className={styles.DiscoverItemParagraph}>
                IT Security Certified to protect customer data
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <div className={styles.DiscoverBox}>
              <div className={styles.DiscoverItemBox}>
                <Image src="/assets/images/24hrfull.svg" />
              </div>
              <p className={styles.DiscoverItemParagraph}>
                Reduced Capex & Opex using Agile tools
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Discover;
