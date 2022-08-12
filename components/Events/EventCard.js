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
  disTitle,
  dish1,
  dish2,
  disp1,
  disp2,
}) => {
  return (
    <div className={`${styles.NewsImageCard} ${style}`}>
      <div className={styles.newsImage}>
        <Image
          src={srcimg}
          fluid
          alt={imageTitle}
          className={styles.mobileHeightIncrese}
        />
      </div>
      <div className={`${styles.NewsImageCardText} ${customStyle}`}>
        <p className={styles.NewsImageCardParagraph}>{EventsParagraph}</p>
        <p className={styles.NewsImageCardTitle}>{EventsTitle}</p>
      </div>
      {/* <div className={styles.NewsCardOverlay}>
        <div className={styles.NewsCardOverlayText}>
          <p
            className={styles.NewsImageCardTitle}
            style={{ paddingBottom: "1rem" }}
          >
            {disTitle}
          </p>
          <p className={styles.NewsDishead1}>{dish1}</p>
          <div className={styles.NewsInspire}></div>
          <p className={styles.NewsImageCardParagraph}>{disp1}</p>
          <p className={styles.NewsDishead1}>{dish2}</p>
          <div className={styles.NewsInspire}></div>

          <p className={styles.NewsImageCardParagraph}>{disp2}</p>
        </div>
      </div> */}
    </div>
  );
};

export default EventCard;
