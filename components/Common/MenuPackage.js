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
  return (
    <>
      <MobileMenu />
      <TabletMenu />
      <MenuBar
        display={menubaropacity}
        visibility={menubaropacity === "1" ? "visible" : null}
      />
      <Menu
        opacity={"1"}
        addClass={addClass}
        handleClick={() => {
          setAddClass(!addClass);
          menubaropacity === "1"
            ? setMenuBarOpacity("0")
            : setMenuBarOpacity("1");
        }}
        change={menubaropacity == "1" ? true : false}
      />
    </>
  );
};
export default MenuPackage;
