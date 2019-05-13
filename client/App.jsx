import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'

import Sidebar from "./Sidebar";
import Map from "./Map";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Sidebar />
        <Map />
      </Provider>
    </div>
  )
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
