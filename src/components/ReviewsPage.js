import React, { useState } from "react";
import ReviewList from "./ReviewList";
import NavBar from "./NavBar";

function ReviewsPage() {
  const [reviewItems, setReviewItems] = useState([]);
  const [itemData, setItemData] = useState({});

  return (
    <div>
      <NavBar />
      <div className="reviews">
        <img src={itemData.image} alt={itemData.menuItem} />
        <h3>{itemData.menuItem} Reviews:</h3>
        <ReviewList
          reviewItems={reviewItems}
          setReviewItems={setReviewItems}
          itemData={itemData}
          setItemData={setItemData}
        />
      </div>
    </div>
  );
}

export default ReviewsPage;
