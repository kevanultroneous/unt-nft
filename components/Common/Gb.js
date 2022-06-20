import styles from "@/styles/components/home/gb.module.css";
const Gb = ({ child }) => {
  return <div class={styles.gradientBorder}>{child}</div>;
};
export default Gb;
