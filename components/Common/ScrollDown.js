import { Image } from "react-bootstrap";

const ScrollDown = () => {
  return (
    <div className={styles.Scrolldowncontainer}>
      <Image
        alt="downimg"
        src="/assets/images/scrollarrow.svg"
        className={styles.ImageDown}
      />
      <p className={styles.ScrolldownText}>Scroll Down</p>
    </div>
  );
};
export default ScrollDown;
