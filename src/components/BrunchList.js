import React, { useEffect } from "react";
import MenuItemCard from "./MenuItemCard";

function BrunchList({ menuItems, setMenuItems }) {
  useEffect(() => {
    fetch("http://localhost:6001/menuItems")
      .then((r) => r.json())
      .then((menuItems) => {
        setMenuItems(menuItems);
      });
  }, []);

  const brunchCards = menuItems.map((menuItem) =>
    menuItem.menuType === "Brunch" ? (
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

  return <ul className="cards">{brunchCards}</ul>;
}

export default BrunchList;
