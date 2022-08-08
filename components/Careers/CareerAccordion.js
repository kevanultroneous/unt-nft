import { Accordion, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/components/Careers/CareerAccordion.module.css";

const data = [
  {
    departmentName: "Engineering",
    technology: [
      {
        technologyName: "flutter",
        count: 2,
        experienceYears: "2-4 yrs",
      },
      {
        technologyName: "MERN Stack",
        count: 5,
        experienceYears: "1-2 yrs",
      },
      {
        technologyName: "React",
        count: 3,
        experienceYears: "2-4 yrs",
      },
    ],
  },
  {
    departmentName: "Freshers",
    technology: [
      {
        technologyName: "flutter",
        count: 2,
        experienceYears: "2-5 yrs",
      },
      {
        technologyName: "MERN Stack",
        count: 5,
        experienceYears: "2-4 yrs",
      },
    ],
  },
];

function last(array) {
  return array.indexOf(array[array.length - 1]);
}

function CareerAccordion() {
  return (
    <div className={`${styles.CareerAccordion} CareersAccordion`}>
      <h2 className={styles.careerAccordionHeading}>Current Openings</h2>
      <Accordion>
        {data.map((el, index) => (
          <>
            <Accordion.Item eventKey={el.departmentName} key={index}>
              <Accordion.Header className={styles.Accordionheader}>
                {el.departmentName} <span> ({el.technology.length}) </span>
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
            {index == last(data) ? null : (
              <hr style={{ border: "1px solid rgba(255,255,255,0.7)" }} />
            )}
          </>
        ))}
      </Accordion>
    </div>
  );
}

export default CareerAccordion;