import React from "react";

import "./dialogHeader.scss";

function DialogHeader(props) {
  const { searchUser, unSearch, isSearching } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleInput = e => {
    if (e.target.value !== "") {
      searchUser(e.target.value);
    } else {
      unSearch();
    }
  };

  return (
    <div className="dialog-header">
      {!isSearching ? <h1>Dialogs</h1> : <h1>Users</h1>}

      <form onSubmit={handleSubmit}>
        <input
          id="searchInput"
          type="search"
          placeholder="User Search..."
          onInput={handleInput}
        />
      </form>
    </div>
  );
}

export default DialogHeader;
