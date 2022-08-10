import { Row } from "react-bootstrap";
import EventCard from "./EventCard";
import { PastEventData } from "utils/EventsData";
import styles from "@/styles/components/Events/PastEvents.module.css";

function PastEvent() {
  return (
    <div className={styles.PastEventContainer}>
      <Row>
        <div className={styles.PastEventHeading}>
          <h3>Past Events</h3>
        </div>
        {PastEventData.map((pastEvents) => {
          return (
            <>
              <EventCard
                srcimg={pastEvents.srcimg}
                imageTitle={pastEvents.imageTitle}
                EventsTitle={pastEvents.EventsTitle}
                EventsParagraph={pastEvents.EventsParagraph}
                customStyle={styles.PastEventTextColumnReverse}
              />
            </>
          );
        })}
      </Row>
    </div>
  );
}

export default PastEvent;
