import React from "react";

const UserInput = ({ changedUsernameHandler, username }) => {
  const style = {
    border: "2px solid red",
    borderRadius: "4px",
  };

  return (
    <div className="input">
      <input
        style={style}
        type="text"
        onChange={changedUsernameHandler}
        value={username}
      ></input>
    </div>
  );
};

export default UserInput;
