import React, { useEffect } from "react";

import "./dialogs.scss";
import { Dialog, Loader, UserDialog } from "components";

function Dialogs(props) {
  const {
    userData,
    dialogData,
    searchedUsers,

    currenDialogId,
    setCurrentDialogId,

    isDialogLoading,
    isSearching,

    fetchDialogAll,

    fetchMessageAll,
    setPartnerUser,
  } = props;

  useEffect(() => {
    fetchDialogAll(userData._id);
  }, [fetchDialogAll, userData._id]);
  return (
    <div className="dialogs">
      {!isSearching ? (
        isDialogLoading ? (
          <Loader />
        ) : (
          dialogData.map(val => {
            return (
              <Dialog
                key={val._id}
                id={val._id}
                login={val.members[val.members.length - 1]._member.login}
                text={val.last_mess}
                avatar={val.members[val.members.length - 1]._member.avatar}
                time={val.updatedAt}
                setCurrentDialogId={setCurrentDialogId}
                fetchMessageAll={fetchMessageAll}
                userID={userData._id}
                currenDialogId={currenDialogId}
              />
            );
          })
        )
      ) : (
        searchedUsers.map(val => {
          return (
            <UserDialog
              key={val._id}
              id={val._id}
              login={val.login}
              avatar={val.avatar}
              currenDialogId={currenDialogId}
              setCurrentDialogId={setCurrentDialogId}
              setPartnerUser={setPartnerUser}
            />
          );
        })
      )}
    </div>
  );
}

export default Dialogs;
