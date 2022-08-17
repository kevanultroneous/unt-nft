import { Accordion, Col, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { careerAccordionData } from "utils/CareerAccordion";
import styles from "@/styles/components/Careers/CareerAccordion.module.css";
import { useEffect } from "react";
import Aos from "aos";

function last(array) {
  return array.indexOf(array[array.length - 1]);
}

function CareerAccordion() {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);

  return (
    <div
      className={`${styles.CareerAccordion} CareersAccordion`}
      id="careerJobOpening"
      data-aos="fade"
      data-aos-duration="500"
    >
      <Row>
        <Col xl={2}>
          <div></div>
        </Col>
        <Col xl={10}>
          <h2 className={styles.careerAccordionHeading}>Current Openings</h2>
          <Accordion>
            {careerAccordionData.map((el, index) => (
              <>
                <Accordion.Item eventKey={el.departmentName} key={index}>
                  <Accordion.Header className={styles.Accordionheader}>
                    {el.departmentName}{" "}
                    <span className={styles.jobNumber}>
                      ({el.technology.length}){" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.AccordionBody}>
                    {el.technology.map((val, ind) => (
                      <a href={`#`} key={ind}>
                        <div className={styles.accordionRow}>
                          <p>
                            {val.technologyName}
                            <span className={styles.JobVacancyNumber}>
                              {val.count}
                            </span>
                          </p>
                          <p>
                            <span className={styles.CareerAccordionExp}>
                              Experience
                            </span>
                            <span className={styles.CareerAccordionTest}>
                              {val.experienceYears}
                            </span>
                            |
                            <span className={styles.CareerAccordionTest}>
                              Apply Now
                            </span>
                            <IoIosArrowForward />
                          </p>
                        </div>
                      </a>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
                {index == last(careerAccordionData) ? null : (
                  <hr style={{ border: "1px solid rgba(255,255,255,0.7)" }} />
                )}
              </>
            ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default CareerAccordion;
