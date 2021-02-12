import React from "react";
import Person from "./Person/Person";

const persons = ({ persons, clicked, changed }) =>
  persons.map((person, index) => {
    return (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => changed(event, person.id)}
      />
    );
  });

export default persons;
