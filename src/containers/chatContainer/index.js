import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions, messageActions, dialogActions } from "store/actions";
import { Chat } from "pages";
import { Loader } from "components";

function ChatContainer(props) {
  const {
    userData,
    dialogData,
    messageData,
    searchedUsers,

    isUserLoading,
    isDialogLoading,
    isMessageLoading,
    isSearching,
    unSearch,
    currentDialogId,
    setCurrentDialogId,

    fetchUserData,
    fetchDialogAll,
    fetchMessageAll,
    fetchDialogOne,
    pushMessage,
    searchUser,
    partnerUser,
    setPartnerUser,
    sendMessage,
    createDialog,
  } = props;

  useEffect(() => {
    fetchUserData();
    console.log("wtf");
  }, [fetchUserData]);

  return (
    <div className="chat-wrp">
      {isUserLoading ? (
        <Loader />
      ) : (
        <Chat
          userData={userData}
          dialogData={dialogData}
          messageData={messageData}
          isUserLoading={isUserLoading}
          isDialogLoading={isDialogLoading}
          isMessageLoading={isMessageLoading}
          currentDialogId={currentDialogId}
          setCurrentDialogId={setCurrentDialogId}
          fetchUserData={fetchUserData}
          fetchDialogAll={fetchDialogAll}
          fetchMessageAll={fetchMessageAll}
          fetchDialogOne={fetchDialogOne}
          sendMessage={sendMessage}
          pushMessage={pushMessage}
          isSearching={isSearching}
          searchUser={searchUser}
          unSearch={unSearch}
          searchedUsers={searchedUsers}
          setPartnerUser={setPartnerUser}
          partnerUser={partnerUser}
          createDialog={createDialog}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.userReducer.data,
    messageData: state.messageReducer.data,
    dialogData: state.dialogReducer.data,

    currentDialogId: state.dialogReducer.currenDialogId,

    isAuth: state.userReducer.isAuth,
    isUserLoading: state.userReducer.isLoading,
    isDialogLoading: state.dialogReducer.isLoading,
    isMessageLoading: state.messageReducer.isLoading,
    isSearching: state.dialogReducer.isSearching,
    searchedUsers: state.dialogReducer.searchedUsers,
    partnerUser: state.dialogReducer.partnerUser,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUserData: userActions.fetchUserData,
      fetchDialogAll: dialogActions.fetchDialogAll,
      fetchMessageAll: messageActions.fetchMessageAll,
      fetchDialogOne: dialogActions.fetchDialogOne,
      pushMessage: messageActions.pushMessage,
      setCurrentDialogId: dialogActions.setCurrentDialogId,
      searchUser: dialogActions.searchUser,
      sendMessage: messageActions.sendMessage,
      unSearch: dialogActions.unSearch,
      setPartnerUser: dialogActions.setPartnerUser,
      createDialog: dialogActions.createDialog,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
