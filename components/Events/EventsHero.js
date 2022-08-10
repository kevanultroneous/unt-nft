import { useEffect, useState } from "react";
import EventsHead from "./EventsHead";
import EventCard from "./EventCard";
import styles from "@/styles/components/Events/EventsHero.module.css";
import { refresh } from "aos";

function EventsHero() {
  const [mobileView, setMobileView] = useState("hero");

  useEffect(() => {
    window.innerWidth <= 600
      ? setMobileView("hero-mobile")
      : window.innerWidth > 600 && window.innerWidth <= 992
      ? setMobileView("hero-tab")
      : setMobileView("hero");
  }, []);

  return (
    <div className={styles.EventsHeroContainer}>
      <EventsHead />
      <div className={styles.EventHeroCard}>
        <EventCard
          srcimg={`assets/images/event-${mobileView}.png`}
          EventsTitle={
            "A network-driven platform integrating e-commerce, a wallet, and trading features"
          }
          EventsParagraph={"6th July 2022"}
        />
      </div>
    </div>
  );
}

export default EventsHero;
