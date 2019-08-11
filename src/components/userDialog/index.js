import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./userDialog.scss";

function userDialog({
  currenDialogId,
  setPartnerUser,
  setCurrentDialogId,
  login,
  avatar,
  id,
}) {
  const handleClick = id => {
    setCurrentDialogId(id);
    setPartnerUser({ id: id, login: login, avatar: avatar });
  };

  return (
    <div className="user-dialog">
      <Link
        className={classNames("dialog-item", {
          active: id === currenDialogId,
        })}
        to="#"
        onClick={() => {
          handleClick(id);
        }}
        id={id}
      >
        <img className="dialog-avatar" src={avatar} alt="avatar" />
        <div className="dialog-main">
          <p className="login">{login}</p>
        </div>
      </Link>
    </div>
  );
}

export default userDialog;
