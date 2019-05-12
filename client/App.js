import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
