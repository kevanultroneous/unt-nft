import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideHeading from "../Common/SideHeading";
import { UpComingEvents, UpComingEventsMobile } from "./UpComingEvents";
import { UpComingEventsData } from "utils/EventsData";
import styles from "@/styles/components/Events/MoreEvents.module.css";

function MoreEvents() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth <= 600 ? setMobileView(true) : setMobileView(false);
  }, []);

  return (
    <div className={styles.moreEventsContainer}>
      <Row>
        <Col xl={2} className={styles.rightHeadingDisplay}>
          <div className={styles.rightHeadingCont}>
            <SideHeading heading={"EVENTS LISTS"} />
          </div>
        </Col>
        <Col xl={10} className={styles.leftEventsCont}>
          <div className={styles.moreEventHead}>
            <h3>More Coming Events</h3>
          </div>
          {UpComingEventsData.map((events, ind) => {
            return (
              <>
                {mobileView ? (
                  <UpComingEventsMobile
                    key={ind}
                    date={events.date}
                    monthAndYear={events.monthAndYear}
                    DescHeading={events.DescHeading}
                    DescPara={events.DescPara}
                    LinkTo={events.LinkTo}
                  />
                ) : (
                  <UpComingEvents
                    key={ind}
                    date={events.date}
                    monthAndYear={events.monthAndYear}
                    DescHeading={events.DescHeading}
                    DescPara={events.DescPara}
                    LinkTo={events.LinkTo}
                  />
                )}
              </>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default MoreEvents;
