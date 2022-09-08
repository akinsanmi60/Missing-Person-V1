/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import DrawerExample from "../Drawer";
import NavigationStyled, { NavLink } from "./style";

function HeaderNavigation() {
  return (
    <NavigationStyled>
      <div className="boxnav">
        <div>
          <NavLink to="/">
            <h1>People</h1>
          </NavLink>
        </div>
        <div className="drawerbox">
          <DrawerExample />
        </div>
      </div>
      <div className="navitemsbox">
        <Link to="/missing_person" className="link">
          Missing Person
        </Link>
        <Link to="/identified_person" className="link">
          Identified Person
        </Link>
        <Link to="/dead_bodies" className="link">
          Dead Bodies
        </Link>
        <Link to="/birth" className="link">
          Birth
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
        <Link to="/question" className="link">
          FAQ
        </Link>
      </div>
    </NavigationStyled>
  );
}

export default HeaderNavigation;
