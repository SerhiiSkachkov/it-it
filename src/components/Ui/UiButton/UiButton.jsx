import React from "react";
import classNames from "classnames";

import "./UiButton.scss";

export const UiButton = ({
  children,
  onClick,
  className,
  disabled,
  ...attrs
}) => {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames("btn", className);

  const Tag = attrs.href ? "a" : "button";

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};
