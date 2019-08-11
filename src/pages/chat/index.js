import React from "react";
import "./chat.scss";
import {
  ChatInput,
  ChatHeader,
  DialogHeader,
  Messages,
  Dialogs,
  UserInfo,
} from "components";

function Chat(props) {
  const {
    userData,
    dialogData,
    messageData,
    // isUserLoading,
    isDialogLoading,
    isMessageLoading,
    currentDialogId,
    setCurrentDialogId,
    // fetchUserData,
    fetchDialogAll,
    fetchMessageAll,
    fetchDialogOne,
    pushMessage,
    sendMessage,
    searchUser,
    isSearching,
    unSearch,
    searchedUsers,
    partnerUser,
    setPartnerUser,
    createDialog,
  } = props;
  return (
    <div className="chat-wrp">
      <div className="chat">
        <div className="left-side">
          <DialogHeader
            searchUser={searchUser}
            unSearch={unSearch}
            isSearching={isSearching}
          />

          <Dialogs
            userData={userData}
            dialogData={dialogData}
            currenDialogId={currentDialogId}
            setCurrentDialogId={setCurrentDialogId}
            isDialogLoading={isDialogLoading}
            fetchDialogAll={fetchDialogAll}
            fetchMessageAll={fetchMessageAll}
            isSearching={isSearching}
            searchedUsers={searchedUsers}
            setPartnerUser={setPartnerUser}
          />
        </div>
        <div className="right-side">
          <ChatHeader />
          {!isSearching ? (
            <Messages
              userData={userData}
              messageData={messageData}
              isMessageLoading={isMessageLoading}
              currentDialogId={currentDialogId}
              fetchMessageAll={fetchMessageAll}
              fetchDialogAll={fetchDialogAll}
              fetchDialogOne={fetchDialogOne}
              pushMessage={pushMessage}
            />
          ) : (
            <UserInfo
              partnerUser={partnerUser}
              createDialog={createDialog}
              currentUserId={userData._id}
              unSearch={unSearch}
              fetchDialogAll={fetchDialogAll}
            />
          )}

          <ChatInput
            currentUserId={userData._id}
            currenDialogId={currentDialogId}
            sendMessage={sendMessage}
            fetchMessageAll={fetchMessageAll}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
