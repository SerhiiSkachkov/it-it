import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./types";

export const showNotification = (notification) => {
  return { type: SHOW_NOTIFICATION, payload: { notification } };
};

export const hideNotification = (id) => {
  return { type: HIDE_NOTIFICATION, payload: { id } };
};
