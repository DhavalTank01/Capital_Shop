import React from "react";
import { Link } from "react-router-dom";
const Card1 = ({ imgurl, url, title }) => {
  return (
    <>
      <div className="product-item">
        <div className="card-img">
          <img src={imgurl} alt="card" />
        </div>
        <div className="card-info">
          <h4 className="card-title">{title}</h4>
          <Link className="card-btn" to={url}>
            shop now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card1;
