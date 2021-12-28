import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/css/login.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
const Login = () => {
  useEffect(() => {
    document.title = "Capital Shop | Login";
  }, []);
  return (
    <>
      <section id="login-section">
        <div className="container">
          <div className="login-box">
            <h2>login</h2>
            <h6>Enter Login details to get access</h6>
            <form action="" method="post" autoComplete="off">
              <div className="inputs">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter email address"
                />
              </div>

              <div className="inputs">
                <label htmlFor="pass">password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="enter password"
                />
              </div>
              <div className="inputs">
                <label className="main">
                  Keep Me Logged In
                  <input type="checkbox" />
                  <span className="checkboxbtn">
                    <i className="fas fa-check"></i>
                  </span>
                </label>
              </div>

              <div className="buttons">
                <div className="signupbtn">
                  Don’t have an account? <Link to="/Capital_Shop/register"> Sign Up</Link>
                  here
                </div>
                <div className="loginbtn">
                  <Link to="">login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
