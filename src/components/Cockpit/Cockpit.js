import React from "react";

import classes from "./Cockpit.css";
// import Auxilliary from "../../hoc/Auxilliary";

const cockpit = props => {
  const assignedClasses = [];

  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <>
      <h1>Hi, I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!!</p>
      <button onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Logn in</button>
    </>
  );
};

export default cockpit;
