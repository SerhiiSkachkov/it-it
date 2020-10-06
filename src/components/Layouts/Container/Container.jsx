import React from "react";

import "./Container.scss";

export const Container = ({ size = false, children }) => {
  return <div className={`container ${size && size} `}>{children}</div>;
};
