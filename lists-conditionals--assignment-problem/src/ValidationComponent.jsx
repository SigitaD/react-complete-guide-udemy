import React from "react";

const ValidationComponent = ({ length }) => {
  return length > 5 ? (
    <div>Text is long enough.</div>
  ) : (
    <div>Text is too short.</div>
  );
};

export default ValidationComponent;
