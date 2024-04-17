import React, { useEffect } from "react";
import MenuItemCard from "./MenuItemCard";

function LunchList({ menuItems, setMenuItems, searchValue }) {
  useEffect(() => {
    fetch("http://localhost:6001/menuItems")
      .then((r) => r.json())
      .then((menuItems) => {
        setMenuItems(menuItems);
      });
  }, []);

  const lunchCards = menuItems
    .filter((menuItem) => {
      return menuItem.menuItem
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    })
    .map((menuItem) =>
      menuItem.menuType === "Lunch" ? (
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

  return <ul className="cards">{lunchCards}</ul>;
}

export default LunchList;
