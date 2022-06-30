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
      <div className={styles.MobileMenu}>
        <div className={styles.MobileMenuLogo}>
          <Image alt={"xicon"} src={"/assets/images/mobileicon.svg"} fluid />
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
                  <span
                    className={styles.Tabname}
                    style={
                      menuo === 0
                        ? { border: "1px solid #fff" }
                        : { border: "1px solid rgba(0, 0, 0, 0.4)" }
                    }
                  >
                    {""}
                  </span>
                  MobifinX Menu
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className={styles.Tabs}
                  style={
                    menuo === 1
                      ? { color: "#000" }
                      : { color: "rgba(0, 0, 0, 0.4)" }
                  }
                  onClick={() => setMenuo(1)}
                >
                  <span
                    className={styles.Tabname}
                    style={
                      menuo === 1
                        ? { border: "1px solid #000" }
                        : { border: "1px solid rgba(0, 0, 0, 0.4)" }
                    }
                  >
                    {""}
                  </span>
                  Explore Product
                </div>
              </Col>
            </Row>
            {menuo === 0 ? (
              <Row>
                {menus.map((v, i) => (
                  <Col xl={12}>
                    <Link href={v.mainlink}>
                      <p className={styles.LinkName}>{v.name}</p>
                    </Link>
                    {v.menus.length > 0 ? (
                      <>
                        {v.menus.map((v, i) => (
                          <Link href={"/"}>
                            <p className={styles.SubMenu}>{v}</p>
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
                  <Col xs={5} key={index}>
                    <div className={styles.IconCard}>
                      <Image src={value.icon} alt={value.icon} fluid />
                      <p className={styles.IconName}>{value.name}</p>
                    </div>
                  </Col>
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
