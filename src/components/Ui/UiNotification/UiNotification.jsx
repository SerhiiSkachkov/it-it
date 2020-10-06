import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { hideNotification } from "../../../store/notification/actions";

import {
  faCheck,
  faExclamationCircle,
  faInfoCircle,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "./UiNotification.scss";

export const UiNotification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications.length > 0) {
        dispatch(hideNotification(notifications[0]));
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [notifications, dispatch]);

  if (!notifications.length) return null;

  const swithIcon = (type) => {
    switch (type) {
      case "success":
        return <FontAwesomeIcon icon={faCheck} />;
      case "warning":
        return <FontAwesomeIcon icon={faExclamationCircle} />;
      case "info":
        return <FontAwesomeIcon icon={faInfoCircle} />;
      case "danger":
        return <FontAwesomeIcon icon={faExclamationTriangle} />;
      default:
        return type;
    }
  };

  const handleDeletNotification = (id) => {
    dispatch(hideNotification(id));
  };

  return (
    <div className={`notification-container top-right`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
        >
          <button
            className="notification-close"
            onClick={() => handleDeletNotification(notification.id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="notification-image">
            {swithIcon(notification.type)}
          </div>
          <div>
            <p className="notification-title">{notification.type}</p>
            <p className="notification-message">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
