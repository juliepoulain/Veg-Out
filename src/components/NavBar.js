import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return;
  <nav>
    <NavLink to="/" className="nav-link">
      Home;
    </NavLink>
    <NavLink to="/BreakfastPage" className="nav-link">
      Breakfast
    </NavLink>
    <NavLink to="/Brunch" className="nav-link">
      Brunch
    </NavLink>
    <NavLink to="/Lunch" className="nav-link">
      Lunch
    </NavLink>
    <NavLink to="/ReviewPage" className="nav-link">
      Reviews
    </NavLink>
  </nav>;
}

export default NavBar;
