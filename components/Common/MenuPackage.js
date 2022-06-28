import Menu from "@/components/Home/Menu";
import MenuBar from "@/components/Common/MenuBar";
import { useState } from "react";

const MenuPackage = () => {
  const [menubaropacity, setMenuBarOpacity] = useState("none");
  return (
    <>
      <MenuBar display={menubaropacity} />
      <Menu
        opacity={"1"}
        handleClick={() =>
          menubaropacity === "block"
            ? setMenuBarOpacity("none")
            : setMenuBarOpacity("block")
        }
        change={menubaropacity == "block" ? true : false}
      />
    </>
  );
};
export default MenuPackage;
