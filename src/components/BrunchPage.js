import React, {useState} from "react";
import BrunchList from "./BrunchList";
import NavBar from "./NavBar";
import Search from "./Search"

function BrunchPage() {
  const [searchValue, setSearchValue] = useState("")
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Brunch Menu</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <BrunchList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        searchValue={searchValue}
      />
    </div>
  );
}

export default BrunchPage;
