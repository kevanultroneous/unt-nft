import Menu from "@/components/Home/Menu";
import MenuBar from "@/components/Common/MenuBar";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const MenuPackage = () => {
  const [menubaropacity, setMenuBarOpacity] = useState("0");
  const [addClass, setAddClass] = useState(false);
  return (
    <>
      <MobileMenu />
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
