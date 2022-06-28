import styles from "@/styles/components/WaterText.module.css";
const WaterText = ({ text, color }) => {
  return (
    <h4
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
              WebkitTextStroke: `1px ${color}`,
            }
          : null
      }
    >
      {text}
    </h4>
  );
};
export default WaterText;
