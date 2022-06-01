import styles from "@/styles/components/home/SDE.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SDE = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
  };
  const sliderList = [
    "Derivatives Trading",
    "Spot Trading",
    "NFT",
    "DeFi",
    "OTC Desk",
    "P2P Trading",
    "Private Blockchain & Tokenization",
    "Fund Raising Launchpad (IEO/ICO/IDO/IGO)",
  ];
  return (
    <div className={`${styles.SoftwareDevelopmentExpertsContainer} frame1`}>
      <Row className={styles.SoftwareDevelopmentExpertsRow}>
        <Col xl={6}>
          <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
            <div className={styles.HomeMiniLine} />
            <span className={styles.HomeSmallHeading}>MobifinX Home</span>
          </div>
        </Col>
        <Col xl={6} className={styles.SoftwareDevelopmentExpertsBtnCol}>
          <div className={styles.RequestDemoButton}>
            Request a Demo <HiOutlineExternalLink />
          </div>
        </Col>
      </Row>

      <div className={styles.SoftwareDevelopmentExpertsBigHeadingContainer}>
        <h3 className={styles.SoftwareDevelopmentExpertsBigHeading}>
          We’re Crypto Coin Trading
          <br />
          Software Development Experts.
        </h3>
      </div>
      <Row className="mx-0">
        <Col xl={4} className={styles.ScrolldownCol}>
          <div className={styles.Scrolldowncontainer}>
            <Image
              src="/assets/images/scrollarrow.svg"
              className={styles.ImageDown}
            />
            <p className={styles.ScrolldownText}>Scroll Down</p>
          </div>
        </Col>
        <Col xl={8}>
          <Row>
            <Col xl={3}>
              <div className={styles.SoftwareDevelopmentExpertsBtnImages}>
                <Image
                  fluid
                  src={"/assets/images/left-sb.svg"}
                  className={styles.SoftwareDevelopmentExpertSliderBtnLeft}
                />
                <Image
                  fluid
                  src={"/assets/images/right-sb.svg"}
                  className={styles.SoftwareDevelopmentExpertSliderBtnRight}
                />
              </div>
            </Col>
            <Col
              xl={8}
              className={styles.SoftwareDevelopmentExpertSliderHeading}
            >
              <div className={styles.HomeMiniLine} />
              <span className={styles.HomeSmallHeading}>Explore Products</span>
            </Col>
          </Row>
          <Row className={styles.SliderGround}>
            <Slider {...settings} arrows={false}>
              {sliderList.map((v, i) => (
                <div className={styles.SliderCard}>
                  <p>{v}</p>
                </div>
              ))}
            </Slider>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SDE;
