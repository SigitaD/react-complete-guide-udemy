import React, { useEffect } from "react";

import styles from "./Cockpit.module.css";

const Cockpit = ({ persons, showPersons, title, clicked }) => {
  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
  }, []);

  const classes = [];
  let btnClass = "";
  if (showPersons) {
    btnClass = styles.Red;
  }

  if (persons.length <= 2) {
    classes.push(styles.red);
  }
  if (persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.cockpit}>
      <h1>{title}</h1>
      <p className={classes.join(" ")}>This is working.</p>
      <button className={btnClass} onClick={clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;
