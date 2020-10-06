import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container } from "../../components/Layouts/Container/Container";
import { Panel } from "../../components/Layouts/Panel/Panel";
import { UiForm } from "../../components/Ui/UiForms/UiForm";

import { onSetRegister } from "../../store/register/actions";

const FORM_DATA = {
  fields: [
    { label: "Username", name: "username", type: "text", id: "username" },
    { label: "Password", name: "password", type: "password", id: "password" },
  ],
};

const INITIAL_FORM_VALUE = {
  username: "",
  password: "",
};

const registerSelector = (state) => state.register.errorMessage;

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const errorMessage = useSelector(registerSelector);
  const [initialFormValue] = useState(INITIAL_FORM_VALUE);

  const handleSubmit = (user, clearForm) => {
    dispatch(onSetRegister(user))
      .then(() => clearForm())
      .then(() => history.push("/login"));
  };

  return (
    <section className="page  page-register page--center">
      <Container size={"md"}>
        <Panel title={"Register"}>
          <UiForm
            initialValue={initialFormValue}
            formData={FORM_DATA}
            onHandleSubmit={handleSubmit}
            submitBtnText={"Register"}
            errorMessage={errorMessage}
          />
        </Panel>
      </Container>
    </section>
  );
};
