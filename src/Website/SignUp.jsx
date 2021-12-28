import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/css/signup.scss";

const SignUp = () => {
  useEffect(() => {
    document.title = "Capital Shop | Sign Up";
  }, []);
  const [userData, setUserDate] = useState({
    fullname: "",
    phone: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const InputEvent = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserDate({ ...userData, [name]: value });
  };
  const Register = async (e) => {
    e.preventDefault();
    const { fullname, phone, email, pass, cpass } = userData;

    if (
      fullname === "" ||
      email === "" ||
      phone === "" ||
      pass === "" ||
      cpass === ""
    ) {
      alert("Please fill all fields.");
    } else {
      if (pass !== cpass) {
        alert("Password and confirm password not match.");
      } else {
        var addedOn = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `;
        const res = await fetch(
          "https://capital-shop-9a1a8-default-rtdb.firebaseio.com/signUpData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullname,
              phone,
              email,
              pass,
              addedOn,
            }),
          }
        );
        if (res) {
          alert(`Thank you ${fullname},Your account create successfully. `);
          setUserDate({
            fullname: "",
            phone: "",
            email: "",
            pass: "",
            cpass: "",
          });
        } else {
          alert(`Sorry ${fullname},Error in account create. `);
        }
      }
    }
  };
  return (
    <>
      <section id="signup-section">
        <div className="container">
          <div className="signup-box">
            <h2>Sign Up</h2>
            <h6>Create account to get full access</h6>
            <form action="" method="post" autoComplete="off">
              <div className="inputs">
                <label htmlFor="fullname">full name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Full Name"
                  value={userData.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="inputs">
                <label htmlFor="phone">phone number</label>
                <input
                  type="number"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number"
                  value={userData.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="inputs">
                <label htmlFor="email">email address</label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  value={userData.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="inputs">
                <label htmlFor="pass">password</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="pass"
                  id="pass"
                  placeholder="Enter Password"
                  value={userData.pass}
                  onChange={InputEvent}
                />
              </div>
              <div className="inputs">
                <label htmlFor="cpass">confirm password</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="cpass"
                  id="cpass"
                  placeholder="Enter Confirm Password"
                  value={userData.cpass}
                  onChange={InputEvent}
                />
              </div>
              <div className="buttons">
                <div className="loginbtn">
                  Already have an account? <Link to="/Capital_Shop/login">Login</Link> here
                </div>
                <div className="signupbtn">
                  <Link to="" onClick={Register}>
                    sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
