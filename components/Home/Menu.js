import styles from "@/styles/components/home/Menu.module.css";
import { Image } from "react-bootstrap";
const Menu = ({ opacity }) => {
  return (
    <div className={styles.NftMenu}>
      <div>
        <Image src="/assets/images/xicon.svg" fluid />
      </div>
      <div>
        <Image src="/assets/images/menuicon.svg" fluid />
      </div>
      <div>
        <p className={styles.BlockchainTechnologyText}>BLOCKCHAIN TECHNOLOGY</p>
      </div>
    </div>
  );
};
export default Menu;
