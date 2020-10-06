import { service } from "../../services/services";
import { showNotification } from "../notification/actions";

import {
  FETCH_REGISTER_PENDING,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_ERROR,
} from "./types";

const setRegisterPending = () => ({
  type: FETCH_REGISTER_PENDING,
});

const setRegisterSuccess = () => ({
  type: FETCH_REGISTER_SUCCESS,
});

const setRegisterFailure = (errorMessage) => ({
  type: FETCH_REGISTER_FAILURE,
  payload: { errorMessage },
});

const setRegisterError = (error) => ({
  type: FETCH_REGISTER_ERROR,
  payload: { error },
});

export const onSetRegister = (user) => (dispatch) => {
  dispatch(setRegisterPending());
  return service
    .setRegister(user)
    .then((result) => {
      if (result.success) {
        dispatch(setRegisterSuccess());
        dispatch(
          showNotification({
            type: "success",
            message: "Register successfully",
          })
        );
      } else {
        dispatch(setRegisterFailure(result.message));
      }
      return result;
    })
    .catch((err) => {
      dispatch(setRegisterError(err));
      dispatch(
        showNotification({
          type: "danger",
          message: "Oops something happenedasdasd",
        })
      );
    });
};
