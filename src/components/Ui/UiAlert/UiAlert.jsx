import React from "react";

import "./UiAlert.scss";

export const UiAlert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
    </div>
  );
};
