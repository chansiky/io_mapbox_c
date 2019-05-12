import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'

import Sidebar from "./Sidebar";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Sidebar />
      </Provider>
    </div>
  )
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
