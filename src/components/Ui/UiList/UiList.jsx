import React, { useState } from "react";

import "./UiList.scss";

export const UiList = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(-1);

  const handleClick = (id) => {
    setActiveItem(id);
    onClick(id);
  };

  return (
    <ul className="list">
      {items.map((item) => {
        return (
          <li
            className={`list-item ${activeItem === item.id ? "active" : ""}`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div>{item.title}</div>
          </li>
        );
      })}
    </ul>
  );
};
