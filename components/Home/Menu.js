import styles from "@/styles/components/home/Menu.module.css";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
import AOS from "aos";
import Link from "next/link";
const Menu = ({ opacity, handleClick, change }) => {
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
        <Link href={"/"}>
          <Image
            style={{ cursor: "pointer" }}
            alt={"xicon"}
            src="/assets/images/xicon.svg"
            fluid
            className="pt-4"
          />
        </Link>
      </div>
      <div>
        <Image
          style={{ cursor: "pointer" }}
          alt={"menu"}
          src={
            change
              ? "/assets/images/menuopen.svg"
              : "/assets/images/deskmenu.svg"
          }
          fluid
          onClick={() => handleClick()}
        />
      </div>
      <div>
        <p className={styles.BlockchainTechnologyText}>BLOCKCHAIN TECHNOLOGY</p>
      </div>
    </div>
  );
};
export default Menu;
