import styles from "@/styles/components/home/Menu.module.css";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import AOS from "aos";
import Link from "next/link";
import { useRouter } from "next/router";
import Aos from "aos";
const ParentMenuBar = ({ children, opacity }) => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className={styles.NftMenu}
          style={{ opacity: opacity, zIndex: "100" }}
        >
          {children}
        </div>
      ) : (
        <div
          className={styles.NftMenu}
          style={{ opacity: opacity, zIndex: "100" }}
        >
          {children}
        </div>
      )}
    </>
  );
};
const Menu = ({ opacity, handleClick, change, addClass, clicktoCloseMenu }) => {
  return (
    <ParentMenuBar opacity={opacity}>
      <div>
        <Link href={"/"}>
          <Image
            onClick={clicktoCloseMenu}
            style={{ cursor: "pointer" }}
            alt={"MobifinX"}
            title={"MobifinX"}
            src="/assets/images/Mobifinx.svg"
            fluid
            className={styles.MobifinxLogo}
          />
        </Link>
      </div>
      <div>
        <div
          className={`${styles.hamburger} ${addClass ? "is-active" : ""}`}
          onClick={handleClick}
          id="hamburger-12"
        >
          <span className={`${styles.line} lineHam`}></span>
          <span className={`${styles.line} lineHam`}></span>
          <span className={`${styles.line} lineHam`}></span>
        </div>
      </div>
      <div>
        <p className={styles.BlockchainTechnologyText}>BLOCKCHAIN TECHNOLOGY</p>
      </div>
    </ParentMenuBar>
  );
};
export default Menu;
