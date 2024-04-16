import { useState } from "react";

function ReviewForm() {
  const [formData, setFormData] = useState({
    review: "",
    reviewer: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
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
            value={formData.reviwer}
            onChange={handleChange}
          />
        </label>
        <button tyoe="submit"> Submit Review</button>
      </form>
    </section>
  );
}

export default ReviewForm;
