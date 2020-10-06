import { service } from "../../services/services";
import { showNotification } from "../notification/actions";

import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_FAILURE,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
} from "./types";

const setLoginPending = () => ({
  type: SET_LOGIN_PENDING,
});

export const setLoginSuccess = () => ({
  type: SET_LOGIN_SUCCESS,
});

const setLoginFailure = (errorMessage) => ({
  type: SET_LOGIN_FAILURE,
  payload: { errorMessage },
});

const setLoginError = (error) => ({
  type: SET_LOGIN_ERROR,
  payload: { error },
});

const setLogout = () => ({
  type: SET_LOGOUT,
});

export const onSetLogin = (user) => (dispatch) => {
  dispatch(setLoginPending());
  return service
    .setLogin(user)
    .then((result) => {
      if (result.success) {
        dispatch(setLoginSuccess());
        localStorage.setItem("user", result.token);
        dispatch(
          showNotification({
            type: "success",
            message: "Logined successfull",
          })
        );
      } else {
        dispatch(setLoginFailure(result.message));
      }
      return result;
    })
    .catch((err) => {
      dispatch(setLoginError(err));
      dispatch(
        showNotification({
          type: "danger",
          message: "Oops something happened",
        })
      );
    });
};

export const onSetLogout = (dispatch) => {
  return (dispatch) => {
    service.setLogout();
    dispatch(setLogout());
  };
};
