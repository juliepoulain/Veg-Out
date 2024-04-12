import React, {useState} from "react";
import BreakfastList from "./BreakfastList";

function BreakfastPage() {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div>
      <h2>Breakfast Menu</h2>
      <BreakfastList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
    </div>
  );
}

export default BreakfastPage;
