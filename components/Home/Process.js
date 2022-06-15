import styles from "@/styles/components/home/Process.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
const Process = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const dataProcess = [
    {
      name: "Understanding Your Needs",
      bcolor: "#E27625",
      bkcolor: "#FFF1E8",
    },
    {
      name: "Formulating a Scheme",
      bcolor: "#00ACD7",
      bkcolor: "#FFF1E8",
    },
    {
      name: "Signing Contracts",
      bcolor: "#763E1A",
      bkcolor: "#FFF1E8",
    },
    {
      name: "Gathering Domain Names",
      bcolor: "#A199FF",
      bkcolor: "#FFF1E8",
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
              <div className={styles.ProcessBox}>
                <div className={styles.ProcessBlinkMain}>
                  <div
                    className={styles.ProcessBlink}
                    style={{
                      borderColor: v.bcolor,
                      backgroundColor: v.bkcolor,
                      border: `1.13333px solid ${v.bcolor}`,
                    }}
                  >
                    <div
                      className={styles.ProcessDot}
                      style={{ borderColor: v.bcolor }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className={styles.ProcessParagraph}>{v.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.YourNeedContainer}>
        <h6 className={styles.YourNeedHeading}>Understanding Your Needs</h6>
        <div className={styles.YourNeedPContainer}>
          <p>
            A Centralized Trading platform for Spot trading, OTC desk, and P2P
            Trading. Offers world-class trading technology, robust legal and
            compliance solutions, and round-the-clock support. Automate trades
            without involving a central authority and connect buyers and sellers
            directly.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Process;
