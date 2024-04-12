import React, { useState } from "react";
import ReviewList from "./ReviewList";

function ReviewsPage() {
  const [reviewItems, setReviewItems] = useState([]);
  return (
    <div>
      <ReviewList reviewItems={reviewItems} setReviewItems={setReviewItems} />
    </div>
  );
}

export default ReviewsPage;
