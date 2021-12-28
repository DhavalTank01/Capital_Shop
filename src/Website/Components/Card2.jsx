import React from "react";
import { Link } from "react-router-dom";

const Card2 = ({ image, sPrice, mPrice, title }) => {
  return (
    <div className="card-item">
      <Link className="card-item-link" to="/Capital_Shop/product-details">
        <div className="image">
          <img src={image} alt="item" />
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <div className="price">
            <span className="selling-price">
              <i className="fas fa-rupee-sign"></i> {sPrice}
            </span>
            <span className="main-price">
              <i className="fas fa-rupee-sign"></i> {mPrice}
            </span>
          </div>
        </div>
        <div className="controls">
          <Link to="/Capital_Shop/cart" className="btn1">
            <i className="fas fa-cart-plus"></i>
          </Link>
          <Link to="/Capital_Shop/wishlist" className="btn2">
            <i className="far fa-heart"></i>
          </Link>
          <Link to="" className="btn3">
            <i className="fas fa-search-plus"></i>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Card2;
