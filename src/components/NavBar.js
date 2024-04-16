import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/BreakfastMenu" className="nav-link">
        Breakfast
      </NavLink>
      <NavLink to="/BrunchMenu" className="nav-link">
        Brunch
      </NavLink>
      <NavLink to="/LunchMenu" className="nav-link">
        Lunch
      </NavLink>
    </nav>
  );
}

export default NavBar;
