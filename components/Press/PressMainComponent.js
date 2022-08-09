import { useState } from "react";
import { PressData } from "utils/PressData";
import PressImage from "./PressImage";
import PressCard from "./PressCard";
import styles from "@/styles/components/Press/PressMainComponent.module.css";

function PressMainComponent() {
  console.log(PressData);
  return (
    <div className={styles.mainContainer}>
      {PressData.map((Press, ind) => {
        return (
          <div key={ind}>
            <PressImage
              PressData={Press.mainPress}
              reverse={ind % 2 === 0 ? false : true}
            />
            <PressCard trendingpress={Press.trend} />
          </div>
        );
      })}
    </div>
  );
}

export default PressMainComponent;
