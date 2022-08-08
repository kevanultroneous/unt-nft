import styles from "@/styles/components/News/NewsHead.module.css";

import LightHead from "../Common/LightHead";

function NewsHead() {
  return (
    <div className={styles.newsHeadContainer}>
      <LightHead
        text={"Mobifinx News"}
        heading={"Know everything at one place"}
      />
    </div>
  );
}

export default NewsHead;
