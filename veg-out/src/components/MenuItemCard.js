import React from "react";

function MenuItemCard({ image, name, price, key }) {
  return (
    <li className="card">
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p>Price: ${price}</p>
      <button>Read Reviews</button>
      {/* use params hook? to insert needed id for review page from url */}
      <button>Write a Review</button>
    </li>
  );
}

export default MenuItemCard;
