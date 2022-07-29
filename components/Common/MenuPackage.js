import Menu from "@/components/Home/Menu";
import MenuBar from "@/components/Common/MenuBar";
import { useEffect, useState } from "react";
import MobileMenu, { TabletMenu } from "./MobileMenu";

const MenuPackage = () => {
  const [menubaropacity, setMenuBarOpacity] = useState("0");
  const [addClass, setAddClass] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menubaropacity === "1" ? "hidden" : null;
  });
  const MenuHandler = () => {
    setAddClass(!addClass);
    menubaropacity === "1" ? setMenuBarOpacity("0") : setMenuBarOpacity("1");
  };
  return (
    <>
      <MobileMenu />
      <TabletMenu />
      <MenuBar
        handleClick={() => MenuHandler()}
        display={menubaropacity}
        visibility={menubaropacity === "1" ? "visible" : null}
        animatedclass={
          menubaropacity === "1"
            ? "fade-in-left-anim "
            : "fade-in-left-anim-remove"
        }
        animatedotherclass={
          menubaropacity === "1"
            ? "fade-in-left-anim "
            : "fade-in-left-anim-remove"
        }
      />

      <Menu
        clicktoCloseMenu={() => MenuHandler()}
        opacity={"1"}
        addClass={addClass}
        handleClick={() => MenuHandler()}
        change={menubaropacity == "1" ? true : false}
      />
    </>
  );
};
export default MenuPackage;
