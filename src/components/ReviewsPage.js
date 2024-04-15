import React, { useState } from "react";
import ReviewList from "./ReviewList";

function ReviewsPage() {
  const [reviewItems, setReviewItems] = useState([]);
  const [itemData, setData] = useState({})

  return (
    <div>
      <ReviewList 
        reviewItems={reviewItems} 
        setReviewItems={setReviewItems}
        itemData={itemData}
        setData={setData}
      />
    </div>
  );
}

export default ReviewsPage;
