import React from "react";
import styles from "./Person.module.css";

const person = ({ name, age, children, click, changed }) => {
  console.log("[Person.js] rendering...");
  return (
    <div className={styles.Person}>
      <p onClick={click}>
        I'm {name} and I am {age} years old.
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
