import React from "react";
import "./UserOutput.css";

const UserOutput = ({ username }) => {
  return (
    <div className="output">
      <p>My username is {username} and this is my First paragraph.</p>
      <p>This is my Second paragraph which is a little bit longer.</p>
    </div>
  );
};

export default UserOutput;
