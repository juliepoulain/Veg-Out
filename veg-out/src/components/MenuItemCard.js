import React from "react";

function MenuItemCard({ image, name, price, id }) {
  return (
    <li className="card">
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p>Price: ${price}</p>
      <button>Read Reviews</button>
      {/* use special link component from react INSTEAD of a button. Include ID*/}
      <button>Write a Review</button>
    </li>
  );
}

export default MenuItemCard;
