import React, { useEffect } from "react";
import MenuItemCard from "./MenuItemCard";

function BreakfastList({ menuItems, setMenuItems }) {
  useEffect(() => {
    fetch("http://localhost:6001/menuItems")
      .then((r) => r.json())
      .then((menuItems) => {
        setMenuItems(menuItems);
      });
  }, []);

  const breakfastCards = menuItems.map((menuItem) =>
    menuItem.menuType === "Breakfast" ? (
      <MenuItemCard
        key={menuItem.id}
        image={menuItem.image}
        name={menuItem.menuItem}
        price={menuItem.cost}
        menuType={menuItem.menuType}
        id={menuItem.id}
      />
    ) : null
  );

  return <ul className="cards">{breakfastCards}</ul>;
}

export default BreakfastList;
