import React from "react";
import { Diamond } from "../Icon";
type Props = {
  toggleDrawerOpen: () => void;
  drawerOpen: boolean;
};
export default function NavFirst({ toggleDrawerOpen, drawerOpen }: Props) {
  return (
    <div className="nav__first">
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-haspopup="dialog"
        onClick={toggleDrawerOpen}
      >
        <span className="hamburger"></span>
        <span className="visuallyhidden">Menu</span>
      </button>
      <a className="nav__first__icon" href="">
        <Diamond />
      </a>
      <a className="nav__first__auth" href="">
        Sign In
      </a>
    </div>
  );
}
