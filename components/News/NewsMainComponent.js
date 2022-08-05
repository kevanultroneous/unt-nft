import { useState } from "react";
import { NewsData } from "utils/NewsData.js";
import NewsImage from "./NewsImage";
import NewsCard from "./NewsCard";
import styles from "@/styles/components/News/NewsMainComponent.module.css";

function NewsMainComponent() {
  return (
    <div className={styles.mainContainer}>
      {NewsData.map((news, ind) => {
        return (
          <div key={ind}>
            <NewsImage
              newsData={news.mainNews}
              reverse={ind % 2 === 0 ? false : true}
            />
            <NewsCard
              trendingNews={news.trend}
              indexMainArray={ind}
              mainArray={NewsData}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NewsMainComponent;
