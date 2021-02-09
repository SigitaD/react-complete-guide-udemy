import React from "react";
import "./CharComponent.css";

const CharComponent = ({ letter, click }) => {
  return (
    <div className="char" onClick={click}>
      {letter}
    </div>
  );
};

export default CharComponent;
