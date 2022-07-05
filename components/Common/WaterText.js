import styles from "@/styles/components/WaterText.module.css";
import { useState } from "react";
const WaterText = ({ text, color }) => {
  const [hoverAction, setHoverAction] = useState(false);
  return (
    <h4
      onMouseOver={() => setHoverAction(true)}
      onMouseLeave={() => setHoverAction(false)}
      className={styles.WaterText}
      style={
        color
          ? {
              backgroundImage: `-webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(50%, ${color}),
          color-stop(50%, ${color})
        )`,
              backgroundImage: `-webkit-linear-gradient(bottom, ${color} 50%, #fff 50%)`,
              backgroundImage: `-o-linear-gradient(bottom, ${color} 50%, #fff 50%)`,
              backgroundImage: `linear-gradient(to top, ${color} 50%, #fff 50%)`,
              WebkitTextStroke: `1px ${hoverAction ? color : `#959595`}`,
            }
          : null
      }
    >
      {text}
    </h4>
  );
};
export default WaterText;
