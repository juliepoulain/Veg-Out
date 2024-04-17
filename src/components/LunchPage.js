import React, { useState } from "react";
import LunchList from "./LunchList";
import NavBar from "./NavBar";
import Search from "./Search"

function LunchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Lunch Menu</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <LunchList menuItems={menuItems} setMenuItems={setMenuItems} searchValue={searchValue}/>
    </div>
  );
}

export default LunchPage;
