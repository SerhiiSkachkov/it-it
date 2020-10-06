import React from "react";

import "./Panel.scss";

export const Panel = ({ title = false, children }) => {
  return (
    <div className="panel">
      {title && <h2 className="panel-title"> {title}</h2>}
      <div className="panel-body">{children}</div>
    </div>
  );
};
