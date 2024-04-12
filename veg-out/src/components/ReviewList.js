import React, { useEffect } from "react";
import ReviewLi from "./ReviewLi";

function ReviewList({ reviewItems, setReviewItems }) {

  useEffect(() => {
    fetch("http://localhost:6001/reviews")
      .then((r) => r.json())
      .then((reviews) => {
        setReviewItems(reviews);
      });
  }, []);

  const reviewCards = reviewItems.map((review) => (
    <ReviewLi 
        key={review.id}
        review={review.review}
        menuItemId={review.menuItemId}
     />
  ));

  return <ul className="cards">{reviewCards}</ul>;
}

export default ReviewList;
