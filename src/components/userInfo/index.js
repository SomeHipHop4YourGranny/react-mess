import React from "react";

import "./userInfo.scss";

function UserInfo(props) {
  const {
    partnerUser,
    createDialog,
    currentUserId,
    unSearch,
    fetchDialogAll,
  } = props;
  const handleSubmit = async () => {
    console.log(partnerUser.id);
    await createDialog(currentUserId, { members: partnerUser.id });
    const search = document.getElementById("searchInput");
    search.value = "";
    unSearch();
    fetchDialogAll(currentUserId);
  };
  return (
    <div className="user-info">
      {Object.entries(partnerUser).length !== 0 ? (
        <div>
          <p>{partnerUser.login}</p>
          <img className="avatar" src={partnerUser.avatar} alt="img" />
          <button className="start-mess" type="submit" onClick={handleSubmit}>
            Start messaging
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default UserInfo;
