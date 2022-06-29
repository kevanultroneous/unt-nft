import styles from "@/styles/components/Sidebar.module.css";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import AOS from "aos";
const MenuBar = ({ display = "none" }) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
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
  const [currentIcon, setCurrentIcon] = useState(null);
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
    <div className={styles.MenuContainer} style={{ display: display }}>
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
                  <li>{value.name}</li>
                  <div
                    className={styles.MenuLine}
                    style={
                      index === currentMenu
                        ? { opacity: "1", transition: "all 0.5s ease" }
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
                <div className={styles.SubMenuName} key={index}>
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
                  onMouseLeave={() => setCurrentIcon(null)}
                >
                  <div className={styles.IconCard}>
                    <Image src={value.icon} alt={value.icon} />
                    <p
                      className={styles.IconName}
                      style={
                        index === currentIcon
                          ? { color: value.color, transition: "all 0.5s ease" }
                          : { color: "#000", transition: "all 0.5s ease" }
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
