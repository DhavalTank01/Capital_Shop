import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Offer from "./Components/Offer";
import "./assets/css/contact.scss";

const Contact = () => {
  useEffect(() => {
    document.title = "Capital Shop | Contact Us";
  }, []);
  const init = {
    message: "",
    fullname: "",
    email: "",
    subject: "",
  };
  const [userData, setUserData] = useState(init);
  const InputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const SaveInfo = async () => {
    const { fullname, email, subject, message } = userData;
    if (fullname === "" || email === "" || message === "" || subject === "") {
      alert("Please Fill All Fileds.");
    } else {
      var addedOn = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `;
      const res = await fetch(
        "https://capital-shop-9a1a8-default-rtdb.firebaseio.com/contactUsData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            message,
            subject,
            addedOn,
          }),
        }
      );
      if (res) {
        alert(`Thank you ${fullname},We contact as soon as posible. `);
      } else {
        alert(`Error in data saved. `);
      }
      setUserData({
        message: "",
        fullname: "",
        email: "",
        subject: "",
      });
    }
  };
  return (
    <>
      <section className="contact-section">
        <Offer />
        <section className="contact-breadcrumb">
          <div className="box">
            <h3>contact us</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | contact us
            </h6>
          </div>
        </section>
        {/*  */}
        <div className="container">
          <section className="map-box">
            <div className="map">
              <iframe
                className="my-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.969230166786!2d71.97227233075398!3d22.38555870864613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ed522bd99cff9%3A0x9fd337eadc5514ab!2zMjLCsDIzJzA5LjUiTiA3McKwNTgnMjkuMCJF!5e0!3m2!1sen!2sin!4v1640362352204!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                title="my-address"
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <section className="contact-form">
            <div className="title">
              <h3>Get in Touch</h3>
            </div>
            <div className="main-box">
              <div className="box_1">
                <div className="form-box">
                  <form action="" method="post" autoComplete="off">
                    <div className="controls">
                      <textarea
                        name="message"
                        id="message"
                        cols=""
                        rows=""
                        placeholder="Enter Message"
                        autoComplete="off"
                        onChange={InputChange}
                        value={userData.message}
                      ></textarea>
                    </div>
                    <div className="controls">
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter Full Name"
                        autoComplete="off"
                        onChange={InputChange}
                        value={userData.fullname}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email Address"
                        autoComplete="off"
                        onChange={InputChange}
                        value={userData.email}
                      />
                    </div>
                    <div className="controls">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter Subject"
                        autoComplete="off"
                        onChange={InputChange}
                        value={userData.subject}
                      />
                    </div>
                    <div className="controls-btn">
                      <Link to="" onClick={SaveInfo}>
                        send
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div className="box_2">
                <div className="address">
                  <div className="icons">
                    <i className="fas fa-house-user"></i>
                  </div>
                  <div className="info">
                    <h5>Buttonwood, California.</h5>
                    <h6>Rosemead, CA 91770</h6>
                  </div>
                </div>
                <div className="phone">
                  <div className="icons">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="info">
                    <h5>+91 12345 67890</h5>
                    <h6>Mon to Fri 9am to 6pm</h6>
                  </div>
                </div>
                <div className="email">
                  <div className="icons">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="info">
                    <h5>support@info.com</h5>
                    <h6>Send us your query anytime!</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
