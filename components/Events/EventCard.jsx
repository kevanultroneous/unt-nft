import React from "react";
import { Image } from "react-bootstrap";
import styles from "@/styles/components/Events/EventCard.module.css";

const EventCard = ({
  style,
  srcimg,
  imageTitle,
  EventsTitle,
  EventsParagraph,
}) => {
  return (
    <div className={`${styles.NewsImageCard} ${style}`}>
      <div className={styles.newsImage}>
        <Image src={srcimg} fluid alt={imageTitle} />
      </div>
      <div className={styles.NewsImageCardText}>
        <p className={styles.NewsImageCardTitle}>{EventsTitle}</p>
        <p className={styles.NewsImageCardParagraph}>{EventsParagraph}</p>
      </div>
    </div>
  );
};

export default EventCard;

// function NewsImage({ reverse, newsData }) {
//   return (
//     <div className={styles.NewsImageCardContainer}>
//       <Row className={reverse ? styles.imageNewsRow : null}>
//         {newsData.map((news, ind) => {
//           return (
//             <Col key={ind} xl={12} lg={12} xs={12} md={12}>
//               <div className={styles.NewsCard}>
//                 <NewsImageCard
//                   srcimg={news.srcimg}
//                   NewsDate={news.NewsDate}
//                   BigNewsTitle={news.BigNewsTitle}
//                 />
//               </div>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// }

// export default NewsImage;
