import React from "react";

function MenuItemCard({ image, name, price }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button>Read Reviews</button>
      <button>Write a Review</button>
    </li>
  );
}

export default MenuItemCard;
