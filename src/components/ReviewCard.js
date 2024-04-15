import React from "react";

function ReviewCard({ review, reviewer }) {
  return (
    <div className="reviewItem">
      <ul>
        <li>
          {review}
          <ul>
            <li className="small">
              <em>-written by {reviewer}</em>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ReviewCard;
