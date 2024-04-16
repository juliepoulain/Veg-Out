import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function ReviewsPage() {
  const [itemData, setItemData] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/menuItems/${id}?_embed=reviews`)
      .then((r) => r.json())
      .then((data) => {
        setItemData(data);
      });
  }, [id]);

  return (
    <div>
      <NavBar />
      <div className="reviews">
        <img src={itemData.image} alt={itemData.menuItem} />
        <h3>{itemData.menuItem} Reviews:</h3>
        <ReviewList
          reviewItems={itemData.reviews || []}
          itemData={itemData}
          setItemData={setItemData}
        />
      </div>
    </div>
  );
}

export default ReviewsPage;
