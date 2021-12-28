import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="box1">
            <div className="b1">
              <h3>Subscribe Newsletter</h3>
              <p>Subscribe newsletter to get 5% on all products</p>
            </div>
            <div className="b2">
              <input
                type="email"
                className="subscribe-input myfont"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="b3">
              <ul className="d-flex list-unstyled">
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="box2">
            <div className="b-1">
              <a href="/Capital_Shop/">
                <img src="./images/logo2.webp" alt="logo" />
              </a>
            </div>
            <div className="b-2">
              <ul className="list-unstyled">
                <li className="list-item">
                  <h4>Shop Men</h4>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Clothing Fashion
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Winter
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Summer
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Formal
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Casual
                  </Link>
                </li>
              </ul>
            </div>
            <div className="b-2">
              <ul className="list-unstyled">
                <li className="list-item">
                  <h4>Shop Women</h4>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Clothing Fashion
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Winter
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Summer
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Formal
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Casual
                  </Link>
                </li>
              </ul>
            </div>
            <div className="b-2">
              <ul className="list-unstyled">
                <li className="list-item">
                  <h4>Baby Collection</h4>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Clothing Fashion
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Winter
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Summer
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Formal
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Casual
                  </Link>
                </li>
              </ul>
            </div>
            <div className="b-2">
              <ul className="list-unstyled">
                <li className="list-item">
                  <h4>Quick Links</h4>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Track Your Order
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Support
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/Capital_Shop/faq" className="list-link">
                    FAQ
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="" className="list-link">
                    Carrier
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/Capital_Shop/aboutus" className="list-link">
                    About US
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/Capital_Shop/contact" className="list-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright ©{new Date().getFullYear().toString()} All rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
