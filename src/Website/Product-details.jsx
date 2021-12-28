import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/css/product-details.scss";
import Card6 from "./Components/Card6";
import Card7 from "./Components/Card7";
import Offer from "./Components/Offer";
import Comments from "./Components/Comments";
import Reviews from "./Components/Review";
const ProductDetails = () => {
  useEffect(() => {
    document.title = "Capital Shop | Product Details";
  }, []);
  return (
    <>
      <section className="product-details-section">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>Product Details</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | Product Details
            </h6>
          </div>
        </section>
        <div className="container">
          <div className="product-box">
            <div className="prod-info">
              <div className="p-img">
                <img src="./images/img/gallery/xlatest2.jpg" alt="product" />
              </div>
              <div className="p-details">
                <p className="p-title">The Rage of Dragons</p>
                <p className="seller-name">By Evan Winter</p>
                <p className="p-price">
                  <i class="fas fa-rupee-sign"></i> 50.00
                </p>
                <p className="rating-review">
                  <span className="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                  <span className="review">(120 Review)</span>
                </p>
                <div className="btns">
                  <Link to="/Capital_Shop/cart" className="cart-btn">
                    add to cart
                  </Link>

                  <Link to="/Capital_Shop/wishlist" className="wishlist-btn">
                    Add to wishlist
                  </Link>
                  <Link to="" className="share-btn">
                    <i class="fas fa-share-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                href="#tab-1"
                className="tab-link active"
                id="nav-tab-1"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
              >
                Description
              </a>
              <a
                href="#tab-2"
                className="tab-link"
                id="nav-tab-2"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
              >
                Author
              </a>
              <a
                href="#tab-3"
                className="tab-link"
                id="nav-tab-3"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
              >
                ({Comments.length}) Comments
              </a>
              <a
                href="#tab-4"
                className="tab-link"
                id="nav-tab-4"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-4"
                aria-selected="false"
              >
                ({Reviews.length}) Review
              </a>
            </div>
            <div className="container">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                >
                  <p>
                    Beryl Cook is one of Britain’s most talented and amusing
                    artists .Beryl’s pictures feature women of all shapes and
                    sizes enjoying themselves .Born between the two world wars,
                    Beryl Cook eventually left Kendrick School in Reading at the
                    age of 15, where she went to secretarial school and then
                    into an insurance office. After moving to London and then
                    Hampton, she eventually married her next door neighbour from
                    Reading, John Cook. He was an officer in the Merchant Navy
                    and after he left the sea in 1956, they bought a pub for a
                    year before John took a job in Southern Rhodesia with a
                    motor company. Beryl bought their young son a box of
                    watercolours, and when showing him how to use it, she
                    decided that she herself quite enjoyed painting. John
                    subsequently bought her a child’s painting set for her
                    birthday and it was with this that she produced her first
                    significant work, a half-length portrait of a dark-skinned
                    lady with a vacant expression and large drooping breasts. It
                    was aptly named ‘Hangover’ by Beryl’s husband and
                  </p>
                  <p>
                    It is often frustrating to attempt to plan meals that are
                    designed for one. Despite this fact, we are seeing more and
                    more recipe books and Internet websites that are dedicated
                    to the act of cooking for one. Divorce and the death of
                    spouses or grown children leaving for college are all
                    reasons that someone accustomed to cooking for more than one
                    would suddenly need to learn how to adjust all the cooking
                    practices utilized before into a streamlined plan of cooking
                    that is more efficient for one person creating less.
                  </p>
                </div>

                <div className="tab-pane fade  " id="tab-2" role="tabpanel">
                  <p>
                    Beryl Cook is one of Britain’s most talented and amusing
                    artists .Beryl’s pictures feature women of all shapes and
                    sizes enjoying themselves .Born between the two world wars,
                    Beryl Cook eventually left Kendrick School in Reading at the
                    age of 15, where she went to secretarial school and then
                    into an insurance office. After moving to London and then
                    Hampton, she eventually married her next door neighbour from
                    Reading, John Cook. He was an officer in the Merchant Navy
                    and after he left the sea in 1956, they bought a pub for a
                    year before John took a job in Southern Rhodesia with a
                    motor company. Beryl bought their young son a box of
                    watercolours, and when showing him how to use it, she
                    decided that she herself quite enjoyed painting. John
                    subsequently bought her a child’s painting set for her
                    birthday and it was with this that she produced her first
                    significant work, a half-length portrait of a dark-skinned
                    lady with a vacant expression and large drooping breasts. It
                    was aptly named ‘Hangover’ by Beryl’s husband and
                  </p>
                  <p>
                    It is often frustrating to attempt to plan meals that are
                    designed for one. Despite this fact, we are seeing more and
                    more recipe books and Internet websites that are dedicated
                    to the act of cooking for one. Divorce and the death of
                    spouses or grown children leaving for college are all
                    reasons that someone accustomed to cooking for more than one
                    would suddenly need to learn how to adjust all the cooking
                    practices utilized before into a streamlined plan of cooking
                    that is more efficient for one person creating less.
                  </p>
                </div>
                <div className="tab-pane fade  " id="tab-3" role="tabpanel">
                  <div className="comments">
                    {Comments.map((cele) => {
                      return (
                        <Card6
                          key={cele.id}
                          id={cele.id}
                          name={cele.name}
                          comment={cele.comment}
                          date={cele.date}
                          time={cele.time}
                          image={cele.image}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="tab-pane fade  " id="tab-4" role="tabpanel">
                  <div className="reviews">
                    {Reviews.map((cele) => {
                      return (
                        <Card7
                          key={cele.id}
                          id={cele.id}
                          name={cele.name}
                          review={cele.review}
                          image={cele.image}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
