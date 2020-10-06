import React from "react";

import "./UiCard.scss";

export const UiCard = ({ card }) => {
  const { title, text, img } = card;
  return (
    <div className="card">
      <div className="card-img">
        <img alt={"product"} src={img} />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};
