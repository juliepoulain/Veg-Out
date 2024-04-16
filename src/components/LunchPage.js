import React, {useState} from "react";
import LunchList from "./LunchList";
import NavBar from "./NavBar";

function LunchPage() {
    
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Lunch Menu</h2>
      <LunchList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
    </div>
  );
}

export default LunchPage;

