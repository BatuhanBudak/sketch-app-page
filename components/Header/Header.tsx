import React from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavFirst from "./NavFirst";
import NavMenu from "./NavMenu";

export default function Header() {
  const [drawerOpen, toggleDrawerOpen] = useToggle();

  return (
    <header>
      <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
        <NavFirst toggleDrawerOpen={toggleDrawerOpen} />
        <NavMenu />
        <NavDrawer drawerOpen={drawerOpen} />
      </nav>
    </header>
  );
}
