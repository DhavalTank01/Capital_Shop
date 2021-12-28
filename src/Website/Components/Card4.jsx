import React from "react";
import { Link } from "react-router-dom";

const Card4 = ({ id, title, category, desc, image }) => {
  return (
    <div className="card-item">
      <Link to="">
        <div className="card-image">
          <img src={image} alt="news" />
        </div>
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <Link className="btn1" to="">
          read more
        </Link>
      </Link>
    </div>
  );
};

export default Card4;
