import React from "react";
import classNames from "classnames";

import "./UiFormField.scss";

export const UiFormField = ({
  id,
  type,
  className,
  label,
  error,
  ...attrs
}) => {
  const classes = classNames("form-control", className, { error });

  return (
    <div className="form-field">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      {type !== "textarea" ? (
        <input name={id} id={id} type={type} className={classes} {...attrs} />
      ) : (
        <textarea name={id} id={id} className={classes} {...attrs} />
      )}

      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
