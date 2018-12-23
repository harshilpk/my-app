import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
// import WithClass from '../../../hoc/WithClass';
import withClass from "../../../hoc/WithClass1";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    // this.focusInput();
  }

  focus() {
    this.inputElement.current.focus();
  }
  render() {
    console.log("[Person.js] Inside render");

    return (
      <>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!!!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );

    // return [
    //   <p key="1" onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old!
    //     </p>,
    //     <p key="2">{this.props.children}</p>,
    //     <input key="3"
    //       type="text"
    //       onChange={this.props.changed}
    //       value={this.props.name}
    //     />
    // ]
  }
}
//   const style = {
//     "@media (min-width: 500px)": {
//       width: "450px"
//     }
//   };
// const rnd = Math.random();

// if (rnd > 0.7) {
//   throw new Error("Something ent wrong");
// }

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
