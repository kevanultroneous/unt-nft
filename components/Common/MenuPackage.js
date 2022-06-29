import Menu from "@/components/Home/Menu";
import MenuBar from "@/components/Common/MenuBar";
import { useState } from "react";

const MenuPackage = () => {
  const [menubaropacity, setMenuBarOpacity] = useState("0");
  return (
    <>
      <MenuBar
        display={menubaropacity}
        visibility={menubaropacity === "1" ? "visible" : null}
      />
      <Menu
        opacity={"1"}
        handleClick={() =>
          menubaropacity === "1"
            ? setMenuBarOpacity("0")
            : setMenuBarOpacity("1")
        }
        change={menubaropacity == "1" ? true : false}
      />
    </>
  );
};
export default MenuPackage;
