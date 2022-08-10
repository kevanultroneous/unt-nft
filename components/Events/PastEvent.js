import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import EventCard from "./EventCard";
import { PastEventData } from "utils/EventsData";
import styles from "@/styles/components/Events/PastEvents.module.css";

function PastEvent() {
  const [mobileView, setMobileView] = useState(0);

  useEffect(() => {
    setMobileView(window.innerWidth);
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
              {mobileView <= 600 ? (
                <EventCard
                  srcimg={pastEvents.srcimgMobile}
                  imageTitle={pastEvents.imageTitle}
                  EventsTitle={pastEvents.EventsTitle}
                  EventsParagraph={pastEvents.EventsParagraph}
                  customStyle={styles.PastEventTextColumnReverse}
                />
              ) : mobileView > 600 && mobileView <= 992 ? (
                <EventCard
                  srcimg={pastEvents.srcimgTablet}
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
