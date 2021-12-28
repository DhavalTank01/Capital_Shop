import React, { useEffect } from "react";
import Offer from "./Components/Offer";
import Faqs from "./Components/Faqs";
import Card9 from "./Components/Card9";
import "./assets/css/Faq.scss";
const FAQ = () => {
  useEffect(() => {
    document.title = "Capital Shop | FAQs";
  }, []);
  return (
    <>
      <section className="faq-section">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>FAQs</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | faqs
            </h6>
          </div>
        </section>
        <section className="faq-box">
          <div className="container">
            <div className="faq-main-box">
              <div className="faq-box1">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    href="#tab-Payment"
                    className="tab-link active"
                    id="nav-tab-Payment"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-Payment"
                    aria-selected="true"
                  >
                    Payment
                  </a>
                  <a
                    href="#tab-Delivery"
                    className="tab-link"
                    id="nav-tab-Delivery"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-Delivery"
                    aria-selected="false"
                  >
                    Delivery
                  </a>
                  <a
                    href="#tab-Refunds"
                    className="tab-link"
                    id="nav-tab-Refunds"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-Refunds"
                    aria-selected="false"
                  >
                    Refunds
                  </a>
                  <a
                    href="#tab-Account"
                    className="tab-link"
                    id="nav-tab-Account"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-Account"
                    aria-selected="false"
                  >
                    Account
                  </a>
                </div>
              </div>
              <div className="faq-box2">
                <div className="tab-content " id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab-Payment"
                    role="tabpanel"
                  >
                    {Faqs.map((cele) => {
                      if (cele.category === "Payment")
                        return <Card9 key={cele.id} cele={cele} />;
                      return null;
                    })}
                  </div>

                  <div
                    className="tab-pane fade  "
                    id="tab-Delivery"
                    role="tabpanel"
                  >
                    {Faqs.map((cele) => {
                      if (cele.category === "Delivery")
                        return <Card9 key={cele.id} cele={cele} />;
                      return null;
                    })}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab-Refunds"
                    role="tabpanel"
                  >
                    {Faqs.map((cele) => {
                      if (cele.category === "Refunds")
                        return <Card9 key={cele.id} cele={cele} />;
                      return null;
                    })}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab-Account"
                    role="tabpanel"
                  >
                    {Faqs.map((cele) => {
                      if (cele.category === "Account")
                        return <Card9 key={cele.id} cele={cele} />;
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FAQ;
