import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_FAILURE,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
} from "./types";

const reducer = (
  state = {
    pending: false,
    isLogin: false,
    errorMessage: null,
    error: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isLogin: true,
        errorMessage: null,
      };
    case SET_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        errorMessage: payload.errorMessage,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error: payload.error,
      };
    case SET_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default reducer;
