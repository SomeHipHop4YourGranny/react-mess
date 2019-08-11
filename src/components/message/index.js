import React from "react";
import classNames from "classnames";
import "./message.scss";

import { Time } from "components";

function Message({ text, avatar, time, isMe }) {
  return (
    <div
      className={classNames("message", {
        "message-me": isMe,
      })}
    >
      <div className="avatar-wrapper">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="message-body">
        <div className="message-text">{text}</div>
        <div className="message-meta">
          <Time time={time} />
        </div>
      </div>
    </div>
  );
}

export default Message;
