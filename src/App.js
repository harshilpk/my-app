import React, { Component } from "react";
import classes from "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "ververv", name: "Dhoni", age: 37 },
      { id: "erverv", name: "Harshil", age: 26 },
      { id: "evevevr", name: "Sagu", age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  switchNameHandler = newName => {
    // console.log("was clicked!");
    // Dont do this this.state.persons[1].name = 'Harshil Pankaj Kakaiya';

    this.setState({
      persons: [
        { name: "Dhoni", age: 37 },
        { name: newName, age: 26 },
        { name: "Sagu", age: 26 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
      
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";
      btnClass = classes.red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={assignedClasses.join(" ")}>This is really working!!!</p>
          <button onClick={this.togglePersonsHandler} className={btnClass}>
            Toggle Persons
          </button>

          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
