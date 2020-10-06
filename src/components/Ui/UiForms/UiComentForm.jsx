import React, { useState } from "react";

import { UiAlert } from "../UiAlert/UiAlert";
import { UiButton } from "../UiButton/UiButton";
import { UiFormField } from "../UiFormField/UiFormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { validateForm } from "../../../helpers/validateFrom";

import "./UiCommentForm.scss";

export const UiCommentForm = ({
  initialValue,
  formData: { fields },
  onHandleSubmit,
  submitBtnText,
  errorMessage,
  maxRate,
}) => {
  const [fieldsErrors, setFieldsErrors] = useState({});
  const [fieldsData, setFieldsData] = useState(initialValue);
  const [ratingHover, setRatingHover] = useState(null);

  const hanleChangeField = (e) => {
    setFieldsData({
      ...fieldsData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => setFieldsData(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error, isValid } = validateForm(fieldsData);

    if (!isValid) {
      return setFieldsErrors(error);
    }
    setFieldsErrors({});
    onHandleSubmit(fieldsData, clearForm);
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        {maxRate && (
          <div className="form-field form-field--rating">
            {[...Array(maxRate)].map((field, index) => {
              const ratingValue = index + 1;
              return (
                <UiFormField
                  className={"form-control--rating"}
                  key={index}
                  id={index}
                  value={ratingValue}
                  name={"rate"}
                  type={"radio"}
                  label={
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`star ${
                        ratingValue <= (fieldsData["rate"] || ratingHover)
                          ? "active"
                          : ""
                      } `}
                      onMouseEnter={() => setRatingHover(ratingValue)}
                      onMouseLeave={() => setRatingHover(null)}
                    />
                  }
                  onClick={hanleChangeField}
                />
              );
            })}
          </div>
        )}

        {fields.map((field) => {
          const { id, name, type, label } = field;
          return (
            <UiFormField
              key={id}
              id={id}
              name={name}
              type={type}
              value={fieldsData[name]}
              label={label}
              onChange={hanleChangeField}
              error={fieldsErrors[name]}
            />
          );
        })}
        {errorMessage && <UiAlert type={"danger"} message={errorMessage} />}
        <UiButton className={"btn-primary"} onClick={handleSubmit}>
          {submitBtnText}
        </UiButton>
      </form>
    </div>
  );
};
