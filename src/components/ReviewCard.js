import React from "react";

function ReviewCard({ review, reviewer }) {
  return (
    <div>
      <ul>
        <li>
          {review}
          <ul>
            <li>
              <em>-written by {reviewer}</em>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ReviewCard;
