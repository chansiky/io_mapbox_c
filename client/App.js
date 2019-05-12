import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

export default render = () => {
  ReactDOM.render(<Index />, document.getElementById("root"));
}
