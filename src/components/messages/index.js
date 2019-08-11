import React, { useEffect } from "react";
import { socket } from "../../utils";
import "./messages.scss";

import { Message, Loader } from "components";

function Messages(props) {
  const {
    userData,
    messageData,
    isMessageLoading,
    fetchDialogOne,
    pushMessage,
  } = props;

  useEffect(() => {
    socket.on("messageSend", (dialogID, messageID) => {
      fetchDialogOne(userData._id, dialogID);
      pushMessage(userData._id, dialogID, messageID);
    });
    return () => socket.removeListener("messageSend");
  });

  return (
    <div className="messages">
      {isMessageLoading ? (
        <Loader />
      ) : (
        messageData.map(val => {
          return (
            <Message
              isMe={userData._id === val._sender._id}
              key={val._id}
              avatar={val._sender.avatar}
              text={val.text}
              time={val.updatedAt}
            />
          );
        })
      )}
    </div>
  );
}

export default Messages;
