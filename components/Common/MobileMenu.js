import styles from "@/styles/components/MobileMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import { iconsMenu, menus } from "utils/menu.data";
import WaterText from "./WaterText";
const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const [menuo, setMenuo] = useState(0);
  return (
    <>
      <div
        className={styles.MobileMenu}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className={styles.MobileMenuLogo}>
          <Link href={"/"}>
            <Image alt={"xicon"} src={"/assets/images/mobileicon.svg"} fluid />
          </Link>
        </div>
        <div className={styles.MenuController}>
          <Image
            alt={"menu"}
            src={
              show ? "/assets/images/liness.svg" : "/assets/images/mobile.svg"
            }
            onClick={() => setShow(true)}
          />
        </div>
      </div>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Body>
          <div
            className={styles.MobifinxXmenu}
            style={menuo === 1 ? { background: "#ffffff" } : null}
          >
            <Row>
              <Col xs={6}>
                <div
                  className={styles.Tabs}
                  style={
                    menuo === 0
                      ? { color: "#fff" }
                      : { color: "rgba(0, 0, 0, 0.4)" }
                  }
                  onClick={() => setMenuo(0)}
                >
                  <hr
                    className={styles.Tabname}
                    style={
                      menuo === 0
                        ? { border: "0.1px solid #fff" }
                        : { border: "0.1px solid rgba(0, 0, 0, 0.4)" }
                    }
                  />
                  MobifinX Menu
                </div>
              </Col>
              <Col xs={6} className={styles.Explorproduct}>
                <div
                  className={styles.Tabs}
                  style={
                    menuo === 1
                      ? { color: "#000" }
                      : { color: "rgba(255, 255, 255, 0.4)" }
                  }
                  onClick={() => setMenuo(1)}
                >
                  <hr
                    className={styles.Tabname}
                    style={
                      menuo === 1
                        ? { border: "0.1px solid #000" }
                        : { border: "0.1px solid rgba(255, 255, 255, 0.4)" }
                    }
                  />
                  Explore Product
                </div>
              </Col>
            </Row>
            {menuo === 0 ? (
              <Row className={styles.Menurow}>
                {menus.map((v, i) => (
                  <Col xl={12} key={i}>
                    <Link href={v.mainlink}>
                      <p className={styles.LinkName}>{v.name}</p>
                    </Link>
                    {v.menus.length > 0 ? (
                      <>
                        {v.menus.map((v, i) => (
                          <Link href={v.link} key={i}>
                            <p className={styles.SubMenu}>{v.name}</p>
                          </Link>
                        ))}
                      </>
                    ) : null}
                  </Col>
                ))}
              </Row>
            ) : (
              <Row className={styles.IconMenuContainer}>
                {iconsMenu.map((value, index) => (
                  <Link href={value.link}>
                    <Col xs={5} key={index}>
                      <div className={styles.IconCard}>
                        <Image src={value.icon} alt={value.icon} fluid />
                        <p className={styles.IconName}>{value.name}</p>
                      </div>
                    </Col>
                  </Link>
                ))}
              </Row>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default MobileMenu;
