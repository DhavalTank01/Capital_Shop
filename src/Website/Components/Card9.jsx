import React from "react";

const Card9 = ({ cele }) => {
  const { id, answer, question } = cele;
  return (
    <div className="faq-item" id={id}>
      <div className="title">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href={`#multiCollapse-${id}`}
          role="button"
          aria-expanded="false"
          aria-controls={`multiCollapse-${id}`}
        >
          {question}
          <span className="icon">
            <i className="fas fa-plus"></i>
          </span>
        </a>
      </div>
      <div className="answer-box">
        <div className="collapse multi-collapse" id={`multiCollapse-${id}`}>
          <div className="card card-body">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Card9;
