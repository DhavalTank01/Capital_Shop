import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./assets/css/home.css";
import "./assets/css/home.scss";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Products from "./Components/Products";
import Customers from "./Components/Customers";
import News from "./Components/News";
import Categories from "./Components/Categories";
import Card3 from "./Components/Card3";
import Card4 from "./Components/Card4";
import Card5 from "./Components/Card5";
import Offer from "./Components/Offer";

const Home = () => {
  useEffect(() => {
    document.title = "Capital Shop | Home";
  }, []);
  return (
    <>
      <Offer />
      <main>
        <section className="slider-area">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="./images/hero1.webp"
                  className="d-block w-100"
                  alt="hero 1"
                />
                <div className="carousel-caption  text-box-1">
                  <h1>Fashion Sale</h1>
                  <h3>Minimal Menz Style</h3>
                  <p data-animation="fadeInUp" data-delay="0.4s">
                    Consectetur adipisicing elit. Laborum fuga incidunt
                    laboriosam voluptas iure, delectus dignissimos facilis neque
                    nulla earum.
                  </p>
                  <Link className="slider-btn" to="/Capital_Shop/category">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img
                  src="./images/hero2.webp"
                  className="d-block w-100"
                  alt="hero 2"
                />
                <div className="carousel-caption   text-box-2">
                  <h1>Fashion Sale</h1>
                  <h3>Minimal Menz Style</h3>
                  <p data-animation="fadeInUp" data-delay="0.4s">
                    Consectetur adipisicing elit. Laborum fuga incidunt
                    laboriosam voluptas iure, delectus dignissimos facilis neque
                    nulla earum.
                  </p>
                  <Link className="slider-btn" to="/Capital_Shop/category">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/*  */}
        <section className="items-product1">
          <div className="container">
            <div className="products">
              <Card1
                imgurl="./images/xitems1.jpg"
                title="Men's Fashion"
                url="/Capital_Shop/category"
                key="1"
              />
              <Card1
                imgurl="./images/xitems2.jpg"
                title="Women's Fashion"
                url="/Capital_Shop/category"
                key="2"
              />
              <Card1
                imgurl="./images/xitems3.jpg"
                title="Baby Fashion"
                url="/Capital_Shop/category"
                key="3"
              />
            </div>
          </div>
        </section>
        <section className="latest-product-section">
          <div className="container">
            <div className="container">
              <nav>
                <div className="nav-tittle">
                  <h2>Trending This Week</h2>
                </div>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-one-tab"
                    data-bs-toggle="tab"
                    href="#nav-one"
                    role="tab"
                    aria-controls="nav-one"
                    aria-selected="true"
                  >
                    Men
                  </a>
                  <a
                    className="nav-link"
                    id="nav-two-tab"
                    data-bs-toggle="tab"
                    href="#nav-two"
                    role="tab"
                    aria-controls="nav-two"
                    aria-selected="false"
                  >
                    Women
                  </a>
                  <a
                    className="nav-link"
                    id="nav-three-tab"
                    data-bs-toggle="tab"
                    href="#nav-three"
                    role="tab"
                    aria-controls="nav-three"
                    aria-selected="false"
                  >
                    Baby
                  </a>
                  <a
                    className="nav-link"
                    id="nav-four-tab"
                    data-bs-toggle="tab"
                    href="#nav-four"
                    role="tab"
                    aria-controls="nav-four"
                    aria-selected="false"
                  >
                    Fashion
                  </a>
                </div>
              </nav>
            </div>
            <div className="container">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-one"
                  role="tabpanel"
                  aria-labelledby="nav-one-tab"
                >
                  <div className="slick-carousel" id="slick-carousel-1">
                    {Products.map((cele) => {
                      const { title, id, sprice, mprice, image } = cele;
                      return (
                        <div className="slide-content">
                          <Card2
                            key={id + 1}
                            title={title}
                            sPrice={sprice}
                            mPrice={mprice}
                            image={image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-two"
                  role="tabpanel"
                  aria-labelledby="nav-two-tab"
                >
                  <div className="slick-carousel" id="slick-carousel-2">
                    {Products.map((cele) => {
                      const { title, id, sprice, mprice, image } = cele;
                      return (
                        <div className="slide-content">
                          <Card2
                            key={id + 2}
                            title={title}
                            sPrice={sprice}
                            mPrice={mprice}
                            image={image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-three"
                  role="tabpanel"
                  aria-labelledby="nav-three-tab"
                >
                  <div className="slick-carousel" id="slick-carousel-3">
                    {Products.map((cele) => {
                      const { title, id, sprice, mprice, image } = cele;
                      return (
                        <div className="slide-content">
                          <Card2
                            key={id + 3}
                            title={title}
                            sPrice={sprice}
                            mPrice={mprice}
                            image={image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-four"
                  role="tabpanel"
                  aria-labelledby="nav-four-tab"
                >
                  <div className="slick-carousel" id="slick-carousel-4">
                    {Products.map((cele) => {
                      const { title, id, sprice, mprice, image } = cele;
                      return (
                        <div className="slide-content">
                          <Card2
                            key={id}
                            title={title}
                            sPrice={sprice}
                            mPrice={mprice}
                            image={image}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="text-carousel-section">
          <div className="container">
            <div id="slick-carousel-5" className="slick-carousel">
              {Customers.map((cele) => {
                const { id, name, des, desc, photo, title } = cele;
                return (
                  <div className="slide-content">
                    <Card3
                      key={id}
                      name={name}
                      des={des}
                      desc={desc}
                      photo={photo}
                      title={title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="likes-products">
          <div className="container">
            <div className="title">
              <h2>you may like</h2>
            </div>
            <div id="slick-carousel-6" className="slick-carousel">
              {Products.map((cele) => {
                const { title, id, sprice, mprice, image } = cele;
                return (
                  <div className="slide-content">
                    <Card2
                      key={id}
                      title={title}
                      sPrice={sprice}
                      mPrice={mprice}
                      image={image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="latest-news">
          <div className="container">
            <h2>Latest News</h2>
            <div className="news">
              {News.map((cele) => {
                const { id, title, category, desc, image } = cele;
                return (
                  <Card4
                    key={id}
                    id={id}
                    title={title}
                    category={category}
                    desc={desc}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section id="categories-area">
          <div className="container">
            <div className="categories">
              {Categories.map((cele) => {
                const { id, title, desc, image } = cele;
                return (
                  <Card5
                    key={id}
                    id={id}
                    title={title}
                    desc={desc}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
