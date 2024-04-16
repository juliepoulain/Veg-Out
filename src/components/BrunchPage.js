import React, {useState} from "react";
import BrunchList from "./BrunchList";
import NavBar from "./NavBar";

function BrunchPage() {
    
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Brunch Menu</h2>
      <BrunchList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
    </div>
  );
}

export default BrunchPage;
