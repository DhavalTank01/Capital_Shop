import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [IsSearch, setSearch] = useState(false);
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 99.9;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  useEffect(() => {
    setSearch(false);
  }, []);
  return (
    <>
      <section className="container-md menu-bar ">
        <div className="top-menu">
          <div className="container-fluid d-flex justify-content-between">
            <ul className="d-flex">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Privacy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Capital_Shop/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Carrier
                </NavLink>
              </li>
            </ul>
            <div className="d-flax">
              <ul className="d-flex">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/Capital_Shop/wishlist"
                  >
                    My Wishlist |
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    Track Your Order |
                  </NavLink>
                </li>
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
        </div>
      </section>
      <section className="sticky">
        <nav className="navbar navbar-expand-lg main-menu " id="sticky-menubar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Capital_Shop/">
              <img src="./images/logo.webp" alt="logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/Capital_Shop/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Capital_Shop/category">
                    man
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Capital_Shop/category">
                    women
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Capital_Shop/category">
                    baby collection
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    pages
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item nav-link" to="/Capital_Shop/login">
                        login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item nav-link"
                        to="/Capital_Shop/register"
                      >
                        registration
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item nav-link"
                        to="/Capital_Shop/category"
                      >
                        product categoty
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item nav-link"
                        to="/Capital_Shop/product-details"
                      >
                        product details
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item nav-link" to="/Capital_Shop/faq">
                        FAQ
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Capital_Shop/aboutus">
                    about US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Capital_Shop/contact">
                    contact US
                  </NavLink>
                </li>
              </ul>
              <div className="d-flax">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="#"
                      onClick={() => {
                        if (IsSearch === true) {
                          setSearch(false);
                        } else {
                          setSearch(true);
                        }
                      }}
                    >
                      <i className="fas fa-search"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/Capital_Shop/login">
                      <i className="far fa-user"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link cart-icon"
                      aria-current="page"
                      to="/Capital_Shop/cart"
                    >
                      <i className="fas fa-cart-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {IsSearch && (
          <div className="search-box">
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <input
                type="text"
                className="search-here"
                placeholder="Search Here"
                required
              />

              <i className="fas fa-search"></i>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  if (IsSearch === true) {
                    setSearch(false);
                  } else {
                    setSearch(true);
                  }
                }}
              ></button>
            </div>
          </div>
        )}
        <div className="scroll-indicater">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
