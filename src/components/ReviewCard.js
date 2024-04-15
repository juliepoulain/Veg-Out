import React from "react";

function ReviewLi({ review, name, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name} Reviews:</h1>
      <ul>
        <li>{review}</li>
      </ul>
    </div>
  );
}

export default ReviewLi;
