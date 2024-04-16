import React from "react";
import { Link } from "react-router-dom";

function MenuItemCard({ image, name, price, id }) {
  return (
    <div className="menuCard">
      <ul className="menuList">
        <li className="listItem">
          <h4>{name}</h4>
          <img src={image} alt={name} />
          <p>Price: ${price}</p>
          <Link to={`/reviews/${id}`} className="button-link">
            Read Reviews
          </Link>
          <Link to={`/reviewform/${id}`} className="button-link" name={name}>
            Write a Review
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuItemCard;
