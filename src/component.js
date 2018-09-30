import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

//functional component
const Welcome1 = props => {
  return (
    <div>
      <h1> toi thu component {props.name} </h1>
    </div>
  );
};

const welcome = <Welcome name="hiep" />;
const rootElement = document.getElementById("root");
// ReactDOM.render(welcome, rootElement); // render element to DOM
ReactDOM.render(<Welcome1 name="huy" />, rootElement); // render element to DOM
