import React from "react";
import { Image } from "react-bootstrap";
import styles from "@/styles/components/Events/EventCard.module.css";

const EventCard = ({
  style,
  srcimg,
  imageTitle,
  EventsTitle,
  EventsParagraph,
  customStyle,
}) => {
  return (
    <div className={`${styles.NewsImageCard} ${style}`}>
      <div className={styles.newsImage}>
        <Image src={srcimg} fluid alt={imageTitle} />
      </div>
      <div className={`${styles.NewsImageCardText} ${customStyle}`}>
        <p className={styles.NewsImageCardTitle}>{EventsTitle}</p>
        <p className={styles.NewsImageCardParagraph}>{EventsParagraph}</p>
      </div>
    </div>
  );
};

export default EventCard;
