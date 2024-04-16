import { useState } from "react";
import { useParams } from "react-router-dom";

function ReviewForm() {
  const params = useParams();
  const id = params.id;
  const [formData, setFormData] = useState({
    review: "",
    reviewer: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/menuItems/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        setFormData({
          id: "",
          review: "",
          reviewer: "",
        });
      });
  }

  return (
    <section>
      <h1> Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Review
          <input
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
        </label>
        <label>
          Reviewer
          <input
            name="reviewer"
            value={formData.reviewer}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> Submit Review</button>
      </form>
    </section>
  );
}

export default ReviewForm;
