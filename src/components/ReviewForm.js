import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ReviewForm({ name }) {
  const params = useParams();
  const id = params.id;

  const [newReview, setNewReview] = useState({});
  const [reviewData, setReviewData] = useState({});

  function handleChange(e) {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:6001/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        reviewContent: newReview.review,
        reviewer: newReview.reviewer,
        menuItemId: id,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        console.log("posted new review to db.json");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:6001/menuItems/${id}?_embed=reviews`)
      .then((r) => r.json())
      .then((data) => {
        setReviewData(data);
      });
  }, []);

  return (
    <section>
      <NavBar />
      <h1>Review: {reviewData.menuItem}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input
            name="review"
            value={reviewData.review}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Name:
          <input
            name="reviewer"
            value={reviewData.reviewer}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> Submit Review</button>
      </form>
    </section>
  );
}

export default ReviewForm;
