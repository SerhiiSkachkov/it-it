import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container } from "../../components/Layouts/Container/Container";
import { Panel } from "../../components/Layouts/Panel/Panel";
import { UiForm } from "../../components/Ui/UiForms/UiForm";

import { onSetLogin } from "../../store/login/actions";

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

const loginSelector = (state) => state.login.errorMessage;

export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const errorMessage = useSelector(loginSelector);
  const [initialFormValue] = useState(INITIAL_FORM_VALUE);

  const handleSubmit = (user, clearForm) => {
    dispatch(onSetLogin(user))
      .then(() => clearForm())
      .then(() => history.push("/products"));
  };

  return (
    <section className="page  page-login page--center">
      <Container size={"md"}>
        <Panel title={"Login"}>
          <UiForm
            initialValue={initialFormValue}
            onHandleSubmit={handleSubmit}
            formData={FORM_DATA}
            submitBtnText={"Login"}
            errorMessage={errorMessage}
          />
        </Panel>
      </Container>
    </section>
  );
};
