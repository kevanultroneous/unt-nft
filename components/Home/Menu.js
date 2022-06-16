import styles from "@/styles/components/home/Menu.module.css";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
import AOS from "aos";
const Menu = ({ opacity }) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className={styles.NftMenu}
      style={{ opacity: opacity, zIndex: "100" }}
    >
      <div>
        <Image src="/assets/images/xicon.svg" fluid className="pt-4" />
      </div>
      {/* <div>
        <Image src="/assets/images/menuicon.svg" fluid />
      </div> */}
      <div>
        <p className={styles.BlockchainTechnologyText}>BLOCKCHAIN TECHNOLOGY</p>
      </div>
    </div>
  );
};
export default Menu;
