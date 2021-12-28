import React from "react";

const Card7 = ({ id, name, image, review }) => {
  return (
    <div className="review-item">
      <div className="image">
        <img src={image} alt="user profile" />
      </div>
      <div className="info">
        <div className="review">
          <p>{review}</p>
        </div>
        <div className="date-time-name">
          <div className="name">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
