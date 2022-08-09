import React from "react";
import EventsHead from "./EventsHead";
import EventCard from "./EventCard";
import styles from "@/styles/components/Events/EventsHero.module.css";
import { refresh } from "aos";

function EventsHero() {
  return (
    <div className={styles.EventsHeroContainer}>
      <EventsHead />
      <div className={styles.EventHeroCard}>
        <EventCard
          srcimg={"assets/images/event-hero.png"}
          EventsTitle={
            "A network-driven platform integrating e-commerce, a wallet, and trading features"
          }
          EventsParagraph={"An ecosystem where all the gambling platforms"}
        />
      </div>
    </div>
  );
}

export default EventsHero;
