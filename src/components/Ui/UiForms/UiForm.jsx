import React, { useState } from "react";

import { UiAlert } from "../UiAlert/UiAlert";
import { UiButton } from "../UiButton/UiButton";
import { UiFormField } from "../UiFormField/UiFormField";

import { validateForm } from "../../../helpers/validateFrom";

export const UiForm = ({
  initialValue,
  formData: { fields },
  onHandleSubmit,
  submitBtnText,
  errorMessage,
}) => {
  const [fieldsErrors, setFieldsErrors] = useState({});
  const [fieldsData, setFieldsData] = useState(initialValue);

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
    <div className="form">
      <form onSubmit={handleSubmit}>
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
