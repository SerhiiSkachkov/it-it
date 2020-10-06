import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./types";

const initialState = {
  error: null,
  notifications: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  
  switch (type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          { id: Math.floor(Math.random() * 262 + 1), ...payload.notification },
        ],
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
export default reducer;
