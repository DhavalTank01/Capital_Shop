import React from "react";

const Card3 = ({ name, des, desc, photo, title }) => {
  return (
    <div className="card-item">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="founder-info">
        <div className="photo">
          <img src={photo} alt="founder" />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="des">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
