import styles from "@/styles/components/MobileMenu.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import { iconsMenu, menus } from "utils/menu.data";
import WaterText from "./WaterText";

import { useRouter } from "next/router";
const MobileMenu = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);
  const [menuo, setMenuo] = useState(0);
  const [addClass, setAddClass] = useState(false);
  const toggleHandler = () => {
    setAddClass(false);
    setShow(false);
  };
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
            <Image
              alt={"xicon"}
              src={"/assets/images/Mobifinx.svg"}
              height={45}
            />
          </Link>
        </div>
        <div className={styles.MenuController}>
          <div
            className={`${styles.hamburger} ${addClass ? "is-active" : ""}`}
            onClick={() => {
              setAddClass(true);
              setShow(!show);
            }}
            id="hamburger-12"
          >
            <span className={`${styles.line} lineHam`}></span>
            <span className={`${styles.line} lineHam`}></span>
            <span className={`${styles.line} lineHam`}></span>
          </div>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={() => {
          setAddClass(false);
          setShow(false);
        }}
        placement="start"
      >
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
                      <p
                        onClick={() => {
                          v.mainlink === "" ? null : toggleHandler();
                        }}
                        className={styles.LinkName}
                        style={
                          router.pathname === v.mainlink
                            ? { color: "#fff" }
                            : null
                        }
                      >
                        {v.name}
                      </p>
                    </Link>
                    {v.menus.length > 0 ? (
                      <>
                        {v.menus.map((v, i) =>
                          v.description ? null : (
                            <Link href={v.link} key={i}>
                              <p className={styles.SubMenu}>{v.name}</p>
                            </Link>
                          )
                        )}
                      </>
                    ) : null}
                  </Col>
                ))}
              </Row>
            ) : (
              <Row className={styles.IconMenuContainer}>
                {iconsMenu.map((value, index) => (
                  <Link href={value.link} key={index}>
                    <Col
                      xs={5}
                      key={index}
                      onMouseOver={() => setCurrentIcon(index)}
                      onMouseLeave={() => setCurrentIcon(null)}
                    >
                      <div className={styles.IconCard}>
                        <Image
                          src={value.icon}
                          alt={value.icon}
                          className={styles.IconImg}
                        />
                        <p
                          className={styles.IconName}
                          style={
                            index === currentIcon
                              ? {
                                  color: value.color,
                                  transition: "all 0.5s ease",
                                }
                              : { color: "#000", transition: "all 0.5s ease" }
                          }
                        >
                          {value.name}
                        </p>
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
export const TabletMenu = () => {
  const [show, setShow] = useState(false);
  const [showTAB, setShowTAB] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);
  const router = useRouter();
  const toggleHandler = () => {
    setAddClass(!addClass);
    setShow(!show);
    setShowTAB(!showTAB);
  };
  return (
    <>
      <div
        className={styles.TabletMenu}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className={styles.TabletMenuLogo}>
          <Link href={"/"}>
            <Image
              alt={"xicon"}
              src={"/assets/images/Mobifinx.svg"}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.TabletController}>
          <div
            className={`${styles.hamburger} ${addClass ? "is-active" : ""}`}
            onClick={() => toggleHandler()}
            id="hamburger-12"
          >
            <span className={`${styles.line} lineHam`}></span>
            <span className={`${styles.line} lineHam`}></span>
            <span className={`${styles.line} lineHam`}></span>
          </div>
        </div>
      </div>
      <Offcanvas
        show={showTAB}
        onHide={() => toggleHandler()}
        placement="start"
      >
        <Offcanvas.Body>
          <Row>
            <Col md={6} className={styles.MobifinxTabmenu}>
              <Row>
                <Col md={12}>
                  <div className={styles.Tabs} style={{ color: "#fff" }}>
                    <hr
                      className={styles.Tabname}
                      style={{ border: "0.1px solid rgba(0, 0, 0, 0.4)" }}
                    />
                    MobifinX Menu
                  </div>
                </Col>
                {menus.map((v, i) => (
                  <Col xl={12} key={i}>
                    <Link href={v.mainlink}>
                      <p
                        onClick={() => {
                          v.mainlink === "" ? null : toggleHandler();
                        }}
                        className={styles.LinkName}
                        style={
                          router.pathname == v.mainlink
                            ? { color: "#fff" }
                            : null
                        }
                      >
                        {v.name}
                      </p>
                    </Link>
                    {v.menus.length > 0 ? (
                      <>
                        {v.menus.map((v, i) =>
                          v.description ? null : (
                            <Link href={v.link} key={i}>
                              <p className={styles.SubMenu}>{v.name}</p>
                            </Link>
                          )
                        )}
                      </>
                    ) : null}
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={6} className={styles.TabeMenucol}>
              <Row>
                <Col md={12} className={styles.Explorproduct}>
                  <div className={styles.Tabs} style={{ color: "#000" }}>
                    <hr
                      className={styles.Tabname}
                      style={{ border: "0.1px solid #000" }}
                    />
                    Explore Product
                  </div>
                </Col>
                {iconsMenu.map((value, index) => (
                  <Col
                    md={6}
                    key={index}
                    className={styles.ProductIcon}
                    onMouseOver={() => setCurrentIcon(index)}
                    onMouseLeave={() => setCurrentIcon(null)}
                  >
                    <Link href={value.link} key={index}>
                      <div className={styles.TabIconCard}>
                        <Image
                          src={value.icon}
                          alt={value.icon}
                          className={styles.IconImg}
                        />
                        <p
                          className={styles.IconName}
                          style={
                            index === currentIcon
                              ? {
                                  color: value.color,
                                  transition: "all 0.5s ease",
                                }
                              : { color: "#000", transition: "all 0.5s ease" }
                          }
                        >
                          {value.name}
                        </p>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default MobileMenu;
