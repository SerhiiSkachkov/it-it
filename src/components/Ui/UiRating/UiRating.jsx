import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./UiRating.scss";

export const UiRating = ({ rate }) => {
  const raiting = (rate) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      i <= rate
        ? stars.push(
            <FontAwesomeIcon key={i} className="star active" icon={faStar} />
          )
        : stars.push(
            <FontAwesomeIcon key={i} className="star" icon={faStar} />
          );
    }
    return stars;
  };
  return <div className="rating">{raiting(rate)}</div>;
};
