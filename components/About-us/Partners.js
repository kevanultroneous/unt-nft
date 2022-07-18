import styles from "@/styles/components/aboutus/Partners.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Image, Row } from "react-bootstrap";
import { useRef } from "react";
const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const sliderRef = useRef();
  return (
    <section className={styles.Partners}>
      <div className={styles.PartnersContainer}>
        <Row>
          <Col xl={2}>
            <p className={styles.Rotatetext}>Management Team</p>
          </Col>
          <Col xl={10} className={styles.Imagecol}>
            <div className={styles.SliderArrow}>
              <h4>Partners</h4>
              <div className={styles.Arrows}>
                <Image
                  alt={"prev"}
                  onClick={() => sliderRef.current.slickPrev()}
                  fluid
                  src={"/assets/images/ArrowSlider.svg"}
                  className={styles.FeedbackPrevarrow}
                />
                <Image
                  alt="next"
                  onClick={() => sliderRef.current.slickNext()}
                  fluid
                  src={"/assets/images/ArrowSlider.svg"}
                  className={styles.FeedbackNextarrow}
                />
              </div>
            </div>
            <Row className={styles.SliderRow}>
              <Slider {...settings} arrows={false} ref={sliderRef}>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
                <div>
                  <Col xl={12} xs={12} className={styles.Imgcol}>
                    <Image
                      src={"/assets/images/Team.svg"}
                      className={styles.Teamimg}
                      alt="team-management"
                    />
                    <div className={styles.TeamName}>
                      <h5>Chris Hemsworth</h5>

                      <div className={styles.Socialmedia}>
                        <Image
                          alt="team-management"
                          src={"/assets/images/Linkdin.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Facebook.svg"}
                          className={styles.socialimg}
                        />
                        <Image
                          alt="team-management"
                          src={"/assets/images/Twit.svg"}
                          className={styles.socialimg}
                        />
                      </div>
                    </div>
                    <p>Founder & CEO</p>
                  </Col>
                </div>
              </Slider>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Partners;
