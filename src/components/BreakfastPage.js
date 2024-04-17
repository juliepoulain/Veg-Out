import React, {useState} from "react";
import BreakfastList from "./BreakfastList";
import NavBar from "./NavBar";
import Search from "./Search"

function BreakfastPage() {
  const [searchValue, setSearchValue] = useState("")
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Breakfast Menu</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <BreakfastList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        searchValue={searchValue}
      />
    </div>
  );
}

export default BreakfastPage;
