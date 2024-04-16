import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

function ReviewList({ reviewItems }) {
  const reviewCards = reviewItems.map((review) => (
    <ReviewCard
      key={review.id}
      review={review.reviewContent}
      reviewer={review.reviewer}
    />
  ));

  return <ul className="cards">{reviewCards}</ul>;
}

export default ReviewList;
