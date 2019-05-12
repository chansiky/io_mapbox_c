import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./Sidebar";

const Index = () => {
  return (
    <div>
      Hello React!
      <Sidebar />
    </div>
  )
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
