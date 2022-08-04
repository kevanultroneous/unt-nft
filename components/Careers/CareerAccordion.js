import { Accordion, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/components/Careers/CareerAccordion.module.css";

const data = [
  {
    departmentName: "Engineering",
    technology: [
      {
        technologyName: "flutter",
        count: 10,
      },
      {
        technologyName: "MERN Stack",
        count: 5,
      },
      {
        technologyName: "React",
        count: 3,
      },
    ],
  },
  {
    departmentName: "Freshers",
    technology: [
      {
        technologyName: "flutter",
        count: 10,
      },
      {
        technologyName: "MERN Stack",
        count: 5,
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
                    <div>
                      <p>
                        {val.technologyName}
                        <span className={styles.JobVacancyNumber}>
                          {val.count}
                        </span>
                      </p>
                      <p>
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
