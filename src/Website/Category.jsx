import React, { useState, useEffect } from "react";
import "./assets/css/category.scss";
import Offer from "./Components/Offer";
import Products from "./Components/Products";
import Card2 from "./Components/Card2";
const Category = () => {
  useEffect(() => {
    document.title = "Capital Shop | Category";
  }, []);
  const [minP, setMinP] = useState(0);
  const [maxP, setMaxP] = useState(500);
  return (
    <>
      <section id="category-section">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>category</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | category
            </h6>
          </div>
        </section>
        {/*  */}
        <section id="show-products">
          <div className="container">
            <div className="main-box">
              <div className="side-menu">
                <div className="select-menu">
                  <div className="selector">
                    <select
                      className="form-select"
                      aria-label="select-category"
                    >
                      <option selected value="">
                        category
                      </option>
                      <option value="1">category 1</option>
                      <option value="2">category 2</option>
                      <option value="3">category 3</option>
                    </select>
                  </div>

                  <div className="selector">
                    <select className="form-select" aria-label="select-type">
                      <option selected>type</option>
                      <option value="1">type 1</option>
                      <option value="2">type 2</option>
                      <option value="3">type 3</option>
                    </select>
                  </div>
                  <div className="selector">
                    <select className="form-select" aria-label="select-size">
                      <option selected>size</option>
                      <option value="1">xxl</option>
                      <option value="2">xl</option>
                      <option value="3">lg</option>
                      <option value="4">M</option>
                      <option value="5">sm</option>
                    </select>
                  </div>
                  <div className="selector">
                    <select className="form-select" aria-label="select-color">
                      <option selected>color</option>
                      <option value="1">red</option>
                      <option value="2">green</option>
                      <option value="3">blue</option>
                      <option value="4">skyBlue</option>
                    </select>
                  </div>
                </div>
                <div className="filter-price">
                  <div className="box">
                    <p>Filter by Price</p>
                    <div className="price-field">
                      <div className="min-p">
                        <div className="p-box">
                          <input
                            type="text"
                            readOnly
                            value={minP}
                            onChange={(e) => {
                              setMinP(e.target.value);
                            }}
                          />
                        </div>
                        <div className="btns">
                          <button
                            onClick={() => {
                              if (minP >= 1000) {
                                setMinP(1000);
                              } else {
                                setMinP(minP + 100);
                              }
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                          <button
                            onClick={() => {
                              if (minP <= 0) {
                                setMinP(minP);
                              } else {
                                setMinP(minP - 100);
                              }
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="max-p">
                        <div className="p-box">
                          <input
                            type="text"
                            readOnly
                            value={maxP}
                            onChange={(e) => {
                              setMaxP(e.target.value);
                            }}
                          />
                        </div>
                        <div className="btns">
                          <button
                            onClick={() => {
                              if (maxP >= 2000) {
                                setMaxP(2000);
                              } else {
                                setMaxP(maxP + 100);
                              }
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                          <button
                            onClick={() => {
                              if (maxP <= 500) {
                                setMaxP(500);
                              } else {
                                setMaxP(maxP - 100);
                              }
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="price-value">
                      <span>{minP}</span> to <span>{maxP}</span>
                    </div>
                  </div>
                </div>
                <div className="filter-genres">
                  <div className="box">
                    <span className="title">Filter by Genres</span>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck1"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck1">
                        History
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck2"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck2">
                        Horror - Thriller
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck3"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck3">
                        Love Stories
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck4"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck4">
                        Science Fiction
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck5"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck5">
                        Biography
                      </label>
                    </div>
                  </div>
                </div>
                <div className="filter-genres">
                  <div className="box">
                    <span className="title">Filter by Brand</span>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck-1"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck-1">
                        Green Publications
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck-2"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck-2">
                        Anondo Publications
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck-3"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck-3">
                        Rinku Publications
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck-4"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck-4">
                        Sheba Publications
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck-5"
                      />
                      <div className="custom-checkbox">
                        <i className="fas fa-check"></i>
                      </div>
                      <label className="form-check-label" htmlFor="flexCheck-5">
                        Red Publications
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products">
                {Products.map((cele) => {
                  const { title, id, sprice, mprice, image } = cele;
                  return (
                    <Card2
                      key={"p" + id}
                      title={title}
                      sPrice={sprice}
                      mPrice={mprice}
                      image={image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Category;
