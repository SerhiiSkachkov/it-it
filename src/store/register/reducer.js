import {
  FETCH_REGISTER_PENDING,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_ERROR,
} from "./types";

const reducer = (
  state = {
    isRegister: false,
    isPending: false,
    errorMessage: null,
    error: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_REGISTER_PENDING:
      return {
        ...state,
        errorMessage: null,
        pending: true,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        pending: false,
        isRegister: true,
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        pending: false,
        errorMessage: payload.errorMessage,
      };
    case FETCH_REGISTER_ERROR:
      return {
        ...state,
        pending: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
export default reducer;
