import React, { useEffect } from "react";
import ReviewLi from "./ReviewLi";
import { useParams } from "react-router-dom";

function ReviewList({ reviewItems, setReviewItems }) {
  const params = useParams();
  const reviewId = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/reviews/${reviewId}`)
      .then((r) => r.json())
      .then((reviews) => {
        setReviewItems(reviews);
      });
  }, [reviewId]);

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
