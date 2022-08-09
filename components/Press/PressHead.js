import styles from "@/styles/components/Press/PressHead.module.css";

import LightHead from "../Common/LightHead";

function PressHead() {
  return (
    <div className={styles.pressHeadContainer}>
      <LightHead
        text={"MobifinX Press Release"}
        heading={`MobifinX in Media`}
      />
    </div>
  );
}

export default PressHead;
