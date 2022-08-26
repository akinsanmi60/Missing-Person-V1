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
        <Link to="/missing_person" className="Link">
          Missing Person
        </Link>
        <Link to="/identified_person" className="Link">
          Identified Person
        </Link>
        <Link to="/dead_bodies" className="Link">
          Dead Bodies
        </Link>
        <Link to="/birth" className="Link">
          Birth
        </Link>
        <Link to="/about" className="Link">
          About
        </Link>
        <Link to="/contact" className="Link">
          Contact Us
        </Link>
        <Link to="/question" className="Link">
          FAQ
        </Link>
      </div>
    </NavigationStyled>
  );
}

export default HeaderNavigation;
