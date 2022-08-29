import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import styles from "@/styles/components/CounterComponent.module.css";
import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useOnScreen from "./customHook/useOnScreen";
function CounterComponent(props) {
  const [load, setLoad] = useState(false);

  const countRef = useRef(null);
  const isOnScreen = useOnScreen(countRef);

  useEffect(() => {
    AOS.refresh();
    AOS.init();
    setLoad(true);
  }, []);

  return (
    <div ref={countRef} className="px-0">
      {load && (
        <Row
          id="CounterComponent"
          className={`${styles.CounterContainer} mx-0`}
          {...props}
        >
          {props.data.map((el, ind) => (
            <Col
              data-aos="zoom-in"
              data-aos-duration="2000"
              xs={6}
              sm={6}
              lg={2}
              className={styles.CounterComponentCol}
              key={ind}
            >
              <div className={styles.CounterContainerMain}>
                <div className={styles.CounterContainerMainDiv}>
                  <CountUp
                    className={styles.Counter}
                    start={isOnScreen ? el.start : null}
                    end={el.end}
                    delay={0}
                    duration={2.5}
                    useEasing={true}
                  />
                  <span className={styles.CounterSign}>{el.sign}</span>
                </div>
                <p className={styles.CounterText}>{el.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CounterComponent;
