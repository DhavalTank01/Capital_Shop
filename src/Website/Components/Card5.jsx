import React from "react";

const Card5 = ({ id, title, desc, image }) => {
  return (
    <div className="caregory-item">
      <div className="catd-image">
        <img src={image} alt="category" />
      </div>
      <div className="card-info">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

export default Card5;
