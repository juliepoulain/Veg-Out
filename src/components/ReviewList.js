import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

function ReviewList({ reviewItems, setReviewItems, itemData, setData }) {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/menuItems/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setReviewItems(data.itemReviews);
        setData(data);
        console.log(data);
      });
  }, [id]);

  const reviewCards = reviewItems.map((review) => (
    <div>
      <ReviewCard key={review.id} review={review.review} name={itemData.menuItem} image={itemData.image} />
    </div>
  ));

  return <ul className="cards">{reviewCards}</ul>;
}

export default ReviewList;
