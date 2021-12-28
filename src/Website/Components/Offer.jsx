import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/offer.css";
const Offer = () => {
  return (
    <>
      <section className="offer-box">
        <div className="box">
          <p className="offer-des">
            Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
          </p>
          <Link className="offer-btn" to="">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Offer;
