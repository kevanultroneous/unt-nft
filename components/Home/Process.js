import styles from "@/styles/components/home/Process.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
const Process = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  const [value, setValue] = useState(0);

  const dataProcess = [
    {
      name: "understand",
      // bcolor: "#E27625",
      bcolor: "#EA8676",
      // bkcolor: "#FFF1E8",
      bkcolor: "#4C3549",
    },
    {
      name: "Experience",
      // bcolor: "#00ACD7",
      bcolor: "#75BEFF",
      // bkcolor: "#EAFBFF",
      bkcolor: "#30436A",
    },
    {
      name: "Customize",
      // bcolor: "#D95276",
      bcolor: "#A176FF",
      // bkcolor: "#FFEEF3",
      bkcolor: "#3A326A",
    },
    {
      name: "Go-Live",
      // bcolor: "#A199FF",
      bcolor: "#C95AB4 ",
      // bkcolor: "#F6F5FF",
      bkcolor: "#442B58",
    },
  ];

  const completeText = [
    {
      heading: "Analyze and understand the needs",
      text: "We help you walk through by giving you detailed insights into what we offer and what are the industry standardizations. So you can get acquainted with the product that suits your preferences. This will help you understand why you should select MobifinX as your tech partner.",
    },
    {
      heading: "Explore all the features",
      text: "In this phase, you can sign up for the platform and experience enhanced performance. Check out all the features live, familiarize yourself with all the functions, and trade by yourself. We create and implement specific FAQs and tutorials for convenience and guidance.",
    },
    {
      heading: "Customize the configuration and theme",
      text: "In this step, you can choose products as well as specify the configurations and layouts that suit your requirements perfectly. We customize the parameters according to your preferences.",
    },
    {
      heading: "Launch and Start earning",
      text: "Once all of the requirements have been met, all you need to do is pay and choose the particular domain and cloud. And you can start generating revenue.",
    },
  ];

  return (
    <div className={styles.ProcessContainer}>
      <p
        className={styles.ProcessHead}
        // data-aos={"zoom-in"}
        // data-aos-duration="3000"
      >
        PROCESS
      </p>
      <h4
        className={styles.ProcessTitle}
        // data-aos={"zoom-in"}
        // data-aos-duration="3000"
      >
        It’ll make everything easy for you
      </h4>
      <div className={styles.MainProcess}>
        <div className={styles.MainPs}>
          <div className={styles.ProcessLineContainer}>
            <div className={styles.ProcessLine}></div>
          </div>
          <div className={styles.ProcessBoxesContainer}>
            {dataProcess.map((v, i) => (
              <div
                key={i}
                className={styles.ProcessBox}
                onMouseEnter={() => setValue(i)}
              >
                <div className={styles.ProcessBlinkMain}>
                  <div
                    className={
                      (value === 0 && i === 0) || value === i
                        ? `${styles.ProcessBlink} ${styles.ProcessBlinkHover}`
                        : styles.ProcessBlink
                    }
                    style={{
                      borderColor: v.bcolor,
                      backgroundColor: v.bkcolor,
                      border: `1px solid ${v.bcolor}`,
                    }}
                  >
                    <div
                      className={styles.ProcessDot}
                      style={{ borderColor: v.bcolor }}
                    ></div>
                  </div>
                </div>
                <div className={styles.ProcessBlinkParent}>
                  <p
                    className={styles.ProcessParagraph}
                    style={
                      i === value ? { color: v.bcolor } : { color: "#fff" }
                    }
                    onClick={() => setValue(i)}
                  >
                    {v.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.YourNeedContainer}>
        <h6 className={styles.YourNeedHeading}>
          {completeText[value].heading}
        </h6>
        <div className={styles.YourNeedPContainer}>
          <p>{completeText[value].text}</p>
        </div>
      </div>
    </div>
  );
};
export default Process;
