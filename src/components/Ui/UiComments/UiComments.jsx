import React from "react";

import { UiRating } from "../UiRating/UiRating";
import { UiAlert } from "../UiAlert/UiAlert";
import { UiLoader } from "../UiLoader/UiLoader";

import { dateFormatter } from "../../../helpers/dateFormatter";

import "./UiComments.scss";

export const UiComments = ({ loading, comments, emptyMessage = false }) => {
  if (loading) return <UiLoader />;
  return (
    <>
      {comments.length > 0 ? (
        <div className="comment-list">
          {comments.map((comment) => {
            const { id, created_at, rate, text, created_by } = comment;
            return (
              <div className="comment" key={id}>
                <div className="comment-inner">
                  <div className="comment-header">
                    <div className="comment-author">{created_by.username}</div>
                    <div className="comment-date">
                      Publish: {dateFormatter(created_at)}
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="comment-rate">
                      <UiRating rate={rate} />
                    </div>
                    <div className="comment-text">{text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <UiAlert type={"info"} message={emptyMessage || "List is empty"} />
      )}
    </>
  );
};
