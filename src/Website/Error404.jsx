import React, { useEffect } from "react";
import "./assets/css/error.scss";

const Error404 = () => {
  useEffect(() => {
    document.title = "Capital Shop | Error 404";
  }, []);
  return (
    <>
      <section className="error-section">
        <div className="container">
          <div className="box">
            <div className="error">
              <div className="notfound">
                <h1>404</h1>
              </div>
              <div className="error-info">
                <h3>we are sorry, page not found</h3>
                <p>
                  the page you are looking for might have been removed had its
                  anme chanaged or is temporarily unavailable.
                </p>
                <a href="/Capital_Shop/">back to home page</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
