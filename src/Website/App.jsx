import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Error404 from "./Error404";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Category from "./Category";
import ProductDetails from "./Product-details";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/Capital_Shop" element={<Home />}></Route>
          <Route exact path="/Capital_Shop/contact" element={<Contact />}></Route>
          <Route exact path="/Capital_Shop/login" element={<Login />}></Route>
          <Route exact path="/Capital_Shop/register" element={<SignUp />}></Route>
          <Route exact path="/Capital_Shop/category" element={<Category />}></Route>
          <Route exact path="/Capital_Shop/cart" element={<Cart />}></Route>
          <Route exact path="/Capital_Shop/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/Capital_Shop/faq" element={<FAQ />}></Route>
          <Route exact path="/Capital_Shop/aboutus" element={<AboutUs />}></Route>
          <Route
            exact
            path="/Capital_Shop/product-details"
            element={<ProductDetails />}
          ></Route>
          <Route path="" element={<Error404 />}></Route>
          <Route path="*" element={<Error404 />}></Route>
          <Route element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
