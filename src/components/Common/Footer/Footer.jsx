import React, { useMemo } from "react";

import "./Footer.scss";

export const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="footer">{currentYear} &copy; Light IT React-Redux Test</div>
  );
};
