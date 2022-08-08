import React from "react";
import EventsHead from "./EventsHead";
import EventCard from "./EventCard";
import styles from "@/styles/components/Events/EventsHero.module.css";

function EventsHero() {
  return (
    <div className={styles.EventsHeroContainer}>
      <EventsHead />
      <EventCard
        srcimg={"assets/images/event-hero.png"}
        EventsTitle={
          "A network-driven platform integrating e-commerce, a wallet, and trading features"
        }
        EventsParagraph={"An ecosystem where all the gambling platforms"}
      />
    </div>
  );
}

export default EventsHero;
