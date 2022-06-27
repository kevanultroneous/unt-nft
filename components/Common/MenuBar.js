import styles from "@/styles/components/Sidebar.module.css";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
const MenuBar = ({ opacity = "0" }) => {
  const menus = [
    {
      name: "Home",
      menus: [
        "Company Overview",
        "Case study",
        "Career page",
        "Events & webinars",
        "Awards & Certificate",
        "Client Speak/Customer",
      ],
    },
    {
      name: "About us",
      menus: [
        "Career page",
        "Events & webinars",
        "Awards & Certificate",
        "Client Speak/Customer",
      ],
    },
    {
      name: "Insights",
      menus: ["Company Overview", "Case study", "Client Speak/Customer"],
    },
    {
      name: "Resources",
      menus: ["Company Overview", "Case study", "Career page"],
    },
    {
      name: "Contact us",
      menus: ["Company Overview", "Case study"],
    },
  ];
  const iconsMenu = [
    {
      icon: "/assets/images/menu-1.svg",
      color: "#F27E63",
      name: "MxTrade",
    },
    {
      icon: "/assets/images/menu-2.svg",
      color: "#00ACD7",
      name: "MxFuture",
    },
    {
      icon: "/assets/images/menu-3.svg",
      color: "#F2AB27",
      name: "MxDex",
    },
    {
      icon: "/assets/images/menu-4.svg",
      color: "#4BA6A6",
      name: "MxFi",
    },
    {
      icon: "/assets/images/menu-5.svg",
      color: "#9E9BF2",
      name: "MxLaunch",
    },
    {
      icon: "/assets/images/menu-6.svg",
      color: "#BF9A78",
      name: "MxWallet",
    },
    {
      icon: "/assets/images/menu-7.svg",
      color: "#4B99FF",
      name: "MxBlock",
    },
    {
      icon: "/assets/images/menu-8.svg",
      color: "#D95276",
      name: "MxNFT",
    },
  ];
  const [currentIcon, setCurrentIcon] = useState(0);
  const [currentMenu, setCurrentMenu] = useState(0);
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
    <div className={styles.MenuContainer} style={{ opacity: opacity }}>
      <Row>
        <div className={styles.MenuBar}>
          <Heading name={"MobifinX Home"} />
          <div className={styles.MenuBarContent}>
            <ul>
              {menus.map((value, index) => (
                <div
                  className={styles.MenuName}
                  key={index}
                  onMouseOver={() => setCurrentMenu(index)}
                >
                  <li
                    style={
                      index === currentMenu
                        ? {
                            borderRight: "5px solid #fff",
                            height: "fit-content",
                          }
                        : null
                    }
                  >
                    {value.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.Menus}>
          <div className={styles.MenusContent}>
            <ul>
              {menus[currentMenu].menus.map((value, index) => (
                <div className={styles.MenuName} key={index}>
                  <li>{value}</li>
                </div>
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
                >
                  <div className={styles.IconCard}>
                    <Image src={value.icon} alt={value.icon} />
                    <p
                      className={styles.IconName}
                      style={
                        index === currentIcon
                          ? { color: value.color, transition: "all 0.5s ease" }
                          : { color: "#000" }
                      }
                    >
                      {value.name}
                    </p>
                  </div>
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
