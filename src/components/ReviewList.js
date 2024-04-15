import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

function ReviewList({ reviewItems, setReviewItems, setItemData }) {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/menuItems/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setReviewItems(data.itemReviews);
        setItemData(data);
      });
  }, [id]);

  const reviewCards = reviewItems.map((review) => (
    <div>
      <ReviewCard
        key={review.reviewId}
        review={review.review}
        reviewer={review.reviewer}
      />
    </div>
  ));

  return <ul className="cards">{reviewCards}</ul>;
}

export default ReviewList;
