import React from "react";

const Card6 = ({ id, name, comment, date, time, image }) => {
  return (
    <div className="comment-item">
      <div className="image">
        <img src={image} alt="user profile" />
      </div>
      <div className="info">
        <div className="comment">
          <p>{comment}</p>
        </div>
        <div className="date-time-name">
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="date">
            <p>
              {date} at {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
