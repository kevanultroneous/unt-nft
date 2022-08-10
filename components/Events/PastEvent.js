import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import EventCard from "./EventCard";
import { PastEventData } from "utils/EventsData";
import styles from "@/styles/components/Events/PastEvents.module.css";

function PastEvent() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth <= 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  return (
    <div className={styles.PastEventContainer}>
      <Row>
        <div className={styles.PastEventHeading}>
          <h3>Past Events</h3>
        </div>
        {PastEventData.map((pastEvents) => {
          return (
            <>
              {mobileView ? (
                <EventCard
                  srcimg={pastEvents.srcimgMobile}
                  imageTitle={pastEvents.imageTitle}
                  EventsTitle={pastEvents.EventsTitle}
                  EventsParagraph={pastEvents.EventsParagraph}
                  customStyle={styles.PastEventTextColumnReverse}
                />
              ) : (
                <EventCard
                  srcimg={pastEvents.srcimg}
                  imageTitle={pastEvents.imageTitle}
                  EventsTitle={pastEvents.EventsTitle}
                  EventsParagraph={pastEvents.EventsParagraph}
                  customStyle={styles.PastEventTextColumnReverse}
                />
              )}
            </>
          );
        })}
      </Row>
    </div>
  );
}

export default PastEvent;
