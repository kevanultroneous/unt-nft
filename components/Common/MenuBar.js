import styles from "@/styles/components/Sidebar.module.css";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import AOS from "aos";
import { iconsMenu, menus } from "utils/menu.data";
import Link from "next/link";
import { useRouter } from "next/router";
const MenuBar = ({ display = "none", visibility }) => {
  const router = useRouter();
  const [currentIcon, setCurrentIcon] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(0);
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    menus.map((v, i) => {
      if (router.pathname === v.mainlink) {
        setCurrentMenu(i);
      } else {
        return null;
      }
    });
  }, []);
  const Heading = ({ name, border, color }) => {
    return (
      <div className={styles.MainHeading}>
        <div
          className={styles.MiniLine}
          style={border ? { borderBottom: border } : null}
        />
        <span
          className={styles.SmallHeading}
          style={color ? { color: color } : null}
        >
          {name}
        </span>
      </div>
    );
  };
  return (
    <div
      className={styles.MenuContainer}
      style={{ opacity: display, visibility: visibility }}
    >
      <Row>
        <div className={styles.MenuBar}>
          <Heading name={"MobifinX Menu"} />
          <div className={styles.MenuBarContent}>
            <ul>
              {menus.map((value, index) => (
                <div
                  className={styles.MenuName}
                  key={index}
                  onMouseOver={() => setCurrentMenu(index)}
                >
                  <Link href={value.mainlink}>
                    <a href={value.mainlink}>
                      <li>{value.name}</li>
                    </a>
                  </Link>
                  <div
                    className={styles.MenuLine}
                    style={
                      index === currentMenu
                        ? {
                            opacity: "1",
                            transition: "all 0.5s ease",
                          }
                        : { opacity: "0", transition: "all 0.5s ease" }
                    }
                  ></div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.Menus}>
          <div className={styles.MenusContent}>
            <ul>
              {menus[currentMenu].menus.map((value, index) => (
                <Link href={value.link} key={index}>
                  <div className={styles.SubMenuName} key={index}>
                    <li>{value.name}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.Other}>
          <Heading
            name={"Explore Products"}
            border={"1px solid  #000"}
            color={"#000"}
          />
          <div className={styles.OtherContent}>
            <Row className={styles.IconMenuContainer}>
              {iconsMenu.map((value, index) => (
                <Col
                  xl={6}
                  key={index}
                  onMouseOver={() => setCurrentIcon(index)}
                  onMouseLeave={() => setCurrentIcon(null)}
                >
                  <Link href={value.link}>
                    <div className={styles.IconCard}>
                      <Image
                        src={value.icon}
                        alt={value.icon}
                        className={styles.icon}
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
          </div>
        </div>
      </Row>
    </div>
  );
};
export default MenuBar;
