import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let firstName = "hiep";
const App = () => {
  // = function App() {...}
  //JSX
  const lastName = <h3>trinh</h3>; // if more tag need () + 1 tag bound
  // function
  const ageFormat = age => {
    return (
      <div>
        <h4> This is age info: </h4>
        <h4> {age} </h4>
      </div>
    );
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p>
        Welcome {firstName} {lastName}
      </p>
      <p> {ageFormat(28)} </p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); // render element to DOM
