import React from "react";
import LightHead from "../Common/LightHead";
import styles from "@/styles/components/Events/EventsHead.module.css";

function EventsHead() {
  return (
    <LightHead
      text={"MobifinX Events & Webinars"}
      heading={"We are show stealers"}
      headingWidth={styles.eventHeadWidth}
      textStyle={styles.textwidth}
    />
  );
}

export default EventsHead;
