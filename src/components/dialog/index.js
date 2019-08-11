import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./dialog.scss";
import { Time } from "components";

function Dialog({
  currenDialogId,
  setCurrentDialogId,
  login,
  text,
  time,
  avatar,
  id,
  fetchMessageAll,
  userID,
}) {
  const handleClick = (userID, id) => {
    setCurrentDialogId(id);
    fetchMessageAll(userID, id);
  };

  return (
    <div className="dialog">
      <Link
        className={classNames("dialog-item", {
          active: id === currenDialogId,
        })}
        to="#"
        onClick={() => {
          handleClick(userID, id);
        }}
        id={id}
      >
        <img className="dialog-avatar" src={avatar} alt="avatar" />
        <div className="dialog-main">
          <p className="login">{login}</p>
          <p className="text">{text}</p>
          <div className="dialog-meta">
            <Time time={time} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Dialog;
