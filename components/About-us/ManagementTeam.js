import styles from "@/styles/components/aboutus/ManagementTeam.module.css";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Partners from "./Partners";

const ManagementTeam = () => {
  return (
    <section className={styles.ManagementTeam}>
      <div className={styles.ManagementContainer}>
        <Row className={styles.ManagementTeamrow}>
          <Col xl={2}>
            <p className={styles.Rotatetext}>Management Team</p>
          </Col>
          <Col xl={10} className={styles.Imagecol}>
            <div>
              <h4>Partners</h4>
            </div>

            <div className={styles.Maindiv}>
              <Col xl={4} xs={12} className={styles.Imgcol}>
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

              <Col xl={4} xs={12} className={styles.Imgcol}>
                <Image
                  alt="team-management"
                  src={"/assets/images/Team.svg"}
                  className={styles.Teamimg}
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

              <Col xl={4} xs={12} className={styles.Imgcol}>
                <Image
                  alt="team-management"
                  src={"/assets/images/Team.svg"}
                  className={styles.Teamimg}
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
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ManagementTeam;
