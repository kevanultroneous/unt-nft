import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import styles from "@/styles/components/Events/EventCard.module.css";
import Aos from "aos";

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
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <div
      className={`${styles.NewsImageCard} ${style}`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
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
    </div>
  );
};

export default EventCard;
