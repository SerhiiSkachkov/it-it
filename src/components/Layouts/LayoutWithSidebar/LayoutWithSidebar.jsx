import React from "react";

import "./LayoutWithSidebar.scss";

export const LayoutWithSidebar = ({ sidebar, content }) => {
  return (
    <div className="layout">
      <aside className="sidebar">{sidebar}</aside>
      <div className="content">{content}</div>
    </div>
  );
};
